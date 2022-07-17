const questions = {
    "questions": [
        {
            "question": "An exothermic reaction is a chemical reaction that releases energy by radiating electricity.",
            "answer": false
          },
          {
            "question": "The colour of the pills in the Matrix were Blue and Yellow.",
            "answer": false
          },
          {
            "question": "There are 86400 seconds in a day.",
            "answer": true
          },
          {
            "question": "The Ceratosaurus, a dinosaur known for having a horn on the top of its nose, is also known to be a decendent of the Tyrannosaurus Rex.",
            "answer": false
          },
          {
            "question": "A bear does NOT defecate during hibernation. ",
            "answer": true
          },
          {
            "question": "Ada Lovelace is often considered the first computer programmer.",
            "answer": true
          },
          {
            "question": "Gothenburg is the capital of Sweden.",
            "answer": false
          },
          {
            "question": "In Alfred Hitchcock's film Psycho it is said he used chocolate syrup to simulate the blood in the famous shower scene.",
            "answer": true
          },
          {
            "question": "When you cry in space, your tears stick to your face.",
            "answer": true
          },
          {
            "question": "Japan has left-hand side traffic.",
            "answer": true
          },
          {
            "question": "Oxford University is older than the Aztec Empire.",
            "answer": true
          },
          {
            "question": "The board game Go has more possible legal positions than the number of atoms in the visible universe.",
            "answer": true
          }
        ]
      }
       
    
const question = document.getElementById('question')


let playerScore = 0
let questionIndex = 0
let didReachLastQuestion = false
question.innerText = questions.questions[questionIndex].question

function handleTrue() {
    const currentQuestionObject = questions.questions[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == true && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

function handleFalse() {
    const currentQuestionObject = questions.questions[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == false && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

function nextQuestion() {
    questionIndex += 1
    if (questionIndex >= questions.questions.length) {
        didReachLastQuestion = true
        playerScorePercent = (playerScore / questions.questions.length) * 100
        const result = playerScorePercent.toFixed(0)
        let endGameMessage = ""
        if(result < 60) {
        endGameMessage = "Be honest...were you just guessing?"
        } else if (result < 80) {
          endGameMessage = "Getting there but you can do better."
        } else if (result < 90) {
          endGameMessage = "Better than most."
        }  else {
          endGameMessage = "Look at the Big BrainS on you!"
        } 
        
        const yourFinalScore = `You got ${playerScore} / ${questions.questions.length} right. ${result} % Score\n` + endGameMessage
        
        question.innerText = yourFinalScore
        shouldHideAnswerButtons(true)
    } else {
        question.innerText = questions.questions[questionIndex].question
    }
}

function replay() {
    shouldHideAnswerButtons(false)
    playerScore = 0
    questionIndex = 0
    didReachLastQuestion = false
    question.innerText = questions.questions[questionIndex].question
}

function shouldHideAnswerButtons(flag) {
    const trueButton = document.getElementById('true-button')
    const falseButton = document.getElementById('false-button')
    const replayButton = document.getElementById('replay-button')
    const exitButton = document.getElementById('exit-button')
    if (flag == true) {
        replayButton.style.opacity = 1
        trueButton.style.opacity = 0
        falseButton.style.opacity = 0
        exitButton.style.opacity = 1
    } else {
        replayButton.style.opacity = 0
        trueButton.style.opacity = 1
        falseButton.style.opacity = 1
        exitButton.style.opacity = 0
    }
}
