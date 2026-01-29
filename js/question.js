let index = 0;

const questionEl = document.getElementById("question");
const countEl = document.getElementById("count");

function show() {
  questionEl.innerText = questions[index].text;
  countEl.innerText = "Q" + (index + 1) + " / 16";
}

function answer() {
  index++;

  if (index < questions.length) {
    show();
  } else {
    location.href = "result.html";
  }
}

show();
