//get element from html
let nextButton = document.querySelector("#next");
let backButton = document.querySelector("#back")
let qh = document.querySelector("#qh")
let quest = document.querySelector("#question");
let option0 = document.querySelector("#btn0")
let option1 = document.querySelector("#btn1")
let option2 = document.querySelector("#btn2")
let option3 = document.querySelector("#btn3")

let questionCounter = 0;
let answers = []
let score = 0

let questions = [
    {
        id: 1,
        question: "who is a man ?",
        options: [
            "A man is not a whoman",
            "A man is not a dog",
            "A man is not a cow",
            "A man is a man",
        ],
        answer: 1
    },
    {
        id: 2,
        question: "who is a woman ?",
        options: [
            "a woman is not a woman",
            "a woman is not a dog",
            "a woman is not a cow",
            "a woman a woman",
        ],
        answer: 3
    },
    {
        id: 3,
        question: "who is a boy ?",
        options: [
            "A boy is a boy",
            "A boy is a dog",
            "A boy is a cow",
            "A boy is a girl",
        ],
        answers: 2
        
    },
    {
        id: 4,
    question: "who is a girl ?",
    options: [
        "A girl is a boy",
        "A girl is a dog",
        "A girl is a cow",
        "A girl is a girl",
    ],
    answers: 1
    }

]
    qh.innerHTML = "Question" + questions[questionCounter].id
    quest.innerHTML = questions[questionCounter].question


    // options
    option0.innerHTML = questions[questionCounter].options[0]
    option1.innerHTML = questions[questionCounter].options[1]
    option2.innerHTML = questions[questionCounter].options[2]
    option3.innerHTML = questions[questionCounter].options[3]


nextButton.addEventListener("click", function() {
    if (questionCounter < questions.length) {
    questionCounter++;
    qh.innerHTML = "Question" + questions[questionCounter].id
    quest.innerHTML = questions[questionCounter].question
     // options
     option0.innerHTML = questions[questionCounter].options[0]
     option1.innerHTML = questions[questionCounter].options[1]
     option2.innerHTML = questions[questionCounter].options[2]
     option3.innerHTML = questions[questionCounter].options[3]
    } else {
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].answer === answers[i]) {
                score++
            }
        }
        alert(`you scored ${score}`)
    }
})

  

backButton.addEventListener("click", function() {
    questionCounter--;

    qh.innerHTML = "Question" + questions[questionCounter].id
    quest.innerHTML = questions[questionCounter].question
      // options
      option0.innerHTML = questions[questionCounter].options[0]
      option1.innerHTML = questions[questionCounter].options[1]
      option2.innerHTML = questions[questionCounter].options[2]
      option3.innerHTML = questions[questionCounter].options[3]
  
})
option0.addEventListener("click", function(){
    answers[questionCounter] = 0; // push to the  possition of my current queation
    console.log(answers)
})


option1.addEventListener("click", function(){
    answers[questionCounter] = 1;
    console.log(answers)
})


option2.addEventListener("click", function(){
    answers[questionCounter] = 2;
    console.log(answers)
})


option3.addEventListener("click", function(){
    answers[questionCounter] = 3;
    console.log(answers)
})
