const vocabulary = [
  { jp:'わたし', reading:'watashi', meaning:'I / me', level:'N5' },{ jp:'せんせい', reading:'sensei', meaning:'teacher / lecturer', level:'N5' },{ jp:'日本語', reading:'にほんご', meaning:'Japanese language', level:'N5' },{ jp:'インドネシア人', reading:'インドネシアじん', meaning:'Indonesian person', level:'N5' }
];
const kanji = [{char:'日',meaning:'sun/day',level:'N5'},{char:'本',meaning:'book/origin',level:'N5'},{char:'人',meaning:'person',level:'N5'},{char:'語',meaning:'language',level:'N5'}];
const grammar = [{pattern:'A は B です。',meaning:'A is B.',level:'N5'},{pattern:'A は B ですか。',meaning:'Is A B?',level:'N5'},{pattern:'Country + 人',meaning:'nationality/person',level:'N5'},{pattern:'Country + 語',meaning:'language',level:'N5'}];
const lessons = [{id:'day-1',title:'Japanese From Zero',level:'Pre-N5'},{id:'day-2',title:'Greetings, Nationality, and Language',level:'Pre-N5'}];
const headers = {'content-type':'application/json; charset=utf-8','access-control-allow-origin':'*','access-control-allow-methods':'GET,POST,OPTIONS','access-control-allow-headers':'content-type'};
const json=(data:unknown,status=200)=>new Response(JSON.stringify(data,null,2),{status,headers});
export default { async fetch(req:Request){
  if(req.method==='OPTIONS') return new Response(null,{headers});
  const url=new URL(req.url); const path=url.pathname;
  const available=['/api/lesson/today','/api/lessons','/api/vocabulary','/api/kanji','/api/grammar','/api/progress','/api/review','/api/review/due'];
  if(path==='/' || path==='/api') return json({
    name:'JLPT Zero to N1 API',
    status:'online',
    website:'https://jlpt-zero-to-n1.pages.dev/',
    message:'Use one of the available API endpoints below.',
    available
  });
  if(path==='/api/lesson/today') return json({today:lessons[1],sections:['review','vocabulary','kanji','grammar','reading','listening','practice','jlpt','homework']});
  if(path==='/api/lessons') return json({lessons});
  if(path==='/api/vocabulary') return json({items:vocabulary.filter(v=>!url.searchParams.get('level')||v.level===url.searchParams.get('level'))});
  if(path==='/api/kanji') return json({items:kanji.filter(k=>!url.searchParams.get('level')||k.level===url.searchParams.get('level'))});
  if(path==='/api/grammar') return json({items:grammar.filter(g=>!url.searchParams.get('level')||g.level===url.searchParams.get('level'))});
  if(path==='/api/progress' && req.method==='GET') return json({progress:{kana:5,vocabulary:20,kanji:4,grammar:4,n5Readiness:1}});
  if(path==='/api/progress' && req.method==='POST') return json({ok:true,saved:await req.json().catch(()=>({}))});
  if(path==='/api/review' && req.method==='POST') return json({ok:true,nextReview:'scheduled',input:await req.json().catch(()=>({}))});
  if(path==='/api/review/due') return json({due:vocabulary.slice(0,3)});
  return json({error:'Not found',available},404);
}};
