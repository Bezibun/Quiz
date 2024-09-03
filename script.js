const questions = [
    {
        question: "Berapa hasil dari 2x + 5x?",
        options: ["3x", "5x", "7x", "7"],
        answer: 3
    },
    {
        question: "Berapa hasil dari 24y + 10y?",
        options: ["24y", "10y", "34y", "34yy"],
        answer: 3
    },
    {
        question: "Manakah yang bukan termasuk variabel dari 6x + 3y + 2",
        options: ["x", "y", "x dan y", "6 dan 3"],
        answer: 4
    },
    {
        question: "Manakah yang termasuk koefisien dari 6x + 3y + 2",
        options: ["x", "6", "y", "x dan y"],
        answer: 2
    },
    {
        question: "Manakah yang termasuk konstanta 6x + 3y + 2?",
        options: ["x dan y", "6 dan 3", "2", "6 dan y"],
        answer: 3
    },
    {
        question: "Berapa hasil dari 2x + 5y - x + 2y?",
        options: ["x + 7y", "3x + 5y", "x - 5y", "3x + 7y"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

document.getElementById("start-btn").addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const questionCounter = document.getElementById("question-counter");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextBtn = document.getElementById("next-btn");

    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of 6`;
    questionText.textContent = questions[currentQuestionIndex].question;

    optionsContainer.querySelectorAll(".option-btn").forEach((btn, index) => {
        btn.textContent = questions[currentQuestionIndex].options[index];
        btn.disabled = false;
        btn.style.backgroundColor = "#007bff";
    });

    nextBtn.style.display = "none";
}

function checkAnswer(selectedOption) {
    const correctOption = questions[currentQuestionIndex].answer;
    const optionsContainer = document.getElementById("options-container");
    const nextBtn = document.getElementById("next-btn");

    if (selectedOption === correctOption) {
        correctAnswers++;
        optionsContainer.children[selectedOption].style.backgroundColor = "green";
    } else {
        incorrectAnswers++;
        optionsContainer.children[selectedOption].style.backgroundColor = "red";
        optionsContainer.children[correctOption].style.backgroundColor = "green";
    }

    optionsContainer.querySelectorAll(".option-btn").forEach(btn => {
        btn.disabled = true;
    });

    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    const totalQuestions = questions.length;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;

    document.getElementById("correct-answers").textContent = correctAnswers;
    document.getElementById("incorrect-answers").textContent = incorrectAnswers;
    document.getElementById("score-percentage").textContent = scorePercentage.toFixed(2);
}
