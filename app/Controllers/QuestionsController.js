import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


//Private
function _draw() {
  let questions = ProxyState.questions;
  let template = ''
  questions.forEach(q => template += q.Template)
  document.getElementById("app").innerHTML = template

}

//Public
export default class QuestionsController {
  constructor() {
    ProxyState.on("questions", _draw);
    questionsService.getAllQuestions()
  }

  getAllQuestions() {
    questionsService.getAllQuestions()
  }

}
