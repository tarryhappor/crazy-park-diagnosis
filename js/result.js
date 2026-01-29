const score = JSON.parse(localStorage.getItem("parkScore"));

if (!score) {
  document.body.innerHTML = "<p>診断データが見つかりません。</p>";
} else {

  let type = "";
  type += score.E >= score.I ? "E" : "I";
  type += score.S >= score.N ? "S" : "N";
  type += score.T >= score.F ? "T" : "F";
  type += score.J >= score.P ? "J" : "P";

  const parkMap = {
    ISTJ: "浦上台トンネルの上公園",
    ISFJ: "夏島グラウンド",
    INFJ: "船越６丁目第３公園",
    INTJ: "浦賀奉行所跡地公園",
    ISTP: "桜が丘緑地",
    ISFP: "吉倉公園",
    INFP: "佐島の丘１丁目第２都市林",
    INTP: "野比はなわ公園",
    ESTP: "大矢部みどりの公園",
    ESFP: "平成緑道緑地",
    ENFP: "ペリー公園",
    ENTP: "大津おりょうさん公園",
    ESTJ: "腹切松公園",
    ESFJ: "はまゆう公園",
    ENFJ: "桜が丘公園",
    ENTJ: "日向公園"
  };

  const descriptionMap = {
    ISTJ: "あなたは規律と秩序を重んじる、公園の管理人タイプ。静かに見えて内側では常に全体の安全を監視しています。",
    ISFJ: "あなたは人知れず公園を守る保護者タイプ。誰も気づかない異変にも、いち早く気づいています。",
    INFJ: "あなたは意味を探し続ける観測者。なぜこの公園に惹かれたのか、その理由を言葉にできますか。",
    INTJ: "あなたは公園の構造を読み解く戦略家。配置には、必ず意図があると感じてしまうでしょう。",
    ISTP: "あなたは静かに行動する探索者。立入禁止の奥に、なぜか足が向いてしまいます。",
    ISFP: "あなたは感覚で公園と対話する芸術家。風や匂いの変化に、誰よりも敏感です。",
    INFP: "あなたは公園に意味を投影する理想家。ここが“物語の舞台”であると、どこかで感じています。",
    INTP: "あなたは公園を観察する研究者。違和感の理由を、考え続けています。",
    ESTP: "あなたは刺激を求める冒険者。禁止看板ほど、魅力的に見えてしまうでしょう。",
    ESFP: "あなたは場の空気を明るくする存在。ただし、騒がしさの裏で何かが動いています。",
    ENFP: "あなたは公園に物語を見出す案内人。あなたが歩くと、偶然が重なります。",
    ENTP: "あなたは公園の“仕掛け”に気づく挑発者。ここは、ただの公園ではありません。",
    ESTJ: "あなたは公園の秩序を司る管理者。ルールがあるのには、理由があります。",
    ESFJ: "あなたは皆を安心させる世話役。誰かが“いない”ことにも、すぐ気づくでしょう。",
    ENFJ: "あなたは人を導く語り部。この公園で起きた話を、なぜか知っています。",
    ENTJ: "あなたは公園の意思決定者。あなたが来ることは、予定されていたのかもしれません。"
  };

  document.getElementById("type").innerText = type;
  document.getElementById("park").innerText = parkMap[type];
  document.getElementById("description").innerText = descriptionMap[type];

  const madness = Math.floor(Math.random() * 40) + 50;
  document.getElementById("bar-inner").style.width = madness + "%";

  const hour = new Date().getHours();
  const notice = document.getElementById("notice");

  if (hour >= 0 && hour < 5) {
    notice.innerText = "※……この時間にここへ来た理由を、あなたは覚えていますか。";
  } else {
    notice.innerText = "※診断は娯楽目的です。";
  }
}
