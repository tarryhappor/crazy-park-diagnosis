const score = JSON.parse(localStorage.getItem("score"));

let type = "";
type += score.E >= score.I ? "E" : "I";
type += score.S >= score.N ? "S" : "N";
type += score.T >= score.F ? "T" : "F";
type += score.J >= score.P ? "J" : "P";

document.getElementById("type").innerText = type;

const hour = new Date().getHours();
const notice = document.getElementById("notice");

const texts = [
  "※診断は娯楽目的です。",
  "※公園の名前を強く意識しすぎないでください。",
  "※長時間の閲覧はおすすめしません。",
  "※違和感を覚えた場合は画面を閉じてください。"
];

if (hour >= 0 && hour < 5) {
  texts.push("※……この時間にここへ来た理由を、あなたは覚えていますか。");
}

let n = 0;
setInterval(() => {
  if (n < texts.length) {
    notice.innerText = texts[n];
    n++;
  }
}, 4000);
