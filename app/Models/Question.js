import { ProxyState } from "../AppState.js"

export default class Question {
  constructor({question, correct_answer, incorrect_answers}) {
      this.question = question
      this.correctAnswer = correct_answer
      this.incorrectAnswer = incorrect_answers
  }

  get Template() {

      return /*html*/`
<div class="card  shadow ml-3 mt-3" style="width: 18rem;">
            <div class="card-header bg-primary">
            ${this.question}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.correctAnswer}</li>
          <li class="list-group-item">${this.IncorrectAnswers}</li>
        </ul>
            </div>
          </div>
      `
  }
get IncorrectAnswers(){
  // NOTE this needs to trigger multiple sections not just one
  ProxyState.incorrectAnswer.forEach(i => template += i.Template)
  let template = `
  <li class="list-group-item">${this.incorrectAnswer}</li>`
  
 
  return template
}
}

/** {
  "category": "Entertainment: Musicals & Theatres",
  "type": "multiple",
  "difficulty": "easy",
  "question": "Which Shakespeare play inspired the musical &#039;West Side Story&#039;?",
  "correct_answer": "Romeo &amp; Juliet",
  "incorrect_answers": [
    "Hamlet",
    "Macbeth",
    "Othello"
  ]
}, **/