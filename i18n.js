/*
 * 마! 어데가노 머먹노? 다국어 사전
 * 한 줄은 [한국어, 일본어, 중국어, 영어] 순서입니다.
 * 새 문구를 추가할 때 아래 목록에 한 줄만 더하면 됩니다.
 */
(() => {
  const rows = [
    // 공통 화면
    ["마! 어데가노 머먹노?", "マ！どこ行く？何食べる？", "嘿！去哪儿？吃什么？", "Hey! Where to? What to eat?"],
    ["마! 어데가노 머먹노? | 부산 맞춤 여행 추천", "マ！どこ行く？何食べる？ | 釜山旅行", "嘿！去哪儿？吃什么？ | 釜山旅行", "Hey! Where to? What to eat? | Busan Travel"],
    ["외국인 관광객을 위한 부산 관광지와 맛집 맞춤 추천 서비스", "海外旅行者向けの釜山観光・グルメおすすめサービス", "面向外国游客的釜山景点与餐厅个性化推荐服务", "Personalized Busan attraction and restaurant recommendations for international travelers"],
    ["마! 어데가노 머먹노? 처음으로", "トップへ", "返回首页", "Go home"],
    ["부산을 가장 나답게 만나는 방법", "自分らしく釜山に出会う方法", "用最适合自己的方式遇见釜山", "Discover Busan your way"],
    ["외국인 관광객을 위한 맞춤 안내", "海外旅行者のためのオーダーメイド案内", "为外国游客提供的个性化指南", "A personalized guide for international travelers"],
    ["오늘의 부산,", "今日の釜山を、", "今天的釜山，", "Today in Busan,"],
    ["바다처럼 설레게", "海のように心躍る旅へ", "像大海一样令人心动", "Let the sea stir your heart"],
    ["취향과 여행 상황을 알려주면 관광지와 맛집 세 곳,", "好みと旅の状況を教えていただければ、観光地やグルメを3か所、", "告诉我们你的喜好和旅行情况，即可获得三个景点或餐厅推荐，", "Tell us your tastes and travel plans for three attraction or restaurant picks,"],
    ["그리고 나만의 여행 동선을 추천해 드려요.", "そしてあなただけの旅程をご提案します。", "以及专属于你的旅行路线。", "plus a route made just for you."],
    ["설치 없음", "インストール不要", "无需安装", "No installation"],
    ["로그인 없음", "ログイン不要", "无需登录", "No sign-in"],
    ["약 1분 소요", "所要時間 約1分", "约需1分钟", "About 1 minute"],
    ["서비스 특징", "サービスの特徴", "服务特点", "Service features"],
    ["부산에서 만나요!", "釜山で会いましょう！", "釜山见！", "See you in Busan!"],
    ["맞춤 여행 추천 만들기", "オーダーメイド旅行プランを作る", "创建个性化旅行推荐", "Create a personalized trip"],
    ["진행 단계", "進行状況", "进度", "Progress"],
    ["추천 선택", "おすすめ選択", "选择推荐", "Choose"],
    ["맞춤 검사", "好み診断", "个性化问答", "Preferences"],
    ["결과 확인", "結果確認", "查看结果", "Results"],
    ["첫 번째", "ステップ1", "第一步", "Step one"],
    ["어떤 부산 여행을 원하세요?", "どんな釜山旅行にしたいですか？", "你想要怎样的釜山之旅？", "What kind of Busan trip do you want?"],
    ["언어와 필요한 추천을 선택해 주세요.", "言語と希望するおすすめを選んでください。", "请选择语言和需要的推荐。", "Choose your language and recommendation type."],
    ["누구와 함께 여행하나요?", "誰と旅行しますか？", "和谁一起旅行？", "Who are you traveling with?"],
    ["혼자", "ひとり", "独自旅行", "Solo"],
    ["커플", "カップル", "情侣", "Couple"],
    ["아이와", "子どもと", "和孩子", "With children"],
    ["가족/부모님", "家族・両親", "家人/父母", "Family / parents"],
    ["친구", "友達", "朋友", "Friends"],
    ["나이대", "年代", "年龄段", "Age group"],
    ["10대", "10代", "10多岁", "Teens"],
    ["20대", "20代", "20多岁", "20s"],
    ["30대", "30代", "30多岁", "30s"],
    ["4050대", "40・50代", "40至50多岁", "40s–50s"],
    ["60대+ / 부모님", "60代以上・両親", "60岁以上/父母", "60+ / parents"],
    ["60대+", "60代以上", "60岁以上", "60+"],
    ["BUSAN NIGHT", "BUSAN NIGHT", "BUSAN NIGHT", "BUSAN NIGHT"],
    ["바다와 도시가 빛나는 여행", "海と街が輝く旅", "大海与城市闪耀的旅程", "A journey where sea and city shine"],
    ["관심 카테고리", "興味のあるカテゴリー", "感兴趣的类别", "Categories"],
    ["복수 선택 가능", "複数選択可", "可多选", "Select multiple"],
    ["볼거리", "見どころ", "景点", "Sights"],
    ["맛집", "グルメ", "美食", "Food"],
    ["뷰&카페", "景色＆カフェ", "景观与咖啡", "Views & cafés"],
    ["체험", "体験", "体验", "Activities"],
    ["관심 카테고리를 하나 이상 선택해 주세요.", "カテゴリーを1つ以上選んでください。", "请至少选择一个类别。", "Select at least one category."],
    ["사용할 언어", "使用する言語", "使用语言", "Language"],
    ["가", "あ", "文", "A"],
    ["한국어", "韓国語", "韩语", "Korean"],
    ["일본어", "日本語", "日语", "Japanese"],
    ["중국어", "中国語", "中文", "Chinese"],
    ["영어", "英語", "英语", "English"],
    ["언어를 선택하면 페이지 전체가 바로 바뀝니다.", "言語を選ぶとページ全体がすぐに切り替わります。", "选择语言后，整个页面会立即切换。", "Choose a language to translate the entire page instantly."],
    ["추천 종류", "おすすめの種類", "推荐类型", "Recommendation type"],
    ["관광지 추천", "観光スポット", "景点推荐", "Attractions"],
    ["가볼만한 곳 (Spot)", "行ってみたい場所 (Spot)", "值得一去 (Spot)", "Places to visit (Spot)"],
    ["명소, 해변, 역사·문화, 전망대", "名所、ビーチ、歴史・文化、展望台", "名胜、海滩、历史文化、观景台", "Landmarks, beaches, history, culture, and viewpoints"],
    ["성격과 여행 상황에 딱 맞는 부산 명소 세 곳", "性格と旅の状況にぴったりの釜山スポット3選", "根据性格和旅行情况推荐三个釜山景点", "Three Busan sights matched to your personality and plans"],
    ["맛집 추천", "グルメ", "餐厅推荐", "Restaurants"],
    ["부산의 맛 (Food)", "釜山の味 (Food)", "釜山之味 (Food)", "Taste of Busan (Food)"],
    ["국밥, 밀면, 회, 포장마차 등 식사 중심", "クッパ、ミルミョン、刺身、屋台など食事中心", "汤饭、小麦冷面、生鱼片、路边摊等正餐", "Soup rice, milmyeon, sashimi, street stalls, and meals"],
    ["뷰&디저트 (Cafe)", "景色＆デザート (Cafe)", "景观与甜点 (Cafe)", "Views & dessert (Cafe)"],
    ["오션뷰 카페, 감성 디저트, 팝업스토어", "オーシャンビューカフェ、感性デザート、ポップアップ", "海景咖啡馆、氛围甜点、快闪店", "Ocean-view cafés, atmospheric desserts, and pop-ups"],
    ["놀거리/체험 (Activity)", "遊び・体験 (Activity)", "娱乐/体验 (Activity)", "Things to do (Activity)"],
    ["서핑, 요트, 케이블카, 스카이캡슐, 공방", "サーフィン、ヨット、ケーブルカー、スカイカプセル、工房", "冲浪、游艇、缆车、天空胶囊、工坊", "Surfing, yachts, cable cars, sky capsules, and workshops"],
    ["좋아하는 음식에 맞춘 부산 대표 맛집 세 곳", "好きな料理に合わせた釜山の人気店3選", "根据饮食喜好推荐三家釜山餐厅", "Three Busan restaurants matched to your tastes"],
    ["관광지 로드맵", "観光ルート", "景点路线", "Attraction route"],
    ["맞춤 명소 세 곳을 연결한 인공지능 방식 여행 동선", "おすすめスポット3か所をつなぐAI旅行ルート", "用人工智能连接三个个性化景点", "An AI-style route connecting three matched attractions"],
    ["맛집 로드맵", "グルメルート", "美食路线", "Food route"],
    ["취향에 맞는 세 끼를 연결한 인공지능 방식 미식 동선", "好みに合う3食をつなぐAIグルメルート", "用人工智能连接符合口味的三餐", "An AI-style food route connecting three meals"],
    ["AI 기반 관광지·맛집 로드맵", "AI観光・グルメルート", "AI景点·美食路线", "AI attraction & food route"],
    ["맞춤 관광지와 맛집을 함께 연결한 하루 여행 동선", "おすすめ観光地とグルメをつなぐ1日ルート", "连接个性化景点与餐厅的一日路线", "A day route connecting matched attractions and restaurants"],
    ["관광지·맛집 추천", "観光・グルメおすすめ", "景点·餐厅推荐", "Attractions & restaurants"],
    ["취향에 맞는 관광지와 맛집을 한 번에 추천", "好みに合う観光地とグルメをまとめておすすめ", "一次推荐符合喜好的景点与餐厅", "Attractions and restaurants matched to you in one recommendation"],
    ["맞춤 추천 시작하기", "おすすめ診断を始める", "开始个性化推荐", "Start my recommendations"],
    ["두 번째", "ステップ2", "第二步", "Step two"],
    ["나에게 맞는 부산을 찾아볼까요?", "あなたに合う釜山を探してみましょう", "寻找适合你的釜山吧", "Let's find your Busan"],
    ["몇 가지만 알려주시면 가장 잘 맞는 장소를 찾아드려요.", "いくつか答えるだけで、ぴったりの場所をご案内します。", "回答几个问题，我们就会找到最适合你的地方。", "Answer a few questions and we'll find your best matches."],
    ["선택한 분야의 맞춤 정보를 알려주세요", "選んだ分野の好みを教えてください", "请告诉我们所选领域的偏好", "Tell us your preferences"],
    ["선택한 모든 분야에서 각각 세 가지씩 추천해 드려요.", "選んだ各分野から3つずつおすすめします。", "每个所选类别都会推荐三个去处。", "We'll recommend three picks in every selected category."],
    ["여행 가능 시간", "旅行できる時間", "可旅行时间", "Available travel time"],
    ["두 바늘을 돌려 여행 시간을 정해 주세요", "2本の針を動かして旅行時間を決めてください", "拖动两根指针设置旅行时间", "Move both hands to set your travel time"],
    ["주황색 바늘은 시작, 파란색 바늘은 종료 시간입니다. 시계 위에서 원하는 시간을 드래그할 수 있어요.", "オレンジは開始、青は終了時刻です。時計の上でドラッグできます。", "橙色指针表示开始，蓝色指针表示结束，可在表盘上拖动。", "Orange is the start and blue is the end. Drag either hand on the clock."],
    ["현재 위치", "現在地", "当前位置", "Current area"],
    ["해운대구", "海雲台区", "海云台区", "Haeundae-gu"],
    ["수영구", "水営区", "水营区", "Suyeong-gu"],
    ["영도구", "影島区", "影岛区", "Yeongdo-gu"],
    ["남구", "南区", "南区", "Nam-gu"],
    ["사하구", "沙下区", "沙下区", "Saha-gu"],
    ["서구", "西区", "西区", "Seo-gu"],
    ["기장군", "機張郡", "机张郡", "Gijang-gun"],
    ["강서구", "江西区", "江西区", "Gangseo-gu"],
    ["여행지 날씨", "旅行先の天気", "旅行地天气", "Destination weather"],
    ["자동 연동", "自動連携", "自动同步", "Auto"],
    ["날씨를 불러오는 중…", "天気を読み込み中…", "正在加载天气…", "Loading weather…"],
    ["위치와 날짜를 기준으로 확인합니다.", "場所と日付を基準に確認します。", "根据地点和日期查询。", "Based on your area and date."],
    ["여행 날짜", "旅行日", "旅行日期", "Travel date"],
    ["맵기 단계", "辛さレベル", "辣度等级", "Spice level"],
    ["0 · 못 먹음", "0・食べられない", "0 · 不能吃辣", "0 · None"],
    ["5 · 매우 매움", "5・とても辛い", "5 · 非常辣", "5 · Very spicy"],
    ["내향형", "内向型", "内向型", "Introverted"],
    ["외향형", "外向型", "外向型", "Extraverted"],
    ["관찰형", "観察型", "观察型", "Observant"],
    ["직관형", "直観型", "直觉型", "Intuitive"],
    ["사고형", "思考型", "思考型", "Thinking"],
    ["감정형", "感情型", "情感型", "Feeling"],
    ["계획형", "計画型", "计划型", "Judging"],
    ["탐구형", "探索型", "探索型", "Prospecting"],
    ["이전으로", "戻る", "返回", "Back"],
    ["내 추천 결과 보기", "おすすめ結果を見る", "查看我的推荐", "See my recommendations"],
    ["반짝", "きらり", "闪亮", "Sparkle"],
    ["조건 바꾸기", "条件を変更", "修改条件", "Change answers"],
    ["추천 완료", "おすすめ完成", "推荐完成", "Ready"],
    ["당신을 위한 부산 세 곳", "あなたのための釜山3選", "为你推荐的三个釜山去处", "Three Busan picks for you"],
    ["입력한 여행 취향을 조합해 가장 잘 맞는 곳을 골랐어요.", "入力した好みを組み合わせ、最適な場所を選びました。", "我们综合你的旅行喜好，选出了最合适的地方。", "We combined your preferences to find the best matches."],
    ["선택한 모든 분야의 부산 맞춤 추천", "選んだ全分野の釜山おすすめ", "所选全部类别的釜山个性化推荐", "Your Busan picks in every category"],
    ["동행 유형, 나이대와 맞춤 검사 결과를 반영해 분야별로 세 곳씩 골랐어요.", "同行者、年代、診断結果を反映し、各分野から3つずつ選びました。", "根据同行类型、年龄段和测试结果，每个类别选出三个推荐。", "We used your group, age, and preferences to choose three picks per category."],
    ["추천 3곳", "おすすめ3選", "推荐3处", "3 recommendations"],
    ["선택 조건 요약", "選択条件のまとめ", "所选条件摘要", "Selected preferences"],
    ["맞춤 동선", "おすすめルート", "个性化路线", "Your route"],
    ["하루 로드맵", "1日ルート", "一日路线", "Day route"],
    ["AI 맞춤 동선", "AIおすすめルート", "AI个性化路线", "AI route"],
    ["AI가 추천해주는 로드맵", "AIがおすすめするルート", "AI推荐路线", "AI-recommended roadmap"],
    ["추천 장소를 순서대로 이어 만든 맞춤 동선이에요.", "おすすめ場所を順番につないだルートです。", "按顺序连接推荐地点的个性化路线。", "A custom route connecting your recommendations in order."],
    ["카카오 지도 경로", "Kakaoマップのルート", "Kakao地图路线", "Kakao Map route"],
    ["추천 장소의 위치와 이동 순서를 확인하세요.", "おすすめ場所と移動順を確認してください。", "查看推荐地点和游览顺序。", "See your stops and route order."],
    ["지도 API 설정", "地図API設定", "地图API设置", "Map API settings"],
    ["카카오맵에서 경로 열기 ↗", "Kakaoマップでルートを開く ↗", "在Kakao地图打开路线 ↗", "Open route in Kakao Map ↗"],
    ["이동 시간은 교통 상황에 따라 달라질 수 있어요.", "移動時間は交通状況により変わります。", "移动时间可能因交通情况而异。", "Travel times may vary with traffic."],
    ["처음부터 다시 하기", "最初からやり直す", "从头开始", "Start over"],
    ["추천 결과 저장하기", "結果を保存", "保存推荐结果", "Save results"],
    ["이 결과는 수업용 시제품의 예시 데이터입니다. 실제 방문 전 지도에서 위치와 운영 정보를 확인해 주세요.", "この結果は授業用プロトタイプのサンプルです。訪問前に地図で場所と営業情報をご確認ください。", "本结果为课堂原型的示例数据。实际前往前，请在地图上确认位置和营业信息。", "These are sample results for a classroom prototype. Check the map for current location and opening information before visiting."],
    ["· 부산의 바다와 도시를 잇는 맞춤 여행 안내", "· 釜山の海と街をつなぐオーダーメイド旅行案内", "· 连接釜山大海与城市的个性化旅行指南", "· A personalized guide connecting Busan's sea and city"],
    ["별도 로그인 없이 이 브라우저 안에서만 작동합니다.", "ログイン不要で、このブラウザ内だけで動作します。", "无需登录，仅在此浏览器中运行。", "Works entirely in this browser with no sign-in."],

    // 검사와 결과 화면
    ["어떤 여행을 좋아하세요?", "どんな旅が好きですか？", "你喜欢怎样的旅行？", "What kind of travel do you enjoy?"],
    ["성격과 현재 여행 상황을 알려주면 관광지 세 곳을 골라드려요.", "性格と今の旅の状況から、観光地を3か所選びます。", "告诉我们你的性格和当前旅行情况，我们会推荐三个景点。", "Tell us your personality and plans for three attraction picks."],
    ["당신을 위한 부산 관광지 세 곳", "あなたのための釜山観光地3選", "为你推荐的三个釜山景点", "Three Busan attractions for you"],
    ["성격, 시간, 위치, 날씨를 함께 살펴 가장 잘 맞는 명소를 골랐어요.", "性格・時間・場所・天気から、ぴったりのスポットを選びました。", "我们综合性格、时间、位置和天气，选出了最适合的景点。", "We matched your personality, time, location, and weather to the best sights."],
    ["오늘은 무엇을 먹고 싶나요?", "今日は何を食べたいですか？", "今天想吃什么？", "What would you like to eat today?"],
    ["좋아하는 음식 분야를 고르면 부산 맛집 세 곳을 추천해 드려요.", "好きな料理を選ぶと、釜山のお店を3軒おすすめします。", "选择喜欢的食物类型，我们会推荐三家釜山餐厅。", "Choose a favorite food type for three Busan restaurant picks."],
    ["당신의 취향을 담은 부산 맛집 세 곳", "あなたの好みに合う釜山グルメ3選", "符合你口味的三家釜山餐厅", "Three Busan restaurants for your tastes"],
    ["선택한 음식 취향과 잘 맞는 부산의 대표 맛집을 골랐어요.", "選んだ好みに合う釜山の人気店を選びました。", "我们选出了符合你饮食喜好的釜山代表餐厅。", "We picked notable Busan restaurants that match your tastes."],
    ["식사 시간과 음식 취향을 고르면 부산 추천 메뉴 세 가지를 골라드려요.", "食事時間と好みから、釜山のおすすめメニューを3つ選びます。", "根据用餐时间和饮食喜好，为你推荐三种釜山菜单。", "Choose your meal time and tastes for three Busan menu picks."],
    ["당신의 취향을 담은 부산 메뉴 세 가지", "あなたの好みに合う釜山メニュー3選", "符合你口味的三种釜山菜单", "Three Busan dishes for your tastes"],
    ["좋아하는 음식과 먹지 못하는 조건을 반영해 메뉴를 골랐어요.", "好きな料理と食べられない条件を反映してメニューを選びました。", "我们根据喜欢的食物和不能吃的条件选择了菜单。", "We chose dishes based on what you like and avoid."],
    ["나만의 부산 동선을 만들어 볼까요?", "自分だけの釜山ルートを作りましょう", "打造专属于你的釜山路线吧", "Let's build your Busan route"],
    ["여행 상황에 맞춰 명소 세 곳과 방문 순서를 함께 추천해 드려요.", "旅の状況に合わせ、3スポットと訪問順をご提案します。", "根据旅行情况推荐三个景点和游览顺序。", "We'll suggest three attractions and the best order for your plans."],
    ["당신을 위한 부산 관광 로드맵", "あなたのための釜山観光ルート", "为你定制的釜山景点路线", "Your Busan attraction route"],
    ["맞춤 명소 세 곳을 골라 하루 동안 이동하기 좋은 순서로 연결했어요.", "おすすめ3スポットを、1日で回りやすい順につなぎました。", "我们选出三个个性化景点，并按一日内方便游览的顺序连接。", "We connected three matched sights in an easy order for one day."],
    ["부산 미식 여행을 계획해 볼까요?", "釜山グルメ旅を計画しましょう", "规划一场釜山美食之旅吧", "Let's plan a Busan food trip"],
    ["음식 취향과 출발 위치에 맞춰 세 곳의 미식 동선을 만들어 드려요.", "料理の好みと出発地に合わせ、3軒のグルメルートを作ります。", "根据饮食喜好和出发位置，规划三个美食去处。", "We'll build a three-stop food route from your tastes and starting point."],
    ["당신을 위한 부산 맛집 로드맵", "あなたのための釜山グルメルート", "为你定制的釜山美食路线", "Your Busan food route"],
    ["어떤 부산 감성을 만나고 싶나요?", "どんな釜山の雰囲気に出会いたいですか？", "想感受怎样的釜山氛围？", "Which side of Busan would you like to feel?"],
    ["위치와 여행 상황에 맞춰 오션뷰·감성 카페와 디저트를 추천해 드려요.", "場所と旅の状況に合わせて海景色と感性カフェ・デザートをおすすめします。", "根据位置和旅行情况推荐海景与氛围咖啡甜点。", "We'll match ocean-view and atmospheric cafés to your location and plans."],
    ["당신을 위한 부산 뷰&디저트 세 곳", "あなたのための釜山ビュー＆デザート3選", "为你推荐的三个釜山景观与甜点去处", "Three Busan views & dessert picks"],
    ["오션뷰와 감성 키워드를 중심으로 부산다운 공간을 골랐어요.", "オーシャンビューと感性を中心に釜山らしい場所を選びました。", "以海景和氛围为重点，选出了具有釜山特色的空间。", "We chose distinctly Busan spaces with ocean views and atmosphere."],
    ["부산에서 어떤 체험을 해볼까요?", "釜山でどんな体験をしますか？", "想在釜山体验什么？", "What would you like to experience in Busan?"],
    ["성격과 여행 상황에 맞춰 해양 레저와 체험 세 가지를 추천해 드려요.", "性格と旅の状況に合う海洋レジャーと体験を3つおすすめします。", "根据性格和旅行情况推荐三种海洋休闲与体验。", "We'll match three marine activities and experiences to your personality and plans."],
    ["당신을 위한 부산 놀거리·체험 세 가지", "あなたのための釜山遊び・体験3選", "为你推荐的三种釜山娱乐体验", "Three Busan activities for you"],
    ["서핑, 요트, 케이블카, 공방 등 체험형 장소를 골랐어요.", "サーフィン、ヨット、ケーブルカー、工房などの体験を選びました。", "选出了冲浪、游艇、缆车、工坊等体验项目。", "We chose hands-on experiences including surfing, yachts, cable cars, and workshops."],
    ["취향에 맞는 부산의 세 가지 맛을 하루 동선으로 연결했어요.", "好みに合う釜山の3つの味を、1日のルートにつなぎました。", "我们将符合你口味的三种釜山美食连接成一日路线。", "We connected three Busan flavors matched to you into a day route."],
    ["부산 관광과 미식을 한 번에 계획해 볼까요?", "釜山観光とグルメを一度に計画しましょう", "一次规划釜山观光与美食吧", "Let's plan Busan sights and food together"],
    ["여행 상황과 음식 취향을 함께 살펴 관광지와 맛집 동선을 만들어 드려요.", "旅の状況と食の好みから、観光地とグルメを結ぶルートを作ります。", "结合旅行情况和饮食喜好，为你规划景点与餐厅路线。", "We'll combine your travel plans and food tastes into one route."],
    ["당신을 위한 AI 부산 관광·맛집 로드맵", "あなたのためのAI釜山観光・グルメルート", "为你定制的AI釜山景点·美食路线", "Your AI Busan attraction & food route"],
    ["맞춤 관광지 두 곳과 맛집 한 곳을 하루 동안 이동하기 좋은 순서로 연결했어요.", "おすすめ観光地2か所とグルメ1軒を、1日で回りやすい順につなぎました。", "我们将两个个性化景点和一家餐厅按一日内方便游览的顺序连接。", "We connected two matched attractions and one restaurant in an easy order for the day."],
    ["당신을 위한 부산 관광지·맛집 추천", "あなたのための釜山観光・グルメおすすめ", "为你推荐的釜山景点·餐厅", "Busan attractions & restaurants for you"],
    ["맞춤 관광지 두 곳과 맛집 한 곳을 함께 골랐어요.", "おすすめ観光地2か所とグルメ1軒を選びました。", "我们为你选出了两个景点和一家餐厅。", "We selected two matched attractions and one restaurant for you."],
    ["성격 유형", "性格タイプ", "性格类型", "Personality type"],
    ["알고 있는 유형을 바로 입력하거나 10문항으로 간편하게 검사해 보세요.", "分かっているタイプを直接入力するか、10問の簡単診断をお試しください。", "可直接输入已知类型，或通过10道题进行简易测试。", "Enter your known type or take a quick 10-question test."],
    ["성격 유형 입력 방법", "性格タイプの入力方法", "性格类型输入方式", "Personality type input method"],
    ["MBTI 바로 입력하기", "MBTIを直接入力", "直接输入MBTI", "Enter MBTI directly"],
    ["MBTI 간편 검사하기", "MBTI簡単診断", "MBTI简易测试", "Take a quick MBTI test"],
    ["각 행에서 나와 가까운 성향을 하나씩 선택해 주세요.", "各行から自分に近い傾向を1つ選んでください。", "请在每一行选择一个更接近自己的倾向。", "Choose one preference from each row."],
    ["각 질문에서 나와 더 가까운 답을 선택해 주세요.", "各質問で自分に近い答えを選んでください。", "请为每个问题选择更接近自己的答案。", "Choose the answer that feels more like you."],
    ["에너지 방향", "エネルギーの方向", "能量方向", "Energy direction"],
    ["정보 인식", "情報の捉え方", "信息感知", "Information"],
    ["판단 방식", "判断の仕方", "判断方式", "Decisions"],
    ["생활 방식", "生活スタイル", "生活方式", "Lifestyle"],
    ["여행지에 도착하면 가장 먼저 하고 싶은 것은?", "旅行先に着いて最初にしたいことは？", "到达旅行地后最想先做什么？", "What do you want to do first after arriving?"],
    ["유명한 관광지 돌아다니기", "有名な観光地を巡る", "游览著名景点", "Explore famous attractions"],
    ["카페나 숙소에서 여유롭게 쉬기", "カフェや宿でゆっくり休む", "在咖啡馆或住处悠闲休息", "Relax at a café or accommodation"],
    ["여행을 간다면 어떤 장소가 더 끌려?", "旅行ならどんな場所に惹かれる？", "旅行时更喜欢哪种地方？", "Which place appeals to you more?"],
    ["사람이 많고 활기찬 번화가", "人が多く活気ある繁華街", "人多热闹的繁华街区", "A busy, lively downtown"],
    ["조용하고 한적한 자연 속", "静かで落ち着いた自然の中", "安静清幽的大自然", "Quiet, peaceful nature"],
    ["여행 계획은 어떻게 짜는 편이 좋아?", "旅行計画はどう立てたい？", "喜欢怎样制定旅行计划？", "How do you prefer to plan a trip?"],
    ["시간대별로 꼼꼼하게 계획하기", "時間ごとに細かく計画する", "按时间段仔细规划", "Plan each part of the day carefully"],
    ["대략적인 장소만 정하고 즉흥적으로 움직이기", "大まかな場所だけ決めて自由に動く", "只确定大致地点，随兴行动", "Pick rough locations and be spontaneous"],
    ["관광지를 고른다면 무엇이 더 중요해?", "観光地選びでより大切なのは？", "选择景点时什么更重要？", "What matters more when choosing an attraction?"],
    ["실제로 볼거리와 체험거리가 많은 곳", "見どころや体験が実際に多い場所", "实际看点和体验项目丰富的地方", "Lots to see and do"],
    ["분위기가 좋고 특별한 느낌이 드는 곳", "雰囲気が良く特別に感じる場所", "氛围好且感觉特别的地方", "A special place with a great atmosphere"],
    ["여행 중 더 좋아하는 활동은?", "旅行中により好きな活動は？", "旅行中更喜欢哪种活动？", "Which travel activities do you prefer?"],
    ["맛집, 쇼핑, 체험 등 직접 즐기는 활동", "グルメ、買い物、体験などの活動", "美食、购物、体验等亲自参与的活动", "Food, shopping, and hands-on experiences"],
    ["풍경 구경, 사진 찍기, 산책처럼 여유로운 활동", "景色、写真、散歩などゆったりした活動", "看风景、拍照、散步等悠闲活动", "Scenery, photography, and relaxed walks"],
    ["여행 중 예상치 못한 일이 생긴다면?", "旅行中に予想外のことが起きたら？", "旅行中发生意外情况时？", "What if something unexpected happens?"],
    ["그 상황에 맞춰 바로 다른 계획을 세운다", "状況に合わせてすぐ別の計画を立てる", "根据情况立即制定其他计划", "Quickly make a new plan for the situation"],
    ["당황해서 원래 계획대로 하고 싶어진다", "戸惑って元の計画通りにしたくなる", "会慌张并想按原计划进行", "Feel flustered and want to keep the original plan"],
    ["여행지에서 사진을 찍는다면?", "旅行先で写真を撮るなら？", "在旅行地拍照时？", "When taking travel photos?"],
    ["유명한 포토스팟에서 인증샷을 남긴다", "有名な撮影スポットで記念写真を撮る", "在著名拍照点留下打卡照", "Take a photo at a famous photo spot"],
    ["우연히 발견한 예쁜 장소에서 찍는다", "偶然見つけた素敵な場所で撮る", "在偶然发现的漂亮地方拍照", "Shoot at a pretty place you discover by chance"],
    ["어떤 여행지가 더 끌려?", "どんな旅行先により惹かれる？", "更喜欢哪种旅行地？", "Which destination appeals to you more?"],
    ["새로운 문화와 색다른 경험을 할 수 있는 곳", "新しい文化と珍しい体験ができる場所", "能体验新文化和新奇经历的地方", "Somewhere with new culture and unusual experiences"],
    ["익숙하고 편안하게 즐길 수 있는 곳", "慣れていて快適に楽しめる場所", "熟悉且能舒适游玩的地方", "Somewhere familiar and comfortable"],
    ["여행에서 가장 중요하다고 생각하는 것은?", "旅行で最も大切だと思うことは？", "旅行中最重要的是什么？", "What matters most in travel?"],
    ["재미있고 다양한 경험", "楽しく多様な体験", "有趣且多样的体验", "Fun and varied experiences"],
    ["편안함과 좋은 분위기", "快適さと良い雰囲気", "舒适感和良好氛围", "Comfort and a good atmosphere"],
    ["딱 하루만 관광할 수 있다면?", "1日だけ観光できるなら？", "如果只能游览一天？", "If you only had one day?"],
    ["최대한 많은 곳을 돌아다닌다", "できるだけ多くの場所を巡る", "尽量游览更多地方", "Visit as many places as possible"],
    ["한두 곳을 천천히 제대로 즐긴다", "1、2か所をゆっくり楽しむ", "慢慢深入体验一两个地方", "Slowly enjoy one or two places"],
    ["잘 모르겠어요", "よく分からない", "不太清楚", "Not sure"],
    ["아이에스에프제이", "ISFJ", "ISFJ", "ISFJ"],
    ["아이엔에프피", "INFP", "INFP", "INFP"],
    ["이에스에프피", "ESFP", "ESFP", "ESFP"],
    ["이엔에프제이", "ENFJ", "ENFJ", "ENFJ"],
    ["아이엔티제이", "INTJ", "INTJ", "INTJ"],
    ["이엔티피", "ENTP", "ENTP", "ENTP"],
    ["이에스티제이", "ESTJ", "ESTJ", "ESTJ"],
    ["여행 시간대", "旅行する時間帯", "旅行时段", "Travel time"],
    ["현재 위치", "現在地", "当前位置", "Current location"],
    ["오늘 날씨", "今日の天気", "今日天气", "Today's weather"],
    ["여행 날짜", "旅行日", "旅行日期", "Travel date"],
    ["출발 시간대", "出発時間帯", "出发时段", "Starting time"],
    ["출발 위치", "出発地", "出发位置", "Starting location"],
    ["좋아하는 음식 분야", "好きな料理", "喜欢的食物类型", "Favorite food type"],
    ["음식 취향 검사", "食の好み診断", "饮食偏好测试", "Food preference test"],
    ["먹고 싶은 시간과 음식 취향을 알려주면 맞춤 메뉴를 골라드려요.", "食べたい時間と好みから、あなたに合うメニューを選びます。", "告诉我们用餐时间和饮食喜好，我们会选择合适的菜单。", "Tell us when and what you like to eat for matched menu picks."],
    ["식사 시간", "食事時間", "用餐时间", "Meal time"],
    ["해산물", "海鮮", "海鲜", "Seafood"],
    ["고기", "肉料理", "肉类", "Meat"],
    ["국물 음식", "スープ料理", "汤类食物", "Soup dishes"],
    ["날것", "生もの", "生食", "Raw food"],
    ["매운 음식", "辛い料理", "辛辣食物", "Spicy food"],
    ["좋아해요", "好き", "喜欢", "I like it"],
    ["먹지 않아요", "食べない", "不吃", "I don't eat it"],
    ["상관없어요", "どちらでも", "都可以", "No preference"],
    ["해산물 제외", "海鮮なし", "不含海鲜", "No seafood"],
    ["고기 제외", "肉なし", "不含肉类", "No meat"],
    ["날것 제외", "生ものなし", "不含生食", "No raw food"],
    ["매운맛 제외", "辛くないもの", "不吃辣", "No spicy food"],
    ["상관없음", "どちらでも", "都可以", "No preference"],
    ["1. 어느 정도 맵기의 음식을 드실 수 있으신가요?", "1. どのくらい辛い料理を食べられますか？", "1. 您能吃多辣的食物？", "1. How much spice can you handle?"],
    ["A · 불닭볶음면 정도", "A · ブルダック炒め麺くらい", "A · 火鸡面程度", "A · Buldak noodle level"],
    ["B · 신라면 정도", "B · 辛ラーメンくらい", "B · 辛拉面程度", "B · Shin Ramyun level"],
    ["C · 거의 못 먹는다", "C · ほとんど食べられない", "C · 几乎不能吃辣", "C · Almost no spice"],
    ["2. 날것을 드실 수 있으신가요?", "2. 生ものを食べられますか？", "2. 您能吃生食吗？", "2. Can you eat raw food?"],
    ["A · 네", "A · はい", "A · 可以", "A · Yes"],
    ["B · 아니오", "B · いいえ", "B · 不可以", "B · No"],
    ["3. 한국에서만 즐길 수 있는 음식을 드셔보고 싶으신가요?", "3. 韓国ならではの料理に挑戦したいですか？", "3. 想尝试只有在韩国才能享用的食物吗？", "3. Would you like to try food unique to Korea?"],
    ["A · 네 (처음 보는 음식도 괜찮아요)", "A · はい（初めて見る料理でも大丈夫）", "A · 是（没见过的食物也可以）", "A · Yes (new foods are welcome)"],
    ["B · 도전하기 쉬운 음식을 먹고 싶어요", "B · 挑戦しやすい料理がいい", "B · 想吃容易尝试的食物", "B · I prefer approachable food"],
    ["4. 어떤 음식 유형을 선호하시나요?", "4. どの調理タイプが好きですか？", "4. 您喜欢哪种食物类型？", "4. Which cooking style do you prefer?"],
    ["A · 볶음 음식", "A · 炒め料理", "A · 炒制食物", "A · Stir-fried"],
    ["B · 구운 음식", "B · 焼き料理", "B · 烤制食物", "B · Grilled"],
    ["C · 국물 음식", "C · スープ料理", "C · 汤类食物", "C · Soup"],
    ["매우 매움", "とても辛い", "非常辣", "Very spicy"],
    ["보통 매움", "ほどよく辛い", "中等辣", "Moderately spicy"],
    ["한국 향토", "韓国郷土料理", "韩国特色", "Korean specialty"],
    ["도전 쉬움", "挑戦しやすい", "容易尝试", "Approachable"],
    ["볶음", "炒め", "炒制", "Stir-fried"],
    ["구이", "焼き", "烤制", "Grilled"],
    ["오전", "午前", "上午", "Morning"],
    ["오후", "午後", "下午", "Afternoon"],
    ["저녁", "夜", "晚上", "Evening"],
    ["아침", "朝", "早晨", "Breakfast"],
    ["점심", "昼", "中午", "Lunch"],
    ["부산역", "釜山駅", "釜山站", "Busan Station"],
    ["해운대", "海雲台", "海云台", "Haeundae"],
    ["서면", "西面", "西面", "Seomyeon"],
    ["광안리", "広安里", "广安里", "Gwangalli"],
    ["남포동", "南浦洞", "南浦洞", "Nampo-dong"],
    ["맑음", "晴れ", "晴天", "Sunny"],
    ["흐림", "曇り", "多云", "Cloudy"],
    ["비", "雨", "下雨", "Rainy"],
    ["한식", "韓国料理", "韩餐", "Korean food"],
    ["해산물", "海鮮", "海鲜", "Seafood"],
    ["고기", "肉料理", "肉类", "Meat"],
    ["면", "麺料理", "面食", "Noodles"],
    ["중식", "中華料理", "中餐", "Chinese food"],
    ["양식", "洋食", "西餐", "Western food"],
    ["길거리 음식", "屋台料理", "街头小吃", "Street food"],
    ["국물", "スープ料理", "汤类", "Soup"],
    ["성격 유형 모름", "性格タイプ不明", "不确定性格类型", "Personality type unknown"],
    ["취향 일치", "好み一致", "喜好匹配", "Match"],
    ["평점", "評価", "评分", "Rating"],
    ["한줄 리뷰", "ひとことレビュー", "一句点评", "Quick review"],
    ["지도에서 확인하기", "地図で確認", "在地图上查看", "View on map"],
    ["여행 시작", "旅をスタート", "开始旅行", "Start here"],
    ["추천 이동", "次のおすすめへ", "前往下一站", "Next stop"],
    ["오전 7시~8시", "午前7時〜8時", "上午7点至8点", "7–8 AM"],
    ["정오 12시~오후 1시", "正午12時〜午後1時", "中午12点至下午1点", "12–1 PM"],
    ["오후 6시~7시", "午後6時〜7時", "下午6点至7点", "6–7 PM"],
    ["오전 8시", "午前8時", "上午8点", "8 AM"],
    ["오후 1시", "午後1時", "下午1点", "1 PM"],
    ["오후 6시", "午後6時", "下午6点", "6 PM"],
    ["추천 결과를 파일로 저장했어요.", "おすすめ結果をファイルに保存しました。", "推荐结果已保存为文件。", "Your recommendations were saved."],
    ["마! 어데가노 머먹노? 맞춤 추천", "釜山おすすめ結果", "釜山个性化推荐", "Busan Recommendations"],
    ["선택 언어", "選択言語", "所选语言", "Selected language"],
    ["※ 수업용 시제품의 예시 데이터입니다. 방문 전 운영 정보를 확인해 주세요.", "※ 授業用プロトタイプのサンプルです。訪問前に営業情報をご確認ください。", "※ 本内容为课堂原型示例数据。前往前请确认营业信息。", "※ Sample data for a classroom prototype. Check current opening information before visiting."],

    // 관광지
    ["광안리해수욕장", "広安里海水浴場", "广安里海水浴场", "Gwangalli Beach"],
    ["바다 · 야경", "海 · 夜景", "大海 · 夜景", "Sea · Night view"],
    ["광안대교와 부산의 밤바다를 한눈에 즐길 수 있는 활기찬 해변이에요.", "広安大橋と釜山の夜の海を一望できる、活気あふれるビーチです。", "这里是充满活力的海滩，可以一览广安大桥和釜山夜海。", "A lively beach with sweeping views of Gwangan Bridge and Busan's night sea."],
    ["해 질 무렵부터 야경까지 분위기가 정말 좋아요.", "夕暮れから夜景まで、とても雰囲気が良いです。", "从日落到夜景时分，氛围都非常好。", "The atmosphere is wonderful from sunset through the night."],
    ["야경 명소", "夜景スポット", "夜景胜地", "Night view"],
    ["산책", "散歩", "散步", "Walk"],
    ["사진", "写真", "拍照", "Photos"],
    ["해운대해수욕장", "海雲台海水浴場", "海云台海水浴场", "Haeundae Beach"],
    ["바다 · 도심", "海 · 都市", "大海 · 城市", "Sea · City"],
    ["부산을 대표하는 넓은 백사장과 도심의 즐길 거리가 함께 있는 명소예요.", "釜山を代表する広い砂浜と、街の楽しみがそろう名所です。", "这里有釜山代表性的宽阔沙滩，也有丰富的城市娱乐。", "Busan's signature wide beach, surrounded by plenty to enjoy in the city."],
    ["처음 부산에 왔다면 꼭 들를 만한 대표 장소예요.", "初めての釜山なら、ぜひ立ち寄りたい定番スポットです。", "第一次来釜山，这里是非常值得到访的代表景点。", "A must-see signature spot for your first trip to Busan."],
    ["부산 대표", "釜山の定番", "釜山代表", "Busan icon"],
    ["대중교통", "公共交通", "公共交通", "Public transit"],
    ["바다", "海", "大海", "Sea"],
    ["감천문화마을", "甘川文化村", "甘川文化村", "Gamcheon Culture Village"],
    ["마을 · 예술", "街 · アート", "村落 · 艺术", "Village · Art"],
    ["알록달록한 집과 골목 예술이 어우러진 부산의 대표 문화 마을이에요.", "色鮮やかな家と路地アートが調和する、釜山を代表する文化村です。", "五彩房屋与巷弄艺术相互交融，是釜山代表性的文化村。", "A colorful hillside village where bright homes and alley art come together."],
    ["골목마다 작은 작품이 있어 천천히 걷기 좋아요.", "路地ごとに小さな作品があり、ゆっくり歩くのにぴったりです。", "每条小巷都有小作品，很适合慢慢散步。", "Small artworks fill the alleys, making it perfect for a slow walk."],
    ["골목 여행", "路地歩き", "巷弄之旅", "Alley walk"],
    ["예술", "アート", "艺术", "Art"],
    ["전망", "眺望", "景观", "View"],
    ["흰여울문화마을", "ヒンヨウル文化村", "白浅文化村", "Huinnyeoul Culture Village"],
    ["마을 · 바다", "街 · 海", "村落 · 大海", "Village · Sea"],
    ["하얀 골목 아래로 영도 바다가 펼쳐지는 조용하고 감성적인 산책길이에요.", "白い路地の下に影島の海が広がる、静かで情緒ある散歩道です。", "白色小巷下方铺展开影岛海景，是一条安静又有氛围的步道。", "A quiet, atmospheric white alley walk overlooking the sea off Yeongdo."],
    ["바다를 보며 골목을 걷는 시간이 영화처럼 느껴져요.", "海を眺めながら路地を歩く時間が、映画のワンシーンのようです。", "沿着小巷看海，仿佛置身电影场景。", "Walking the alleys beside the sea feels like a scene from a film."],
    ["감성 사진", "雰囲気写真", "氛围照片", "Atmospheric photos"],
    ["바다 전망", "オーシャンビュー", "海景", "Ocean view"],
    ["태종대", "太宗台", "太宗台", "Taejongdae"],
    ["자연 · 절경", "自然 · 絶景", "自然 · 绝景", "Nature · Scenery"],
    ["울창한 숲과 바다 절벽을 함께 만나는 영도의 웅장한 자연 명소예요.", "深い森と海の断崖を一度に楽しめる、影島の雄大な自然名所です。", "在影岛这处壮丽自然景点，可以同时欣赏茂密森林与海边悬崖。", "A dramatic Yeongdo nature spot combining dense forest and sea cliffs."],
    ["전망대에서 보는 탁 트인 바다가 시원하고 멋져요.", "展望台から眺める広い海は、爽快で見事です。", "从观景台眺望开阔大海，清爽又壮观。", "The wide-open sea from the observatory is refreshing and spectacular."],
    ["자연", "自然", "自然", "Nature"],
    ["전망대", "展望台", "观景台", "Observatory"],
    ["걷기", "ウォーキング", "徒步", "Walking"],
    ["송도해상케이블카", "松島海上ケーブルカー", "松岛海上缆车", "Songdo Marine Cable Car"],
    ["체험 · 전망", "体験 · 眺望", "体验 · 景观", "Experience · View"],
    ["바다 위를 가로지르며 송도 해안과 도시 풍경을 감상하는 특별한 체험이에요.", "海の上を渡りながら、松島の海岸と街並みを楽しめる特別な体験です。", "乘缆车横越海面，欣赏松岛海岸和城市风景。", "A special ride over the sea with views of Songdo's coast and cityscape."],
    ["바닥이 보이는 칸은 짜릿하고 풍경도 정말 멋져요.", "床が透明なゴンドラはスリル満点で、景色も素晴らしいです。", "透明地板车厢很刺激，风景也非常漂亮。", "The glass-floor cabin is thrilling, and the views are fantastic."],
    ["이색 체험", "ユニーク体験", "特色体验", "Unique experience"],
    ["가족", "家族", "家庭", "Family"],
    ["해동용궁사", "海東龍宮寺", "海东龙宫寺", "Haedong Yonggungsa Temple"],
    ["사찰 · 바다", "寺院 · 海", "寺庙 · 大海", "Temple · Sea"],
    ["푸른 바다 바로 옆에 자리한 아름다운 사찰에서 특별한 부산 풍경을 만나요.", "青い海のすぐそばに建つ美しい寺院で、特別な釜山の景色に出会えます。", "在紧邻蓝色大海的美丽寺庙中，欣赏独特的釜山风景。", "A beautiful seaside temple offering one of Busan's most distinctive views."],
    ["이른 아침에 가면 비교적 조용하게 바다와 사찰을 볼 수 있어요.", "早朝なら、比較的静かに海と寺院を楽しめます。", "清晨前往，可以较安静地欣赏大海和寺庙。", "Visit early for a quieter view of the temple and sea."],
    ["전통 문화", "伝統文化", "传统文化", "Traditional culture"],
    ["아침", "朝", "早晨", "Morning"],
    ["국립해양박물관", "国立海洋博物館", "国立海洋博物馆", "Korea National Maritime Museum"],
    ["박물관 · 실내", "博物館 · 屋内", "博物馆 · 室内", "Museum · Indoor"],
    ["한국의 바다 역사와 해양 생물을 편안한 실내에서 즐기는 박물관이에요.", "韓国の海の歴史や海洋生物を、快適な屋内で学べる博物館です。", "可以在舒适的室内了解韩国海洋历史和海洋生物。", "An indoor museum exploring Korea's maritime history and marine life."],
    ["비 오는 날에도 알차고 편하게 둘러볼 수 있어요.", "雨の日でも、快適に充実した時間を過ごせます。", "下雨天也能舒适、充实地参观。", "A comfortable and rewarding place to explore on a rainy day."],
    ["비 오는 날", "雨の日", "雨天", "Rainy day"],
    ["실내", "屋内", "室内", "Indoor"],
    ["해양 문화", "海洋文化", "海洋文化", "Maritime culture"],

    // 맛집
    ["본전돼지국밥", "ポンジョン・テジクッパ", "本钱猪肉汤饭", "Bonjeon Dwaeji Gukbap"],
    ["돼지국밥", "テジクッパ", "猪肉汤饭", "Pork soup with rice"],
    ["부산역 근처에서 진한 국물과 부드러운 고기를 맛볼 수 있는 대표 국밥집이에요.", "釜山駅近くで濃厚なスープと柔らかい肉を味わえる、定番のクッパ店です。", "釜山站附近的代表汤饭店，汤汁浓郁，肉质软嫩。", "A popular soup-and-rice spot near Busan Station with rich broth and tender pork."],
    ["부산에 도착하자마자 든든한 한 끼로 좋아요.", "釜山に着いてすぐの、ボリュームある一食にぴったりです。", "抵达釜山后，很适合来一顿饱足的餐食。", "A hearty first meal as soon as you arrive in Busan."],
    ["부산 향토 음식", "釜山郷土料理", "釜山乡土美食", "Busan specialty"],
    ["든든한 식사", "ボリューム満点", "饱足一餐", "Hearty meal"],
    ["해운대암소갈비집", "海雲台アムソカルビチッ", "海云台母牛排骨店", "Haeundae Amsogalbi-jip"],
    ["고기 · 갈비", "肉 · カルビ", "肉类 · 排骨", "Meat · Short ribs"],
    ["해운대에서 달콤하고 부드러운 한우 갈비를 즐기는 오랜 부산 대표 맛집이에요.", "海雲台で甘く柔らかな韓牛カルビを楽しめる、長年愛される名店です。", "在海云台品尝香甜软嫩的韩牛排骨，是一家历史悠久的釜山名店。", "A long-loved Haeundae restaurant for sweet, tender Korean beef short ribs."],
    ["특별한 날 부산식 양념갈비를 경험하기 좋아요.", "特別な日に釜山風の味付けカルビを楽しむのにおすすめです。", "特别的日子里，很适合体验釜山风味腌制排骨。", "A great choice for Busan-style marinated ribs on a special day."],
    ["한우 갈비", "韓牛カルビ", "韩牛排骨", "Korean beef ribs"],
    ["특별한 식사", "特別な食事", "特别用餐", "Special meal"],
    ["수변최고돼지국밥 민락본점", "スビョンチェゴ・テジクッパ 民楽本店", "水边最佳猪肉汤饭 民乐总店", "Subyeon Choego Dwaeji Gukbap"],
    ["진하고 깔끔한 국물로 사랑받는 민락동의 부산식 돼지국밥 맛집이에요.", "濃厚で後味の良いスープが人気の、民楽洞のテジクッパ店です。", "位于民乐洞，以浓郁清爽汤底而受欢迎的釜山猪肉汤饭店。", "A Millak favorite known for rich yet clean-tasting Busan pork soup."],
    ["광안리 여행 전후에 따뜻하게 먹기 좋은 곳이에요.", "広安里観光の前後に、温かい一杯を楽しむのにぴったりです。", "在广安里游玩前后，很适合来一碗热乎的汤饭。", "A warming meal before or after exploring Gwangalli."],
    ["국물 음식", "スープ料理", "汤类美食", "Soup"],
    ["민락동", "民楽洞", "民乐洞", "Millak-dong"],
    ["혼밥", "ひとりご飯", "单人用餐", "Solo dining"],
    ["할매가야밀면", "ハルメ伽倻ミルミョン", "奶奶伽倻小麦冷面", "Halmae Gaya Milmyeon"],
    ["밀면", "ミルミョン", "小麦冷面", "Milmyeon noodles"],
    ["시원한 육수와 쫄깃한 면으로 부산의 별미인 밀면을 맛볼 수 있는 곳이에요.", "冷たいスープともちもち麺で、釜山名物ミルミョンを味わえる店です。", "可以品尝釜山特色小麦冷面，汤底清凉，面条筋道。", "A place to try Busan's milmyeon, with chilled broth and pleasantly chewy noodles."],
    ["더운 날 가볍고 시원하게 먹기 좋은 부산다운 한 끼예요.", "暑い日に軽くさっぱり食べられる、釜山らしい一食です。", "炎热天气里，是一顿清爽轻盈、很有釜山特色的美食。", "A light, refreshing Busan meal for a hot day."],
    ["부산 별미", "釜山名物", "釜山特色", "Busan specialty"],
    ["시원한 육수", "冷たいスープ", "清凉汤底", "Chilled broth"],
    ["가벼운 식사", "軽い食事", "轻食", "Light meal"],
    ["금수복국 해운대본점", "クムスボックッ 海雲台本店", "锦绣河豚汤 海云台总店", "Geumsu Bokguk Haeundae"],
    ["해산물 · 복국", "海鮮 · フグスープ", "海鲜 · 河豚汤", "Seafood · Pufferfish soup"],
    ["담백하고 맑은 복국으로 부산 바다의 맛을 편안하게 즐길 수 있는 식당이에요.", "あっさり澄んだフグスープで、釜山の海の味を気軽に楽しめる店です。", "以清淡透亮的河豚汤，轻松品尝釜山大海的味道。", "A relaxed place to enjoy Busan's coastal flavors through a clear, delicate pufferfish soup."],
    ["자극적이지 않고 시원한 국물이 아침 식사로도 좋아요.", "優しい味のすっきりしたスープは、朝食にもおすすめです。", "汤味清爽不刺激，也很适合早餐。", "The mild, refreshing broth works beautifully for breakfast."],
    ["복어요리", "フグ料理", "河豚料理", "Pufferfish"],
    ["맑은 국물", "澄んだスープ", "清汤", "Clear broth"],
    ["마가만두", "マガマンドゥ", "马家饺子", "Maga Mandu"],
    ["중식 · 만두", "中華 · 餃子", "中餐 · 饺子", "Chinese · Dumplings"],
    ["부산역 차이나타운에서 바삭하고 촉촉한 중국식 만두를 맛볼 수 있는 곳이에요.", "釜山駅のチャイナタウンで、香ばしくジューシーな中華餃子を楽しめる店です。", "在釜山站唐人街，可以品尝外酥里嫩的中式饺子。", "Crisp, juicy Chinese-style dumplings in Busan Station's Chinatown."],
    ["여럿이 다양한 만두를 나누어 먹기 좋아요.", "何人かでさまざまな餃子をシェアするのにぴったりです。", "很适合多人一起分享各种饺子。", "Ideal for sharing several kinds of dumplings with friends."],
    ["차이나타운", "チャイナタウン", "唐人街", "Chinatown"],
    ["만두", "餃子", "饺子", "Dumplings"],
    ["나눠 먹기", "シェア", "分享", "Sharing"],
    ["이재모피자 부산본점", "イ・ジェモピザ 釜山本店", "李在模披萨 釜山总店", "Lee Jae-mo Pizza"],
    ["양식 · 피자", "洋食 · ピザ", "西餐 · 披萨", "Western · Pizza"],
    ["풍부한 치즈와 푸짐한 토핑으로 오랫동안 사랑받는 부산의 유명 피자집이에요.", "たっぷりのチーズと具材で長年愛される、釜山の有名ピザ店です。", "芝士浓郁、配料丰富，是一家长期受欢迎的釜山披萨店。", "A famous Busan pizza spot long loved for generous cheese and toppings."],
    ["익숙한 음식이 생각날 때 편하고 맛있게 즐길 수 있어요.", "食べ慣れた味が恋しいときに、気軽においしく楽しめます。", "想吃熟悉口味时，可以轻松享用美味的一餐。", "A comforting, delicious choice when you crave something familiar."],
    ["치즈", "チーズ", "芝士", "Cheese"],
    ["가족 식사", "家族の食事", "家庭用餐", "Family meal"],
    ["부평깡통시장 먹자골목", "富平カントン市場 グルメ通り", "富平罐头市场美食街", "Bupyeong Kkangtong Market Food Alley"],
    ["떡볶이부터 씨앗호떡까지 여러 부산 길거리 음식을 한자리에서 경험해요.", "トッポッキからシアホットクまで、釜山の屋台料理を一度に楽しめます。", "从辣炒年糕到坚果糖饼，可以一次体验多种釜山街头小吃。", "Try several Busan street foods in one place, from tteokbokki to seed hotteok."],
    ["조금씩 여러 음식을 맛보며 시장 구경까지 하기 좋아요.", "少しずつ色々な料理を味わいながら、市場散策も楽しめます。", "可以少量品尝多种美食，同时逛逛市场。", "Perfect for sampling several foods while exploring the market."],
    ["시장", "市場", "市场", "Market"],
    ["간식", "軽食", "小吃", "Snacks"],
    ["여러 메뉴", "多彩なメニュー", "多种菜单", "Many choices"],

    // 소요 시간
    ["약 1시간 30분", "約1時間30分", "约1小时30分钟", "About 1 hr 30 min"],
    ["약 2시간", "約2時間", "约2小时", "About 2 hours"],
    ["약 2시간 30분", "約2時間30分", "约2小时30分钟", "About 2 hr 30 min"],
    ["식사 약 50분", "食事 約50分", "用餐约50分钟", "Meal: about 50 min"],
    ["식사 약 1시간 20분", "食事 約1時間20分", "用餐约1小时20分钟", "Meal: about 1 hr 20 min"],
    ["식사 약 45분", "食事 約45分", "用餐约45分钟", "Meal: about 45 min"],
    ["식사 약 1시간", "食事 約1時間", "用餐约1小时", "Meal: about 1 hour"],
    ["식사 약 1시간 10분", "食事 約1時間10分", "用餐约1小时10分钟", "Meal: about 1 hr 10 min"],
    ["약 1시간 20분", "約1時間20分", "约1小时20分钟", "About 1 hr 20 min"],
  ];

  const languageIndex = { ko: 0, ja: 1, zh: 2, en: 3 };
  const valueToLanguage = { 한국어: "ko", 일본어: "ja", 중국어: "zh", 영어: "en" };
  const dictionaries = { ko: new Map(), ja: new Map(), zh: new Map(), en: new Map() };
  rows.forEach((row) => {
    Object.entries(languageIndex).forEach(([language, index]) => {
      dictionaries[language].set(row[0], row[index]);
    });
  });

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();

  function getLanguage() {
    const value = document.querySelector('input[name="language"]:checked')?.value || "한국어";
    return valueToLanguage[value] || "ko";
  }

  function translate(source, language = getLanguage()) {
    if (!source || language === "ko") return source;
    const exact = dictionaries[language].get(source);
    if (exact) return exact;

    const scoreMatch = source.match(/^취향 일치\s+(\d+)%$/);
    if (scoreMatch) return `${translate("취향 일치", language)} ${scoreMatch[1]}%`;

    const reviewMatch = source.match(/^·\s*“(.+)”$/);
    if (reviewMatch) return `· “${translate(reviewMatch[1], language)}”`;

    const departureMatch = source.match(/^(.+) 출발$/);
    if (departureMatch) {
      const place = translate(departureMatch[1], language);
      if (language === "ja") return `${place}発`;
      if (language === "zh") return `从${place}出发`;
      return `From ${place}`;
    }

    const routeMatch = source.match(/^(.+) · (여행 시작|추천 이동)$/);
    if (routeMatch) return `${translate(routeMatch[1], language)} · ${translate(routeMatch[2], language)}`;

    const timeMatch = source.match(/^(오전|오후)\s+(\d+)시$/);
    if (timeMatch) {
      const hour = timeMatch[2];
      if (language === "ja") return `${translate(timeMatch[1], language)}${hour}時`;
      if (language === "zh") return `${translate(timeMatch[1], language)}${hour}点`;
      return `${translate(timeMatch[1], language)} ${hour}:00`;
    }

    return source;
  }

  function translateTextNode(node, language) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const trimmed = source.trim();
    if (!trimmed) return;
    const leading = source.match(/^\s*/)?.[0] || "";
    const trailing = source.match(/\s*$/)?.[0] || "";
    node.nodeValue = leading + translate(trimmed, language) + trailing;
  }

  function translateAttributes(element, language) {
    const attributes = ["aria-label", "content"];
    if (!originalAttributes.has(element)) originalAttributes.set(element, {});
    const saved = originalAttributes.get(element);
    attributes.forEach((attribute) => {
      if (!element.hasAttribute?.(attribute)) return;
      if (!(attribute in saved)) saved[attribute] = element.getAttribute(attribute);
      element.setAttribute(attribute, translate(saved[attribute], language));
    });
  }

  function translateTree(root = document.documentElement) {
    const language = getLanguage();
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;

    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root, language);
      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    if (root.matches?.("script, style, [data-i18n-skip]")) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root, language);

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (node.nodeType === Node.ELEMENT_NODE && node.matches("script, style, [data-i18n-skip]")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    let node = walker.nextNode();
    while (node) {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node, language);
      else translateAttributes(node, language);
      node = walker.nextNode();
    }
  }

  function downloadResult(state) {
    const language = valueToLanguage[state.language] || getLanguage();
    const lines = [
      translate("마! 어데가노 머먹노? 맞춤 추천", language),
      `${translate("선택 언어", language)}: ${translate(state.language, language)}`,
      "",
      ...state.recommendations.map(
        (place, index) =>
          `${index + 1}. ${translate(place.name, language)} (${translate(place.category, language)})\n   ${translate(place.description, language)}`,
      ),
      "",
      translate("※ 수업용 시제품의 예시 데이터입니다. 방문 전 운영 정보를 확인해 주세요.", language),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const fileNames = {
      ko: "마_어데가노_머먹노_추천결과.txt",
      ja: "釜山ひとめぐり_おすすめ結果.txt",
      zh: "釜山一圈_推荐结果.txt",
      en: "Busan_Loop_Recommendations.txt",
    };
    link.href = url;
    link.download = fileNames[language];
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  document.querySelectorAll('input[name="language"]').forEach((input) => {
    input.addEventListener("change", () => translateTree());
  });

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => translateTree(node));
    });
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });

  window.BusanI18n = { t: translate, getLanguage, translateTree, downloadResult };
  translateTree();
})();
