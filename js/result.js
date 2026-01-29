const params = new URLSearchParams(window.location.search);
let type = params.get("type");

if (!type) {
  const score = JSON.parse(localStorage.getItem("parkScore"));
  if (!score) {
    document.body.innerHTML = "<p>診断データが見つかりません。</p>";
    throw new Error();
  }

  type =
    (score.E >= score.I ? "E" : "I") +
    (score.S >= score.N ? "S" : "N") +
    (score.T >= score.F ? "T" : "F") +
    (score.J >= score.P ? "J" : "P");
}

const resultMap = {
  ISTJ: {
    park: "浦上台トンネルの上公園",
    madness: 40,
    text: `秩序と規則を愛するあなたは、
「正しい公園の使い方」に強い執着を持ちます。

ベンチの位置、導線、植栽の配置。
乱れを見つけると無意識に修正したくなるでしょう。

※狂気は静かに、しかし確実に蓄積します。`
  },

  ISFJ: {
    park: "夏島グラウンド",
    madness: 45,
    text: `人のために動く優しさを持つあなた。
誰も使っていない公園でも「誰かの居場所」を感じ取ります。

ただし、
誰も来ない日が続くと「自分だけが守っている」という思考に陥りがち。

守護と執着は、紙一重です。`
  },

  INFJ: {
    park: "船越６丁目第３公園",
    madness: 80,
    text: `あなたは“意味”を感じ取る存在。

なぜこの場所に公園があるのか。
誰のために、何を隠すために作られたのか。

答えのない問いを抱え続け、
気づけば公園の方があなたを理解しているでしょう。`
  },

  INTJ: {
    park: "浦賀奉行所跡地公園",
    madness: 75,
    text: `構造と歴史を読むあなた。

公園は「偶然の空間」ではなく、
明確な意図の集合体だと知っています。

誰も気づかない因果関係を発見したとき、
あなたは静かに笑います。`
  },

  ISTP: {
    park: "桜が丘緑地",
    madness: 55,
    text: `感覚派のあなたは、
公園の地面の硬さや風向きを自然と把握します。

危険な場所ほど魅力的に見えるのが特徴。

ただし深入りは禁物。
公園は実験場ではありません。`
  },

  ISFP: {
    park: "吉倉公園",
    madness: 60,
    text: `美しさに敏感なあなた。

木漏れ日、夕焼け、季節の匂い。
一瞬の情景を強く記憶します。

その記憶が現実と混ざり始めた時、
あなたの中の境界線は薄くなります。`
  },

  INFP: {
    park: "佐島の丘１丁目第２都市林",
    madness: 85,
    text: `空想と感情の深層に生きるあなた。

この公園は「現実から少し外れた場所」です。

誰もいないはずなのに、
“誰かの気配”があなたを安心させます。

長時間の滞在はおすすめしません。`
  },

  INTP: {
    park: "野比はなわ公園",
    madness: 70,
    text: `あなたは観察者。

公園というシステムを外側から眺め、
「なぜ人はここで落ち着くのか」を考え続けます。

思考が深まるほど、
あなた自身が実験対象になっていきます。`
  },

  ESTP: {
    park: "大矢部みどりの公園",
    madness: 50,
    text: `刺激を求めるあなた。

公園は遊ぶ場所であり、試す場所。
危険すらスパイスに感じます。

ただし夜の公園だけは、
あなたを歓迎しすぎるかもしれません。`
  },

  ESFP: {
    park: "平成緑道緑地",
    madness: 45,
    text: `にぎやかなあなた。

人のいる公園でこそ輝きます。
笑い声と音楽があなたのエネルギー源。

ただ、誰もいない時間帯に入ると
急に不安が増幅します。`
  },

  ENFP: {
    park: "ペリー公園",
    madness: 65,
    text: `好奇心の塊であるあなた。

歴史、像、広場、空。
すべてが物語に見えます。

公園はあなたの想像力を無限に拡張しますが、
現実への帰還ルートを忘れないでください。`
  },

  ENTP: {
    park: "大津おりょうさん公園",
    madness: 60,
    text: `発想が止まらないあなた。

この公園を起点に、
突拍子もないアイデアが次々と生まれます。

ただし思考が暴走すると、
公園の方があなたを観察し始めます。`
  },

  ESTJ: {
    park: "腹切松公園",
    madness: 55,
    text: `秩序と責任を重んじるあなた。

この公園の名前が持つ重さを、
誰よりも現実的に受け止めます。

「管理すべきもの」がある限り、
あなたは離れられません。`
  },

  ESFJ: {
    park: "はまゆう公園",
    madness: 50,
    text: `人の集いを大切にするあなた。

公園は交流の場であり、
思い出の保管庫でもあります。

ただし“失われた思い出”が増えるほど、
この場所は重くなります。`
  },

  ENFJ: {
    park: "桜が丘公園",
    madness: 65,
    text: `人を導くあなた。

この公園で誰かが救われるなら、
あなたは何度でも足を運びます。

気づかぬうちに、
あなた自身の居場所を削っているかもしれません。`
  },

  ENTJ: {
    park: "日向公園",
    madness: 70,
    text: `決断と支配の人。

高台の公園から街を見下ろすと、
全体構造が手に取るように見えます。

ただし「管理できない感情」に直面したとき、
公園はあなたを試します。`
  }
};

const result = resultMap[type];

document.getElementById("type").innerText =
  `${type}｜${result.park}`;

document.getElementById("description").innerText =
  `狂気度：${result.madness}％\n\n${result.text}`;

document.getElementById("bar-inner").style.width =
  result.madness + "%";

document.getElementById("notice").innerText =
  new Date().getHours() < 5
    ? "※……この時間にここへ来た理由を、あなたは覚えていますか。"
    : "※診断は娯楽目的です。";

function shareResult() {
  const url = location.href;

  if (navigator.share) {
    navigator.share({
      title: "狂気の公園診断",
      text: "あなたの診断結果はこちら👇",
      url: url
    });
  } else {
    prompt("このURLをコピーしてシェアしてください", url);
  }
}
