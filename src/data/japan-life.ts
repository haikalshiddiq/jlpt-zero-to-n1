export type TravelStop = {
  place: string;
  area: string;
  note: string;
  type: 'visit' | 'food' | 'prayer' | 'transfer';
};

export type ItineraryDay = {
  day: number;
  base: string;
  title: string;
  stops: TravelStop[];
};

export type ShoppingSpot = {
  city: 'Tokyo' | 'Osaka';
  interest: string;
  area: string;
  note: string;
};

export type SecondhandStore = {
  name: string;
  japaneseName: string;
  bestFor: string;
  areas: string;
  note: string;
  inventoryUrl: string;
  mapQuery: string;
};

export const itinerary: ItineraryDay[] = [
  {
    day: 1,
    base: 'Tokyo',
    title: 'Arrive and settle in',
    stops: [
      { place: 'Tokyo arrival', area: 'Tokyo', note: 'Check in, rest, and keep the first evening flexible.', type: 'visit' },
      { place: 'Hotel prayer', area: 'Hotel', note: 'Confirm the qibla direction and prepare a compact prayer mat.', type: 'prayer' },
      { place: 'Simple meal', area: 'Near the hotel', note: 'Use food brought from home or check ingredients before buying locally.', type: 'food' }
    ]
  },
  {
    day: 2,
    base: 'Tokyo',
    title: 'Old Tokyo and pop culture',
    stops: [
      { place: 'Asakusa', area: 'Asakusa', note: 'Start early around Senso-ji and Nakamise.', type: 'visit' },
      { place: 'Prayer stop', area: 'Asakusa', note: 'Confirm the current prayer space and opening hours before departure.', type: 'prayer' },
      { place: 'Sushi Ken', area: 'Asakusa', note: 'Recheck halal certification, reservation policy, and operating hours.', type: 'food' },
      { place: 'Akihabara', area: 'Akihabara', note: 'Browse electronics, games, and anime stores.', type: 'visit' },
      { place: 'Prayer stop', area: 'Akihabara', note: 'Use a verified nearby prayer room or mosque.', type: 'prayer' },
      { place: 'Halal yakiniku', area: 'Ueno', note: 'Treat the screenshot recommendation as a lead and verify the restaurant before visiting.', type: 'food' },
      { place: 'Ameyoko', area: 'Ueno', note: 'Walk through the market streets before returning to the hotel.', type: 'visit' }
    ]
  },
  {
    day: 3,
    base: 'Fujikawaguchiko',
    title: 'Mount Fuji day trip',
    stops: [
      { place: 'Saiko Iyashi-no-Sato Nenba', area: 'Lake Saiko', note: 'Allow extra transfer time when using buses.', type: 'visit' },
      { place: 'Oishi Park', area: 'Lake Kawaguchi', note: 'Views depend on weather, so keep expectations flexible.', type: 'visit' },
      { place: 'Kawaguchiko Mosque', area: 'Fujikawaguchiko', note: 'Confirm access and prayer arrangements before the trip.', type: 'prayer' },
      { place: 'Oshino Hakkai', area: 'Oshino', note: 'Visit the spring ponds and village area.', type: 'visit' },
      { place: 'Meal near the mosque', area: 'Fujikawaguchiko', note: 'Check the current meal service and halal status directly.', type: 'food' }
    ]
  },
  {
    day: 4,
    base: 'Osaka',
    title: 'Tokyo highlights, then Osaka',
    stops: [
      { place: 'Shibuya', area: 'Shibuya', note: 'Visit the crossing and nearby streets.', type: 'visit' },
      { place: 'Tokyo Camii', area: 'Yoyogi-Uehara', note: 'A practical prayer stop before continuing west.', type: 'prayer' },
      { place: 'Gohan Cafe', area: 'Tokyo', note: 'This name is ambiguous in the screenshot. Verify the exact branch and halal status.', type: 'food' },
      { place: 'Harajuku', area: 'Harajuku', note: 'Browse Takeshita Street and the surrounding fashion area.', type: 'visit' },
      { place: 'Bali restaurant', area: 'Harajuku', note: 'Verify the exact restaurant and ingredients before visiting.', type: 'food' },
      { place: 'Tokaido Shinkansen', area: 'Tokyo to Osaka', note: 'Reserve the train that matches the hotel check-in time.', type: 'transfer' },
      { place: 'Hotel check-in', area: 'Osaka', note: 'Pray at the hotel if the timing makes a separate stop impractical.', type: 'prayer' }
    ]
  },
  {
    day: 5,
    base: 'Osaka',
    title: 'Markets, castle, and Namba',
    stops: [
      { place: 'Kuromon Ichiba Market', area: 'Nippombashi', note: 'Browse the market, but verify ingredients stall by stall.', type: 'visit' },
      { place: 'Osaka Castle', area: 'Chuo Ward', note: 'Allow time for the park and museum queues.', type: 'visit' },
      { place: 'Namba and Dotonbori', area: 'Namba', note: 'Walk the canal area and nearby shopping streets.', type: 'visit' },
      { place: 'Masjid Istiqlal Osaka', area: 'Osaka', note: 'Confirm its current address, access, and prayer schedule.', type: 'prayer' },
      { place: 'Namba Parks prayer space', area: 'Namba', note: 'Ask the information desk for the current facility location.', type: 'prayer' },
      { place: 'Muslim-friendly dinner shortlist', area: 'Namba', note: 'The screenshot names Naniwaya, Gyumon, and Panga Yakiniku. Verify each venue before choosing.', type: 'food' }
    ]
  },
  {
    day: 6,
    base: 'Kyoto',
    title: 'Arashiyama and Ninenzaka',
    stops: [
      { place: 'Arashiyama', area: 'Western Kyoto', note: 'Arrive early for a calmer bamboo grove walk.', type: 'visit' },
      { place: 'Ninenzaka', area: 'Higashiyama', note: 'Wear comfortable shoes for the preserved slope streets.', type: 'visit' },
      { place: 'Prayer and meal at Yoshiya', area: 'Kyoto', note: 'The screenshot recommendation needs current verification for prayer access and halal status.', type: 'prayer' }
    ]
  },
  {
    day: 7,
    base: 'Nara or departure',
    title: 'Departure day or Nara extension',
    stops: [
      { place: 'Morning flight', area: 'Kansai Airport', note: 'Skip the Nara extension when the flight schedule is tight.', type: 'transfer' },
      { place: 'Nara Park', area: 'Nara', note: 'Use this option only for an evening flight or an extra night.', type: 'visit' },
      { place: 'Nara Information Center prayer space', area: 'Nara', note: 'Confirm availability at the information desk.', type: 'prayer' },
      { place: 'Muslim-friendly meal shortlist', area: 'Nara', note: 'The screenshot names Gyumon and Honolu’s Halal Ramen. Verify current branches and hours.', type: 'food' },
      { place: 'Kansai Airport prayer room', area: 'KIX', note: 'Check the airport map for the current floor and opening status.', type: 'prayer' },
      { place: 'Halal udon', area: 'KIX', note: 'Check the current airport dining directory before relying on this option.', type: 'food' }
    ]
  }
];

export const shoppingSpots: ShoppingSpot[] = [
  { city: 'Tokyo', interest: 'Fabric', area: 'Nippori Textile Town', note: 'A concentrated textile-shopping area.' },
  { city: 'Tokyo', interest: 'Rings and jewelry', area: 'Ginza', note: 'Compare department stores, boutiques, and specialist shops.' },
  { city: 'Tokyo', interest: 'Musical instruments', area: 'Ochanomizu', note: 'Browse the instrument shops around Meidai-dori.' },
  { city: 'Tokyo', interest: 'Sports goods', area: 'Alpen TOKYO, Shinjuku', note: 'Check the store directory before visiting.' },
  { city: 'Tokyo', interest: 'Secondhand fashion', area: 'Shimokitazawa', note: 'Independent resale and vintage shops spread across the neighborhood.' },
  { city: 'Tokyo', interest: 'Figures and collectibles', area: 'Nakano Broadway', note: 'Compare floors and stores before buying.' },
  { city: 'Tokyo', interest: 'Cosplay and anime', area: 'Ikebukuro', note: 'Focus on the Otome Road and Sunshine City area.' },
  { city: 'Tokyo', interest: 'G-Shock watches', area: 'Shibuya', note: 'Confirm official-store locations and stock online.' },
  { city: 'Tokyo', interest: 'Streetwear', area: 'Harajuku', note: 'Explore Cat Street and the surrounding lanes.' },
  { city: 'Tokyo', interest: 'Halal groceries and food', area: 'Shin-Okubo', note: 'Verify halal labels and certification per product or venue.' },
  { city: 'Tokyo', interest: 'Fresh seafood', area: 'Ueno and Ameyoko', note: 'Useful for browsing, but cold-chain transport needs planning.' },
  { city: 'Tokyo', interest: 'Fishing gear', area: 'Joshuya, Shibuya area', note: 'Confirm the exact branch because shop locations can change.' },
  { city: 'Osaka', interest: 'Anime and electronics', area: 'Den Den Town', note: 'Osaka’s major electronics and pop-culture district.' },
  { city: 'Osaka', interest: 'Seafood', area: 'Kizu Wholesale Market', note: 'Check public opening hours before visiting.' },
  { city: 'Osaka', interest: 'Onitsuka Tiger', area: 'Tennoji', note: 'Confirm the current shop in the station or mall directory.' },
  { city: 'Osaka', interest: 'Halal food', area: 'Namba', note: 'Check each restaurant’s current policy and kitchen practices.' },
  { city: 'Osaka', interest: 'Flowers and park scenery', area: 'Tsurumi Ryokuchi Park', note: 'Seasonal conditions determine what is in bloom.' },
  { city: 'Osaka', interest: 'Outlet shopping', area: 'Rinku Town', note: 'Convenient to combine with Kansai Airport.' },
  { city: 'Osaka', interest: 'Retro Osaka atmosphere', area: 'Shinsekai', note: 'Walk around Tsutenkaku and Janjan Yokocho.' },
  { city: 'Osaka', interest: 'Streetwear', area: 'Orange Street', note: 'Browse Tachibana-dori and nearby Horie.' },
  { city: 'Osaka', interest: 'Secondhand fashion', area: 'Amerikamura', note: 'Compare independent vintage and resale stores.' },
  { city: 'Osaka', interest: 'Motorcycle goods', area: 'Matsuyamachi-suji', note: 'The screenshot suggests this corridor. Check exact shops before travelling.' },
  { city: 'Osaka', interest: 'Private onsen option', area: 'Solaniwa Onsen', note: 'Confirm private-bath availability, booking rules, and tattoo policy.' }
];

export const secondhandStores: SecondhandStore[] = [
  {
    name: 'Camera no Kitamura',
    japaneseName: 'カメラのキタムラ',
    bestFor: 'Used cameras and lenses',
    areas: 'Nationwide branches, including Tokyo and Osaka',
    note: 'Search the official used inventory first, then confirm which branch holds the item. Check the sensor, autofocus, lens glass, battery, charger, accessories, and menu languages in person.',
    inventoryUrl: 'https://www.net-chuko.com/',
    mapQuery: 'Camera no Kitamura used camera'
  },
  {
    name: 'Sofmap',
    japaneseName: 'ソフマップ',
    bestFor: 'Used laptops, desktops, Macs, cameras, and electronics',
    areas: 'Akihabara and selected Bic Camera or Sofmap locations',
    note: 'Use the condition rank and item photos to shortlist stock. Before paying, verify battery health, storage, keyboard layout, ports, charger, operating-system activation, included accessories, and the exact return terms.',
    inventoryUrl: 'https://www.sofmap.com/contents/?id=used&sid=0',
    mapQuery: 'Sofmap used computer'
  },
  {
    name: 'Janpara',
    japaneseName: 'じゃんぱら',
    bestFor: 'Used Windows PCs, MacBooks, desktops, phones, and parts',
    areas: 'Multiple branches in Akihabara, Tokyo, and Nipponbashi, Osaka',
    note: 'Compare the same model across branches because condition and included accessories differ by unit. For PCs, check battery and SSD health, ports, Japanese keyboard layout, charger voltage, reset status, and warranty coverage.',
    inventoryUrl: 'https://www.janpara.co.jp/sale/',
    mapQuery: 'Janpara used computer'
  }
];

export const workSteps = [
  {
    title: 'Choose the legal work route',
    detail: 'Match the intended job to a Japanese status of residence. Common routes include Specified Skilled Worker and professional working visas. A tourist visa does not permit paid work.',
    action: 'Compare visa routes',
    href: 'https://www.mofa.go.jp/j_info/visit/visa/long/index.html'
  },
  {
    title: 'Check the job and language requirements',
    detail: 'For Specified Skilled Worker, confirm the field-specific skills test and Japanese requirement on the official SSW site. Requirements differ by field.',
    action: 'Open the SSW guide',
    href: 'https://www.ssw.go.jp/en/about/visa/'
  },
  {
    title: 'Prepare a Japanese application set',
    detail: 'Draft a rirekisho, work history, certificates, passport copy, and a short Japanese email. Keep every qualification and employment date accurate.',
    action: 'See Hello Work guidance',
    href: 'https://www.hellowork.mhlw.go.jp/member/mem_top.html'
  },
  {
    title: 'Search and verify employers',
    detail: 'Use official or established job services, read the employment conditions, and verify the company. Never rely only on a social-media message.',
    action: 'Search Hello Work',
    href: 'https://www.hellowork.mhlw.go.jp/'
  },
  {
    title: 'Interview and review the contract',
    detail: 'Confirm salary, deductions, work location, hours, overtime, housing, support, and who pays each fee before accepting.',
    action: 'Review worker support',
    href: 'https://www.ssw.go.jp/en/'
  },
  {
    title: 'Employer applies for the COE',
    detail: 'For many work and long-stay routes, the employer or proxy in Japan applies for a Certificate of Eligibility. The COE supports the visa application but does not guarantee visa issuance.',
    action: 'Read the visa process',
    href: 'https://www.mofa.go.jp/j_info/visit/visa/process/long.html'
  },
  {
    title: 'Complete Indonesia-side placement procedures',
    detail: 'Register and verify the applicable placement route with KP2MI/BP2MI. Use the official portal for current documents, protection steps, and departure requirements.',
    action: 'Open official job information',
    href: 'https://aim.bp2mi.go.id/publik/landing/info_kerja'
  },
  {
    title: 'Apply for the visa and prepare departure',
    detail: 'Apply through the authorized Japanese diplomatic mission or visa process, then arrange insurance, arrival documents, housing, and emergency contacts.',
    action: 'Open Japan visa information',
    href: 'https://www.mofa.go.jp/j_info/visit/visa/'
  }
] as const;

export const sswFieldsFromScreenshot = [
  'Nursing care',
  'Food service',
  'Manufacturing',
  'Agriculture'
] as const;

export const officialSources = [
  {
    name: 'Immigration Services Agency of Japan',
    label: 'Specified Skilled Worker support site',
    href: 'https://www.ssw.go.jp/en/'
  },
  {
    name: 'Ministry of Foreign Affairs of Japan',
    label: 'Work and long-term stay visas',
    href: 'https://www.mofa.go.jp/j_info/visit/visa/long/index.html'
  },
  {
    name: 'Hello Work',
    label: 'Public employment service and foreign-worker guidance',
    href: 'https://www.hellowork.mhlw.go.jp/member/mem_top.html'
  },
  {
    name: 'KP2MI/BP2MI',
    label: 'Official Indonesian placement information',
    href: 'https://aim.bp2mi.go.id/publik/landing/info_kerja'
  }
] as const;
