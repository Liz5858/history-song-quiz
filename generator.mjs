// Browser-only: no accounts, API keys, analytics, or student data transmission.
export const people = [
 ['세종대왕','조선','조선 전기','👑',['훈민정음을 창제했어요','백성을 위한 농사책 편찬을 이끌었어요','과학 기구 개발을 지원했어요'],['세종','이도']],
 ['이순신','조선','조선 중기','⚓',['한산도 대첩에서 승리했어요','명량 해전에서 적을 물리쳤어요','난중일기를 남겼어요'],['충무공']],
 ['장영실','조선','조선 전기','🔭',['자동으로 시간을 알리는 자격루를 만들었어요','해시계인 앙부일구 제작에 참여했어요','천체 관측 기구 제작에 참여했어요'],[]],
 ['정약용','조선','조선 후기','📚',['목민심서를 썼어요','수원 화성 건설에 쓰인 거중기를 설계했어요','백성의 삶을 개선하는 실학을 연구했어요'],['다산']],
 ['유관순','한국','일제강점기','🌸',['아우내 장터 만세 운동을 이끌었어요','감옥에서도 독립의 뜻을 굽히지 않았어요','나라의 독립을 위해 용기 있게 외쳤어요'],[]],
 ['안중근','한국','대한제국 · 일제강점기','🕊️',['하얼빈에서 이토 히로부미를 저격했어요','동양 평화론을 집필했어요','의병 활동으로 나라의 독립을 위해 싸웠어요'],[]],
 ['김구','한국','일제강점기 · 광복 이후','🕊️',['대한민국 임시정부를 이끌었어요','한국광복군 창설에 힘썼어요','나라의 통일을 위해 노력했어요'],['백범']],
 ['윤봉길','한국','일제강점기','🌱',['농촌 계몽 운동에 힘썼어요','상하이 훙커우 공원에서 의거를 했어요','한인애국단에서 독립운동을 했어요'],['매헌']],
 ['신사임당','조선','조선 중기','🎨',['풀과 벌레를 섬세하게 그렸어요','시와 글씨에 뛰어난 재능을 보였어요','다양한 예술 작품을 남겼어요'],['사임당']],
 ['허준','조선','조선 중기','🌿',['동의보감 편찬을 이끌었어요','백성들의 질병 치료를 위해 노력했어요','의학 지식을 모아 책으로 정리했어요'],[]],
 ['광개토대왕','고구려','삼국 시대','🏹',['고구려의 영토를 넓혔어요','신라에 침입한 왜군을 물리쳤어요','만주 지역에서 나라의 힘을 키웠어요'],['광개토']],
 ['김유신','신라','삼국 시대','⚔️',['신라의 장군으로 활약했어요','백제와의 전쟁에서 군대를 이끌었어요','삼국 통일의 기틀을 마련하는 데 힘썼어요'],[]],
 ['선덕여왕','신라','삼국 시대','🌟',['신라 최초의 여왕으로 나라를 다스렸어요','첨성대가 세워진 시대의 왕이었어요','황룡사 구층 목탑을 세웠어요'],['선덕']],
 ['을지문덕','고구려','삼국 시대','🛡️',['수나라의 침입에 맞서 싸웠어요','살수 대첩에서 큰 승리를 거두었어요','지혜로운 전략으로 나라를 지켰어요'],[]],
 ['왕건','고려','후삼국 · 고려 초기','🏯',['고려를 세웠어요','후삼국을 통일했어요','백성을 안정시키는 정책을 펼쳤어요'],['태조']],
 ['강감찬','고려','고려 전기','🛡️',['귀주 대첩에서 승리했어요','거란의 침입을 막아냈어요','뛰어난 전략으로 고려를 지켰어요'],[]],
 ['이성계','조선','고려 말 · 조선 초기','🏯',['조선을 세웠어요','위화도에서 군대를 돌렸어요','한양을 새 도읍으로 정했어요'],['태조']],
 ['이황','조선','조선 중기','📖',['성리학을 깊이 연구했어요','도산서당에서 제자를 가르쳤어요','성학십도를 지었어요'],['퇴계']],
 ['이이','조선','조선 중기','📖',['성리학을 연구했어요','격몽요결을 썼어요','나라의 제도를 고치기 위한 의견을 냈어요'],['율곡']],
 ['김정호','조선','조선 후기','🗺️',['대동여지도를 만들었어요','우리 땅의 모습을 자세히 지도에 담았어요','목판을 이용해 지도를 찍어낼 수 있게 했어요'],['고산자']]
].map(([name,country,era,icon,clues,aliases])=>({name,country,era,icon,clues,aliases}));
export const moods = ['☀️ 신나는','🌷 따뜻한','🔥 웅장한','🌙 잔잔한'];
export const genres = ['🎤 K-pop','🎧 힙합 / 랩','🎸 밴드 / 록','🎹 발라드','🪕 국악 퓨전','🎶 동요'];
export const voices = ['👧 맑은 여자 목소리','👦 맑은 남자 목소리','👫 친구들과 합창'];
const normalize = value => value.normalize('NFKC').replace(/[\u200B-\u200D\uFEFF]/g,'');
const escapeRE = value => value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
// Also remove names written with spaces between the characters and common aliases.
export function hideNames(value) {
 let text = normalize(value);
 const names = [...new Set(people.flatMap(p=>[p.name,...p.aliases]))].sort((a,b)=>b.length-a.length);
 for (const name of names) text = text.replace(new RegExp([...name].map(escapeRE).join('\\s*'),'giu'),'그 사람');
 return text;
}
export function validate(input){
 if(!people.some(p=>p.name===input.person))return '먼저 역사 인물을 골라줘.';
 if(!input.country.trim()||!input.era.trim())return '나라와 시대를 모두 적어줘.';
 if(input.country.length>60||input.era.length>60)return '나라와 시대는 각각 60자 이내로 적어줘.';
 if(input.clues.length!==3||input.clues.some(c=>c.trim().length<4||c.length>160))return '업적 세 가지를 각각 4~160자로 적어줘.';
 if(!moods.includes(input.mood)||!genres.includes(input.genre)||!voices.includes(input.voice))return '노래의 느낌, 장르, 목소리를 모두 골라줘.';
 if(new Set(input.clues.map(c=>c.trim())).size!==3)return '서로 다른 업적 세 가지를 적어줘.';
 return '';
}
// Eight distinct story worlds plus seeded variation of structure, phrases and clue order.
const worlds = [
 ['시간 열차','칙칙폭폭, 시간을 건너','옛날로 가는 표 한 장을 손에 쥐고','다음 역은 어디일까, 귀를 기울여','덜컹덜컹 기억의 선로 위로','창밖에 지나가는 힌트를 잡아봐','종착역에 도착하면 내 이름을 말해줘'],
 ['역사 탐정','돋보기를 들고, 수사를 시작해','책장 사이에 숨은 단서를 찾아','누구의 발자국일까, 하나씩 맞춰봐','조각조각 모인 증거가 말을 해','정답은 네 추리 속에 숨어 있어','탐정님, 이제 사건을 해결해 줘'],
 ['별빛 편지','먼 시간 너머에서 편지가 왔어','이름 없는 봉투를 살며시 열어봐','어떤 사람이 보낸 마음일까','별빛을 따라 한 줄씩 읽어봐','세 이야기가 하나의 별이 될 때','편지의 주인에게 답장을 보내줘'],
 ['비밀 미션','비밀 미션, 준비됐니?','역사의 문을 여는 암호를 찾아','두근두근, 암호를 풀어봐','힌트를 연결해 문을 열어봐','마지막 열쇠는 네가 알고 있어','미션 완료! 주인공을 외쳐줘'],
 ['시간 속 전시관','조용한 전시관에 불이 켜지면','옛이야기들이 하나씩 깨어나','이야기의 주인공을 찾아줄래','멈춰 있던 장면을 노래로 이어','기억의 빈자리를 네가 채워줘','이 전시의 마지막 이름표를 써줘'],
 ['퀴즈 무대','커튼이 열리고 조명이 켜져','이름 대신 이야기로 인사할게','누구일까, 다 같이 맞혀봐','이 무대의 주인공을 불러줘','세 가지 이야기, 하나의 정답','박수와 함께 정답을 들려줘'],
 ['기억의 퍼즐','흩어진 퍼즐을 책상에 펼쳐','하나하나 이어서 그림을 그려','어떤 얼굴이 떠오르니','이야기를 맞추면 길이 보여','세 조각이 만나는 바로 그곳','완성된 그림의 주인공을 말해줘'],
 ['책 속 숨바꼭질','꼭꼭 숨어라, 이름은 비밀','책장을 넘기며 나를 찾아봐','어디 어디 숨었을까','글자 사이에 힌트가 반짝','모두 찾았다면 손을 들어봐','술래야, 내 이름을 맞혀줄래']
];
const genreSpec = {
 '🎤 K-pop': ['Korean dance pop','bright synth plucks, bouncy bass, crisp drums',['반짝이는 리듬을 따라','발끝으로 그려보는 이야기','두근대는 비트 사이로','함께 부를 멜로디 속에'],[108,116,124]],
 '🎧 힙합 / 랩': ['melodic hip-hop with rhythmic rap verses','rounded bass, boom-bap drums, piano stabs',['박자를 쪼개, 단서를 꺼내','한 줄 한 줄 이어지는 라임','비트 위에 올라탄 이야기','리듬을 타고 집중해 봐'],[84,92,100]],
 '🎸 밴드 / 록': ['melodic pop rock','electric guitar riffs, live drums, warm bass',['기타 소리 타고 울려 퍼져','드럼처럼 두드리는 궁금증','힘껏 불러, 함께 들어봐','리듬에 실어 저 멀리 보내'],[112,124,132]],
 '🎹 발라드': ['melodic Korean ballad','gentle piano, soft strings, subtle brushed drums',['마음 한쪽에 남아 있는 말','조용히 꺼내 보는 이야기','한 줄의 기억을 따라가면','오래도록 잊히지 않는 장면'],[68,76,84]],
 '🪕 국악 퓨전': ['Korean traditional fusion pop','gayageum plucks, daegeum, janggu, modern bass',['얼쑤, 이야기를 풀어보세','장단 따라 귀를 기울여','좋구나, 함께 불러보세','덩기덕, 다음 이야기를 들어'],[88,100,112]],
 '🎶 동요': ['playful sing-along children song','ukulele, glockenspiel, handclaps, light percussion',['작은 손으로 박수를 짝짝','또박또박 이야기를 해봐','동그랗게 모여 앉아서','친구들과 한 소절씩 불러'],[96,104,112]]
};
const moodSpec={
 '☀️ 신나는':['cheerful, playful, energetic','밝게 웃으며 노래를 시작해','힘차고 가볍게 함께 불러봐'],
 '🌷 따뜻한':['warm, tender, comforting','다정한 마음을 노래에 담아','포근한 멜로디를 너에게 전해'],
 '🔥 웅장한':['majestic, cinematic, uplifting','깊게 울리는 노래를 들어봐','힘차게 번지는 목소리를 모아'],
 '🌙 잔잔한':['calm, delicate, reflective','낮은 목소리로 이야기를 꺼내','고요한 멜로디에 귀를 기울여']
};
const voiceSpec={
 '👧 맑은 여자 목소리':'clear, bright female lead vocal',
 '👦 맑은 남자 목소리':'clear, gentle male lead vocal',
 '👫 친구들과 합창':'youthful mixed choir, group unison with simple harmonies'
};
function randomSeed(){return globalThis.crypto?.getRandomValues(new Uint32Array(1))[0]??Math.floor(Math.random()*4294967296);}
export function generateSong(input, version=randomSeed()){
 const error=validate(input);if(error)throw new Error(error);
 const seed=version>>>0;let state=(seed^0x9e3779b9)>>>0;
 const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
 const pick=items=>items[Math.floor(random()*items.length)];
 const [theme,...lines]=worlds[seed%worlds.length];
 const [genre,instruments,verseLines,tempos]=genreSpec[input.genre];
 const [mood,...moodLines]=moodSpec[input.mood];
 const clues=input.clues.map(c=>hideNames(c.trim()).replace(/[.!?。]+$/u,''));
 // Fisher-Yates retains every fact, with no invented historical claims.
 for(let i=clues.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[clues[i],clues[j]]=[clues[j],clues[i]];}
 const home=hideNames(input.country.trim()),era=hideNames(input.era.trim());
 const intro=`[Intro]\n${pick(lines.slice(0,2))}\n${pick(moodLines)}`;
 const place=pick([`${home}, ${era} 속으로`,`${era}, ${home}에서 시작된 이야기`,`${home}의 ${era}, 책장을 열어봐`]);
 const verse1=`[Verse 1]\n${place}\n${clues[0]}\n${pick(verseLines)}\n${clues[1]}`;
 const verse2=`[Verse 2]\n${pick(verseLines)}\n${clues[2]}\n${pick(['눈을 감고 그 모습을 그려봐','세 이야기가 한 사람을 가리켜','남겨진 이야기를 가만히 이어봐','여기까지 들었다면 떠올려봐'])}`;
 const chorus=`[Chorus]\n${lines[2]}\n${lines[3]}\n${pick(['이름은 잠시 비워둘게','답은 아직 말하지 마','생각할 시간을 네게 줄게','너의 기억을 두드려봐'])}\n${lines[4]}`;
 const pre=`[Pre-Chorus]\n${pick(['하나의 이야기가 다음 이야기로','조금씩 가까워지는 정답','모두 다른 장면이 만나면','잠깐, 힌트들을 연결해 봐'])}\n${pick(moodLines)}`;
 const bridge=`[Bridge]\n${pick(['너와 내가 배운 시간 속에','책장과 책장 사이 어딘가에','우리의 기억을 모아 보면','작은 목소리들을 모아'])}\n${lines[4]}`;
 const outro=`[Outro]\n${lines[5]}`;
 const layout=Math.floor(seed/8)%4;
 const blocks=[
  [intro,verse1,pre,chorus,verse2,bridge,chorus,outro],
  [chorus,verse1,verse2,pre,chorus,outro],
  [intro,verse1,chorus,verse2,bridge,chorus,outro],
  [intro,verse1,pre,verse2,chorus,bridge,outro]
 ][layout];
 const lyrics=hideNames(blocks.join('\n\n'));
 const style=`${input.mood} · ${input.genre} · ${input.voice}`;
 const tempo=pick(tempos)+(input.mood==='🌙 잔잔한'?-8:input.mood==='☀️ 신나는'?4:0);
 const arrangement=pick(['short instrumental opening, sparse verses, fuller chorus, clean ending','intimate verses, memorable sing-along chorus, gentle dynamic build','playful call-and-response accents, steady groove, strong final chorus','clear lead melody, light backing harmonies, brief instrumental transitions']);
 const musicGuide=hideNames(`${genre}; ${mood}; ${tempo} BPM. Instruments: ${instruments}. Vocals: ${voiceSpec[input.voice]}, clear Korean pronunciation, comfortable range, easy melody for elementary students. Arrangement: ${arrangement}. Follow the supplied section tags and Korean lyrics exactly. Classroom history guessing song: keep the identity secret; do not add names, spoken introductions, new lyrics or historical facts. Vocals forward in the mix, short intro, no long solos.`);
 return {lyrics,style,musicGuide,theme,answer:input.person};
}