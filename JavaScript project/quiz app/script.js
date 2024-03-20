const quizData = [
  {
    question: "“Socialization” means",
    a: "Following the social norms strictly",
    b: "Adjusting in  society ",
    c: "Revolting against norms",
    d: "Understanding social diversity",
    correct: "b",
  },
  {
    question:
      "“Thought not only determines language, but also precedes it” was an idea put forward by",
    a: "J e an P i a g et",
    b: "Kohlberg",
    c: "Vygotsky",
    d: "Pavlov",
    correct: "a",
  },
  {
    question:
      "Which of the following statements is correct in relation to ‘concept formation’ by a child?",
    a: "Concepts are emotionally ordered",
    b: "There is a set pattern of concepts development",
    c: "Concepts are not hierarchialy in nature",
    d: "Concepts are not individual",
    correct: "b",
  },
  {
    question:
      "Main characteristic of the ‘emotionally motivated children’ is their",
    a: "Over reactive in nature",
    b: "Introvert nature",
    c: "Balanced way of presenting",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "An important characteristic of ‘formal operational stage of mental development’ is",
    a: "Abstract thinking",
    b: "Concrete thinking",
    c: "Social Thinking",
    d: "Egocentric",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectRadioBtn();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelectedRadioBtn() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

function deselectRadioBtn() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelectedRadioBtn();
  

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly  ${score}/${quizData.length} questions.</h2>
                        <button onclick="location.reload()">Reload</button>`;
    }
  }
});
