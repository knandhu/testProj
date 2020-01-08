import { RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION } from './../actions/question_actions';

const questionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState;
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return Object.assign({}, oldState, action.questions);
        case RECEIVE_QUESTION:
            nextState = Object.assign({}, oldState);
            nextState[action.question.id] = action.question;
            return nextState;
    
        default:
            return oldState;
    }
}

export default questionsReducer;