const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const state={screen:"start",categories:["attraction"],answers:{},recommendations:[],selected:new Set(),refresh:{},route:[],custom:[]};
const categoryMeta={attraction:["📍","볼거리"],food:["🍴","맛집"],cafe:["☕","뷰&카페"],activity:["🏄","체험"]};
const districtCoordinates={해운대구:[35.1631,129.1635],수영구:[35.1457,129.1132],영도구:[35.0912,129.068],남구:[35.1366,129.0844],사하구:[35.1046,128.9747],서구:[35.0979,129.0244],기장군:[35.2445,129.2223],강서구:[35.2122,128.9806]};
const indoorFallback=[
  {name:"부산시립미술관",area:"해운대구",category:"미술관 · 실내",description:"비 오는 날에도 부산의 예술을 여유롭게 감상할 수 있어요.",tags:["실내","문화"],mbtiMatches:["INFP","INTJ","ISFJ"]},
  {name:"SEA LIFE 부산아쿠아리움",area:"해운대구",category:"아쿠아리움 · 실내",description:"날씨 영향 없이 부산의 해양 생태를 만나는 실내 명소예요.",tags:["실내","해양"],mbtiMatches:["ISFP","ESFJ","ENFP"]},
  {name:"국립해양박물관",area:"영도구",category:"박물관 · 실내",description:"바다의 역사와 과학을 깊이 살펴볼 수 있는 실내 여행지예요.",tags:["실내","역사"],mbtiMatches:["INTJ","ISTJ","INFJ"]},
  {name:"F1963",area:"수영구",category:"복합문화공간 · 실내",description:"전시와 서점, 카페를 한 공간에서 즐기기 좋아요.",tags:["실내","문화"],mbtiMatches:["INFP","ENTP","ENFP"]}
];


const foodCombos={
 AAAA:[["꼼장어구이(양념볶음)","낙지볶음","낙곱새"],"매콤하고 한국적인 강렬한 양념에 볶아내는 대표적인 모험형 해산물 볶음 요리입니다."],
 AAAB:[["꼼장어구이(양념/소금)","장어구이(양념)"],"붉은 양념을 올려 구워 먹는 한국 특유의 보양 해산물 구이입니다."],
 AAAC:[["물회(매콤하게)","회국수(매운 양념)","알탕"],"날것의 신선함과 칼칼한 국물·육수가 어우러진 메뉴입니다."],
 ABAA:[["닭갈비(매운맛)","오징어볶음","비빔당면(매운 양념)"],"익힌 재료를 매콤하고 독특한 양념에 볶아낸 요리입니다."],
 ABAB:[["돼지껍데기","닭발","오리불고기(매콤 양념)"],"매콤하고 식감이 독특한 한국식 특수 부위 구이입니다."],
 ABAC:[["아구찜/아구탕","닭도리탕(매운맛)","부대찌개"],"푹 익힌 고기·해산물에 칼칼한 국물이 어우러진 요리입니다."],
 ABBA:[["떡볶이","돼지불백(양념)","오징어볶음"],"누구나 쉽게 도전할 수 있는 대중적인 매콤 볶음입니다."],
 ABBB:[["돼지갈비(양념)","삼겹살(김치 구이)"],"대중적인 구이를 매콤한 반찬과 함께 즐기는 조합입니다."],
 ABBC:[["김치찌개","돼지찌개","매운 해물칼국수"],"대중적이면서 확실하게 매콤한 한국식 국물 요리입니다."],
 BAAA:[["낙곱새","꼼장어구이(보통맛)"],"부산 특유의 조합을 적당한 맵기로 즐기는 볶음입니다."],
 BAAB:[["장어구이","조개구이"],"싱싱한 해산물을 적당히 매콤한 양념과 함께 굽는 별미입니다."],
 BAAC:[["물회","회덮밥","멍게비빔밥"],"날것의 신선함과 매콤새콤한 초장·육수가 어우러집니다."],
 BBAA:[["비빔당면","동래파전"],"부산 향토 느낌이 나는 익힌 재료 기반 볶음·비빔류입니다."],
 BBAB:[["오리불고기","막창/곱창 구이"],"적당한 매콤 양념을 입혀 구워내는 한국의 별미입니다."],
 BBAC:[["순대국밥(다대기)","내장국밥","감자탕"],"한국적 재료에 다대기를 풀어 알싸하게 먹는 국물입니다."],
 BBBA:[["비빔밀면","쫄면","비빔밥"],"누구나 좋아하는 매콤새콤한 면·밥 요리입니다."],
 BBBB:[["돼지불고기","삼겹살","닭갈비(기본맛)"],"실패 없는 대중적인 매콤달콤 고기 구이입니다."],
 BBBC:[["부대찌개","해물칼국수","만두전골"],"무난하게 즐길 수 있는 든든한 국물 요리입니다."],
 CAAA:[["전복구이","생선구이","모둠회(간장)"],"매운 양념 대신 본연의 고소함으로 즐기는 해산물 요리입니다."],
 CAAB:[["전복구이","생선구이","모둠회(간장)"],"매운 양념 대신 본연의 고소함으로 즐기는 해산물 요리입니다."],
 CAAC:[["회국수(순한 양념)","전복죽","꼬막밥"],"해산물이 들어가며 맵지 않고 고소한 국물·밥 요리입니다."],
 CBAA:[["동래파전","비빔당면(간장)","궁중떡볶이"],"맵지 않게 즐기는 부산·한국 향토 부침 및 볶음입니다."],
 CBAB:[["고등어구이","갈치구이","소갈비"],"간장이나 소금 간으로 담백하게 구워내는 요리입니다."],
 CBAC:[["재첩국","복국","아귀탕(맑은탕)"],"시원하고 맑은 국물로 깊은 맛을 내는 한국식 탕입니다."],
 CBBA:[["수육백반","장어덮밥","잔치국수"],"자극적이지 않고 담백하고 든든한 대중적인 요리입니다."],
 CBBB:[["삼겹살(소금구이)","돼지갈비(간장)","생선구이 정식"],"맵지 않고 고소해 누구나 좋아하는 구이입니다."],
 CBBC:[["돼지국밥","곰탕","만두국"],"맵지 않은 익힌 재료로 든든하게 즐기는 대중적인 국물 요리입니다."]
};
const breakfastMenus=["전복죽","돼지국밥","복국","재첩국","소고기국밥","브런치 플레이트","토스트와 커피"];
// 부산시·비짓부산 공개 맛집 자료와 지도 검색 결과에서 매장명과 대표 메뉴가 함께 확인된 업소만 사용한다.
const verifiedRestaurants=[
 {name:"금수복국 해운대본점",area:"해운대구",menus:["복국","복튀김","복불고기"]},{name:"해운대원조할매국밥",area:"해운대구",menus:["소고기국밥","선지국밥"]},{name:"해운대암소갈비집",area:"해운대구",menus:["생갈비","양념갈비"]},{name:"개미집 해운대점",area:"해운대구",menus:["낙곱새","낙지볶음"]},{name:"원조전복죽",area:"해운대구",menus:["전복죽"]},{name:"해운대가야밀면",area:"해운대구",menus:["밀면","비빔밀면","만두"]},
 {name:"수변최고돼지국밥 민락본점",area:"수영구",menus:["돼지국밥","수육백반"]},{name:"고옥",area:"수영구",menus:["장어덮밥"]},{name:"언양불고기 부산집",area:"수영구",menus:["언양불고기","한우구이"]},{name:"할매재첩국 부산본점",area:"수영구",menus:["재첩국","재첩진국"]},
 {name:"재기돼지국밥",area:"영도구",menus:["돼지국밥","수육백반"]},{name:"영도해녀촌",area:"영도구",menus:["성게김밥","해산물모둠","전복"]},
 {name:"쌍둥이돼지국밥 본점",area:"남구",menus:["돼지국밥","수육백반"]},{name:"내호냉면",area:"남구",menus:["밀면","비빔밀면","냉면"]},{name:"오륙도낙지",area:"남구",menus:["낙곱새","낙지볶음"]},
 {name:"영진돼지국밥 본점",area:"사하구",menus:["돼지국밥","수육백반"]},{name:"복성반점",area:"사하구",menus:["짬뽕","볶음밥"]},
 {name:"몽실종가돼지국밥",area:"서구",menus:["돼지국밥","수육백반"]},{name:"부산명물횟집",area:"서구",menus:["모둠회","생선회","회백반"]},
 {name:"기장끝집",area:"기장군",menus:["전복죽","전복구이"]},{name:"바릇식당",area:"기장군",menus:["꼬막정식","꼬막비빔밥"]},{name:"기장곰장어",area:"기장군",menus:["곰장어구이","짚불곰장어"]},
 {name:"명지첫집",area:"강서구",menus:["보쌈","족발"]},{name:"오복미역 명지본점",area:"강서구",menus:["가자미미역국","전복미역국"]},{name:"합천일류돼지국밥 명지점",area:"강서구",menus:["돼지국밥","수육백반"]},
 {name:"본전돼지국밥",area:"동구",menus:["돼지국밥","수육백반"]},{name:"초량밀면",area:"동구",menus:["밀면","비빔밀면","왕만두"]},{name:"개금밀면",area:"부산진구",menus:["밀면","비빔밀면"]},{name:"송정3대국밥",area:"부산진구",menus:["돼지국밥","수육백반"]},{name:"원조할매낙지",area:"부산진구",menus:["낙지볶음","낙곱새"]},{name:"동래할매파전",area:"동래구",menus:["동래파전","막걸리"]},{name:"소문난원조조방낙지 본점",area:"동래구",menus:["낙곱새","낙지볶음"]},{name:"18번완당집",area:"중구",menus:["완당","완당면"]}
];
const realCafes=[
 ["비비비당","해운대구","전통차 · 오션뷰"],["엣지993","해운대구","루프탑 · 오션뷰"],["랑데자뷰 해운대점","해운대구","디저트 · 오션뷰"],["별침대","수영구","광안대교 · 오션뷰"],["차선책 광안리","수영구","베이커리 · 오션뷰"],["카페385","영도구","대형카페 · 오션뷰"],["신기산업","영도구","항구뷰 · 카페"],["피아크","영도구","복합문화 · 카페"],["웨이브온 커피","기장군","건축 · 오션뷰"],["칠암사계","기장군","베이커리 · 오션뷰"],["TCC 송도점","서구","송도 · 오션뷰"]
].map(([name,area,category])=>({name,area,category,description:`${area}에서 실제로 방문할 수 있는 ${category} 카페입니다.`,tags:["실내","카페"],displayTags:[area,"실제 업소"],service:"cafe"}));
const realActivities=[
 ["SEA LIFE 부산아쿠아리움","해운대구","아쿠아리움 · 실내"],["해운대블루라인파크 미포정거장","해운대구","해변열차 · 스카이캡슐"],["부산요트투어 요트탈래","수영구","요트 · 체험"],["송도해상케이블카","서구","케이블카 · 전망"],["국립해양박물관","영도구","박물관 · 실내"],["부산현대미술관","사하구","미술관 · 실내"],["롯데월드 어드벤처 부산","기장군","테마파크 · 체험"]
].map(([name,area,category])=>({name,area,category,description:`${area}에서 실제로 이용할 수 있는 ${category} 장소입니다.`,tags:/실내|박물관|미술관|아쿠아리움/.test(category)?["실내","체험"]:["체험"],displayTags:[area,"실제 장소"],service:"activity"}));


const mbtiQuestions=[
 ["새 장소에서 먼저 하고 싶은 것은?","사람들과 활기차게 둘러보기","조용히 분위기부터 느끼기","E","I"],
 ["더 끌리는 여행지는?","유명하고 활기찬 명소","한적하고 숨은 장소","E","I"],
 ["여행 계획은?","시간대별로 꼼꼼하게","큰 방향만 잡고 즉흥적으로","J","P"],
 ["장소를 고를 때 중요한 것은?","실제 볼거리와 편의성","독특한 분위기와 가능성","S","N"],
 ["더 좋아하는 활동은?","직접 체험하고 움직이기","풍경을 보며 영감 얻기","S","N"],
 ["예상 못 한 일이 생기면?","바로 새 선택지를 찾는다","원래 계획을 지키고 싶다","P","J"],
 ["사진은 어디서?","검증된 대표 포토스팟","우연히 찾은 새로운 구도","S","N"],
 ["어떤 경험이 더 좋은가요?","색다른 문화와 이야기","익숙하고 편안한 경험","N","S"],
 ["여행의 핵심은?","효율과 다양한 경험","편안함과 좋은 감정","T","F"],
 ["하루만 있다면?","많은 곳을 빠르게","적은 곳을 깊고 여유롭게","E","I"]
];


function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2200)}
function selectedValues(name){return $$(`input[name="${name}"]:checked`).map(x=>x.value)}
function selectedValue(name){return $(`input[name="${name}"]:checked`)?.value||""}
function hash(text){return [...String(text)].reduce((n,c)=>((n*31+c.charCodeAt(0))>>>0),7)}
function shuffleRank(items,seed){return [...items].map(x=>({x,n:hash(`${x.name}-${seed}`)})).sort((a,b)=>a.n-b.n).map(v=>v.x)}
function timeMinutes(value){const [h,m]=value.split(":").map(Number);return h*60+m}
function formatTime(min){min=Math.max(0,Math.min(1439,Math.round(min/5)*5));return `${String(Math.floor(min/60)).padStart(2,"0")}:${String(min%60).padStart(2,"0")}`}
function durationHours(){return Math.max(1,(timeMinutes($("#end-time").value)-timeMinutes($("#start-time").value))/60)}
function suggestedCount(hours=durationHours()){return hours<5?3:4+Math.floor((hours-5)/2)}


function showScreen(name){state.screen=name;$$('.screen').forEach(x=>{x.hidden=x.id!==`${name}-screen`;x.classList.toggle("active",!x.hidden)});$$('.steps span').forEach((x,i)=>x.classList.toggle("active",i==={start:0,quiz:1,result:2}[name]));$('.planner').scrollIntoView({behavior:"smooth",block:"start"})}


function initSlider(){let current=0;const slides=$$('.hero-slide'),dots=$$('.slide-dots i');setInterval(()=>{slides[current].classList.remove('active');dots[current].classList.remove('active');current=(current+1)%slides.length;slides[current].classList.add('active');dots[current].classList.add('active')},3000)}
function initMbti(){const rows=[["I","E"],["S","N"],["T","F"],["J","P"]],labels={I:"내향",E:"외향",S:"현실",N:"직관",T:"사고",F:"감정",J:"계획",P:"즉흥"};$('#mbti-direct').innerHTML=rows.map((pair,i)=>`<div class="mbti-pair">${pair.map((l,j)=>`<label><input type="radio" name="mbti${i}" value="${l}" ${j===0?'checked':''}>${l}<small> ${labels[l]}</small></label>`).join('')}</div>`).join('');$('#mbti-quiz').innerHTML=mbtiQuestions.map((q,i)=>`<fieldset class="mbti-question"><legend>${i+1}. ${q[0]}</legend><div class="quiz-answer"><label><input type="radio" name="mq${i}" value="${q[3]}" checked>A · ${q[1]}</label><label><input type="radio" name="mq${i}" value="${q[4]}">B · ${q[2]}</label></div></fieldset>`).join('');updateMbti()}
function updateMbti(){const quiz=!$('#mbti-quiz').hidden;let result;if(!quiz)result=[0,1,2,3].map(i=>selectedValue(`mbti${i}`)).join('');else{const score={I:0,E:0,S:0,N:0,T:0,F:0,J:0,P:0};mbtiQuestions.forEach((q,i)=>score[selectedValue(`mq${i}`)]++);result=(score.I>=score.E?'I':'E')+(score.S>=score.N?'S':'N')+(score.T>=score.F?'T':'F')+(score.J>=score.P?'J':'P')}$('#mbti-value').value=result;$('#mbti-output').textContent=result}


function updateClock(){const start=timeMinutes($('#start-time').value),end=timeMinutes($('#end-time').value);if(end<=start)$('#end-time').value=formatTime(Math.min(start+60,1435));const e=timeMinutes($('#end-time').value),angle=start/4,size=(e-start)/4;const dial=$('#travel-clock');dial.style.setProperty('--start-angle',`${angle}deg`);dial.style.setProperty('--range-size',`${size}deg`);const placeLabel=(selector,minutes)=>{const a=minutes/1440*Math.PI*2,r=99,x=120+Math.sin(a)*r,y=120-Math.cos(a)*r,el=$(selector);el.style.left=`${x}px`;el.style.top=`${y}px`};placeLabel('.start-label',start);placeLabel('.end-label',e);$('#duration-copy').textContent=`${((e-start)/60).toFixed((e-start)%60?1:0)}시간 · 추천 ${suggestedCount((e-start)/60)}장소`}
function initClock(){const dial=$('#travel-clock');let active='';function fromPointer(e){const r=dial.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;return Math.round((((Math.atan2(x,-y)*180/Math.PI+360)%360)/360*1440)/5)*5%1440}const distance=(a,b)=>Math.min(Math.abs(a-b),1440-Math.abs(a-b));function move(e){if(!active)return;const m=fromPointer(e),other=timeMinutes($(active==='start'?'#end-time':'#start-time').value);if(active==='start'&&m<=other-5)$('#start-time').value=formatTime(m);if(active==='end'&&m>=other+5)$('#end-time').value=formatTime(m);updateClock()}dial.addEventListener('pointerdown',e=>{const m=fromPointer(e),start=timeMinutes($('#start-time').value),end=timeMinutes($('#end-time').value);active=e.target.dataset.hand||(distance(m,start)<=distance(m,end)?'start':'end');dial.setPointerCapture(e.pointerId);move(e)});dial.addEventListener('pointermove',move);dial.addEventListener('pointerup',()=>active='');dial.addEventListener('pointercancel',()=>active='');['#start-time','#end-time'].forEach(s=>$(s).addEventListener('input',updateClock));updateClock()}


function describeWeather(code){if(code===0)return['맑음','☀️'];if([1,2].includes(code))return['맑음','🌤️'];if(code===3)return['흐림','☁️'];if([51,53,55,61,63,65,80,81,82,95,96,99].includes(code))return['비','🌧️'];if([71,73,75,77,85,86].includes(code))return['눈','🌨️'];return['흐림','⛅']}
async function syncWeather(){const loc=$('#location').value,date=$('#date').value;if(!date)return;$('#weather-status').textContent='날씨를 확인하는 중…';try{const [latitude,longitude]=districtCoordinates[loc],p=new URLSearchParams({latitude,longitude,daily:'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max',timezone:'Asia/Seoul',forecast_days:'16'}),data=await fetch(`https://api.open-meteo.com/v1/forecast?${p}`).then(r=>{if(!r.ok)throw Error();return r.json()}),i=data.daily.time.indexOf(date);if(i<0)throw Error();const [label,icon]=describeWeather(data.daily.weather_code[i]);$('#weather').value=label;$('#weather-icon').textContent=icon;$('#weather-status').textContent=`${label} · ${Math.round(data.daily.temperature_2m_min[i])}~${Math.round(data.daily.temperature_2m_max[i])}℃`;$('#weather-detail').textContent=`강수확률 ${data.daily.precipitation_probability_max[i]??0}% · 자동 예보`}catch{$('#weather').value='확인 불가';$('#weather-icon').textContent='📡';$('#weather-status').textContent='예보를 확인할 수 없어요';$('#weather-detail').textContent='날씨 정보 없이 안전한 장소를 우선 추천합니다.'}}


function comboCodes(){const spice=Math.round(Number($('#spice-range').value)),q1=spice===3?'A':spice===2?'B':'C',raw=selectedValue('raw')||'B',adventure=selectedValue('adventure')||'A',types=selectedValues('cooking');return (types.length?types:['A']).map(t=>q1+raw+adventure+t)}
function comboResult(){const codes=comboCodes(),entries=codes.map(c=>foodCombos[c]).filter(Boolean),menus=[...new Set(entries.flatMap(e=>e[0]))];return{codes,menus,reasons:entries.map(e=>e[1])}}
function updateComboPreview(){const {codes,menus,reasons}=comboResult();$('#food-combo-preview').innerHTML=`<b>${codes.join(' · ')} 조합</b><br>추천 음식: ${menus.join(', ')}<br><small>${[...new Set(reasons)].join(' ')}</small>`}


function prepareQuiz(){state.categories=selectedValues('category');if(!state.categories.length){$('#category-error').hidden=false;return}$('#category-error').hidden=true;$('#food-block').hidden=!state.categories.includes('food');$('#mbti-block').hidden=!state.categories.some(c=>c==='attraction'||c==='activity');showScreen('quiz');syncWeather();updateComboPreview()}


function placeScore(place,category){let score=45+(hash(place.name+JSON.stringify(state.answers))%18);const mbti=state.answers.mbti;if(place.mbtiMatches?.includes(mbti))score+=32;else if(place.mbtiMatches?.length)score+=Math.max(...place.mbtiMatches.map(t=>[...t].filter((x,i)=>x===mbti[i]).length))*6;if(place.area===state.answers.location)score+=15;if(state.answers.weather==='비'&&place.tags?.includes('실내'))score+=25;return Math.min(98,score)}
function isOutdoorUnsafe(place){const text=`${place.name} ${place.category} ${(place.tags||[]).join(' ')}`;return /서핑|요트|해수욕장|해양스포츠|수상|패들|카약|해안산책|스카이워크|공원|전망대/.test(text)&&!place.tags?.includes('실내')}
function normalizePlace(p,service){return{...p,service,area:p.area||state.answers.location,tags:p.tags||[],displayTags:p.displayTags||p.tags?.slice(0,3)||[],score:placeScore(p,service),description:p.description||`${state.answers.location}에서 즐기기 좋은 부산 추천 장소예요.`}}
function menuKey(value){return String(value).replace(/\([^)]*\)|\/|·|\s/g,'').replace('꼼장어','곰장어').replace('모둠회','회').replace('생선회','회')}
function menuMatch(menu,target){const a=menuKey(menu),b=menuKey(target);return a.includes(b)||b.includes(a)||(a.includes('회')&&b.includes('회'))||(a.includes('국밥')&&b.in…476 tokens truncated…'attraction')source=indoorFallback.map(p=>normalizePlace(p,'attraction'));else if(category==='activity')source=source.filter(p=>/아쿠아리움|박물관|미술관|실내/.test(`${p.name} ${p.category}`));else source=source.filter(p=>!isOutdoorUnsafe(p))}return source}
function uniquePlaces(items){const seen=new Set();return items.filter(p=>{const key=p.name.trim().toLowerCase();if(seen.has(key))return false;seen.add(key);return true})}
function buildRecommendations(){const all=state.categories.flatMap(category=>{const source=sourceFor(category),local=source.filter(p=>!p.area||p.area===state.answers.location),pool=local.length>=5?local:source;return shuffleRank(uniquePlaces(pool),`${JSON.stringify(state.answers)}-${state.refresh[category]||0}`).sort((a,b)=>(b.score||0)-(a.score||0)).slice(0,6).map(p=>({...p,service:category,id:`${category}-${hash(p.name)}`}))});state.recommendations=uniquePlaces(all);state.selected.clear()}


function categorySuggestion(){const total=suggestedCount(Number(state.answers.duration)),count=state.categories.length,base=Math.floor(total/count),rest=total%count;return Object.fromEntries(state.categories.map((c,i)=>[c,base+(i<rest?1:0)]))}
function renderSummary(){const sug=categorySuggestion();$('#count-guide').innerHTML=`⏱ 여행 가능 시간은 <b>${state.answers.duration}시간</b>이에요. 약 2시간당 한 장소를 기준으로 총 <b>${suggestedCount(Number(state.answers.duration))}곳</b>을 권장해요.<br>${state.categories.map(c=>`${categoryMeta[c][0]} ${categoryMeta[c][1]} ${sug[c]}곳`).join(' · ')}`}
function placeImage(p){return`https://tse2.mm.bing.net/th?q=${encodeURIComponent(`부산 ${p.area||''} ${p.name}`)}&w=800&h=450&c=7&rs=1&p=0`}
function mapSearch(place){return`https://map.kakao.com/link/search/${encodeURIComponent(`부산 ${place.area||state.answers.location} ${place.menu||place.name.replace(' 맛집','')}`)}`}
function naverPlaceSearch(place){return`https://map.naver.com/p/search/${encodeURIComponent(`부산 ${place.name} ${place.menu||''}`)}`}
function renderRecommendations(){const sug=categorySuggestion();$('#recommendations').innerHTML=state.categories.map(c=>{const places=state.recommendations.filter(p=>p.service===c);return`<section class="recommend-section"><div class="recommend-head"><h3>${categoryMeta[c][0]} ${categoryMeta[c][1]} <small>권장 ${sug[c]}곳 · 자유 선택</small></h3><button type="button" class="refresh" data-refresh="${c}">↻ 이 카테고리 새로 추천</button></div><div class="card-grid">${places.map(p=>`<article class="place-card ${state.selected.has(p.id)?'selected':''}" data-id="${p.id}"><img class="card-photo" src="${placeImage(p)}" alt="${p.name} 실제 장소 사진" loading="lazy" onerror="this.style.display='none'"><div class="card-top ${c}"><b>${p.name}</b><span class="score">${c==='food'?p.mealTime:`취향 ${p.score}%`}</span></div><div class="card-body"><strong>${p.category}</strong><p>${p.description}</p><div class="tags">${(p.displayTags||[]).slice(0,3).map(t=>`<i>${t}</i>`).join('')}</div><p><a href="${c==='food'?naverPlaceSearch(p):mapSearch(p)}" target="_blank" rel="noopener">${c==='food'?'네이버지도에서 매장·메뉴 확인':'카카오맵에서 확인'} ↗</a></p></div><button type="button" class="select-place" data-select="${p.id}" aria-pressed="${state.selected.has(p.id)}">${state.selected.has(p.id)?'✓ 선택됨':'이 장소 선택'}</button></article>`).join('')}</div></section>`}).join('');bindCards()}
function bindCards(){$$('[data-select]').forEach(b=>b.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();const id=b.dataset.select;state.selected.has(id)?state.selected.delete(id):state.selected.add(id);renderRecommendations();fillCustomPool(state.recommendations.filter(p=>state.selected.has(p.id)));toast(state.selected.has(id)?'장소를 선택했어요':'장소 선택을 해제했어요')}));$$('[data-refresh]').forEach(b=>b.addEventListener('click',event=>{event.preventDefault();const category=b.dataset.refresh;state.refresh[category]=(state.refresh[category]||0)+1;const keep=state.recommendations.filter(p=>p.service!==category),fresh=uniquePlaces(sourceFor(category)),pool=shuffleRank(fresh,`${JSON.stringify(state.answers)}-${state.refresh[category]}`).slice(0,6).map(p=>({...p,service:category,id:`${category}-${hash(p.name)}`}));state.recommendations=uniquePlaces([...keep,...pool]);[...state.selected].forEach(id=>{if(id.startsWith(`${category}-`))state.selected.delete(id)});renderRecommendations();fillCustomPool(state.recommendations.filter(p=>state.selected.has(p.id)));toast('새로운 장소를 추천했어요')}))}


function submitQuiz(e){e.preventDefault();updateMbti();const fd=new FormData(e.currentTarget);state.answers={language:selectedValue('language'),companion:selectedValue('companion'),age:selectedValue('age'),mbti:$('#mbti-value').value,startTime:fd.get('startTime'),endTime:fd.get('endTime'),duration:((timeMinutes(fd.get('endTime'))-timeMinutes(fd.get('startTime')))/60).toFixed(1).replace('.0',''),location:fd.get('location'),date:fd.get('date'),weather:fd.get('weather'),mealTimes:fd.getAll('mealTime'),spice:fd.get('spice'),raw:fd.get('raw'),adventure:fd.get('adventure'),cooking:fd.getAll('cooking')};if(state.categories.includes('food')&&!state.answers.mealTimes.length){toast('식사 시간을 하나 이상 선택해 주세요');return}buildRecommendations();renderSummary();renderRecommendations();buildCustomSlots();showScreen('result')}


function mealWindow(place){return{아침:[420,480,450],점심:[720,780,750],저녁:[1110,1200,1140]}[place.mealTime]||null}
function buildAiRoute(){let chosen=uniquePlaces(state.recommendations.filter(p=>state.selected.has(p.id)));if(!chosen.length){toast('장소를 하나 이상 선택해 주세요');return}const start=timeMinutes(state.answers.startTime),end=timeMinutes(state.answers.endTime),mealSeen=new Set(),meals=chosen.filter(p=>p.service==='food'&&!mealSeen.has(p.mealTime)&&mealSeen.add(p.mealTime)),others=chosen.filter(p=>p.service!=='food'),events=[];meals.forEach(p=>{const w=mealWindow(p);if(w&&start<=w[1]&&end>=w[0]){const t=Math.max(start,Math.min(end,w[2]));events.push({place:p,time:t,meal:true})}});let cursor=start;others.forEach(p=>{while(events.some(e=>Math.abs(e.time-cursor)<75))cursor+=90;if(cursor<=end)events.push({place:p,time:cursor,meal:false});cursor+=120});events.sort((a,b)=>a.time-b.time);state.route=events;renderRoute(events);renderRouteMap(events.map(e=>e.place));$('#route-section').hidden=false;$('#route-section').scrollIntoView({behavior:'smooth'});fillCustomPool(chosen)}
function renderRoute(events){$('#route-list').innerHTML=events.map((e,i)=>`<div class="route-stop ${e.meal?'meal':''}"><time>${formatTime(e.time)}</time><b>${i+1}. ${e.place.name}</b><small>${e.meal?`${e.place.mealTime} 권장 시간 반영`:'약 2시간 체류 기준'}</small></div>`).join('')||'<p>여행 가능 시간 안에 배치할 장소가 없습니다.</p>'}


function loadKakaoMaps(key){if(window.kakao?.maps?.services)return Promise.resolve();return new Promise((resolve,reject)=>{document.querySelector('#kakao-sdk')?.remove();const s=document.createElement('script');s.id='kakao-sdk';s.src=`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(key)}&libraries=services&autoload=false`;s.onload=()=>kakao.maps.load(resolve);s.onerror=reject;document.head.appendChild(s)})}
function kakaoSearch(place){return new Promise(resolve=>{new kakao.maps.services.Places().keywordSearch(`부산 ${place.area||state.answers.location} ${place.menu||place.name.replace(' 맛집','')}`,(r,status)=>resolve(status===kakao.maps.services.Status.OK?r[0]:null))})}
async function openMapSearch(place,index){try{const query=encodeURIComponent(`${place.name} 부산 ${place.area||''}`),data=await fetch(`https://photon.komoot.io/api/?q=${query}&limit=1`).then(r=>r.ok?r.json():Promise.reject()),coordinates=data.features?.[0]?.geometry?.coordinates;if(coordinates)return[coordinates[1],coordinates[0]]}catch{}const base=districtCoordinates[place.area]||districtCoordinates[state.answers.location]||[35.1796,129.0756],angle=index*2.2;return[base[0]+Math.sin(angle)*.006,base[1]+Math.cos(angle)*.006]}
async function renderOpenRouteMap(places){const el=$('#route-map');el.innerHTML='<div class="map-empty">실제 지도에서 장소를 찾는 중…</div>';if(!window.L){el.innerHTML='<div class="map-empty"><b>지도를 불러오지 못했어요.</b><br>아래 카카오맵 링크에서 장소를 확인해 주세요.</div>';return}const points=await Promise.all(places.map(openMapSearch));el.innerHTML='';if(window.openRouteLeaflet)window.openRouteLeaflet.remove();const map=window.openRouteLeaflet=L.map(el,{scrollWheelZoom:false}),bounds=L.latLngBounds(points);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);points.forEach((point,i)=>L.marker(point).addTo(map).bindTooltip(`${i+1}. ${places[i].name}`,{permanent:true,direction:'top',className:'route-label'}));if(points.length>1)L.polyline(points,{color:'#0786a3',weight:6,opacity:.85}).addTo(map);map.fitBounds(bounds.pad(.22),{maxZoom:14});setTimeout(()=>map.invalidateSize(),50)}
async function renderRouteMap(places){const el=$('#route-map');if(!places.length)return;$('#kakao-route-link').href=mapSearch(places[0]);const key=localStorage.getItem('kakaoMapsJavaScriptKey')||'29e02f8edac4711fad139af461b7c818';el.innerHTML='<div class="map-empty">카카오맵을 불러오는 중…</div>';try{await loadKakaoMaps(key);const found=(await Promise.all(places.map(async place=>({place,result:await kakaoSearch(place)})))).filter(x=>x.result);if(!found.length)throw Error();el.innerHTML='';const map=new kakao.maps.Map(el,{center:new kakao.maps.LatLng(found[0].result.y,found[0].result.x),level:7}),bounds=new kakao.maps.LatLngBounds(),path=[];found.forEach(({place,result},i)=>{const pos=new kakao.maps.LatLng(result.y,result.x);bounds.extend(pos);path.push(pos);new kakao.maps.Marker({map,position:pos,title:`${i+1}. ${place.name}`});new kakao.maps.CustomOverlay({map,position:pos,yAnchor:2,content:`<span style="background:#082d4e;color:white;padding:5px 8px;border-radius:8px;font:bold 12px sans-serif">${i+1}. ${place.name}</span>`})});if(path.length>1)new kakao.maps.Polyline({map,path,strokeColor:'#0786a3',strokeWeight:6,strokeOpacity:.85});map.setBounds(bounds,45,45,45,45);const last=found.at(-1).result;$('#kakao-route-link').href=`https://map.kakao.com/link/to/${encodeURIComponent(last.place_name)},${last.y},${last.x}`}catch{toast('카카오 키 연결에 실패해 공개 지도로 표시했어요');await renderOpenRouteMap(places)}}


function buildCustomSlots(){const start=timeMinutes(state.answers.startTime),end=timeMinutes(state.answers.endTime),count=suggestedCount(Number(state.answers.duration));state.custom=Array.from({length:count},(_,i)=>({time:Math.min(start+i*120,end),place:null}));renderCustomSlots();fillCustomPool([])}
function addPlaceToCustom(id){const place=state.recommendations.find(p=>p.id===id);if(!place)return;let slot=state.custom.find(s=>!s.place);if(!slot){state.custom.push({time:Math.min(timeMinutes(state.answers.endTime),timeMinutes(state.answers.startTime)+state.custom.length*120),place:null});slot=state.custom.at(-1)}slot.place=place;renderCustomSlots();toast(`${place.name}을(를) 일정에 추가했어요`)}
function fillCustomPool(chosen){const places=chosen.length?chosen:state.recommendations;$('#custom-pool').innerHTML=places.map(p=>`<div class="drag-place ${p.service}" draggable="true" data-drag-id="${p.id}"><span>${p.name}</span><button type="button" data-custom-add="${p.id}">＋ 일정에 추가</button></div>`).join('');$$('[data-drag-id]').forEach(x=>x.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',x.dataset.dragId)));$$('[data-custom-add]').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();addPlaceToCustom(button.dataset.customAdd)}))}
function renderCustomSlots(){$('#custom-slots').innerHTML=state.custom.map((s,i)=>`<div class="custom-slot ${s.place?s.place.service:''}" data-slot="${i}"><input class="slot-time" type="time" value="${formatTime(s.time)}" data-slot-time="${i}"><span class="slot-place">${s.place?s.place.name:'여기에 장소를 끌어다 놓으세요'}</span>${s.place?`<button class="slot-remove" data-slot-remove="${i}">장소 빼기</button>`:''}<button class="slot-delete" data-slot-delete="${i}">블록 삭제</button></div>`).join('');$$('.custom-slot').forEach(slot=>{slot.ondragover=e=>{e.preventDefault();slot.classList.add('drag-over')};slot.ondragleave=()=>slot.classList.remove('drag-over');slot.ondrop=e=>{e.preventDefault();slot.classList.remove('drag-over');state.custom[Number(slot.dataset.slot)].place=state.recommendations.find(p=>p.id===e.dataTransfer.getData('text/plain'));renderCustomSlots()}});$$('[data-slot-remove]').forEach(b=>b.onclick=()=>{state.custom[Number(b.dataset.slotRemove)].place=null;renderCustomSlots()});$$('[data-slot-delete]').forEach(b=>b.onclick=()=>{state.custom.splice(Number(b.dataset.slotDelete),1);renderCustomSlots()});$$('[data-slot-time]').forEach(i=>i.onchange=()=>state.custom[Number(i.dataset.slotTime)].time=timeMinutes(i.value))}


function init(){initSlider();initMbti();initClock();const today=new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().slice(0,10);$('#date').value=today;const spiceNames=['0단계 · 튀김우동','1단계 · 안성탕면','2단계 · 신라면','3단계 · 불닭볶음면'];const updateSpice=()=>{const v=Number($('#spice-range').value),size=26+v*7;$('#spice-range').style.setProperty('--pepper-size',`${size}px`);$('.spice-current').style.setProperty('--pepper-size',`${size}px`);$('#spice-current-text').textContent=spiceNames[v];updateComboPreview()};$('#spice-range').addEventListener('input',updateSpice);updateSpice();$('#start-button').onclick=prepareQuiz;$('#quiz-form').onsubmit=submitQuiz;$$('[data-screen]').forEach(b=>b.onclick=()=>showScreen(b.dataset.screen));$$('[data-mbti-tab]').forEach(b=>b.onclick=()=>{$$('[data-mbti-tab]').forEach(x=>x.classList.toggle('active',x===b));$('#mbti-direct').hidden=b.dataset.mbtiTab!=='direct';$('#mbti-quiz').hidden=b.dataset.mbtiTab!=='quiz';updateMbti()});$('#mbti-block').addEventListener('change',updateMbti);$('#food-block').addEventListener('change',updateComboPreview);$('#location').onchange=syncWeather;$('#date').onchange=syncWeather;$('#build-route').onclick=buildAiRoute;$('#add-custom-slot').onclick=()=>{const last=state.custom.at(-1)?.time??timeMinutes(state.answers.startTime);state.custom.push({time:Math.min(last+120,timeMinutes(state.answers.endTime)),place:null});renderCustomSlots()};$('#home-button').onclick=()=>{showScreen('start');window.scrollTo({top:0,behavior:'smooth'})};$('#map-settings').onclick=()=>{const key=prompt('카카오디벨로퍼스 JavaScript 키를 입력해 주세요.',localStorage.getItem('kakaoMapsJavaScriptKey')||'');if(key===null)return;key.trim()?localStorage.setItem('kakaoMapsJavaScriptKey',key.trim()):localStorage.removeItem('kakaoMapsJavaScriptKey');renderRouteMap(state.route.map(e=>e.place))};$('#render-custom-map').onclick=()=>{const items=state.custom.filter(s=>s.place).sort((a,b)=>a.time-b.time);if(!items.length)return toast('사용자 지정 로드맵에 장소를 넣어 주세요');state.route=items;renderRoute(items.map(x=>({place:x.place,time:x.time,meal:x.place.service==='food'})));renderRouteMap(items.map(x=>x.place));$('#route-section').hidden=false;$('#route-section').scrollIntoView({behavior:'smooth'})};syncWeather()}
const savedPlanKey='busanTripSavedPlansV1';
function savedPlans(){try{return JSON.parse(localStorage.getItem(savedPlanKey)||'[]')}catch{return[]}}
function makePlanImage(title,events){const canvas=document.createElement('canvas'),width=900,row=120,height=Math.max(760,330+events.length*row);canvas.width=width;canvas.height=height;const c=canvas.getContext('2d');c.fillStyle='#f2fbf9';c.fillRect(0,0,width,height);c.fillStyle='#082d4e';c.fillRect(0,0,width,210);c.fillStyle='#fff';c.font='800 34px sans-serif';c.fillText('BUSAN TRIP',55,65);c.font='900 48px sans-serif';c.fillText(title,55,130);c.font='500 24px sans-serif';c.fillText(`${state.answers.date||''} · ${state.answers.location||'부산'}`,55,175);events.forEach((event,i)=>{const y=270+i*row,service=event.place?.service||'attraction',color={food:'#ef7b3d',cafe:'#9366bb',activity:'#4a9d64',attraction:'#168ac0'}[service];c.fillStyle=color;c.beginPath();c.roundRect(45,y-35,810,88,18);c.fill();c.fillStyle='#fff';c.font='900 27px sans-serif';c.fillText(formatTime(event.time),70,y+2);c.font='800 27px sans-serif';c.fillText(`${i+1}. ${event.place.name}`,210,y+2);c.font='500 19px sans-serif';c.fillText(event.place.category||categoryMeta[service]?.[1]||'',210,y+34)});c.fillStyle='#627485';c.font='500 18px sans-serif';c.fillText('마? 어데 가노 머 먹노? · 저장된 여행 일정',55,height-45);return canvas.toDataURL('image/jpeg',.88)}
function renderSavedPlans(){const plans=savedPlans(),list=$('#saved-plan-list');list.innerHTML=plans.length?plans.map(p=>`<article class="saved-plan-card" data-saved-id="${p.id}"><img src="${p.image}" alt="${p.title} 일정표 미리보기"><div><b>${p.title}</b><small>${p.date||'날짜 미정'} · ${p.count}곳</small><button type="button" data-delete-saved="${p.id}">삭제</button></div></article>`).join(''):'<p class="saved-empty">아직 저장한 일정표가 없어요.</p>';$$('.saved-plan-card img').forEach(img=>img.onclick=()=>openSavedPlan(img.closest('[data-saved-id]').dataset.savedId));$$('[data-delete-saved]').forEach(button=>button.onclick=e=>{e.stopPropagation();localStorage.setItem(savedPlanKey,JSON.stringify(plans.filter(p=>p.id!==button.dataset.deleteSaved)));renderSavedPlans()})}
function openSavedPlan(id){const plan=savedPlans().find(p=>p.id===id);if(!plan)return;$('#saved-plan-image').src=plan.image;$('#download-saved-plan').href=plan.image;$('#download-saved-plan').download=`${plan.title.replace(/\s/g,'-')}.jpg`;$('#saved-plan-dialog').showModal()}
function savePlan(title,events){if(!events.length)return toast('저장할 일정이 없어요');const plans=savedPlans(),plan={id:`${Date.now()}`,title,date:state.answers.date,count:events.length,image:makePlanImage(title,events)};plans.unshift(plan);try{localStorage.setItem(savedPlanKey,JSON.stringify(plans.slice(0,8)));renderSavedPlans();toast('일정표를 사진으로 저장했어요')}catch{toast('저장 공간이 부족해요. 기존 일정표를 삭제해 주세요')}}
function initHourTicks(){$('.hour-ticks').innerHTML=Array.from({length:24},(_,h)=>`<i class="hour-tick ${h%6===0?'major':''}" style="transform:rotate(${h*15}deg)"></i>`).join('')}


init();
initHourTicks();
renderSavedPlans();
$('#save-ai-route').onclick=()=>savePlan('AI 추천 로드맵',state.route);
$('#save-custom-route').onclick=()=>savePlan('사용자 지정 로드맵',state.custom.filter(s=>s.place).sort((a,b)=>a.time-b.time));
$('#close-saved-plan').onclick=()=>$('#saved-plan-dialog').close();
$('#kakao-key-input').value=localStorage.getItem('kakaoMapsJavaScriptKey')||'';
$('#map-settings').onclick=()=>{$('#kakao-key-panel').classList.toggle('open');if($('#kakao-key-panel').classList.contains('open'))$('#kakao-key-input').focus()};
$('#save-kakao-key').onclick=()=>{const key=$('#kakao-key-input').value.trim();if(!key)return toast('JavaScript 키를 입력해 주세요');localStorage.setItem('kakaoMapsJavaScriptKey',key);$('#kakao-key-panel').classList.remove('open');toast('카카오맵 키를 저장했어요');renderRouteMap(state.route.map(e=>e.place))};
$('#spice-range').addEventListener('input',event=>{$('#spice-current-text').textContent=['0단계 · 튀김우동','1단계 · 안성탕면','2단계 · 신라면','3단계 · 불닭볶음면'][Math.round(Number(event.target.value))]});

