const { chromium } = require('playwright');
const fs = require('fs');
const axePath = require.resolve('axe-core/axe.min.js');
const base = process.env.BASE_URL || 'http://127.0.0.1:4322';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, serviceWorkers: 'allow' });
  const page = await context.newPage();
  const browserErrors = [];
  let intentionallyOffline = false;
  page.on('pageerror', (error) => browserErrors.push(error.message));
  page.on('console', (message) => { if (message.type() === 'error' && !(intentionallyOffline && message.text().includes('ERR_INTERNET_DISCONNECTED'))) browserErrors.push(message.text()); });
  const assertAxe = async (label) => {
    if (!await page.evaluate(() => Boolean(window.axe))) await page.addScriptTag({ path: axePath });
    const result = await page.evaluate(async () => window.axe.run(document, { resultTypes: ['violations'] }));
    if (result.violations.length) {
      const detail = result.violations.map((item) => `${item.id}: ${item.nodes.map((node) => node.target.join(' ')).join(', ')}`).join(' | ');
      throw new Error(`${label} axe violations: ${detail}`);
    }
  };

  const response = await page.goto(`${base}/work-in-japan/cv`, { waitUntil: 'networkidle' });
  if (!response?.ok()) throw new Error(`CV route HTTP ${response?.status()}`);
  if (await page.locator('.guide-subnav a').count() !== 7) throw new Error('Work submenu does not contain seven destinations');
  if (await page.locator('.guide-subnav a[aria-current="page"]').textContent() !== 'CV Studio') throw new Error('CV Studio submenu is not active');
  if (await page.locator('[data-review-count]').textContent() !== '0') throw new Error('Blank readiness score is not zero');

  await page.locator('[data-cv-step-button="1"]').click();
  if (!await page.locator('[data-cv-panel="1"]').isHidden()) throw new Error('Forward wizard navigation bypassed required validation');
  if (await page.locator('[name="targetRole"]').getAttribute('aria-invalid') !== 'true') throw new Error('Invalid required field was not exposed to assistive tech');

  await page.selectOption('[name="targetRole"]', { label: 'Engineer / IT' });
  await page.fill('[name="jobRequirements"]', 'ネットワーク管理 Python 技術文書 team support');
  await page.locator('[data-cv-step-button="1"]').click();
  await page.fill('[name="fullName"]', 'Haikal Shiddiq');
  await page.fill('[name="furigana"]', 'ハイカル シディック');
  await page.fill('[name="email"]', 'haikal@example.com');
  await page.fill('[name="phone"]', '+62 812 0000 0000');
  await page.fill('[name="birthDate"]', '1990-01-02');
  await page.selectOption('[name="sex"]', { label: 'Prefer not to state' });
  await page.fill('[name="postalCode"]', '29400');
  await page.fill('[name="location"]', 'Batam, Indonesia');
  await page.fill('[name="address"]', 'Batam, Riau Islands, Indonesia');
  await page.fill('[name="summary"]', 'Information systems lecturer with network administration, Python, and technical documentation experience. <img src=x onerror=alert(1)>');
  await page.locator('[data-cv-step-button="2"]').click();
  await page.fill('[name="education"]', '2018-09 | University | Master of Engineering\n2014-07 | University | Bachelor of Computer Science');
  await page.fill('[name="experience"]', '2021-04 - Present | University | Lecturer | Managed network learning labs for 120 students\n2018-01 - 2021-03 | Organization | Systems specialist | Documented 24 operating procedures');
  await page.fill('[name="skills"]', 'ネットワーク管理\nPython\nTechnical documentation');
  await page.fill('[name="certifications"]', '2026 | JLPT N3\n2025 | Network certification');
  await page.locator('[data-cv-step-button="3"]').click();
  await page.fill('[name="motivation"]', 'I am applying because the role combines network operations and clear technical documentation. My teaching and systems work prepared me to support teams accurately, and I can contribute structured troubleshooting and knowledge transfer.');
  await page.fill('[name="selfPromotion"]', 'I turn complex systems into repeatable procedures. In my current role I prepared 24 operating guides and supported learning labs used by 120 students, while keeping the underlying evidence available for interview discussion.');
  await page.locator('[data-cv-review]').click();
  if (await page.locator('[data-review-count]').textContent() !== '10') throw new Error('Completed draft did not pass all ten deterministic checks');
  if (await page.locator('[data-enhancement-list] li').count() !== 5) throw new Error('Enhancement plan did not render five targeted editing areas');
  const relevanceNote = await page.locator('[data-enhancement-list] li').nth(1).textContent();
  if (!relevanceNote.includes('ネットワーク管理') || !relevanceNote.toLowerCase().includes('python')) throw new Error(`Enhancement plan did not connect vacancy terms to entered evidence: ${relevanceNote}`);
  const evidenceNote = await page.locator('[data-enhancement-list] li').nth(2).textContent();
  if (!evidenceNote.includes('2 work entries') || !evidenceNote.includes('2 include numerical')) throw new Error('Enhancement plan did not summarize entered work evidence');
  if (await page.locator('.cv-paper img').count() !== 0) throw new Error('CV input was interpreted as HTML');
  if (await page.locator('[data-detailed-document]').isHidden()) throw new Error('Detailed work-history document is missing for both-documents mode');

  await page.locator('[data-cv-save]').click();
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('jlpt-cv-studio-v1')));
  if (!saved?.savedAt || saved.data?.fullName !== 'Haikal Shiddiq') throw new Error('Explicit local save did not use the expiring envelope');
  if (Date.now() - saved.savedAt > 60_000) throw new Error('Saved draft timestamp is stale');
  await page.reload({ waitUntil: 'networkidle' });
  if (await page.inputValue('[name="fullName"]') !== 'Haikal Shiddiq') throw new Error('Saved draft was not restored');

  // Keep the XSS assertion above, but generate the visual PDF fixture from professional sample copy.
  await page.locator('[data-cv-step-button="1"]').click();
  await page.fill('[name="summary"]', 'Information systems lecturer with network administration, Python, and technical documentation experience.');
  await page.locator('[data-cv-review]').click();
  await page.emulateMedia({ media: 'print' });
  if (await page.locator('.sidebar').evaluate((node) => getComputedStyle(node).display) !== 'none') throw new Error('Sidebar leaks into print');
  if (await page.locator('.pwa-install-prompt').evaluate((node) => getComputedStyle(node).display) !== 'none') throw new Error('Install prompt leaks into print');
  const pdfPath = '/home/ubuntu/jlpt-zero-to-n1/output/playwright/cv-studio-sample.pdf';
  await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });
  if (fs.statSync(pdfPath).size < 20_000) throw new Error('Generated CV PDF is unexpectedly small');
  await page.emulateMedia({ media: 'screen' });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${base}/work-in-japan/cv`, { waitUntil: 'networkidle' });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  if (overflow) throw new Error('CV Studio has horizontal overflow at 390px');
  await page.evaluate(() => {
    document.querySelector('#pwa-install-prompt').classList.remove('hidden');
    document.body.classList.add('pwa-prompt-visible');
  });
  await page.locator('.cv-form-actions').scrollIntoViewIfNeeded();
  const boxes = await page.evaluate(() => {
    const actions = document.querySelector('.cv-form-actions').getBoundingClientRect();
    const prompt = document.querySelector('.pwa-install-prompt').getBoundingClientRect();
    return { actionsBottom: actions.bottom, promptTop: prompt.top };
  });
  if (boxes.actionsBottom > boxes.promptTop + 1) throw new Error('PWA prompt overlaps mobile CV controls');
  await page.locator('#pwa-dismiss').click();
  if (!await page.locator('#pwa-install-prompt').isHidden()) throw new Error('PWA suggestion cannot be dismissed');
  await page.locator('[data-cv-review]').click();
  await assertAxe('Light mode');
  await page.screenshot({ path: '/home/ubuntu/jlpt-zero-to-n1/output/playwright/cv-studio-complete-mobile.png', fullPage: true });
  await page.evaluate(() => document.documentElement.classList.add('dark'));
  await page.waitForTimeout(400);
  await assertAxe('Dark mode');
  await page.screenshot({ path: '/home/ubuntu/jlpt-zero-to-n1/output/playwright/cv-studio-complete-mobile-dark.png', fullPage: true });
  await page.evaluate(() => document.documentElement.classList.remove('dark'));

  await page.locator('[data-cv-clear]').click();
  await page.locator('[data-clear-dialog] button[value="confirm"]').click();
  await page.waitForFunction(() => document.querySelector('[data-save-status]')?.textContent === 'CV data cleared');
  if (await page.inputValue('[name="fullName"]') !== '') throw new Error('Clear did not reset form data');
  if (await page.evaluate(() => localStorage.getItem('jlpt-cv-studio-v1')) !== null) throw new Error('Clear did not remove persisted CV data');
  const previewNames = await page.locator('[data-preview="fullName"]').allTextContents();
  if (previewNames.some((value) => value !== 'Your name')) throw new Error(`Clear left personal data in preview: ${previewNames.join(', ')}`);
  await page.locator('[data-cv-review]').click();
  await page.evaluate(() => { window.__printCalled = false; window.print = () => { window.__printCalled = true; }; });
  await page.locator('[data-cv-print]').click();
  if (await page.evaluate(() => window.__printCalled)) throw new Error('Blank invalid CV was printable');

  const manifest = await page.evaluate(async () => (await fetch('/manifest.webmanifest')).json());
  if (manifest.display !== 'standalone' || !manifest.shortcuts?.some((item) => item.url === '/work-in-japan/cv')) throw new Error('PWA manifest is incomplete');
  await page.goto(`${base}/work-in-japan/cv`, { waitUntil: 'networkidle' });
  await page.evaluate(() => navigator.serviceWorker.ready);
  if (!await page.evaluate(() => Boolean(navigator.serviceWorker.controller))) await page.reload({ waitUntil: 'networkidle' });
  if (!await page.evaluate(() => Boolean(navigator.serviceWorker.controller))) throw new Error('Service worker did not control the page');
  intentionallyOffline = true;
  await context.setOffline(true);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.locator('h1').waitFor();
  if (!await page.locator('h1').textContent().then((text) => text.includes('Japan-ready CV'))) throw new Error('CV Studio did not reload offline');
  await context.setOffline(false);
  intentionallyOffline = false;

  await page.screenshot({ path: '/home/ubuntu/jlpt-zero-to-n1/output/playwright/cv-studio-mobile.png', fullPage: true });
  if (browserErrors.length) throw new Error(`Browser errors: ${browserErrors.join(' | ')}`);
  await browser.close();
  console.log('CV Studio + PWA smoke PASS: validation, Unicode review, privacy clear, save expiry, two documents, PDF, mobile, manifest, offline');
})().catch((error) => { console.error(error); process.exit(1); });
