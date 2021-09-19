const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const homebtn = document.querySelector("#btn-hom")

function btnhome() {
    let confirm_message = confirm(`Are you sure you want to quit`) 
    return 
}

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];




let questions = [
    {
        question: "How many zeros are there in one thousand?",
        choice1: "2",
        choice2: "4",
        choice3: "3",
        choice4: "6",
        answer: 3,
    },
    {
        question: "Which is the second largest continent in the world?",
        choice1: "Asia",
        choice2: "America",
        choice3: "Europe",
        choice4: "Africa",
        answer: 4,
    },
    {
        question: "The hottest region in the world is called?",
        choice1: "The Sahara Desert",
        choice2: "Semi deserts",
        choice3: "Subtropical",
        choice4: "Coastal",
        answer: 1,
    },
    {
        question: "The separation of powers simply means.",
        choice1: "Balance and check",
        choice2: "Checks and Balances",
        choice3: "Overthrow",
        choice4: "Coop",
        answer: 2,
    },
    {
        question: "When did the second world war take place?",
        choice1: "1930-1955",
        choice2: "1920-1933",
        choice3: "1939-1945",
        choice4: "1820-1823",
        answer: 3,
    },
    {
        question: "How many continents are there in the world?",
        choice1: "3",
        choice2: "8",
        choice3: "7",
        choice4: "4",
        answer: 3,
    },
    {
        question: "Which is the highest mountain in the world?",
        choice1: "Baltoro Karakoram",
        choice2: "Mount Everest",
        choice3: "Kangchenjunga Himalaya",
        choice4: "Mahalangur Himalaya",
        answer: 2,
    },
    {
        question: "Who were the first Europeans to come to West Africa?",
        choice1: " Portuguese",
        choice2: "Britain",
        choice3: "France",
        choice4: "America",
        answer: 1,
    },
    {
        question: "Who is the inventor of the computer?",
        choice1: "Charles Darwin",
        choice2: "Charles Babbage",
        choice3: "Michael Faraday",
        choice4: "Theordor Schwann",
        answer: 2,
    },
    {
        question: "Who is known as the fastest man in the world?",
        choice1: "Usain Bolt",
        choice2: "Tyson Gay",
        choice3: "Yohan Blake",
        choice4: "Asafa Powell",
        answer: 1,
    },
    {
        question: "Which country recently amends National Anthem to honour indigenous people",
        choice1: "Australia",
        choice2: "Japan",
        choice3: "Germany",
        choice4: "South Africa",
        answer: 1,
    },
    {
        question: "National Youth Day is celebrated on",
        choice1: "12th January",
        choice2: "7th January",
        choice3: "10th January",
        choice4: "8th January",
        answer: 1,
    },
    {
        question: "Which one is the first country to approve Covid-19 vaccine of Oxford-AstraZeneca",
        choice1: "USA",
        choice2: "England",
        choice3: "Japan",
        choice4: "Malaysia",
        answer: 2,
    },
    {
        question: "Joe Biden took oath as the _____ President of the United States of America",
        choice1: "44th",
        choice2: "45th",
        choice3: "46th",
        choice4: "47th",
        answer: 3,
    },
    {
        question: "Which country in the world is believed to have the most miles of motorway?",
        choice1: "Turkey",
        choice2: "China",
        choice3: "Japan",
        choice4: "U.S.A",
        answer: 2,
    },
    {
        question: 'Saying the name of what dried fruit used to be used to encourage people to smile before a photo in the 1800s, before the phrase “cheese?”',
        choice1: "Fruit",
        choice2: "Prunes",
        choice3: "Apple",
        choice4: "Pet",
        answer: 2,
    },
    {
        question: "What is the smallest planet in our solar system?",
        choice1: "Earth",
        choice2: "Jupitar",
        choice3: "Mercury",
        choice4: "Venus",
        answer: 3,
    },
    {
        question: "Which US state was Donald Trump born in?",
        choice1: "New York",
        choice2: "Chicago",
        choice3: "Texas",
        choice4: "North Caroliner",
        answer: 2,
    },
    {
        question: "What is the capital city of Australia?",
        choice1: "Canberra",
        choice2: "Sydney",
        choice3: "Vietnam",
        choice4: "Austra",
        answer: 1,
    },
    {
        question: "What language is spoken in Brazil?",
        choice1: "Greek",
        choice2: "French",
        choice3: "English",
        choice4: "Portuguese",
        answer: 4,
    },
    {
        question: "What do the French call the English Channel?",
        choice1: "English",
        choice2: "Canberra",
        choice3: "la Manche",
        choice4: "Helsinki",
        answer: 3,
    },
    {
        question: "How many notes are there in a musical scale?",
        choice1: "7",
        choice2: "6",
        choice3: "8",
        choice4: "10",
        answer: 1,
    },
    {
        question: "What is the busiest airport in Britain called?",
        choice1: "London Heathrow",
        choice2: "Manchester Heat",
        choice3: "Leicester Brown",
        choice4: "London Pride",
        answer: 1,
    }
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 23;

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("end.html")
    }
    questionCounter++
    progressText.innerText = `Qeustion ${questionCounter} 0f ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
    
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true;

}


choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset["number"]

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if (classToApply === 'correct') {
        incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
    }, 1000)

    })
})


incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()