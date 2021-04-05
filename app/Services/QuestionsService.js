import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import {api} from "./AxiosService.js"

class QuestionsService {
async  getAllQuestions() {
    let response = await api.get()
    let questions = response.data.results.map(q => new Question(q))
    ProxyState.questions = questions

    console.log(response.data.results)
  }

}

export const questionsService = new QuestionsService();