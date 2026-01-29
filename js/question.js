let index = 0;

let score = {
  E: 0, I: 0,
  S: 0, N: 0,
  T: 0, F: 0,
  J: 0, P: 0
};

const questionEl = document.getElementById("question");
const countEl = document.getElementById("count");

function show() {
  questionEl.innerText = questions[index].text;
  countEl.innerText = "Q" + (index + 1) + " / 16";
}

function answer(choice) {
  const q = questions[index];
  const type = q[choice];
  score[type]++;

  index++;

  if (index < questions.length) {
    show();
  } else {
    localStorage.setItem("parkScore", JSON.stringify(score));
    location.href = "result.html";
  }
}

show();
