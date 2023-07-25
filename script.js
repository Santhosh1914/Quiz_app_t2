const quizData = [
    {
        question: "Who developed Python Programming Language?",
        a: "Wick van Rossum",
        b: "Rasmus Lerdorf",
        c: "Guido van Rossum",
        d: "Niene Stom",
        correct: "c",
    },
    {
        question: "Which type of Programming does Python support?",
        a: "object-oriented programming",
        b: "structured programming",
        c: "functional programming",
        d: "all of the mentioned",
        correct: "d",
    },
    {
        question: "Which keyword is used for function in Python language?",
        a: "Function",
        b: "Def",
        c: "Define",
        d: "fun",
        correct: "b",
    },
    {
        question: "Which of the following is not a core data type in Python programming?",
        a: "List",
        b: "Tuple",
        c: "class",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Which of the following statements is used to create an empty set in Python?",
        a: "[]",
        b: "()",
        c: "{}",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "What are the two main types of functions in Python?",
        a: "System function",
        b: "custom function",
        c: "Built-in function & User-defined function",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Which of the following is a Python keyword?",
        a: "pass",
        b: "void",
        c: "static",
        d: "main",
        correct: "a",
    },
    {
        question: "Which of the following is a Python tuple?",
        a: "[2,5,8]",
        b: "(1,5)",
        c: "{25}",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which of the following is Python applications?",
        a: "web development",
        b: "machine learning",
        c: "Game development",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "which is correct?",
        a: "l.sort()",
        b: "sort().l",
        c: "sorted(def())",
        d: "l[:::1]",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
                              <button onclick="location.reload()">Reload</button>`;
        }
    }
});
