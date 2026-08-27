export type JLPTLevel = 'N5' | 'N4';
export type GrammarQuestionType = 'form' | 'composition' | 'text';

export type GrammarPracticeQuestion = {
  id: string;
  level: JLPTLevel;
  sourceLevel: 'IRODORI Pemula A1' | 'IRODORI Dasar 1 A2' | 'IRODORI Dasar 2 A2';
  type: GrammarQuestionType;
  pattern: string;
  prompt: string;
  context?: string;
  choices: string[];
  answer: number;
  explanation: string;
};

export const questionTypeLabels: Record<GrammarQuestionType, string> = {
  form: 'Memilih bentuk tata bahasa',
  composition: 'Menyusun kalimat',
  text: 'Tata bahasa dalam konteks'
};

export const grammarPracticeQuestions: GrammarPracticeQuestion[] = [
  {
    id: 'n5-a1-topic-wa',
    level: 'N5',
    sourceLevel: 'IRODORI Pemula A1',
    type: 'form',
    pattern: 'N1 は N2 です',
    prompt: 'わたし（　）ハイカルです。',
    choices: ['は', 'を', 'に', 'で'],
    answer: 0,
    explanation: '「は」 menandai わたし sebagai topik. Kalimat ini berarti “Saya Haikal.”'
  },
  {
    id: 'n5-a1-negative-noun',
    level: 'N5',
    sourceLevel: 'IRODORI Pemula A1',
    type: 'form',
    pattern: 'N じゃないです',
    prompt: 'A：マリアさんは せんせいですか。 B：いいえ、せんせい（　）。',
    choices: ['でした', 'じゃないです', 'があります', 'にいます'],
    answer: 1,
    explanation: 'Bentuk negatif sopan untuk nomina + です adalah 「N じゃないです」.'
  },
  {
    id: 'n5-a1-particle-mo',
    level: 'N5',
    sourceLevel: 'IRODORI Pemula A1',
    type: 'text',
    pattern: 'N も',
    prompt: 'アニさんは インドネシアからです。ハイカルさん（　）インドネシアからです。',
    choices: ['も', 'の', 'へ', 'と'],
    answer: 0,
    explanation: '「も」 berarti “juga” dan dipakai karena kedua orang berasal dari Indonesia.'
  },
  {
    id: 'n5-a1-live-in',
    level: 'N5',
    sourceLevel: 'IRODORI Pemula A1',
    type: 'composition',
    pattern: 'N に 住んでいます',
    prompt: 'Susunan manakah yang benar untuk “Saya tinggal di Jakarta”?',
    choices: [
      'わたしは ジャカルタに すんでいます。',
      'わたしに ジャカルタは すんでいます。',
      'ジャカルタを わたしに すんでいます。',
      'すんでいますは ジャカルタの わたし。'
    ],
    answer: 0,
    explanation: 'Tempat tinggal ditandai 「に」: tempat + に + 住んでいます.'
  },
  {
    id: 'n5-a1-possession-no',
    level: 'N5',
    sourceLevel: 'IRODORI Pemula A1',
    type: 'form',
    pattern: 'N1 の N2',
    prompt: 'これは だれ（　）かさですか。',
    choices: ['が', 'の', 'を', 'で'],
    answer: 1,
    explanation: '「だれの」 menanyakan kepemilikan: “payung milik siapa?”'
  },
  {
    id: 'n5-a1-like-ga',
    level: 'N5',
    sourceLevel: 'IRODORI Pemula A1',
    type: 'form',
    pattern: 'N が 好きです',
    prompt: 'わたしは 日本の映画（　）すきです。',
    choices: ['が', 'へ', 'まで', 'から'],
    answer: 0,
    explanation: 'Hal yang disukai biasanya ditandai 「が」 dalam pola 「N が 好きです」.'
  },
  {
    id: 'n5-a1-object-o',
    level: 'N5',
    sourceLevel: 'IRODORI Pemula A1',
    type: 'text',
    pattern: 'N を V-ます',
    prompt: 'まいあさ、パン（　）たべます。',
    choices: ['に', 'を', 'と', 'も'],
    answer: 1,
    explanation: '「を」 menandai objek langsung dari verba たべます.'
  },
  {
    id: 'n5-a1-arimasu-imasu',
    level: 'N5',
    sourceLevel: 'IRODORI Pemula A1',
    type: 'text',
    pattern: 'あります／います',
    prompt: 'きょうしつに せんせいが（　）。',
    choices: ['あります', 'います', 'ですか', 'ありませんか'],
    answer: 1,
    explanation: '「います」 dipakai untuk keberadaan manusia dan makhluk hidup. 「あります」 untuk benda mati.'
  },
  {
    id: 'n5-a1-location-ni',
    level: 'N5',
    sourceLevel: 'IRODORI Pemula A1',
    type: 'composition',
    pattern: 'N は 場所 に あります',
    prompt: 'Susunan manakah yang menjawab “Gunting ada di atas meja”?',
    choices: [
      'はさみは つくえの うえに あります。',
      'はさみに つくえの うえを あります。',
      'つくえは はさみの うえが います。',
      'ありますを はさみは つくえです。'
    ],
    answer: 0,
    explanation: 'Lokasi keberadaan ditandai 「に」, lalu benda mati memakai 「あります」.'
  },
  {
    id: 'n5-a1-time-ni',
    level: 'N5',
    sourceLevel: 'IRODORI Pemula A1',
    type: 'form',
    pattern: '時間 に V-ます',
    prompt: 'まいにち 7じ（　）おきます。',
    choices: ['を', 'で', 'に', 'が'],
    answer: 2,
    explanation: 'Waktu spesifik terjadinya kegiatan ditandai partikel 「に」.'
  },
  {
    id: 'n5-a1-request-te-kudasai',
    level: 'N5',
    sourceLevel: 'IRODORI Pemula A1',
    type: 'composition',
    pattern: 'V-て ください',
    prompt: 'Guru meminta murid membaca halaman 10. Kalimat yang tepat adalah:',
    choices: [
      '10ページを よんで ください。',
      '10ページを よみますか。',
      '10ページが よみません。',
      '10ページに よんだことがあります。'
    ],
    answer: 0,
    explanation: '「V-てください」 dipakai untuk meminta seseorang melakukan sesuatu dengan sopan.'
  },
  {
    id: 'n5-a1-permission',
    level: 'N5',
    sourceLevel: 'IRODORI Pemula A1',
    type: 'text',
    pattern: 'V-ても いいですか',
    prompt: 'A：すみません、このペンを（　）。 B：いいですよ。どうぞ。',
    choices: ['かりても いいですか', 'かりたことがあります', 'かりないです', 'かりるつもりです'],
    answer: 0,
    explanation: 'Respons 「いいですよ。どうぞ」 sesuai dengan permintaan izin 「V-てもいいですか」.'
  },
  {
    id: 'n4-a2-hobby-koto',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 1 A2',
    type: 'form',
    pattern: 'V-る ことです',
    prompt: 'しゅみは 日本のドラマを（　）ことです。',
    choices: ['みる', 'みて', 'みた', 'みます'],
    answer: 0,
    explanation: 'Sebelum 「ことです」 pada pola hobi, verba memakai bentuk kamus: 見ることです.'
  },
  {
    id: 'n4-a2-like-doing',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 1 A2',
    type: 'form',
    pattern: 'V-る のが 好きです',
    prompt: 'わたしは 写真を（　）のが すきです。',
    choices: ['とる', 'とって', 'とった', 'とります'],
    answer: 0,
    explanation: 'Kegiatan dinominalkan dengan 「の」 setelah verba bentuk kamus: 写真を撮るのが好きです.'
  },
  {
    id: 'n4-a2-sequence-te',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 1 A2',
    type: 'composition',
    pattern: 'V1-て、V2',
    prompt: 'Susunan manakah yang berarti “Saya pulang ke rumah lalu makan malam”?',
    choices: [
      'うちに かえって、ばんごはんを たべます。',
      'うちに かえる、ばんごはんを たべて。',
      'ばんごはんに かえって、うちを たべます。',
      'うちを かえりますから、ばんごはんです。'
    ],
    answer: 0,
    explanation: 'Bentuk て menghubungkan dua tindakan berurutan: 帰って、食べます.'
  },
  {
    id: 'n4-a2-habit-teimasu',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 1 A2',
    type: 'text',
    pattern: 'V-て います（kebiasaan）',
    prompt: 'けんこうのために、まいあさ 30分ぐらい（　）。',
    choices: ['あるいています', 'あるきましたか', 'あるかないで', 'あるいたほう'],
    answer: 0,
    explanation: '「毎朝」 menunjukkan kebiasaan berulang, sehingga 「歩いています」 paling sesuai.'
  },
  {
    id: 'n4-a2-change-ku-naru',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 1 A2',
    type: 'form',
    pattern: 'イA-く なります',
    prompt: '10月ごろから、だんだん さむ（　）。',
    choices: ['いになります', 'くなります', 'でなります', 'かったです'],
    answer: 1,
    explanation: 'Adjektiva-i berubah menjadi 「～くなります」: 寒い → 寒くなります.'
  },
  {
    id: 'n4-a2-reason-kara',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 1 A2',
    type: 'text',
    pattern: '～から（alasan）',
    prompt: 'この町が すきです。食べ物が おいしい（　）。',
    choices: ['から', 'まで', 'でも', 'しか'],
    answer: 0,
    explanation: '「から」 diletakkan setelah alasan: “karena makanannya enak.”'
  },
  {
    id: 'n4-a2-experience-ta-koto',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 1 A2',
    type: 'form',
    pattern: 'V-た ことがあります',
    prompt: '日本で さくらを（　）ことが ありますか。',
    choices: ['みる', 'みて', 'みた', 'みない'],
    answer: 2,
    explanation: 'Pola pengalaman memakai verba bentuk lampau biasa: 「見たことがあります」.'
  },
  {
    id: 'n4-a2-desire-softener',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 1 A2',
    type: 'text',
    pattern: 'V-たいんですが',
    prompt: 'A：すみません、ATMで お金を（　）、どうしたら いいですか。',
    choices: ['おろしたいんですが', 'おろしていました', 'おろさないで', 'おろしたばかりで'],
    answer: 0,
    explanation: '「～たいんですが」 menyampaikan keinginan secara halus sebelum meminta informasi atau bantuan.'
  },
  {
    id: 'n4-a2-polite-request',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 1 A2',
    type: 'composition',
    pattern: 'V-て もらえませんか',
    prompt: 'Kalimat paling sopan untuk meminta teman memeriksa tulisan adalah:',
    choices: [
      'この作文を チェックして もらえませんか。',
      'この作文を チェックした ことです。',
      'この作文が チェックして います。',
      'この作文を チェックしない ほうです。'
    ],
    answer: 0,
    explanation: '「V-てもらえませんか」 adalah permintaan sopan agar orang lain melakukan sesuatu untuk pembicara.'
  },
  {
    id: 'n4-a2-potential',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 2 A2',
    type: 'form',
    pattern: 'V-（られ）ます（potensial）',
    prompt: 'このホテルでは Wi-Fiが 無料で（　）。',
    choices: ['つかえます', 'つかいますか', 'つかってから', 'つかったばかり'],
    answer: 0,
    explanation: 'Bentuk potensial 「使えます」 menyatakan bahwa Wi-Fi dapat digunakan.'
  },
  {
    id: 'n4-a2-advice',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 2 A2',
    type: 'text',
    pattern: 'V-た ほうが いいです',
    prompt: 'あしたは とても さむいですよ。あついコートを（　）。',
    choices: ['きた ほうが いいです', 'きる ことが あります', 'きては だめです', 'きた ばかりです'],
    answer: 0,
    explanation: 'Saran positif memakai bentuk lampau biasa + 「ほうがいいです」: 着たほうがいいです.'
  },
  {
    id: 'n4-a2-intention',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 2 A2',
    type: 'form',
    pattern: 'V-る つもりです',
    prompt: '来年、JLPT N3を（　）つもりです。',
    choices: ['うける', 'うけて', 'うけた', 'うけます'],
    answer: 0,
    explanation: 'Rencana atau niat memakai verba bentuk kamus + 「つもりです」.'
  },
  {
    id: 'n4-a2-prohibition-cha-dame',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 2 A2',
    type: 'text',
    pattern: 'V-ちゃ だめです',
    prompt: 'ここは びょういんですから、大きい声で（　）。',
    choices: ['はなしちゃ だめです', 'はなした ほうが いいです', 'はなす つもりです', 'はなした ばかりです'],
    answer: 0,
    explanation: '「V-ちゃだめです」 menyatakan larangan. 話しては menjadi bentuk percakapan 話しちゃ.'
  },
  {
    id: 'n4-a2-order-te-kara',
    level: 'N4',
    sourceLevel: 'IRODORI Dasar 2 A2',
    type: 'composition',
    pattern: 'V-てから、～',
    prompt: 'Susunan manakah yang berarti “Setelah makan, saya minum obat”?',
    choices: [
      'ごはんを たべてから、くすりを のみます。',
      'くすりを のむから、ごはんを たべてです。',
      'ごはんを たべたばかり、くすりが のみます。',
      'くすりを のんで、ごはんを たべるつもりですか。'
    ],
    answer: 0,
    explanation: '「V-てから」 menegaskan bahwa tindakan kedua dilakukan setelah tindakan pertama selesai.'
  }
];

export const grammarPracticeSources = [
  {
    label: 'IRODORI Indonesia - Halaman Pengajar',
    url: 'https://sites.google.com/view/jf-irodori/halaman-pengajar',
    use: 'Acuan pola tata bahasa A1-A2 dan lembar kerja PDF The Japan Foundation Jakarta.'
  },
  {
    label: 'JLPT Official Sample Questions',
    url: 'https://www.jlpt.jp/e/samples/forlearners.html',
    use: 'Acuan kategori dan gaya butir ujian. Soal di situs ini ditulis ulang secara orisinal.'
  }
] as const;
