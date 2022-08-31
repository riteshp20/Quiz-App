const  quizDB = [
    {
        question: "Q1: Which is not a property of attribute Behaviour of <Marquee> tag?",
        a: "alternate",
        b: "blur",
        c: "scroll",
        d: "slide",
        ans: "ans2",
    },
    {
        question: "Q2: ___ keyword is used to declare variables in javascript.",
        a: "Var",
        b: "Dim",
        c: "String",
        d: "None of the above",
        ans: "ans1",
    },
    {
        question: "Q3: Which of the following options is correct with regard to HTML?",
        a: "It is a modelling language",
        b: "It is a scripting language",
        c: "It is a partial programming language",
        d: "It is used to structure documents",
        ans: "ans4", 
    },
    {
        question: "Q4: How can you make a list that lists the items with numbers??",
        a: "<ul>",
        b: "<list>r",
        c: "<ol>",
        d: "<dl>",
        ans: "ans3",
    },
    {
        question: "Q5: Which of the following JavaScript cannot do?",
        a: "JavaScript can react to events",
        b: "JavaScript can manipulate HTML elements",
        c: "JavaScript can be use to validate data",
        d: "All of the Above",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const CheckAnswer = getCheckAnswer();
    console.log(CheckAnswer);

    if(CheckAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
           <h3> You scored ${score}/${quizDB.length} ✌🏻 </h3>
           <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});