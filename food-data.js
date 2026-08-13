/* 점심·저녁 메뉴와 음식 취향 태그 */
(() => {
  const menuMap = new Map();
  const lunchGroups = {
    "국밥·밥": ["돼지국밥", "순대국밥", "내장국밥", "섞어국밥", "수육백반", "재첩국", "생선구이 정식", "비빔밥", "돌솥밥", "꼬막밥", "장어덮밥"],
    "면류": ["밀면", "비빔밀면", "물밀면", "해물칼국수", "칼국수", "잔치국수", "비빔국수", "냉면", "회국수", "쫄면"],
    "해산물·부산 음식": ["부산어묵", "물떡 + 어묵", "회덮밥", "물회", "멍게비빔밥", "생선구이", "고등어구이", "갈치구이", "아귀탕", "복국"],
    "부산 향토 음식": ["동래파전", "비빔당면", "돼지불백", "냉채족발"],
  };
  const dinnerGroups = {
    "고기류": ["돼지갈비", "삼겹살", "돼지불고기", "돼지껍데기", "소갈비", "소불고기", "곱창", "막창", "대창", "닭갈비", "닭백숙", "오리불고기", "수육", "족발", "냉채족발"],
    "해산물류": ["모둠회", "광어회", "우럭회", "밀치회", "물회", "회덮밥", "꼼장어구이", "장어구이", "조개구이", "전복구이", "전복찜", "낙지볶음", "오징어볶음", "문어숙회", "아구찜", "해물찜", "해물탕", "대구탕", "복국", "생선구이"],
    "전골·탕·찌개": ["돼지찌개", "김치찌개", "된장찌개", "부대찌개", "곱창전골", "낙곱새", "해물전골", "아구탕", "대구탕", "알탕", "감자탕", "닭도리탕"],
    "전·분식": ["동래파전", "해물파전", "빈대떡", "떡볶이", "부산어묵", "비빔당면", "만두전골"],
  };

  function addMenus(groups, mealTime) {
    Object.entries(groups).forEach(([category, names]) => names.forEach((name) => {
      const menu = menuMap.get(name) || { name, categories: new Set(), mealTimes: new Set() };
      menu.categories.add(category);
      menu.mealTimes.add(mealTime);
      menuMap.set(name, menu);
    }));
  }
  addMenus(lunchGroups, "점심");
  addMenus(dinnerGroups, "저녁");

  const rawFoods = new Set(["모둠회", "광어회", "우럭회", "밀치회", "물회", "회덮밥", "회국수", "멍게비빔밥"]);
  const spicyFoods = new Set(["비빔밀면", "비빔국수", "회국수", "쫄면", "물회", "냉채족발", "돼지불고기", "닭갈비", "낙지볶음", "오징어볶음", "아구찜", "해물찜", "김치찌개", "부대찌개", "낙곱새", "아구탕", "알탕", "감자탕", "닭도리탕", "떡볶이", "꼼장어구이"]);
  const verySpicyFoods = new Set(["쫄면", "낙지볶음", "오징어볶음", "아구찜", "해물찜", "낙곱새", "닭도리탕", "떡볶이", "꼼장어구이"]);
  const coldFoods = new Set(["밀면", "비빔밀면", "물밀면", "냉면", "회국수", "쫄면", "물회", "회덮밥", "멍게비빔밥", "냉채족발", "모둠회", "광어회", "우럭회", "밀치회"]);
  const seafoodPattern = /재첩|생선|꼬막|장어|해물|어묵|회|멍게|고등어|갈치|아귀|아구|복국|파전|꼼장어|조개|전복|낙지|오징어|문어|대구|알탕|낙곱새/;
  const meatPattern = /돼지|순대|내장|섞어|수육|불백|족발|갈비|삼겹|불고기|껍데기|곱창|막창|대창|닭|오리|감자탕|부대찌개|낙곱새/;
  const soupPattern = /국밥|국$|탕|찌개|전골|백숙|칼국수|잔치국수|만두전골/;
  const stirFriedPattern = /볶음|불고기|낙곱새|떡볶이|닭갈비|불백/;
  const grilledPattern = /구이|갈비|삼겹살|껍데기|곱창|막창|대창|파전|빈대떡/;
  const koreanSpecialties = new Set(["돼지국밥", "순대국밥", "내장국밥", "섞어국밥", "재첩국", "꼬막밥", "밀면", "비빔밀면", "물밀면", "부산어묵", "물떡 + 어묵", "멍게비빔밥", "동래파전", "비빔당면", "냉채족발", "꼼장어구이", "낙곱새"]);

  const gradients = [
    "linear-gradient(145deg, #f2b56d, #d36d46)",
    "linear-gradient(145deg, #63c7b3, #2f8e8e)",
    "linear-gradient(145deg, #57bcc7, #326d9e)",
    "linear-gradient(145deg, #ef9574, #c64f54)",
  ];

  window.BUSAN_FOODS = [...menuMap.values()].map((menu, index) => {
    const tags = [...menu.mealTimes];
    if (seafoodPattern.test(menu.name)) tags.push("해산물");
    if (meatPattern.test(menu.name)) tags.push("고기");
    if (soupPattern.test(menu.name)) tags.push("국물");
    if (rawFoods.has(menu.name)) tags.push("날것"); else tags.push("익힌 음식");
    if (verySpicyFoods.has(menu.name)) tags.push("매우 매움");
    else if (spicyFoods.has(menu.name)) tags.push("보통 매움");
    else tags.push("맵지 않음");
    if (coldFoods.has(menu.name)) tags.push("차가움"); else tags.push("뜨거움");
    if (stirFriedPattern.test(menu.name)) tags.push("볶음");
    if (grilledPattern.test(menu.name)) tags.push("구이");
    if (soupPattern.test(menu.name)) tags.push("국물");
    tags.push(koreanSpecialties.has(menu.name) ? "한국 향토" : "도전 쉬움");
    const areas = new Set(["서면"]);
    if (tags.includes("해산물")) ["해운대", "광안리", "남포동", "부산역"].forEach((area) => areas.add(area));
    if (tags.includes("고기") || tags.includes("국물")) ["부산역", "해운대", "광안리", "남포동"].forEach((area) => areas.add(area));
    if (tags.includes("한국 향토")) ["부산역", "남포동", "해운대"].forEach((area) => areas.add(area));
    if (!tags.includes("해산물") && !tags.includes("고기") && !tags.includes("국물")) ["해운대", "남포동"].forEach((area) => areas.add(area));
    const mealLabel = [...menu.mealTimes].join("·");
    const category = [...menu.categories].join(" · ");
    const keyTags = tags.filter((tag) => !["점심", "저녁"].includes(tag)).slice(0, 2);
    return {
      name: menu.name,
      category: `${mealLabel} · ${category}`,
      symbol: soupPattern.test(menu.name) ? "♨" : seafoodPattern.test(menu.name) ? "○" : meatPattern.test(menu.name) ? "◆" : "◎",
      description: `${mealLabel}에 즐기기 좋은 ${category} 메뉴예요. 선택한 음식 취향과 먹지 못하는 조건을 함께 고려해 추천했어요.`,
      review: `${keyTags.join(", ")} 취향에 잘 맞는 부산 여행 메뉴예요.`,
      tags,
      areas: [...areas],
      rating: Number((4.6 + ((menu.name.charCodeAt(0) + menu.name.length) % 4) / 10).toFixed(1)),
      displayTags: [mealLabel, ...keyTags],
      duration: "식사 약 1시간",
      gradient: gradients[index % gradients.length],
    };
  });
})();