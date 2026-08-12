const legacyAttractionData = [
  {
    name: "광안리해수욕장",
    category: "바다 · 야경",
    symbol: "〰",
    description: "광안대교와 부산의 밤바다를 한눈에 즐길 수 있는 활기찬 해변이에요.",
    review: "해 질 무렵부터 야경까지 분위기가 정말 좋아요.",
    tags: ["외향", "감성", "저녁", "맑음", "비", "수영구", "바다"],
    displayTags: ["야경 명소", "산책", "사진"],
    duration: "약 1시간 30분",
    gradient: "linear-gradient(145deg, #43b5cb, #0d6f9c)",
  },
  {
    name: "해운대해수욕장",
    category: "바다 · 도심",
    symbol: "☀",
    description: "부산을 대표하는 넓은 백사장과 도심의 즐길 거리가 함께 있는 명소예요.",
    review: "처음 부산에 왔다면 꼭 들를 만한 대표 장소예요.",
    tags: ["외향", "현실", "오전", "오후", "맑음", "해운대", "바다"],
    displayTags: ["부산 대표", "대중교통", "바다"],
    duration: "약 1시간 30분",
    gradient: "linear-gradient(145deg, #74d3dc, #1684ab)",
  },
  {
    name: "감천문화마을",
    category: "마을 · 예술",
    symbol: "▦",
    description: "알록달록한 집과 골목 예술이 어우러진 부산의 대표 문화 마을이에요.",
    review: "골목마다 작은 작품이 있어 천천히 걷기 좋아요.",
    tags: ["직관", "감성", "오전", "오후", "맑음", "흐림", "사하구", "문화"],
    displayTags: ["골목 여행", "예술", "전망"],
    duration: "약 2시간",
    gradient: "linear-gradient(145deg, #ffb27b, #ed7271)",
  },
  {
    name: "흰여울문화마을",
    category: "마을 · 바다",
    symbol: "⌂",
    description: "하얀 골목 아래로 영도 바다가 펼쳐지는 조용하고 감성적인 산책길이에요.",
    review: "바다를 보며 골목을 걷는 시간이 영화처럼 느껴져요.",
    tags: ["내향", "직관", "감성", "오후", "맑음", "흐림", "영도", "문화", "바다"],
    displayTags: ["감성 사진", "산책", "바다 전망"],
    duration: "약 1시간 30분",
    gradient: "linear-gradient(145deg, #76c9d1, #557fb1)",
  },
  {
    name: "태종대",
    category: "자연 · 절경",
    symbol: "▲",
    description: "울창한 숲과 바다 절벽을 함께 만나는 영도의 웅장한 자연 명소예요.",
    review: "전망대에서 보는 탁 트인 바다가 시원하고 멋져요.",
    tags: ["내향", "현실", "사고", "오전", "오후", "맑음", "영도", "자연"],
    displayTags: ["자연", "전망대", "걷기"],
    duration: "약 2시간 30분",
    gradient: "linear-gradient(145deg, #4ba787, #1d6c76)",
  },
  {
    name: "송도해상케이블카",
    category: "체험 · 전망",
    symbol: "◇",
    description: "바다 위를 가로지르며 송도 해안과 도시 풍경을 감상하는 특별한 체험이에요.",
    review: "바닥이 보이는 칸은 짜릿하고 풍경도 정말 멋져요.",
    tags: ["외향", "직관", "사고", "오후", "맑음", "흐림", "서구", "체험"],
    displayTags: ["이색 체험", "전망", "가족"],
    duration: "약 1시간 30분",
    gradient: "linear-gradient(145deg, #79bcd9, #4964a3)",
  },
  {
    name: "해동용궁사",
    category: "사찰 · 바다",
    symbol: "♢",
    description: "푸른 바다 바로 옆에 자리한 아름다운 사찰에서 특별한 부산 풍경을 만나요.",
    review: "이른 아침에 가면 비교적 조용하게 바다와 사찰을 볼 수 있어요.",
    tags: ["내향", "감성", "계획", "오전", "맑음", "흐림", "기장", "문화"],
    displayTags: ["전통 문화", "바다 전망", "아침"],
    duration: "약 1시간 30분",
    gradient: "linear-gradient(145deg, #e69a71, #b85360)",
  },
  {
    name: "국립해양박물관",
    category: "박물관 · 실내",
    symbol: "○",
    description: "한국의 바다 역사와 해양 생물을 편안한 실내에서 즐기는 박물관이에요.",
    review: "비 오는 날에도 알차고 편하게 둘러볼 수 있어요.",
    tags: ["내향", "사고", "계획", "오전", "오후", "비", "영도", "실내"],
    displayTags: ["비 오는 날", "실내", "해양 문화"],
    duration: "약 2시간",
    gradient: "linear-gradient(145deg, #5bbbc1, #315e8c)",
  },
];

const attractionData = window.BUSAN_ATTRACTIONS || legacyAttractionData;

const legacyFoodData = [
  {
    name: "본전돼지국밥",
    category: "돼지국밥",
    symbol: "♨",
    description: "부산역 근처에서 진한 국물과 부드러운 고기를 맛볼 수 있는 대표 국밥집이에요.",
    review: "부산에 도착하자마자 든든한 한 끼로 좋아요.",
    tags: ["한식", "국물", "고기", "부산역", "아침", "점심"],
    displayTags: ["부산 향토 음식", "든든한 식사", "부산역"],
    duration: "식사 약 50분",
    gradient: "linear-gradient(145deg, #f2b56d, #d36d46)",
  },
  {
    name: "해운대암소갈비집",
    category: "고기 · 갈비",
    symbol: "♨",
    description: "해운대에서 달콤하고 부드러운 한우 갈비를 즐기는 오랜 부산 대표 맛집이에요.",
    review: "특별한 날 부산식 양념갈비를 경험하기 좋아요.",
    tags: ["한식", "고기", "해운대", "점심", "저녁"],
    displayTags: ["한우 갈비", "해운대", "특별한 식사"],
    duration: "식사 약 1시간 20분",
    gradient: "linear-gradient(145deg, #df9770, #a64c43)",
  },
  {
    name: "수변최고돼지국밥 민락본점",
    category: "돼지국밥",
    symbol: "♨",
    description: "진하고 깔끔한 국물로 사랑받는 민락동의 부산식 돼지국밥 맛집이에요.",
    review: "광안리 여행 전후에 따뜻하게 먹기 좋은 곳이에요.",
    tags: ["한식", "국물", "고기", "수영구", "아침", "점심", "저녁"],
    displayTags: ["국물 음식", "민락동", "혼밥"],
    duration: "식사 약 50분",
    gradient: "linear-gradient(145deg, #eda55e, #bd5d45)",
  },
  {
    name: "할매가야밀면",
    category: "밀면",
    symbol: "≋",
    description: "시원한 육수와 쫄깃한 면으로 부산의 별미인 밀면을 맛볼 수 있는 곳이에요.",
    review: "더운 날 가볍고 시원하게 먹기 좋은 부산다운 한 끼예요.",
    tags: ["면", "한식", "서면", "점심", "저녁"],
    displayTags: ["부산 별미", "시원한 육수", "가벼운 식사"],
    duration: "식사 약 45분",
    gradient: "linear-gradient(145deg, #63c7b3, #2f8e8e)",
  },
  {
    name: "금수복국 해운대본점",
    category: "해산물 · 복국",
    symbol: "○",
    description: "담백하고 맑은 복국으로 부산 바다의 맛을 편안하게 즐길 수 있는 식당이에요.",
    review: "자극적이지 않고 시원한 국물이 아침 식사로도 좋아요.",
    tags: ["해산물", "국물", "한식", "해운대", "아침", "점심"],
    displayTags: ["복어요리", "맑은 국물", "해운대"],
    duration: "식사 약 1시간",
    gradient: "linear-gradient(145deg, #57bcc7, #326d9e)",
  },
  {
    name: "마가만두",
    category: "중식 · 만두",
    symbol: "◒",
    description: "부산역 차이나타운에서 바삭하고 촉촉한 중국식 만두를 맛볼 수 있는 곳이에요.",
    review: "여럿이 다양한 만두를 나누어 먹기 좋아요.",
    tags: ["중식", "면", "부산역", "점심", "저녁"],
    displayTags: ["차이나타운", "만두", "나눠 먹기"],
    duration: "식사 약 1시간",
    gradient: "linear-gradient(145deg, #ef9574, #c64f54)",
  },
  {
    name: "이재모피자 부산본점",
    category: "양식 · 피자",
    symbol: "△",
    description: "풍부한 치즈와 푸짐한 토핑으로 오랫동안 사랑받는 부산의 유명 피자집이에요.",
    review: "익숙한 음식이 생각날 때 편하고 맛있게 즐길 수 있어요.",
    tags: ["양식", "치즈", "남포동", "점심", "저녁"],
    displayTags: ["치즈", "남포동", "가족 식사"],
    duration: "식사 약 1시간 10분",
    gradient: "linear-gradient(145deg, #f1b04e, #df6f48)",
  },
  {
    name: "부평깡통시장 먹자골목",
    category: "길거리 음식",
    symbol: "◎",
    description: "떡볶이부터 씨앗호떡까지 여러 부산 길거리 음식을 한자리에서 경험해요.",
    review: "조금씩 여러 음식을 맛보며 시장 구경까지 하기 좋아요.",
    tags: ["길거리 음식", "한식", "남포동", "저녁"],
    displayTags: ["시장", "간식", "여러 메뉴"],
    duration: "약 1시간 20분",
    gradient: "linear-gradient(145deg, #ffb160, #ed6654)",
  },
];

const foodData = window.BUSAN_FOODS || legacyFoodData;
const cafeData = window.BUSAN_CAFES || [];
const activityData = window.BUSAN_ACTIVITIES || [];
const personalizedData = window.BUSAN_PERSONALIZED || [];

const verifiedPlaceCatalog = {
  attraction: [
    ["해운대구", "부산엑스더스카이"], ["해운대구", "해운대해수욕장"], ["해운대구", "동백섬"],
    ["수영구", "광안리해수욕장"], ["수영구", "F1963"], ["수영구", "수영사적공원"],
    ["영도구", "태종대유원지"], ["영도구", "흰여울문화마을"], ["영도구", "국립해양박물관"],
    ["남구", "오륙도 스카이워크"], ["남구", "UN기념공원"], ["남구", "이기대수변공원"],
    ["사하구", "다대포해수욕장"], ["사하구", "감천문화마을"], ["사하구", "아미산전망대"],
    ["서구", "송도해수욕장"], ["서구", "송도용궁구름다리"], ["서구", "암남공원"],
    ["기장군", "해동용궁사"], ["기장군", "죽성드림세트장"], ["기장군", "오시리아 해안산책로"],
    ["강서구", "을숙도 철새공원"], ["강서구", "가덕도 연대봉"], ["강서구", "명지오션시티 해안산책로"]
  ],
  food: [
    ["해운대구", "해운대암소갈비집"], ["해운대구", "금수복국 해운대본점"], ["해운대구", "해운대원조할매국밥"],
    ["수영구", "언양불고기 부산집"], ["수영구", "수변최고돼지국밥 민락본점"], ["수영구", "톤쇼우 광안점"],
    ["영도구", "재기돼지국밥"], ["영도구", "도날드"], ["영도구", "왔다식당"],
    ["남구", "쌍둥이돼지국밥 본점"], ["남구", "내호냉면"], ["남구", "할매팥빙수단팥죽"],
    ["사하구", "영진돼지국밥 본점"], ["사하구", "하단끝집"], ["사하구", "복성반점"],
    ["서구", "몽실종가돼지국밥"], ["서구", "소문난주문진막국수"], ["서구", "사천해물탕"],
    ["기장군", "기장끝집"], ["기장군", "바릇식당"], ["기장군", "어보"],
    ["강서구", "오복미역 명지본점"], ["강서구", "명지첫집"], ["강서구", "합천일류돼지국밥 명지점"]
  ],
  cafe: [
    ["해운대구", "비비비당"], ["해운대구", "엣지993"], ["해운대구", "랑데자뷰 해운대점"],
    ["수영구", "별침대"], ["수영구", "차선책 광안리"], ["수영구", "컵앤컵"],
    ["영도구", "피아크"], ["영도구", "카페385"], ["영도구", "신기산업"],
    ["남구", "메그네이트"], ["남구", "카페 이정원"], ["남구", "딜라잇식스"],
    ["사하구", "투썸플레이스 다대포해변점"], ["사하구", "이터널선샤인"], ["사하구", "카페만디"],
    ["서구", "EL16.52"], ["서구", "카페베이스"], ["서구", "TCC 송도점"],
    ["기장군", "웨이브온 커피"], ["기장군", "칠암사계"], ["기장군", "오프오"],
    ["강서구", "포레스트3002"], ["강서구", "그랑독"], ["강서구", "카페진목"]
  ],
  activity: [
    ["해운대구", "해운대블루라인파크 미포정거장"], ["해운대구", "SEA LIFE 부산아쿠아리움"], ["해운대구", "클럽디오아시스"],
    ["수영구", "웨이브락 클라이밍 광안점"], ["수영구", "광안리해양레포츠센터"], ["수영구", "밀락더마켓"],
    ["영도구", "태종대 다누비열차"], ["영도구", "국립해양박물관"], ["영도구", "태종대 오션플라잉테마파크"],
    ["남구", "부산문화회관"], ["남구", "부산박물관"], ["남구", "국립일제강제동원역사관"],
    ["사하구", "낙동강하구에코센터"], ["사하구", "부산현대미술관"], ["사하구", "다대포 꿈의 낙조분수"],
    ["서구", "송도해상케이블카"], ["서구", "송도해양레포츠센터"], ["서구", "구덕문화공원"],
    ["기장군", "롯데월드 어드벤처 부산"], ["기장군", "스카이라인 루지 부산"], ["기장군", "국립부산과학관"],
    ["강서구", "렛츠런파크 부산경남"], ["강서구", "대저생태공원"], ["강서구", "맥도생태공원"]
  ]
};

function makeVerifiedPlace([area, name], service) {
  const categoryNames = { attraction: "볼거리", food: "맛집", cafe: "뷰&디저트", activity: "놀거리/체험" };
  const symbols = { attraction: "📍", food: "🍴", cafe: "☕", activity: "🏄" };
  const descriptions = {
    attraction: `${area}에서 실제로 방문할 수 있는 부산 대표 명소입니다.`,
    food: `${area}에서 고유 상호로 검색되는 실제 음식점입니다.`,
    cafe: `${area}에서 고유 상호로 검색되는 실제 카페입니다.`,
    activity: `${area}에서 실제로 이용할 수 있는 체험·문화 장소입니다.`,
  };
  const seed = hashText(`${area}-${name}-${service}`);
  return {
    area, name, service, category: categoryNames[service], symbol: symbols[service],
    description: descriptions[service], review: `카카오맵에서 상호와 위치를 바로 확인할 수 있어요.`,
    tags: [area, categoryNames[service]], displayTags: [area, "실제 장소", "카카오맵 검색"],
    mbti: [], rating: Number((4.2 + (seed % 8) / 10).toFixed(1)),
    gradient: "linear-gradient(145deg, #48b8cf, #136f9a)",
  };
}

const serviceConfig = {
  attraction: {
    title: "어떤 여행을 좋아하세요?",
    description: "성격과 현재 여행 상황을 알려주면 관광지 세 곳을 골라드려요.",
    resultTitle: "당신을 위한 부산 관광지 세 곳",
    resultDescription: "성격, 시간, 위치, 날씨를 함께 살펴 가장 잘 맞는 명소를 골랐어요.",
  },
  food: {
    title: "오늘은 무엇을 먹고 싶나요?",
    description: "식사 시간과 음식 취향을 고르면 부산 추천 메뉴 세 가지를 골라드려요.",
    resultTitle: "당신의 취향을 담은 부산 메뉴 세 가지",
    resultDescription: "좋아하는 음식과 먹지 못하는 조건을 반영해 메뉴를 골랐어요.",
  },
  cafe: {
    title: "어떤 부산 감성을 만나고 싶나요?",
    description: "위치와 여행 상황에 맞춰 오션뷰·감성 카페와 디저트를 추천해 드려요.",
    resultTitle: "당신을 위한 부산 뷰&디저트 세 곳",
    resultDescription: "오션뷰와 감성 키워드를 중심으로 부산다운 공간을 골랐어요.",
  },
  activity: {
    title: "부산에서 어떤 체험을 해볼까요?",
    description: "성격과 여행 상황에 맞춰 해양 레저와 체험 세 가지를 추천해 드려요.",
    resultTitle: "당신을 위한 부산 놀거리·체험 세 가지",
    resultDescription: "서핑, 요트, 케이블카, 공방 등 체험형 장소를 골랐어요.",
  },
};

const screens = {
  start: document.querySelector("#start-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen"),
};

const state = {
  service: "attraction",
  categories: ["attraction"],
  companion: "커플",
  age: "20대",
  language: "한국어",
  answers: {},
  recommendations: [],
};

const startButton = document.querySelector("#start-button");
const quizForm = document.querySelector("#quiz-form");
const dynamicFields = document.querySelector("#dynamic-fields");
const recommendationList = document.querySelector("#recommendation-list");
const routeSection = document.querySelector("#route-section");
const routeList = document.querySelector("#route-list");
const toast = document.querySelector("#toast");

function showScreen(screenName) {
  Object.entries(screens).forEach(([name, element]) => {
    const isTarget = name === screenName;
    element.hidden = !isTarget;
    element.classList.toggle("active", isTarget);
  });

  const stepNumber = { start: 1, quiz: 2, result: 3 }[screenName];
  document.querySelectorAll(".step").forEach((step, index) => {
    step.classList.toggle("active", index + 1 === stepNumber);
    step.classList.toggle("complete", index + 1 < stepNumber);
  });

  document.querySelector(".planner").scrollIntoView({ behavior: "smooth", block: "start" });
}

function getSelectedValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`)?.value || "";
}

function getSelectedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function getToday() {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - timezoneOffset).toISOString().slice(0, 10);
}

const mbtiQuestions = [
  ["여행지에 도착하면 가장 먼저 하고 싶은 것은?", "유명한 관광지 돌아다니기", "카페나 숙소에서 여유롭게 쉬기", "E", "I"],
  ["여행을 간다면 어떤 장소가 더 끌려?", "사람이 많고 활기찬 번화가", "조용하고 한적한 자연 속", "E", "I"],
  ["여행 계획은 어떻게 짜는 편이 좋아?", "시간대별로 꼼꼼하게 계획하기", "대략적인 장소만 정하고 즉흥적으로 움직이기", "J", "P"],
  ["관광지를 고른다면 무엇이 더 중요해?", "실제로 볼거리와 체험거리가 많은 곳", "분위기가 좋고 특별한 느낌이 드는 곳", "S", "N"],
  ["여행 중 더 좋아하는 활동은?", "맛집, 쇼핑, 체험 등 직접 즐기는 활동", "풍경 구경, 사진 찍기, 산책처럼 여유로운 활동", "S", "N"],
  ["여행 중 예상치 못한 일이 생긴다면?", "그 상황에 맞춰 바로 다른 계획을 세운다", "당황해서 원래 계획대로 하고 싶어진다", "P", "J"],
  ["여행지에서 사진을 찍는다면?", "유명한 포토스팟에서 인증샷을 남긴다", "우연히 발견한 예쁜 장소에서 찍는다", "S", "N"],
  ["어떤 여행지가 더 끌려?", "새로운 문화와 색다른 경험을 할 수 있는 곳", "익숙하고 편안하게 즐길 수 있는 곳", "N", "S"],
  ["여행에서 가장 중요하다고 생각하는 것은?", "재미있고 다양한 경험", "편안함과 좋은 분위기", "T", "F"],
  ["딱 하루만 관광할 수 있다면?", "최대한 많은 곳을 돌아다닌다", "한두 곳을 천천히 제대로 즐긴다", "E", "I"],
];

function renderPersonalityFields() {
  const directRows = [["I", "E"], ["S", "N"], ["T", "F"], ["J", "P"]];
  const mbtiLabels = { I: "내향형", E: "외향형", S: "관찰형", N: "직관형", T: "사고형", F: "감정형", J: "계획형", P: "탐구형" };
  return `
    <section class="mbti-section form-field full" aria-labelledby="mbti-heading">
      <div class="mbti-heading-row">
        <div>
          <span id="mbti-heading" class="form-label">성격 유형 <span class="required">*</span></span>
          <p>알고 있는 유형을 바로 입력하거나 10문항으로 간편하게 검사해 보세요.</p>
        </div>
        <output id="mbti-result" class="mbti-result" aria-live="polite">INFP</output>
      </div>
      <div class="mbti-mode-tabs" role="tablist" aria-label="성격 유형 입력 방법">
        <button class="mbti-mode-button active" type="button" role="tab" aria-selected="true" data-mbti-mode="direct">MBTI 바로 입력하기</button>
        <button class="mbti-mode-button" type="button" role="tab" aria-selected="false" data-mbti-mode="test">MBTI 간편 검사하기</button>
      </div>
      <div class="mbti-panel active" data-mbti-panel="direct" role="tabpanel">
        <p class="mbti-panel-guide">각 행에서 나와 가까운 성향을 하나씩 선택해 주세요.</p>
        <div class="mbti-direct-grid">
          ${directRows.map((pair, row) => pair.map((letter, column) => `
            <label class="mbti-letter-option">
              <input type="radio" name="mbti_${row}" value="${letter}" ${column === 0 ? "checked" : ""} />
              <span><b>${letter}</b><small>${mbtiLabels[letter]}</small></span>
            </label>`).join("")).join("")}
        </div>
      </div>
      <div class="mbti-panel" data-mbti-panel="test" role="tabpanel" hidden>
        <p class="mbti-panel-guide">각 질문에서 나와 더 가까운 답을 선택해 주세요.</p>
        <div class="mbti-question-list">
          ${mbtiQuestions.map((question, index) => `
            <fieldset class="mbti-question">
              <legend><span>${index + 1}</span>${question[0]}</legend>
              <div class="mbti-answer-grid">
                <label><input type="radio" name="mbti_q${index}" value="${question[3]}" checked /><span><b>A</b>${question[1]}</span></label>
                <label><input type="radio" name="mbti_q${index}" value="${question[4]}" /><span><b>B</b>${question[2]}</span></label>
              </div>
            </fieldset>`).join("")}
        </div>
      </div>
      <input id="mbti-value" type="hidden" name="mbti" value="INFP" />
    </section>`;
}

function renderTravelFields() {
  return `
    <section class="form-field full clock-range-field" aria-labelledby="clock-range-label">
      <span id="clock-range-label" class="form-label">여행 가능 시간 <span class="required">*</span></span>
      <div class="clock-range-layout">
        <div id="travel-clock" class="time-clock" role="group" aria-label="여행 시작 시간과 종료 시간 선택">
          <span class="clock-number n0">0</span><span class="clock-number n6">6</span><span class="clock-number n12">12</span><span class="clock-number n18">18</span>
          <button class="clock-hand start" type="button" data-clock-hand="start" aria-label="시작 시간 조절"></button>
          <button class="clock-hand end" type="button" data-clock-hand="end" aria-label="종료 시간 조절"></button>
        </div>
        <div class="clock-range-copy">
          <h4>두 바늘을 돌려 여행 시간을 정해 주세요</h4>
          <p>주황색 바늘은 시작, 파란색 바늘은 종료 시간입니다. 시계 위에서 원하는 시간을 드래그할 수 있어요.</p>
          <div class="clock-time-output"><span id="start-time-output">08:00</span><i>→</i><span id="end-time-output">20:00</span></div>
        </div>
      </div>
      <input id="start-time" type="hidden" name="startTime" value="8" />
      <input id="end-time" type="hidden" name="endTime" value="20" />
    </section>
    <div class="form-field">
      <label for="location">현재 위치 <span class="required">*</span></label>
      <select id="location" name="location" required>
        <option value="해운대구" selected>해운대구</option>
        <option value="수영구">수영구</option>
        <option value="영도구">영도구</option>
        <option value="남구">남구</option>
        <option value="사하구">사하구</option>
        <option value="서구">서구</option>
        <option value="기장군">기장군</option>
        <option value="강서구">강서구</option>
      </select>
    </div>
    <div class="form-field">
      <span class="form-label">여행지 날씨 <span class="required">자동 연동</span></span>
      <div class="weather-card" aria-live="polite"><span id="weather-icon" class="weather-icon">⛅</span><span class="weather-copy"><b id="weather-status">날씨를 불러오는 중…</b><span id="weather-detail">위치와 날짜를 기준으로 확인합니다.</span></span></div>
      <input id="weather" type="hidden" name="weather" value="확인 중" />
    </div>
    <div class="form-field">
      <label for="date">여행 날짜 <span class="required">*</span></label>
      <input id="date" name="date" type="date" value="${getToday()}" required />
    </div>
  `;
}

function renderTourFields() {
  return renderPersonalityFields() + renderTravelFields();
}

function renderPreference(name, title, options, defaultIndex = 0) {
  return `
    <div class="form-field food-preference">
      <span class="form-label">${title} <span class="required">*</span></span>
      <div class="option-pills food-option-pills">
        ${options.map((option, index) => `
          <label class="option-pill">
            <input type="radio" name="${name}" value="${option.value}" ${index === defaultIndex ? "checked" : ""} />
            <span>${option.label}</span>
          </label>`).join("")}
      </div>
    </div>`;
}

function renderFoodFields(includeLocation = false) {
  const locationField = includeLocation ? `
    <div class="form-field food-location-field">
      <label for="food-location">현재 위치 <span class="required">*</span></label>
      <select id="food-location" name="location" required>
        <option value="해운대구" selected>해운대구</option><option value="수영구">수영구</option><option value="영도구">영도구</option><option value="남구">남구</option>
        <option value="사하구">사하구</option><option value="서구">서구</option><option value="기장군">기장군</option><option value="강서구">강서구</option>
      </select>
    </div>` : "";
  return `
    <section class="food-preference-section form-field full">
      <div class="food-preference-heading">
        <span class="form-label">음식 취향 검사 <span class="required">*</span></span>
        <p>먹고 싶은 시간과 음식 취향을 알려주면 맞춤 메뉴를 골라드려요.</p>
      </div>
      <div class="food-preference-grid">
        ${locationField}
        ${renderPreference("mealTime", "식사 시간", [{ value: "점심", label: "점심" }, { value: "저녁", label: "저녁" }])}
        <div class="form-field food-preference spice-preference">
          <label for="spice-level">1. 어느 정도 맵기의 음식을 드실 수 있으신가요?</label>
          <div class="spice-slider-card">
            <div class="spice-value-row"><span>맵기 단계</span><output id="spice-output" for="spice-level">2</output></div>
            <input id="spice-level" name="spiceLevel" type="range" min="0" max="5" step="1" value="2" />
            <div class="spice-scale"><span>0 · 못 먹음</span><span>5 · 매우 매움</span></div>
          </div>
        </div>
        ${renderPreference("rawPreference", "2. 날것을 드실 수 있으신가요?", [
          { value: "날것", label: "A · 네" },
          { value: "날것 제외", label: "B · 아니오" },
        ], 1)}
        ${renderPreference("adventurePreference", "3. 한국에서만 즐길 수 있는 음식을 드셔보고 싶으신가요?", [
          { value: "한국 향토", label: "A · 네 (처음 보는 음식도 괜찮아요)" },
          { value: "도전 쉬움", label: "B · 도전하기 쉬운 음식을 먹고 싶어요" },
        ])}
        ${renderPreference("cookingPreference", "4. 어떤 음식 유형을 선호하시나요?", [
          { value: "볶음", label: "A · 볶음 음식" },
          { value: "구이", label: "B · 구운 음식" },
          { value: "국물", label: "C · 국물 음식" },
        ], 2)}
      </div>
    </section>`;
}

function renderAiRouteFields() {
  const tourFields = renderTourFields();
  const foodChoices = renderFoodFields();
  return tourFields + foodChoices;
}

const districtCoordinates = {
  "해운대구": [35.1631, 129.1635], "수영구": [35.1457, 129.1132], "영도구": [35.0912, 129.0680], "남구": [35.1366, 129.0844],
  "사하구": [35.1046, 128.9747], "서구": [35.0979, 129.0244], "기장군": [35.2445, 129.2223], "강서구": [35.2122, 128.9806],
};

function describeWeather(code) {
  if (code === 0) return ["맑음", "☀️"];
  if ([1, 2].includes(code)) return ["대체로 맑음", "🌤️"];
  if (code === 3) return ["흐림", "☁️"];
  if ([45, 48].includes(code)) return ["안개", "🌫️"];
  if ([51, 53, 55, 56, 57].includes(code)) return ["이슬비", "🌦️"];
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return ["비", "🌧️"];
  if ([71, 73, 75, 77, 85, 86].includes(code)) return ["눈", "🌨️"];
  if ([95, 96, 99].includes(code)) return ["뇌우", "⛈️"];
  return ["날씨 정보", "⛅"];
}

async function syncWeather() {
  const location = document.querySelector("#location")?.value;
  const date = document.querySelector("#date")?.value;
  const hidden = document.querySelector("#weather");
  const status = document.querySelector("#weather-status");
  const detail = document.querySelector("#weather-detail");
  const icon = document.querySelector("#weather-icon");
  if (!location || !date || !hidden || !status) return;
  const [latitude, longitude] = districtCoordinates[location];
  status.textContent = "날씨를 불러오는 중…";
  detail.textContent = `${location} · ${date}`;
  try {
    const params = new URLSearchParams({ latitude, longitude, daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max", timezone: "Asia/Seoul", forecast_days: "16" });
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!response.ok) throw new Error("weather request failed");
    const data = await response.json();
    const index = data.daily?.time?.indexOf(date) ?? -1;
    if (index < 0) throw new Error("date unavailable");
    const [label, symbol] = describeWeather(data.daily.weather_code[index]);
    const rain = data.daily.precipitation_probability_max[index];
    const low = Math.round(data.daily.temperature_2m_min[index]);
    const high = Math.round(data.daily.temperature_2m_max[index]);
    hidden.value = label.includes("비") || label.includes("뇌우") ? "비" : label.includes("흐림") || label.includes("안개") ? "흐림" : "맑음";
    status.textContent = `${symbol} ${label} · ${low}~${high}℃`;
    detail.textContent = `${location} ${date} · 강수확률 ${rain ?? 0}% · Open-Meteo 자동 예보`;
    icon.textContent = symbol;
  } catch (_) {
    hidden.value = "확인 불가";
    status.textContent = "예보를 확인할 수 없어요";
    detail.textContent = "오늘부터 16일 이내 날짜인지 인터넷 연결을 확인해 주세요.";
    icon.textContent = "📡";
  }
}

function initializeClockPicker() {
  const dial = document.querySelector("#travel-clock");
  const startInput = document.querySelector("#start-time");
  const endInput = document.querySelector("#end-time");
  if (!dial || !startInput || !endInput) return;
  let activeHand = "";
  const circularDistance = (a, b) => Math.min(Math.abs(a - b), 24 - Math.abs(a - b));
  const update = () => {
    const start = Number(startInput.value);
    const end = Number(endInput.value);
    dial.style.setProperty("--start-angle", `${start * 15}deg`);
    dial.style.setProperty("--end-angle", `${end * 15}deg`);
    dial.style.setProperty("--range-size", `${(end - start) * 15}deg`);
    document.querySelector("#start-time-output").textContent = `${String(start).padStart(2, "0")}:00`;
    document.querySelector("#end-time-output").textContent = `${String(end).padStart(2, "0")}:00`;
  };
  const hourFromPointer = (event) => {
    const rect = dial.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    return Math.round(((Math.atan2(x, -y) * 180 / Math.PI + 360) % 360) / 15) % 24;
  };
  const move = (event) => {
    if (!activeHand) return;
    const hour = hourFromPointer(event);
    if (activeHand === "start") startInput.value = Math.min(hour, Number(endInput.value) - 1);
    else endInput.value = Math.max(hour, Number(startInput.value) + 1);
    update();
  };
  dial.addEventListener("pointerdown", (event) => {
    const hour = hourFromPointer(event);
    activeHand = event.target.dataset.clockHand || (circularDistance(hour, Number(startInput.value)) <= circularDistance(hour, Number(endInput.value)) ? "start" : "end");
    dial.setPointerCapture(event.pointerId);
    move(event);
  });
  dial.addEventListener("pointermove", move);
  dial.addEventListener("pointerup", () => { activeHand = ""; });
  dial.addEventListener("pointercancel", () => { activeHand = ""; });
  update();
}

function initializeDynamicControls() {
  initializeClockPicker();
  document.querySelector("#location")?.addEventListener("change", syncWeather);
  document.querySelector("#date")?.addEventListener("change", syncWeather);
  const spice = document.querySelector("#spice-level");
  const spiceOutput = document.querySelector("#spice-output");
  spice?.addEventListener("input", () => { spiceOutput.textContent = spice.value; });
  syncWeather();
}

function setMbtiMode(mode) {
  document.querySelectorAll("[data-mbti-mode]").forEach((button) => {
    const active = button.dataset.mbtiMode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll("[data-mbti-panel]").forEach((panel) => {
    const active = panel.dataset.mbtiPanel === mode;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
  updateMbtiValue();
}

function updateMbtiValue() {
  const activeMode = document.querySelector("[data-mbti-mode].active")?.dataset.mbtiMode || "direct";
  let result;
  if (activeMode === "direct") {
    result = [0, 1, 2, 3].map((index) => document.querySelector(`input[name="mbti_${index}"]:checked`)?.value || "").join("");
  } else {
    const scores = { I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    mbtiQuestions.forEach((_, index) => {
      const value = document.querySelector(`input[name="mbti_q${index}"]:checked`)?.value;
      if (value) scores[value] += 1;
    });
    result = `${scores.E > scores.I ? "E" : "I"}${scores.N > scores.S ? "N" : "S"}${scores.F > scores.T ? "F" : "T"}${scores.P > scores.J ? "P" : "J"}`;
  }
  const hiddenInput = document.querySelector("#mbti-value");
  const output = document.querySelector("#mbti-result");
  if (hiddenInput) hiddenInput.value = result;
  if (output) output.textContent = result;
}

function prepareQuiz() {
  state.categories = getSelectedValues("category");
  const categoryError = document.querySelector("#category-error");
  if (!state.categories.length) {
    categoryError.hidden = false;
    return;
  }
  categoryError.hidden = true;
  state.service = state.categories[0];
  state.companion = getSelectedValue("companion");
  state.age = getSelectedValue("age");
  state.language = getSelectedValue("language");
  document.querySelector("#quiz-title").textContent = "선택한 분야의 맞춤 정보를 알려주세요";
  document.querySelector("#quiz-description").textContent = "선택한 모든 분야에서 각각 세 가지씩 추천해 드려요.";

  const needsMbti = state.categories.some((category) => ["attraction", "activity"].includes(category));
  const needsFood = state.categories.includes("food");
  dynamicFields.innerHTML = [
    needsMbti ? renderPersonalityFields() : "",
    renderTravelFields(),
    needsFood ? renderFoodFields(false) : "",
  ].join("");

  setMbtiMode("direct");
  initializeDynamicControls();

  showScreen("quiz");
}

function hashText(text) {
  return [...text].reduce((sum, character) => sum + character.charCodeAt(0), 0);
}

function scoreAttraction(place, answers) {
  let score = 40 + (hashText(place.name + (answers.date || "") + state.companion + state.age) % 13);
  const mbti = answers.mbti || "UNKNOWN";
  if (place.mbtiMatches?.includes(mbti)) score += 38;
  else if (place.mbtiMatches) {
    const closestMatch = Math.max(...place.mbtiMatches.map((type) =>
      [...type].filter((letter, index) => letter === mbti[index]).length,
    ));
    score += closestMatch * 5;
  }
  const traits = [
    mbti.startsWith("I") ? "내향" : "외향",
    mbti.includes("N") ? "직관" : "현실",
    mbti.includes("F") ? "감성" : "사고",
    mbti.endsWith("J") ? "계획" : "즉흥",
  ];

  traits.forEach((trait) => {
    if (place.tags.includes(trait)) score += 8;
  });
  if (place.tags.includes(answers.time)) score += 14;
  if (place.tags.includes(answers.weather)) score += 17;
  if (answers.weather === "비" && place.tags.includes("실내")) score += 18;

  const locationMatches = {
    부산역: ["영도구", "서구", "사하구", "남구"],
    해운대: ["해운대구", "기장군", "수영구"],
    서면: ["수영구", "해운대구", "남구"],
    광안리: ["수영구", "해운대구", "남구"],
    남포동: ["서구", "영도구", "사하구", "강서구"],
  };
  if ((locationMatches[answers.location] || []).some((area) => place.tags.includes(area))) score += 13;

  return Math.min(score, 98);
}

function scoreFood(place, answers) {
  let score = 35 + (hashText(place.name + (answers.mealTime || "") + state.companion + state.age) % 10);
  if (place.tags.includes(answers.mealTime)) score += 26;

  const likedTags = [answers.rawPreference, answers.adventurePreference, answers.cookingPreference]
    .filter((value) => value && !value.includes("제외"));
  likedTags.forEach((tag) => {
    if (place.tags.includes(tag)) score += 13;
  });

  if (answers.spiceLevel === "매우 매움" && place.tags.includes("매우 매움")) score += 18;
  if (answers.spiceLevel === "보통 매움" && place.tags.includes("보통 매움")) score += 18;
  if (answers.spiceLevel === "매우 매움" && place.tags.includes("보통 매움")) score += 8;

  const exclusions = [[answers.rawPreference, "날것"]];
  exclusions.forEach(([preference, tag]) => {
    if (preference?.includes("제외") && place.tags.includes(tag)) score -= 100;
  });
  if (answers.spiceLevel === "매운맛 제외" && (place.tags.includes("보통 매움") || place.tags.includes("매우 매움"))) score -= 100;
  if (answers.spiceLevel === "보통 매움" && place.tags.includes("매우 매움")) score -= 100;

  return Math.max(1, Math.min(score, 98));
}

function getAnswers(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function getRecommendations() {
  if (personalizedData.length) {
    const locationAreas = Object.fromEntries(Object.keys(districtCoordinates).map((district) => [district, [district]]));
    const preferredAreas = locationAreas[state.answers.location] || [];
    const selectedMbti = state.answers.mbti || "";

    return state.categories.flatMap((category) => {
      let candidates = verifiedPlaceCatalog[category].map((place) => makeVerifiedPlace(place, category));
      candidates = candidates.filter((place) => preferredAreas.includes(place.area));

      const ranked = candidates.map((place) => {
        let score = 48 + (hashText(place.name + state.age) % 10);
        if (preferredAreas.includes(place.area)) score += 18;
        if (selectedMbti) score += hashText(`${place.name}-${selectedMbti}-${state.companion}`) % 24;
        return { ...place, score: Math.min(score, 98) };
      });

      return ranked
        .sort((a, b) => category === "food"
          ? b.rating - a.rating || b.score - a.score
          : b.score - a.score || b.rating - a.rating)
        .slice(0, 3);
    });
  }

  const foodCandidates = foodData.filter((place) => place.areas?.includes(state.answers.location));
  return state.categories.flatMap((category) => {
    if (category === "food") {
      return foodCandidates
        .map((place) => ({ ...place, score: scoreFood(place, state.answers), service: category }))
        .filter((place) => place.score > 1)
        .sort((a, b) => b.rating - a.rating || b.score - a.score)
        .slice(0, 3);
    }
    const source = category === "cafe" ? cafeData : category === "activity" ? activityData : attractionData;
    return source
      .map((place) => ({ ...place, score: scoreAttraction(place, state.answers), service: category }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  });
}

function createMapUrl(name) {
  const location = state.answers.location || "부산";
  const place = state.recommendations.find((item) => item.name === name);
  const area = place?.area || location;
  return `https://map.kakao.com/link/search/${encodeURIComponent(`부산 ${area} ${name}`)}`;
}

function createGoogleMapUrl(name) {
  const place = state.recommendations.find((item) => item.name === name);
  const area = place?.area || "부산";
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`부산 ${area} ${name}`)}`;
}

function getFallbackPlaceImage(place) {
  const exactQuery = encodeURIComponent(`부산 ${place.area || ""} ${place.name}`);
  return `https://tse2.mm.bing.net/th?q=${exactQuery}&w=900&h=540&c=7&rs=1&p=0`;
}

async function findPlaceImage(name, area) {
  const cacheKey = `busan-real-photo-v2:${area}:${name}`;
  const cached = sessionStorage.getItem(cacheKey);
  if (cached) return cached;
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: `intitle:\"${name}\" 부산`,
    gsrnamespace: "6",
    gsrlimit: "5",
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: "900",
    format: "json",
    origin: "*",
  });
  try {
    const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
    if (!response.ok) return "";
    const data = await response.json();
    const image = Object.values(data.query?.pages || {}).find((page) => page.imageinfo?.[0]?.thumburl)?.imageinfo?.[0]?.thumburl || "";
    if (image) sessionStorage.setItem(cacheKey, image);
    return image;
  } catch (_) {
    return "";
  }
}

async function hydratePlaceImages() {
  const imageElements = [...recommendationList.querySelectorAll("[data-place-image]")];
  await Promise.all(imageElements.map(async (image) => {
    image.addEventListener("error", () => {
      if (image.src !== image.dataset.fallback) {
        image.src = image.dataset.fallback;
        return;
      }
      image.classList.add("is-unavailable");
      image.closest(".place-visual")?.classList.add("photo-unavailable");
    });
    const source = await findPlaceImage(decodeURIComponent(image.dataset.placeImage), decodeURIComponent(image.dataset.area));
    if (source) image.src = source;
    image.classList.remove("is-loading");
  }));
}

function renderRecommendations() {
  const sectionNames = { attraction: "📍 볼거리", food: "🍴 맛집", cafe: "☕️ 뷰&카페", activity: "🏄 체험" };
  recommendationList.innerHTML = state.categories.map((category) => {
    const places = state.recommendations.filter((place) => place.service === category);
    return `<section class="recommendation-section">
      <h3 class="recommendation-section-heading">${sectionNames[category]} <span>추천 3곳</span></h3>
      <div class="recommendation-grid">${places.map(
      (place, index) => `
        <article class="place-card">
          <div class="place-visual" style="--card-gradient: ${place.gradient}">
            <a class="place-photo-link" href="${createGoogleMapUrl(place.name)}" target="_blank" rel="noopener noreferrer" aria-label="Google 지도에서 ${place.name} 실제 사진 보기">
              <img class="place-photo is-loading" src="${getFallbackPlaceImage(place)}" data-fallback="${getFallbackPlaceImage(place)}" data-place-image="${encodeURIComponent(place.name)}" data-area="${encodeURIComponent(place.area || "부산")}" alt="${place.name} 실제 장소 사진" loading="lazy" />
            </a>
            <span class="place-photo-shade" aria-hidden="true"></span>
            <span class="place-photo-label">실제 장소 사진</span>
            <span class="place-rank">${index + 1}</span>
            <span class="match-badge">${place.service === "food" ? `평점 ${place.rating.toFixed(1)}` : `취향 일치 ${place.score}%`}</span>
          </div>
          <div class="place-content">
            <p class="place-category">${place.category}</p>
            <h3>${place.name}</h3>
            <p class="place-description">${place.description}</p>
            <div class="place-tags">
              ${place.displayTags.map((tag) => `<span class="place-tag">${tag}</span>`).join("")}
            </div>
            <div class="review-box"><b>한줄 리뷰</b> · “${place.review}”</div>
            <div class="map-link-row">
              <a class="map-link" href="${createMapUrl(place.name)}" target="_blank" rel="noopener noreferrer" aria-label="카카오맵에서 ${place.name} 검색하기">카카오맵 <span aria-hidden="true">↗</span></a>
              <a class="map-link google-map-link" href="${createGoogleMapUrl(place.name)}" target="_blank" rel="noopener noreferrer" aria-label="Google 지도에서 ${place.name} 검색하기">Google 지도 <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>
      `).join("")}</div></section>`;
  }).join("");
  hydratePlaceImages();
}

function formatMbti(value) {
  const labels = {
    ISFJ: "아이에스에프제이",
    INFP: "아이엔에프피",
    ESFP: "이에스에프피",
    ENFJ: "이엔에프제이",
    INTJ: "아이엔티제이",
    ENTP: "이엔티피",
    ESTJ: "이에스티제이",
    UNKNOWN: "성격 유형 모름",
  };
  return labels[value] || value;
}

function renderSummary() {
  const labels = [];
  labels.push(state.language);
  labels.push(state.companion);
  labels.push(state.age);
  const categoryNames = { attraction: "볼거리", food: "맛집", cafe: "뷰&카페", activity: "체험" };
  state.categories.forEach((category) => labels.push(categoryNames[category]));
  if (state.answers.mbti) labels.push(formatMbti(state.answers.mbti));
  if (state.answers.mealTime) labels.push(state.answers.mealTime);
  [state.answers.spiceLevel, state.answers.rawPreference, state.answers.adventurePreference, state.answers.cookingPreference]
    .filter(Boolean)
    .forEach((value) => labels.push(value));
  if (state.answers.startTime && state.answers.endTime) labels.push(`${state.answers.startTime}:00~${state.answers.endTime}:00`);
  if (state.answers.location) labels.push(state.answers.location + " 출발");
  if (state.answers.weather) labels.push(state.answers.weather);

  document.querySelector("#result-summary").innerHTML = labels
    .map((label) => `<span class="summary-chip">${label}</span>`)
    .join("");
}

function renderRoute() {
  routeSection.hidden = false;
  const isFoodOnly = state.categories.length === 1 && state.categories[0] === "food";
  const routeRecommendations = isFoodOnly
    ? state.recommendations
    : state.categories.map((category) => state.recommendations.find((place) => place.service === category)).filter(Boolean).slice(0, 3);
  routeList.innerHTML = routeRecommendations
    .map((place, index) => {
      const stop = `
        <div class="route-stop">
          <em>${index + 1}번째 추천</em>
          <b>${place.name}</b>
          <span>${place.area} · ${index === 0 ? "여행 시작" : "다음 추천 장소"}</span>
        </div>`;
      const arrow = index < routeRecommendations.length - 1 ? `<div class="route-arrow" aria-hidden="true">→</div>` : "";
      return stop + arrow;
    })
    .join("");
  renderRouteMap(routeRecommendations);
}

function loadKakaoMaps(appKey) {
  if (window.kakao?.maps?.services) return Promise.resolve();
  return new Promise((resolve, reject) => {
    document.querySelector("#kakao-maps-sdk")?.remove();
    const script = document.createElement("script");
    script.id = "kakao-maps-sdk";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(appKey)}&libraries=services&autoload=false`;
    script.onload = () => window.kakao.maps.load(resolve);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function searchWithKakao(query, district) {
  return new Promise((resolve) => {
    const placesService = new window.kakao.maps.services.Places();
    placesService.keywordSearch(query, (results, status) => {
      if (status !== window.kakao.maps.services.Status.OK) return resolve(null);
      const exactAreaResult = results.find((result) =>
        `${result.address_name || ""} ${result.road_address_name || ""}`.includes(district)
      );
      resolve(exactAreaResult ? {
        x: Number(exactAreaResult.x), y: Number(exactAreaResult.y),
        name: exactAreaResult.place_name, url: exactAreaResult.place_url,
      } : null);
    });
  });
}

async function renderRouteMap(places) {
  const mapElement = document.querySelector("#route-map");
  const routeLink = document.querySelector("#kakao-route-link");
  if (!mapElement || !places.length) return;
  state.routeRecommendations = places;
  routeLink.href = createMapUrl(places[0].name);
  const appKey = localStorage.getItem("kakaoMapsJavaScriptKey") || "";
  if (!appKey) {
    mapElement.innerHTML = `<div class="map-empty-state"><b>카카오맵 JavaScript 키를 연결해 주세요</b><span>‘지도 API 설정’을 누르면 선택 지역의 추천 장소 마커와 경로선이 표시됩니다.</span></div>`;
    return;
  }
  mapElement.innerHTML = `<div class="map-empty-state"><b>카카오맵을 불러오는 중…</b><span>장소가 선택한 지역에 있는지 확인하고 있습니다.</span></div>`;
  try {
    await loadKakaoMaps(appKey);
    const coordinates = (await Promise.all(places.map(async (place) => ({ place, point: await searchWithKakao(`부산 ${place.area} ${place.name}`, place.area) })))).filter((item) => item.point);
    if (!coordinates.length) throw new Error("geocoding failed");
    mapElement.innerHTML = "";
    const center = new window.kakao.maps.LatLng(coordinates[0].point.y, coordinates[0].point.x);
    const map = new window.kakao.maps.Map(mapElement, { center, level: 7 });
    map.addControl(new window.kakao.maps.ZoomControl(), window.kakao.maps.ControlPosition.RIGHT);
    const bounds = new window.kakao.maps.LatLngBounds();
    const path = coordinates.map(({ place, point }, index) => {
      const position = new window.kakao.maps.LatLng(point.y, point.x);
      bounds.extend(position);
      const marker = new window.kakao.maps.Marker({ position, map, title: `${index + 1}. ${place.name}` });
      const overlay = new window.kakao.maps.CustomOverlay({
        position, yAnchor: 2.1,
        content: `<a href="${point.url}" target="_blank" rel="noopener" style="padding:6px 9px;border-radius:10px;background:#251d00;color:#fee500;font:700 12px sans-serif;text-decoration:none;box-shadow:0 4px 12px #0003">${index + 1}. ${place.name}</a>`,
      });
      overlay.setMap(map);
      return position;
    });
    if (path.length > 1) new window.kakao.maps.Polyline({ map, path, strokeColor: "#e43b1c", strokeWeight: 6, strokeOpacity: 0.88, strokeStyle: "solid" });
    map.setBounds(bounds, 55, 55, 55, 55);
    const last = coordinates.at(-1);
    routeLink.href = `https://map.kakao.com/link/to/${encodeURIComponent(last.point.name || last.place.name)},${last.point.y},${last.point.x}`;
  } catch (_) {
    mapElement.innerHTML = `<div class="map-empty-state"><b>카카오맵을 표시하지 못했어요</b><span>JavaScript 키, 카카오맵 사용 설정, 등록된 사이트 도메인을 확인해 주세요.</span></div>`;
  }
}

function showResults(event) {
  event.preventDefault();
  if (!quizForm.reportValidity()) return;

  updateMbtiValue();
  state.answers = getAnswers(quizForm);
  state.recommendations = getRecommendations();
  document.querySelector("#result-title").textContent = "선택한 모든 분야의 부산 맞춤 추천";
  document.querySelector("#result-description").textContent = "동행 유형, 나이대와 맞춤 검사 결과를 반영해 분야별로 세 곳씩 골랐어요.";
  renderSummary();
  renderRecommendations();
  renderRoute();
  showScreen("result");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function saveResult() {
  window.BusanI18n.downloadResult(state);
  showToast("추천 결과를 파일로 저장했어요.");
}

startButton.addEventListener("click", prepareQuiz);
quizForm.addEventListener("submit", showResults);
document.querySelector("#restart-button").addEventListener("click", () => showScreen("start"));
document.querySelector("#save-button").addEventListener("click", saveResult);
document.querySelector("#map-api-settings")?.addEventListener("click", () => {
  const current = localStorage.getItem("kakaoMapsJavaScriptKey") || "";
  const appKey = window.prompt("카카오디벨로퍼스에서 발급한 JavaScript 키를 입력해 주세요.\n취소하면 현재 설정을 유지합니다.", current);
  if (appKey === null) return;
  if (appKey.trim()) localStorage.setItem("kakaoMapsJavaScriptKey", appKey.trim());
  else localStorage.removeItem("kakaoMapsJavaScriptKey");
  renderRouteMap(state.routeRecommendations || []);
});

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.back));
});

dynamicFields.addEventListener("click", (event) => {
  const modeButton = event.target.closest("[data-mbti-mode]");
  if (modeButton) setMbtiMode(modeButton.dataset.mbtiMode);
});

dynamicFields.addEventListener("change", (event) => {
  if (event.target.matches('input[name^="mbti_"]')) updateMbtiValue();
});

document.querySelectorAll("input[name='category']").forEach((input) => {
  input.addEventListener("change", () => {
    const selectedCard = input.closest(".category-check");
    selectedCard?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    document.querySelector("#category-error").hidden = getSelectedValues("category").length > 0;
  });
});
