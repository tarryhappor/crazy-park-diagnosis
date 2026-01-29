let i = 0;

let score = {
  E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0
};

const text = document.getElementById("text");
const count = document.getElementById("count");

function show() {
  text.innerText = questions[i].text;
  count.innerText = `Q${i+1} / 16`;
}

function answer(type) {
  const q = questions[i];
  score[q[type]]++;

  i++;

  if (i < questions.length) {
    show();
  } else {
    localStorage.setItem("score", JSON.stringify(score));
    location.href = "result.html";
  }
}

show();
