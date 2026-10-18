import {people,moods,genres,voices,generateSong,validate} from './generator.mjs';
const $=id=>document.getElementById(id);
let selected=null,current=null,version=0,toastTimer;
const clueFields=[$('clue1'),$('clue2'),$('clue3')];
function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),2800)}
function invalidate(){current=null;$('result').hidden=true;$('empty-state').hidden=false;$('form-error').textContent='';}
function renderPeople(){
 const query=$('search').value.trim();$('people').replaceChildren();let count=0;
 people.forEach(p=>{if(!`${p.name} ${p.country} ${p.era}`.includes(query))return;count++;
 const b=document.createElement('button');b.type='button';b.className='person';b.setAttribute('aria-pressed',String(selected===p));b.setAttribute('aria-label',p.name);
 const icon=document.createElement('span');icon.textContent=p.icon;icon.setAttribute('aria-hidden','true');
 const name=document.createElement('span');name.textContent=p.name;const era=document.createElement('small');era.textContent=p.country;b.append(icon,name,era);
 b.addEventListener('click',()=>{if(selected===p)return;selected=p;$('country').value=p.country;$('era').value=p.era;clueFields.forEach((f,i)=>{f.value='';f.placeholder=`예: ${p.clues[i]}`});invalidate();renderPeople();});$('people').append(b);
 });$('no-results').hidden=count>0;
}
function choices(id,name,options){options.forEach((text,i)=>{const label=document.createElement('label');label.className='choice';const radio=document.createElement('input');radio.type='radio';radio.name=name;radio.value=text;radio.checked=i===0;const span=document.createElement('span');span.textContent=text;label.append(radio,span);$(id).append(label);});}
choices('moods','mood',moods);choices('genres','genre',genres);choices('voices','voice',voices);renderPeople();
$('search').addEventListener('input',renderPeople);
$('song-form').addEventListener('input',event=>{if(event.target.id!=='search')invalidate();});
$('example').addEventListener('click',()=>{if(!selected){toast('먼저 위에서 인물을 골라줘!');$('people').querySelector('button')?.focus();return;}clueFields.forEach((f,i)=>f.value=selected.clues[i]);invalidate();toast('예시를 채웠어. 배운 내용과 맞는지 확인해 봐!');});
function readInput(){return {person:selected?.name,country:$('country').value,era:$('era').value,clues:clueFields.map(f=>f.value),mood:document.querySelector('[name=mood]:checked').value,genre:document.querySelector('[name=genre]:checked').value,voice:document.querySelector('[name=voice]:checked').value};}
function create(){const input=readInput(),error=validate(input);if(error){$('form-error').textContent=error;return;}current=generateSong(input,version++);$('lyrics').textContent=current.lyrics;$('style-summary').textContent=current.style;$('empty-state').hidden=true;$('result').hidden=false;$('form-error').textContent='';if(window.innerWidth<=800)$('result').scrollIntoView({behavior:'smooth',block:'start'});}
$('song-form').addEventListener('submit',event=>{event.preventDefault();create();});$('regenerate').addEventListener('click',create);
async function copy(text){try{await navigator.clipboard.writeText(text);toast('복사했어! 원하는 곳에 붙여 넣어봐.');}catch{toast('복사가 제한되어 있어. 아래 가사를 직접 선택해 복사해 줘.');$('lyrics').focus();const range=document.createRange();range.selectNodeContents($('lyrics'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);}}
$('copy').addEventListener('click',()=>{if(current)copy(current.lyrics);});$('prompt').addEventListener('click',()=>{if(current)copy(current.prompt);});
$('download').addEventListener('click',()=>{if(!current)return;const blob=new Blob(['\ufeff나는 누구일까요?\n'+current.style+'\n\n'+current.lyrics],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='역사-송-퀴즈-가사.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('정답을 숨긴 가사 파일을 저장했어.');});
$('quiz').addEventListener('click',()=>{if(!current)return;$('quiz-lyrics').textContent=current.lyrics;$('quiz-style').textContent=current.style;$('answer').hidden=true;$('answer').textContent='';$('reveal').hidden=false;$('quiz-dialog').showModal();});
$('close-quiz').addEventListener('click',()=>$('quiz-dialog').close());$('reveal').addEventListener('click',()=>{if(!current)return;$('answer').textContent=`정답은 ${current.answer}! 🎉`;$('answer').hidden=false;$('reveal').hidden=true;});
