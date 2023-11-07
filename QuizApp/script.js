const quizData = [
    {
      question: "¿Qué le dijo un semáforo a otro semáforo?",
      a: "No me mires, me estoy cambiando.",
      b: "Estoy en verde, ¡vamos a bailar!",
      c: "Espera, que voy a ponerme rojo.",
      d: "¡Nos vemos en la esquina!",
      correct: "c"
    },
    {
      question: "¿Qué hace una abeja en el gimnasio?",
      a: "Zum-ba.",
      b: "Aeróbicos.",
      c: "Colmen-yoga.",
      d: "Entrenar en la colmena.",
      correct: "a"
    },
    {
      question: "¿Qué le dijo el mar al río?",
      a: "Nada, no se saludaron.",
      b: "¡Eres tan onda!",
      c: "¡Tienes mucha corriente!",
      d: "¡Eres salado!",
      correct: "d"
    },
    {
      question: "¿Por qué los pájaros no usan Facebook?",
      a: "Porque ya tienen Twitter.",
      b: "Porque no pueden escribir.",
      c: "Porque prefieren el pico a la tecla.",
      d: "Porque se les olvidó su contraseña.",
      correct: "a"
    }
];

const quiz = document.getElementById('quiz')
const answerElements = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question') 
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuizz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizzData = quizData[currentQuizz]

    questionEl.innerText = currentQuizzData.question
    a_text.innerText = currentQuizzData.a
    b_text.innerText = currentQuizzData.b
    c_text.innerText = currentQuizzData.c
    d_text.innerText = currentQuizzData.d
}

function getSelected() {
    let answer

    answerElements.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id            
        }
    })

    return answer
}

function deselectAnswers() {
    answerElements.forEach(answerEl => answerEl.checked = false)
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
      if (answer === quizData[currentQuizz].correct) {
        score++
      }

      currentQuizz++

      if(currentQuizz < quizData.length){
        loadQuiz()
      } else {
        quiz.innerHTML = `
          <h2>You answered ${score} of ${quizData.length} questions correctly</h2>
          
          <button onclick="location.reload()">Reload</button>"
        `
      }
    }
})