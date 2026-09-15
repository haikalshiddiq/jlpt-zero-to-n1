export type GuideNavItem = {
  label: string;
  href: string;
  title?: string;
  summary?: string;
  imageId?: string;
  japanese?: string;
};

export const travelNavigation: GuideNavItem[] = [
  { label: 'Overview', href: '/japan-travel' },
  { label: 'Itinerary', href: '/japan-travel/itinerary', title: 'Seven-day itinerary', summary: 'Tokyo, Mount Fuji, Osaka, Kyoto, and Nara organized into a practical route.', imageId: 'travel-rail', japanese: '旅程' },
  { label: 'Muslim-friendly', href: '/japan-travel/muslim-friendly', title: 'Muslim-friendly planning', summary: 'Prayer, food, backup planning, and verification before each travel day.', imageId: 'travel-muslim', japanese: '安心' },
  { label: 'Shopping', href: '/japan-travel/shopping', title: 'Shopping by interest', summary: 'Browse 23 Tokyo and Osaka areas, then verify current stores on Maps.', imageId: 'travel-shopping', japanese: '買物' },
  { label: 'Second-hand', href: '/japan-travel/secondhand', title: 'Second-hand gear', summary: 'Camera no Kitamura, Sofmap, and Janpara with practical inspection checks.', imageId: 'travel-secondhand', japanese: '中古' },
  { label: 'Sources', href: '/japan-travel/sources', title: 'Source material', summary: 'View the supplied references and licensed-image provenance.', imageId: 'travel-provenance', japanese: '資料' }
];

export const workNavigation: GuideNavItem[] = [
  { label: 'Overview', href: '/work-in-japan' },
  { label: 'Visa routes', href: '/work-in-japan/routes', title: 'Choose a legal route', summary: 'Compare Specified Skilled Worker and professional work statuses before applying.', imageId: 'work-routes', japanese: '在留' },
  { label: 'Application', href: '/work-in-japan/application', title: 'Application journey', summary: 'Complete and save the eight evidence-based steps from route selection to departure.', imageId: 'work-checklist', japanese: '応募' },
  { label: 'Documents', href: '/work-in-japan/documents', title: 'Document pack', summary: 'Organize application, eligibility, protection, and departure records.', imageId: 'work-documents', japanese: '書類' },
  { label: 'Safety', href: '/work-in-japan/safety', title: 'Recruitment safety', summary: 'Pause when job, employer, visa, or payment claims cannot be verified.', imageId: 'work-fraud', japanese: '確認' },
  { label: 'Sources', href: '/work-in-japan/sources', title: 'Official sources', summary: 'Start from Japanese and Indonesian authorities, not promotional claims.', imageId: 'work-sources', japanese: '公的' }
];

export const kanjiChapterDefinitions = [
  { slug: 'week-elements', label: 'Week & elements', name: 'Week and elements', japanese: '曜日と自然', chars: ['日','月','火','水','木','金','土'] },
  { slug: 'people-learning', label: 'People & learning', name: 'People and learning', japanese: '人と学び', chars: ['人','本','語','学','生','先','私'] },
  { slug: 'world-forms', label: 'World & forms', name: 'World and forms', japanese: '世界とかたち', chars: ['山','川','田','口','目','大'] }
] as const;

export const kanjiNavigation: GuideNavItem[] = [
  { label: 'Overview', href: '/kanji' },
  ...kanjiChapterDefinitions.map((chapter) => ({ label: chapter.label, href: `/kanji/${chapter.slug}`, title: chapter.name, summary: chapter.chars.join(' '), japanese: chapter.japanese }))
];
