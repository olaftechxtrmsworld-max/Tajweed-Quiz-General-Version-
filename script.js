const parent = document.getElementById("questcontainer")
const header = document.querySelectorAll(".header");
const question = document.getElementById("question");
const welcomeMsg = document.getElementById("welcome");
const testContainer = document.querySelector(".container");
const options = document.getElementById("anscont");
const nextBtn = document.getElementById("nextbtn");
const viewResult = document.getElementById("view");
const footer = document.getElementById("ft");
const scoreProgress = document.getElementById("score");
const questionProgress = document.getElementById("progress");
const startBtn = document.getElementById("startbtn");
const answer = document.querySelector(".option");
const endScreen = document.getElementById("endscreen");
const score = document.getElementById("scr")
const percentage = document.getElementById("percentage");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restart")

const questions = [
    {
        question: "What is Tajwīd mainly concerned with?",
        choices: [
            "Memorizing the Qur’an",
            "Understanding Tafsīr",
            "Correct pronunciation of Qur’anic letters and rules",
            "Learning Arabic grammar"
        ],
        answer: "Correct pronunciation of Qur’anic letters and rules"
    },

    {
        question: "What does Ikhfāʼ mean in Tajwīd?",
        choices: [
            "Clear pronunciation of the letter",
            "Hiding the sound of Nūn Sākinah or Tanwīn with nasalization",
            "Merging letters completely without ghunnah",
            "Changing one letter into another"
        ],
        answer: "Hiding the sound of Nūn Sākinah or Tanwīn with nasalization"
    },

    {
        question: "Which letters cause Idghām with Ghunnah?",
        choices: [
            "ل ، ر",
            "ي ، ن ، م ، و",
            "ب ، م",
            "ق ، ك"
        ],
        answer: "ي ، ن ، م ، و"
    },

    {
        question: "What happens in Iqlāb?",
        choices: [
            "Nūn Sākinah is pronounced clearly",
            "Nūn Sākinah is merged without ghunnah",
            "Nūn Sākinah or Tanwīn changes into a hidden Mīm sound",
            "Nūn Sākinah is stretched"
        ],
        answer: "Nūn Sākinah or Tanwīn changes into a hidden Mīm sound"
    },

    {
        question: "How many counts (harakāt) is a Madd Aslī (Natural Madd)?",
        choices: [
            "1 count",
            "2 counts",
            "4 counts",
            "6 counts"
        ],
        answer: "2 counts"
    },

    {
    question: "What is the meaning of Idghām?",
    choices: [
        "To hide a letter",
        "To merge one letter into another",
        "To stretch a vowel",
        "To stop completely"
    ],
    answer: "To merge one letter into another"
},

{
    question: "How many types of Idghām are there?",
    choices: [
        "Two",
        "Three",
        "Four",
        "Five"
    ],
    answer: "Two"
},

{
    question: "Which letters cause Idghām without Ghunnah?",
    choices: [
        "ي ، ن ، م ، و",
        "ل ، ر",
        "ب ، م",
        "ق ، ك"
    ],
    answer: "ل ، ر"
},

{
    question: "What is Izḥār in Tajwīd?",
    choices: [
        "Clear pronunciation of Nūn Sākinah or Tanwīn",
        "Merging letters",
        "Changing letters",
        "Stretching vowels"
    ],
    answer: "Clear pronunciation of Nūn Sākinah or Tanwīn"
},

{
    question: "How many Izḥār letters are there?",
    choices: [
        "4",
        "6",
        "8",
        "10"
    ],
    answer: "6"
},

{
    question: "Which of the following is a letter of Iqlāb?",
    choices: [
        "م",
        "ب",
        "ر",
        "ل"
    ],
    answer: "ب"
},

{
    question: "What is Madd?",
    choices: [
        "Stopping at the end of a word",
        "Stretching a vowel sound",
        "Merging letters",
        "Hiding a letter"
    ],
    answer: "Stretching a vowel sound"
},

{
    question: "Which letters are Madd letters?",
    choices: [
        "ا ، و ، ي",
        "ب ، م ، ن",
        "ق ، ك ، ف",
        "ل ، ر ، ت"
    ],
    answer: "ا ، و ، ي"
},

{
    question: "What is the minimum length of Madd Aslī?",
    choices: [
        "1 count",
        "2 counts",
        "4 counts",
        "6 counts"
    ],
    answer: "2 counts"
},

{
    question: "What is Qalqalah?",
    choices: [
        "Echoing sound when certain letters are pronounced",
        "Stretching vowels",
        "Merging letters",
        "Nasal sound only"
    ],
    answer: "Echoing sound when certain letters are pronounced"
},

{
    question: "How many Qalqalah letters are there?",
    choices: [
        "3",
        "4",
        "5",
        "6"
    ],
    answer: "5"
},

{
    question: "Which of these is a Qalqalah letter?",
    choices: [
        "ب",
        "ن",
        "و",
        "ي"
    ],
    answer: "ب"
},

{
    question: "What is Ghunnah?",
    choices: [
        "A nasal sound",
        "A long pause",
        "A vowel stretch",
        "A silent letter"
    ],
    answer: "A nasal sound"
},

    {
        question: "Ghunnah is strongest in which letters?",
        choices: [
            "ن and م",
            "ل and ر",
            "ب and ت",
            "ف and ق"
        ],
        answer: "ن and م"
    },
    
    {
        question: "What is Waqf?",
        choices: [
            "Beginning recitation",
            "Stopping at the end of a word",
            "Merging letters",
            "Stretching vowels"
        ],
        answer: "Stopping at the end of a word"
    }
]


let currentQuestion = 1;
let index = 0;
let totalQuestion = questions.length;
let currentScore = 0;

welcomeMsg.classList.add("fade-in");


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {

    if (index === 0) {
        shuffleArray(questions);
        questions.forEach(q => shuffleArray(q.choices));
    }
    
    parent.classList.add("fade-in");
    welcomeMsg.classList.add("hide");
    viewResult.classList.add("hide")
    startBtn.classList.add("hide");
    testContainer.classList.remove("hide");
    nextBtn.classList.remove("hide");
    footer.classList.remove("hide");
    


    question.innerHTML = questions[index].question;
    options.innerHTML = "";
    questions[index].choices.forEach(choice => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.innerHTML = choice;
        options.appendChild(button)
        button.value = choice;

        nextBtn.disabled = true;
        button.addEventListener("click", () => {
            Array.from(options.children).forEach(btn => btn.disabled = true);
            if (button.value === questions[index].answer) {
                new Audio("correct.mp3").play();
                button.classList.add("blink");
                button.classList.add("green")
                button.innerHTML = `${button.value} <span>&#10004;</span> `;
                currentScore++
                scoreProgress.innerHTML = `Score: ${currentScore}/${totalQuestion}`
            } else if (button.value !== questions[index].answer) {
                new Audio("wrong.mp3").play();
                button.classList.add("shake");
                button.classList.add("red")
                button.innerHTML = `${button.value}  <span>&#10008;</span> `;
                scoreProgress.innerHTML = `Score: ${currentScore}/${totalQuestion}`
                Array.from(options.children).forEach(btn => {
                    if (btn.value === questions[index].answer) {
                        btn.classList.add("green");
                        btn.innerHTML = `${btn.value} <span>&#10004;</span> `;
                    }
                })
            }
            nextBtn.disabled = false;
            if (currentQuestion === totalQuestion) {
                viewResult.classList.remove("hide")
                nextBtn.classList.add("hide")
            } else {
                nextBtn.innerHTML = "Next Question"
            }
        })
    })


    questionProgress.innerHTML = `Question: ${currentQuestion} of ${totalQuestion}`;
    scoreProgress.innerHTML = `Score: ${currentScore}/${totalQuestion}`;


}



function displayResult() {

    if (currentQuestion < totalQuestion) {
        index++;
        currentQuestion++
        startQuiz();

    } else {
        header.innerHTML = "Quiz Completed"
        testContainer.classList.add("hide");
        nextBtn.classList.add("hide")
        footer.classList.add("hide")
        endScreen.classList.remove("hide")
        endScreen.classList.add("fade-in");
        score.innerHTML = `Your Score: <strong>${currentScore}/${totalQuestion}</strong>`;
        const percent = ((currentScore / totalQuestion) * 100).toFixed(1);
        percentage.innerHTML = `You Scored <strong>${percent}%</strong> of the Total Questions.`

        if (percent < 50) {
            result.innerHTML = "You <strong>failed</strong>, try harder next time!😞"
        } else {
            result.innerHTML = "<strong>Wow</strong>, You have done a great job!"
        }
    }
}




function restartGame() {
    currentQuestion = 1;
    index = 0;
    totalQuestion = questions.length;
    currentScore = 0;
    welcomeMsg.classList.add("fade-in");
    endScreen.classList.add("hide")
    welcomeMsg.classList.remove("hide");
    startBtn.classList.remove("hide");
}

startBtn.addEventListener("click", () => {
    startQuiz()
}

);
nextBtn.addEventListener("click", displayResult);
viewResult.addEventListener("click", displayResult)

restartBtn.addEventListener("click", restartGame);
