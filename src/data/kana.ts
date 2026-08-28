export type KanaRow = {
  group: string;
  entries: Array<{ romaji: string; hiragana: string; katakana: string }>;
};

export const kanaRows: KanaRow[] = [
  { group: 'Vowels', entries: [
    { romaji: 'a', hiragana: 'あ', katakana: 'ア' },
    { romaji: 'i', hiragana: 'い', katakana: 'イ' },
    { romaji: 'u', hiragana: 'う', katakana: 'ウ' },
    { romaji: 'e', hiragana: 'え', katakana: 'エ' },
    { romaji: 'o', hiragana: 'お', katakana: 'オ' }
  ]},
  { group: 'K', entries: [
    { romaji: 'ka', hiragana: 'か', katakana: 'カ' },
    { romaji: 'ki', hiragana: 'き', katakana: 'キ' },
    { romaji: 'ku', hiragana: 'く', katakana: 'ク' },
    { romaji: 'ke', hiragana: 'け', katakana: 'ケ' },
    { romaji: 'ko', hiragana: 'こ', katakana: 'コ' }
  ]},
  { group: 'S', entries: [
    { romaji: 'sa', hiragana: 'さ', katakana: 'サ' },
    { romaji: 'shi', hiragana: 'し', katakana: 'シ' },
    { romaji: 'su', hiragana: 'す', katakana: 'ス' },
    { romaji: 'se', hiragana: 'せ', katakana: 'セ' },
    { romaji: 'so', hiragana: 'そ', katakana: 'ソ' }
  ]},
  { group: 'T', entries: [
    { romaji: 'ta', hiragana: 'た', katakana: 'タ' },
    { romaji: 'chi', hiragana: 'ち', katakana: 'チ' },
    { romaji: 'tsu', hiragana: 'つ', katakana: 'ツ' },
    { romaji: 'te', hiragana: 'て', katakana: 'テ' },
    { romaji: 'to', hiragana: 'と', katakana: 'ト' }
  ]},
  { group: 'N', entries: [
    { romaji: 'na', hiragana: 'な', katakana: 'ナ' },
    { romaji: 'ni', hiragana: 'に', katakana: 'ニ' },
    { romaji: 'nu', hiragana: 'ぬ', katakana: 'ヌ' },
    { romaji: 'ne', hiragana: 'ね', katakana: 'ネ' },
    { romaji: 'no', hiragana: 'の', katakana: 'ノ' }
  ]},
  { group: 'H', entries: [
    { romaji: 'ha', hiragana: 'は', katakana: 'ハ' },
    { romaji: 'hi', hiragana: 'ひ', katakana: 'ヒ' },
    { romaji: 'fu', hiragana: 'ふ', katakana: 'フ' },
    { romaji: 'he', hiragana: 'へ', katakana: 'ヘ' },
    { romaji: 'ho', hiragana: 'ほ', katakana: 'ホ' }
  ]},
  { group: 'M', entries: [
    { romaji: 'ma', hiragana: 'ま', katakana: 'マ' },
    { romaji: 'mi', hiragana: 'み', katakana: 'ミ' },
    { romaji: 'mu', hiragana: 'む', katakana: 'ム' },
    { romaji: 'me', hiragana: 'め', katakana: 'メ' },
    { romaji: 'mo', hiragana: 'も', katakana: 'モ' }
  ]},
  { group: 'Y', entries: [
    { romaji: 'ya', hiragana: 'や', katakana: 'ヤ' },
    { romaji: 'yu', hiragana: 'ゆ', katakana: 'ユ' },
    { romaji: 'yo', hiragana: 'よ', katakana: 'ヨ' }
  ]},
  { group: 'R', entries: [
    { romaji: 'ra', hiragana: 'ら', katakana: 'ラ' },
    { romaji: 'ri', hiragana: 'り', katakana: 'リ' },
    { romaji: 'ru', hiragana: 'る', katakana: 'ル' },
    { romaji: 're', hiragana: 'れ', katakana: 'レ' },
    { romaji: 'ro', hiragana: 'ろ', katakana: 'ロ' }
  ]},
  { group: 'W + N', entries: [
    { romaji: 'wa', hiragana: 'わ', katakana: 'ワ' },
    { romaji: 'wo', hiragana: 'を', katakana: 'ヲ' },
    { romaji: 'n', hiragana: 'ん', katakana: 'ン' }
  ]}
];

export const kanaCount = kanaRows.reduce((total, row) => total + row.entries.length, 0);
