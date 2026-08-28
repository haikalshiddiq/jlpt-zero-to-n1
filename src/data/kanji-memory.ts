export type KanjiMemoryItem = {
  char: string;
  meaning: string;
  onyomi: string;
  kunyomi: string;
  words: Array<{ word: string; reading: string; meaning: string }>;
  example: string;
  exampleReading: string;
  strokes: number;
};

export const foundationKanji: KanjiMemoryItem[] = [
  { char:'日', meaning:'sun / day', onyomi:'ニチ・ジツ', kunyomi:'ひ・か', strokes:4, words:[{word:'日本',reading:'にほん',meaning:'Japan'},{word:'日曜日',reading:'にちようび',meaning:'Sunday'}], example:'今日は日曜日です。', exampleReading:'きょうはにちようびです。' },
  { char:'月', meaning:'moon / month', onyomi:'ゲツ・ガツ', kunyomi:'つき', strokes:4, words:[{word:'月曜日',reading:'げつようび',meaning:'Monday'},{word:'一月',reading:'いちがつ',meaning:'January'}], example:'月曜日に勉強します。', exampleReading:'げつようびにべんきょうします。' },
  { char:'火', meaning:'fire', onyomi:'カ', kunyomi:'ひ・ほ', strokes:4, words:[{word:'火曜日',reading:'かようび',meaning:'Tuesday'},{word:'火山',reading:'かざん',meaning:'volcano'}], example:'今日は火曜日です。', exampleReading:'きょうはかようびです。' },
  { char:'水', meaning:'water', onyomi:'スイ', kunyomi:'みず', strokes:4, words:[{word:'水曜日',reading:'すいようび',meaning:'Wednesday'},{word:'水',reading:'みず',meaning:'water'}], example:'水を飲みます。', exampleReading:'みずをのみます。' },
  { char:'木', meaning:'tree / wood', onyomi:'モク・ボク', kunyomi:'き・こ', strokes:4, words:[{word:'木曜日',reading:'もくようび',meaning:'Thursday'},{word:'木',reading:'き',meaning:'tree'}], example:'大きい木があります。', exampleReading:'おおきいきがあります。' },
  { char:'金', meaning:'gold / money', onyomi:'キン・コン', kunyomi:'かね・かな', strokes:8, words:[{word:'金曜日',reading:'きんようび',meaning:'Friday'},{word:'お金',reading:'おかね',meaning:'money'}], example:'お金を使います。', exampleReading:'おかねをつかいます。' },
  { char:'土', meaning:'earth / soil', onyomi:'ド・ト', kunyomi:'つち', strokes:3, words:[{word:'土曜日',reading:'どようび',meaning:'Saturday'},{word:'土地',reading:'とち',meaning:'land'}], example:'土曜日は休みです。', exampleReading:'どようびはやすみです。' },
  { char:'人', meaning:'person', onyomi:'ジン・ニン', kunyomi:'ひと', strokes:2, words:[{word:'日本人',reading:'にほんじん',meaning:'Japanese person'},{word:'三人',reading:'さんにん',meaning:'three people'}], example:'あの人は先生です。', exampleReading:'あのひとはせんせいです。' },
  { char:'本', meaning:'book / origin', onyomi:'ホン', kunyomi:'もと', strokes:5, words:[{word:'本',reading:'ほん',meaning:'book'},{word:'日本',reading:'にほん',meaning:'Japan'}], example:'この本を読みます。', exampleReading:'このほんをよみます。' },
  { char:'語', meaning:'language / word', onyomi:'ゴ', kunyomi:'かたる', strokes:14, words:[{word:'日本語',reading:'にほんご',meaning:'Japanese language'},{word:'英語',reading:'えいご',meaning:'English language'}], example:'日本語を勉強します。', exampleReading:'にほんごをべんきょうします。' },
  { char:'学', meaning:'study / learning', onyomi:'ガク', kunyomi:'まなぶ', strokes:8, words:[{word:'学生',reading:'がくせい',meaning:'student'},{word:'学校',reading:'がっこう',meaning:'school'}], example:'学校で日本語を学びます。', exampleReading:'がっこうでにほんごをまなびます。' },
  { char:'生', meaning:'life / birth', onyomi:'セイ・ショウ', kunyomi:'いきる・うまれる・なま', strokes:5, words:[{word:'学生',reading:'がくせい',meaning:'student'},{word:'先生',reading:'せんせい',meaning:'teacher'}], example:'わたしは学生です。', exampleReading:'わたしはがくせいです。' },
  { char:'先', meaning:'ahead / previous', onyomi:'セン', kunyomi:'さき', strokes:6, words:[{word:'先生',reading:'せんせい',meaning:'teacher'},{word:'先週',reading:'せんしゅう',meaning:'last week'}], example:'先生に聞きます。', exampleReading:'せんせいにききます。' },
  { char:'私', meaning:'I / private', onyomi:'シ', kunyomi:'わたし・わたくし', strokes:7, words:[{word:'私',reading:'わたし',meaning:'I'},{word:'私立',reading:'しりつ',meaning:'private institution'}], example:'私はハイカルです。', exampleReading:'わたしはハイカルです。' },
  { char:'山', meaning:'mountain', onyomi:'サン', kunyomi:'やま', strokes:3, words:[{word:'山',reading:'やま',meaning:'mountain'},{word:'富士山',reading:'ふじさん',meaning:'Mount Fuji'}], example:'富士山は高いです。', exampleReading:'ふじさんはたかいです。' },
  { char:'川', meaning:'river', onyomi:'セン', kunyomi:'かわ', strokes:3, words:[{word:'川',reading:'かわ',meaning:'river'},{word:'小川',reading:'おがわ',meaning:'stream'}], example:'川の水はきれいです。', exampleReading:'かわのみずはきれいです。' },
  { char:'田', meaning:'rice field', onyomi:'デン', kunyomi:'た', strokes:5, words:[{word:'田んぼ',reading:'たんぼ',meaning:'rice field'},{word:'田中',reading:'たなか',meaning:'Tanaka'}], example:'田中さんは学生です。', exampleReading:'たなかさんはがくせいです。' },
  { char:'口', meaning:'mouth / opening', onyomi:'コウ・ク', kunyomi:'くち', strokes:3, words:[{word:'入口',reading:'いりぐち',meaning:'entrance'},{word:'出口',reading:'でぐち',meaning:'exit'}], example:'入口はここです。', exampleReading:'いりぐちはここです。' },
  { char:'目', meaning:'eye', onyomi:'モク・ボク', kunyomi:'め', strokes:5, words:[{word:'目',reading:'め',meaning:'eye'},{word:'目的',reading:'もくてき',meaning:'purpose'}], example:'目を閉じてください。', exampleReading:'めをとじてください。' },
  { char:'大', meaning:'big / large', onyomi:'ダイ・タイ', kunyomi:'おおきい', strokes:3, words:[{word:'大学',reading:'だいがく',meaning:'university'},{word:'大きい',reading:'おおきい',meaning:'big'}], example:'大きい大学です。', exampleReading:'おおきいだいがくです。' }
];
