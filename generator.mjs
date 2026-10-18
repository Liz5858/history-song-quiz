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
export function generateSong(input, version=0){
 const error=validate(input); if(error)throw new Error(error);
 const [one,two,three]=input.clues.map(c=>hideNames(c.trim()).replace(/[.!?。]+$/u,''));
 const home=hideNames(input.country.trim()),era=hideNames(input.era.trim());
 const moodLines={
  '☀️ 신나는':['손뼉을 짝짝, 시간 여행 출발!','반짝이는 힌트 따라 함께 뛰어봐'],
  '🌷 따뜻한':['작은 이야기 하나 마음에 담아','다정한 바람처럼 너에게 전할게'],
  '🔥 웅장한':['힘차게 울려라, 역사의 발걸음','오래된 시간 너머 이야기가 깨어나'],
  '🌙 잔잔한':['고요한 밤, 책장을 넘기면','별빛 같은 이야기가 조용히 들려와']
 };
 const hooks=[['나는 누구, 누구일까요?','세 가지 힌트를 이어봐요','이름은 아직 비밀이에요','역사 속 나를 찾아봐요'],['누굴까, 누굴까, 생각해 봐','시간 속 발자국을 따라가 봐','하나, 둘, 셋, 힌트를 모아','네 마음속 정답을 외쳐봐']][version%2];
 let verse;
 switch(input.genre){
  case '🎧 힙합 / 랩': verse=`[Verse 1 · 리듬을 타며]\n첫 번째 힌트, 들어봐 yo!\n${one}\n두 번째 힌트, 이어가 flow!\n${two}`;break;
  case '🎸 밴드 / 록': verse=`[Verse 1 · 힘찬 기타와 함께]\n시간의 문을 열어, 크게 외쳐봐\n${one}\n울려 퍼지는 이야기, 함께 달려가\n${two}`;break;
  case '🎹 발라드': verse=`[Verse 1 · 천천히 들려주듯]\n오래된 책장 사이로\n${one}\n기억의 길을 걸으며\n${two}`;break;
  case '🪕 국악 퓨전': verse=`[Verse 1 · 장단에 맞춰]\n얼쑤, 첫 이야기를 풀어보세\n${one}\n좋구나, 두 번째 이야기도 들어보세\n${two}`;break;
  case '🎶 동요': verse=`[Verse 1 · 또박또박 즐겁게]\n하나! 첫 번째 이야기\n${one}\n둘! 두 번째 이야기\n${two}`;break;
  default: verse=`[Verse 1 · 통통 튀는 리듬]\n한 걸음 더, 내 이야기를 들어봐\n${one}\n두 걸음 더, 힌트를 따라와\n${two}`;
 }
 const lyrics=hideNames(`[Intro]\n${moodLines[input.mood][version%2]}\n${home}, ${era} 속으로!\n\n${verse}\n\n[Chorus · 함께 부르는 후렴]\n${hooks.join('\n')}\n\n[Verse 2 · 마지막 힌트]\n세 번째 이야기, 귀를 기울여 봐\n${three}\n서로 다른 세 힌트가 모이면\n책 속의 한 사람이 떠오를 거야\n\n[Chorus · 한 번 더!]\n${hooks.join('\n')}\n\n[Outro]\n이제 네 차례, 정답을 말해줘\n이 노래의 주인공은 누구일까요?`);
 const style=`${input.mood} · ${input.genre} · ${input.voice}`;
 const prompt=hideNames(`초등학교 5~6학년용 역사 인물 퀴즈 노래를 만들어 주세요.\n스타일: ${style}\n인물 이름, 별명, 호, 정답을 제목·가사·소개·추임새 어디에도 쓰지 마세요. 새로운 역사적 사실을 덧붙이지 마세요. 입력 가사의 세 가지 업적과 나라·시대를 유지하고, 1분 내외로 친구들이 따라 부르기 쉽게 작곡해 주세요.\n\n제목: 나는 누구일까요?\n\n${lyrics}`);
 return {lyrics,style,prompt,answer:input.person};
}
