// 石の意味データ
const STONE_DATA = {
  amethyst: {
    name: "アメジスト",
    emoji: "💜",
    keywords: "浄化・直感・心の平和",
    meaning: "心を静め、ネガティブなエネルギーを払ってくれる石。眠れない夜や、考えすぎてしまう時そばに置くと、ふっと気持ちが楽になります。直感を高める力もあるので、大切な決断の前にも。",
  },
  rose: {
    name: "ローズクォーツ",
    emoji: "🩷",
    keywords: "愛情・自己肯定・癒し",
    meaning: "愛のエネルギーをもたらす石。恋愛運だけでなく、「自分を愛すること」を思い出させてくれます。人間関係がうまくいかない時、心が傷ついた時に、そっと支えてくれます。",
  },
  tiger: {
    name: "タイガーアイ",
    emoji: "🟡",
    keywords: "決断力・行動力・金運",
    meaning: "迷いを断ち切り、前に進む力をくれる石。仕事やお金まわりで不安を感じている時、「やってみよう」と背中を押してくれます。怠け心に喝を入れたい時にも。",
  },
  moonstone: {
    name: "ムーンストーン",
    emoji: "🤍",
    keywords: "直感・感情の安定・新しい始まり",
    meaning: "月の石とも呼ばれ、感情の波を穏やかに整えてくれます。感受性が強い人、生理前後に気持ちが揺れやすい人にとても相性が良い石。新しいことを始める時に持つと、流れが良くなります。",
  },
  citrine: {
    name: "シトリン",
    emoji: "🌟",
    keywords: "明るさ・金運・自信",
    meaning: "太陽のような明るいエネルギーを持つ石。気持ちが沈んでいる時、自信をなくしている時にそばに置くと、ぽかぽかと温かくなってくる感じがします。仕事運・金運を引き寄せるとも言われます。",
  },
  labradorite: {
    name: "ラブラドライト",
    emoji: "✨",
    keywords: "変化・魔除け・神秘性",
    meaning: "光の当て方で色が変わる、神秘的な石。変化の時期を後押ししてくれたり、外からの悪いエネルギーをブロックする力があります。「なんか最近変だな」と感じる時に持ちたい石。",
  },
  hematite: {
    name: "ヘマタイト",
    emoji: "🖤",
    keywords: "グラウンディング・集中・意志力",
    meaning: "地に足をつけさせてくれる石。ふわふわして落ち着かない時、感情的になりすぎている時に効果的。試験や大事な仕事の前に持つと、集中力が増します。",
  },
  pyrite: {
    name: "パイライト",
    emoji: "🌕",
    keywords: "金運・豊かさ・行動力",
    meaning: "「愚者の金」とも呼ばれますが、実は本物の豊かさを引き寄せるパワーストーン。お金の流れを良くしたい、仕事で結果を出したい時に持ちたい石です。見た目のキラキラも気持ちを明るくしてくれます。",
  },
  carnelian: {
    name: "カーネリアン",
    emoji: "🧡",
    keywords: "行動力・情熱・創造性",
    meaning: "情熱と行動力に火をつける石。「やりたいけど踏み出せない」という時のお守りになります。創造的な仕事をしている人にも相性が良く、アイデアが浮かびやすくなると言われています。",
  },
  lapis: {
    name: "ラピスラズリ",
    emoji: "💙",
    keywords: "知恵・真実・精神的な力",
    meaning: "古代から王族に愛されてきた石。自分の本音・本質を見つけたい時に力を貸してくれます。コミュニケーションを良くする働きもあるため、人に何かを伝える仕事の方にもおすすめです。",
  },
  selenite: {
    name: "セレナイト",
    emoji: "🕯️",
    keywords: "浄化・癒し・静けさ",
    meaning: "疲れた心と体をリセットしてくれる浄化の石。他の石を浄化する力もあるため、石コレクターの必需品。一日の終わりにそばに置いて眠ると、翌朝すっきりした感覚になれます。",
  },
  aquamarine: {
    name: "アクアマリン",
    emoji: "🩵",
    keywords: "勇気・コミュニケーション・冷静さ",
    meaning: "海のような澄んだエネルギーを持つ石。感情が激しい時に冷静さを取り戻させてくれます。旅のお守りとしても知られ、新しい環境や変化を楽しめるようにしてくれます。",
  },
};

// 石の詳細を表示/非表示
function toggleStone(key) {
  const data = STONE_DATA[key];
  if (!data) return;

  const detail = document.getElementById("stone-detail-inner");
  const allChips = document.querySelectorAll(".stone-chip");

  // 同じ石を再タップしたら閉じる
  if (detail.dataset.current === key) {
    detail.innerHTML = '<p class="stone-detail-placeholder">気になる石をタップしてみてください</p>';
    delete detail.dataset.current;
    allChips.forEach((c) => c.classList.remove("active"));
    return;
  }

  detail.dataset.current = key;

  detail.innerHTML = `
    <div class="stone-detail-content">
      <div class="stone-detail-emoji">${data.emoji}</div>
      <div class="stone-detail-name">${data.name}</div>
      <span class="stone-detail-keyword">${data.keywords}</span>
      <p class="stone-detail-meaning">${data.meaning}</p>
    </div>
  `;

  allChips.forEach((c) => c.classList.remove("active"));
  document.querySelectorAll(".stone-chip").forEach((c) => {
    if (c.getAttribute("onclick").includes(key)) c.classList.add("active");
  });
}

// Q&Aアコーディオン
function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  const answer = item.querySelector(".faq-a");
  const isOpen = btn.classList.contains("open");

  // 他を全部閉じる
  document.querySelectorAll(".faq-q.open").forEach((openBtn) => {
    openBtn.classList.remove("open");
    openBtn.closest(".faq-item").querySelector(".faq-a").classList.remove("open");
  });

  if (!isOpen) {
    btn.classList.add("open");
    answer.classList.add("open");
  }
}
