import * as QuestionAPIUtil from './../util/question_api_util';
import QuestionsIndex from '../components/questions/questions_index';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
// export const REMOVE_QUESTION = 'REMOVE_QUESTION';

const fetchAllQuestions = (questions) => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions,
});

const fetchQuestion = (question) => ({
    type: RECEIVE_QUESTION,
    question,
})

export const fetchQuestions = () => dispatch =>
         QuestionAPIUtil.fetchQuestions().then(questions =>
           dispatch(fetchAllQuestions(questions))
    );
         
export const createQuestion = (question) => dispatch => {
    return (
        QuestionAPIUtil.createQuestion(question).then((question) => dispatch(fetchQuestion(question))));
};

