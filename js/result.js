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
  ISTJ:{park:"浦上台トンネルの上公園",madness:40,text:"秩序と規則を愛するあなたは…"},
  ISFJ:{park:"夏島グラウンド",madness:45,text:"人のために動く優しさを持つあなた…"},
  INFJ:{park:"船越６丁目第３公園",madness:80,text:"あなたは“意味”を感じ取る存在…"},
  INTJ:{park:"浦賀奉行所跡地公園",madness:75,text:"構造と歴史を読むあなた…"},
  ISTP:{park:"桜が丘緑地",madness:55,text:"感覚派のあなたは…"},
  ISFP:{park:"吉倉公園",madness:60,text:"美しさに敏感なあなた…"},
  INFP:{park:"佐島の丘１丁目第２都市林",madness:85,text:"空想と感情の深層に生きるあなた…"},
  INTP:{park:"野比はなわ公園",madness:70,text:"あなたは観察者…"},
  ESTP:{park:"大矢部みどりの公園",madness:50,text:"刺激を求めるあなた…"},
  ESFP:{park:"平成緑道緑地",madness:45,text:"にぎやかなあなた…"},
  ENFP:{park:"ペリー公園",madness:65,text:"好奇心の塊であるあなた…"},
  ENTP:{park:"大津おりょうさん公園",madness:60,text:"発想が止まらないあなた…"},
  ESTJ:{park:"腹切松公園",madness:55,text:"秩序と責任を重んじるあなた…"},
  ESFJ:{park:"はまゆう公園",madness:50,text:"人の集いを大切にするあなた…"},
  ENFJ:{park:"桜が丘公園",madness:65,text:"人を導くあなた…"},
  ENTJ:{park:"日向公園",madness:70,text:"決断と支配の人…"}
};

const r = resultMap[type];

document.getElementById("type").innerText =
  `${type}｜${r.park}`;

document.getElementById("description").innerText =
  `狂気度：${r.madness}％\n\n${r.text}`;

document.getElementById("bar-inner").style.width =
  r.madness + "%";

document.getElementById("notice").innerText =
  (new Date().getHours() < 5)
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
