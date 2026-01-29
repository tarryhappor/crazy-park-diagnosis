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

  document.getElementById("type").innerText = type;
  document.getElementById("park").innerText = parkMap[type];

  // 狂気度（適当でOK）
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
