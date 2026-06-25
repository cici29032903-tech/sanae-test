// ライフパスナンバー データ（方式A: 1〜9に統一）
const LIFEPATH_DATA = {
  1: {
    title: "始まりの人",
    keywords: "リーダーシップ・独立心・開拓者",
    stone: "カーネリアン / サンストーン",
    stoneDesc: "行動力と情熱を高め、新しい一歩を踏み出す勇気を与えてくれる石です。",
    messages: [
      "迷ったら、まず一歩踏み出して。あなたの直感はいつも正しい方向を知っています。",
      "誰かの後をついていくより、自分の道を歩くあなたらしさを今日も大切に。",
      "あなたが先頭に立つことで、周りが動き始めます。今日の一歩が歴史になります。",
      "失敗を恐れなくていい。あなたには何度でも立ち上がる力があります。",
      "自分を信じることが、すべての始まりです。今日のあなたはどこへ向かいますか？",
    ],
  },
  2: {
    title: "調和の人",
    keywords: "協調性・繊細さ・聞き上手",
    stone: "ムーンストーン / ローズクォーツ",
    stoneDesc: "感情を穏やかに整え、人との絆を深めてくれる石です。",
    messages: [
      "一人で抱え込まなくていい日。誰かに頼ることも、あなたの優しさのひとつです。",
      "今日は周りの声に耳を傾けてみて。思いがけないヒントがもらえるかも。",
      "あなたの繊細さは弱さじゃない。人の気持ちを感じ取れる、特別な才能です。",
      "バランスを大切にするあなたが、場の空気を守っています。気づいていますか？",
      "今日は自分の気持ちを大切にして。あなたの感情も、ちゃんと話を聞いてほしがっています。",
    ],
  },
  3: {
    title: "表現の人",
    keywords: "創造性・社交性・明るさ",
    stone: "シトリン / サンストーン",
    stoneDesc: "創造力と明るいエネルギーを引き出し、表現する喜びを高めてくれる石です。",
    messages: [
      "言葉にすることを恐れないで。あなたの発する一言が誰かの心を動かします。",
      "楽しいと感じることに、今日はもう少し時間を使ってみて。",
      "あなたの笑顔が場の空気を変えます。今日も明るさを分けてあげてください。",
      "創り出すことに意味があります。完璧じゃなくていい、まず形にしてみて。",
      "あなたのアイデアは誰も思いつかないもの。自分の感性を信じてください。",
    ],
  },
  4: {
    title: "積み重ねの人",
    keywords: "堅実さ・誠実さ・忍耐力",
    stone: "タイガーアイ / ヘマタイト",
    stoneDesc: "地に足のついた力強さと、ブレない意志を支えてくれる石です。",
    messages: [
      "焦らなくて大丈夫。あなたが積み重ねてきたものは、ちゃんと形になっています。",
      "今日の小さな一歩が、未来の大きな安心につながります。",
      "コツコツ続けるあなたの姿が、誰かの目標になっています。",
      "丁寧に生きることは、一番強い生き方です。あなたのペースで進んでください。",
      "信頼は一日では作れない。でも毎日の誠実さが、やがて大きな財産になります。",
    ],
  },
  5: {
    title: "自由の人",
    keywords: "冒険心・変化を楽しむ・好奇心",
    stone: "アクアマリン / ラブラドライト",
    stoneDesc: "変化への適応力と冒険心を高め、新しい世界への扉を開いてくれる石です。",
    messages: [
      "予定通りじゃなくても大丈夫。今日はちょっとした変化を楽しんでみて。",
      "新しいことに触れるたび、あなたの世界は広がっていきます。",
      "自由を求めるあなたの心は、いつも本能的に正しい方向を知っています。",
      "枠にはまらなくていい。あなたらしい生き方が、一番輝いています。",
      "今日は直感に従って動いてみて。思いがけない出会いが待っているかもしれません。",
    ],
  },
  6: {
    title: "愛情の人",
    keywords: "思いやり・家族を大切にする・世話好き",
    stone: "ローズクォーツ / インカローズ",
    stoneDesc: "愛情と調和のエネルギーを高め、大切な人との絆を深めてくれる石です。",
    messages: [
      "大切な人のことを考える前に、まず自分を大事にしてあげて。",
      "あなたが与えてきた優しさは、ちゃんと巡って返ってきます。",
      "愛することが得意なあなたへ。今日は自分自身も愛してください。",
      "あなたのそばにいると、なぜか安心できる。それがあなたの最大の魅力です。",
      "責任感の強いあなたへ。完璧じゃなくていい、今の自分で十分です。",
    ],
  },
  7: {
    title: "探求の人",
    keywords: "洞察力・内省・スピリチュアルな感性",
    stone: "アメジスト / ラピスラズリ",
    stoneDesc: "直感と洞察力を高め、内なる智慧と繋がらせてくれる石です。",
    messages: [
      "答えを急がなくていい。今日はじっくり自分の内側と向き合う時間を。",
      "ふと感じた違和感に、あなたの本音が隠れています。",
      "深く考えるあなたは、表面に見えないものを見抜いています。その力を信じて。",
      "一人の時間はあなたにとって必要なもの。充電することで、また輝けます。",
      "あなたが探し続けているものは、すでにあなたの中にあります。",
    ],
  },
  8: {
    title: "豊かさの人",
    keywords: "実行力・責任感・成功への意志",
    stone: "パイライト / タイガーアイ",
    stoneDesc: "豊かさを引き寄せる力と、目標を達成する意志力を高めてくれる石です。",
    messages: [
      "今日の選択が、未来の豊かさにつながっていきます。自分を信じて。",
      "結果を焦らず、今できることに集中してみて。",
      "大きなことを成し遂げる前に、今日の小さな決断を丁寧に。",
      "あなたには人を動かす力があります。その力を良い方向に使ってください。",
      "豊かさはお金だけじゃない。今日あなたの周りにあるものに感謝してみて。",
    ],
  },
  9: {
    title: "慈愛の人",
    keywords: "博愛・包容力・奉仕の精神",
    stone: "アメジスト / ムーンストーン",
    stoneDesc: "広い愛と精神的な浄化をもたらし、魂の成長を支えてくれる石です。",
    messages: [
      "誰かのために動いた今日のあなたを、ちゃんと労ってあげて。",
      "広い心で見てきたものが、いつかあなた自身を助けてくれます。",
      "あなたの包容力が、誰かの救いになっています。気づいていますか？",
      "終わりは新しい始まりです。手放すことを怖れないで。",
      "あなたが与えた愛は、世界のどこかでちゃんと生き続けています。",
    ],
  },
};

// LINE公式アカウントのURL（実際のURLに差し替えてください）
const LINE_URL = "https://lin.ee/XXXXXXXX";

/**
 * ライフパスナンバーを計算する（方式A: 1〜9）
 * @param {string} dateStr - "YYYY-MM-DD" 形式
 * @returns {number} 1〜9
 */
function calcLifePath(dateStr) {
  const digits = dateStr.replace(/-/g, "").split("").map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum >= 10) {
    sum = String(sum).split("").reduce((a, b) => a + Number(b), 0);
  }
  return sum === 0 ? 9 : sum; // 0になった場合は9として扱う
}

/**
 * 配列からランダムに1つ取得する
 */
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * 画面を切り替える
 */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

/**
 * 診断を開始する
 */
function startDiagnosis() {
  const input = document.getElementById("birthdate-input");
  const dateStr = input.value;

  if (!dateStr) {
    input.style.borderColor = "#e06060";
    input.focus();
    setTimeout(() => (input.style.borderColor = ""), 2000);
    return;
  }

  showScreen("screen-loading");

  // 診断アニメーション（1.8秒）
  setTimeout(() => {
    const num = calcLifePath(dateStr);
    renderResult(num);
    showScreen("screen-result");
  }, 1800);
}

/**
 * 結果を描画する
 */
function renderResult(num) {
  const data = LIFEPATH_DATA[num];
  if (!data) return;

  document.getElementById("result-number").textContent = num;
  document.getElementById("result-title").textContent = data.title;
  document.getElementById("result-keywords").textContent = data.keywords;
  document.getElementById("result-stone").textContent = data.stone;
  document.getElementById("result-stone-desc").textContent = data.stoneDesc;
  document.getElementById("result-message").textContent = pickRandom(data.messages);

  // LINEボタンのURLを設定
  const lineBtn = document.getElementById("line-btn");
  lineBtn.href = LINE_URL;
}

/**
 * 最初の画面に戻る
 */
function resetDiagnosis() {
  document.getElementById("birthdate-input").value = "";
  showScreen("screen-top");
}
