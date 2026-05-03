const exactRomaji: Record<string, string> = {
  'わたし': 'watashi',
  'あなた': 'anata',
  'せんせい': 'sensei',
  'がくせい': 'gakusei',
  'にほん': 'nihon',
  'にほんご': 'nihongo',
  'はい': 'hai',
  'いいえ': 'iie',
  'そうです': 'sou desu',
  'ちがいます': 'chigaimasu',
  'おはようございます': 'ohayou gozaimasu',
  'こんにちは': 'konnichiwa',
  'こんばんは': 'konbanwa',
  'ありがとう': 'arigatou',
  'ありがとうございます': 'arigatou gozaimasu',
  'すみません': 'sumimasen',
  'はじめまして': 'hajimemashite',
  'よろしくおねがいします': 'yoroshiku onegaishimasu',
  'なまえ': 'namae',
  'おなまえ': 'onamae',
  'インドネシア': 'Indonesia',
  'ハイカル・シディック': 'Haikal Shiddiq',
  '日本': 'Nihon',
  '日曜日': 'nichiyoubi',
  '本': 'hon',
  '人': 'hito',
  '日本人': 'nihonjin',
  'インドネシア人': 'Indonesia-jin',
  '日本語': 'nihongo',
  '英語': 'eigo',
  'インドネシア語': 'Indonesia-go',
  'ニチ, ジツ': 'nichi, jitsu',
  'ひ, か': 'hi, ka',
  'ホン': 'hon',
  'もと': 'moto',
  'ジン, ニン': 'jin, nin',
  'ひと': 'hito',
  'ゴ': 'go',
  'かたる': 'kataru',
  'A は B です。': 'A wa B desu.',
  'A は B ですか。': 'A wa B desu ka.',
  'Country + 人': 'Country + jin / hito',
  'Country + 語': 'Country + go',
  'わたしはハイカル・シディックです。': 'watashi wa Haikal Shiddiq desu.',
  'あなたはせんせいですか。': 'anata wa sensei desu ka.',
  'わたしはせんせいです。': 'watashi wa sensei desu.',
  'あなたはがくせいですか。': 'anata wa gakusei desu ka.',
  'にほんです。': 'nihon desu.',
  'にほんごです。': 'nihongo desu.',
  'はい、そうです。': 'hai, sou desu.',
  'いいえ、ちがいます。': 'iie, chigaimasu.',
  'おはようございます。': 'ohayou gozaimasu.',
  'こんにちは、ハイカル・シディックです。': 'konnichiwa, Haikal Shiddiq desu.',
  'こんばんは。': 'konbanwa.',
  'ありがとう。': 'arigatou.',
  'ありがとうございます。': 'arigatou gozaimasu.',
  'すみません。': 'sumimasen.',
  'はじめまして。': 'hajimemashite.',
  'よろしくおねがいします。': 'yoroshiku onegaishimasu.',
  'なまえはハイカル・シディックです。': 'namae wa Haikal Shiddiq desu.',
  'インドネシアです。': 'Indonesia desu.',
  '日本です。': 'Nihon desu.',
  '本です。': 'hon desu.',
  'わたしはインドネシア人です。': 'watashi wa Indonesia-jin desu.',
  '日本語です。': 'nihongo desu.',
  'あなたは日本人ですか。': 'anata wa nihonjin desu ka.',
  'インドネシア語です。': 'Indonesia-go desu.',
  'A: あなたはせんせいですか。\nB: はい、そうです。わたしはせんせいです。': 'A: anata wa sensei desu ka.\nB: hai, sou desu. watashi wa sensei desu.',
  'A: あなたはせんせいですか。 B: はい、そうです。わたしはせんせいです。': 'A: anata wa sensei desu ka. B: hai, sou desu. watashi wa sensei desu.',
  'A: はじめまして。おなまえは？\nB: ハイカル・シディックです。\nA: インドネシア人ですか。\nB: はい、そうです。インドネシア人です。': 'A: hajimemashite. onamae wa?\nB: Haikal Shiddiq desu.\nA: Indonesia-jin desu ka.\nB: hai, sou desu. Indonesia-jin desu.',
  'A: はじめまして。おなまえは？ B: ハイカル・シディックです。 A: インドネシア人ですか。 B: はい、そうです。インドネシア人です。': 'A: hajimemashite. onamae wa? B: Haikal Shiddiq desu. A: Indonesia-jin desu ka. B: hai, sou desu. Indonesia-jin desu.'
};

const kanaMap: Record<string, string> = {
  'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
  'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
  'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
  'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
  'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
  'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
  'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
  'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
  'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
  'わ': 'wa', 'を': 'o', 'ん': 'n',
  'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
  'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
  'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
  'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
  'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
  'ぁ': 'a', 'ぃ': 'i', 'ぅ': 'u', 'ぇ': 'e', 'ぉ': 'o',
  'ゃ': 'ya', 'ゅ': 'yu', 'ょ': 'yo',
  'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
  'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
  'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
  'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
  'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
  'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
  'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
  'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
  'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
  'ワ': 'wa', 'ヲ': 'o', 'ン': 'n',
  'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
  'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
  'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
  'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
  'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
  'ャ': 'ya', 'ュ': 'yu', 'ョ': 'yo',
  'ー': '', '、': ',', '。': '.', '？': '?', ' ': ' ', '\n': '\n'
};

const digraphs: Record<string, string> = {
  'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo', 'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
  'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho', 'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
  'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo', 'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
  'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo', 'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
  'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo', 'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
  'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo',
  'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo', 'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho',
  'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho', 'ジャ': 'ja', 'ジュ': 'ju', 'ジョ': 'jo'
};

export function toRomaji(input = ''): string {
  if (!input) return '';
  if (exactRomaji[input]) return exactRomaji[input];

  let text = input;
  for (const [jp, roma] of Object.entries(exactRomaji).sort((a, b) => b[0].length - a[0].length)) {
    text = text.split(jp).join(roma);
  }

  let output = '';
  for (let i = 0; i < text.length; i += 1) {
    const two = text.slice(i, i + 2);
    if (digraphs[two]) {
      output += digraphs[two];
      i += 1;
      continue;
    }
    const char = text[i];
    if (char === 'っ' || char === 'ッ') {
      const next = kanaMap[text[i + 1] ?? ''] ?? '';
      output += next.charAt(0);
      continue;
    }
    output += kanaMap[char] ?? char;
  }

  return output
    .replace(/\s+/g, ' ')
    .replace(/ ,/g, ',')
    .replace(/ \./g, '.')
    .replace(/ \?/g, '?')
    .trim();
}

export function pronunciationLabel(input = ''): string {
  const romaji = toRomaji(input);
  return romaji ? `Romaji pronunciation: ${romaji}` : '';
}
