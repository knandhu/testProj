import { connect } from "react-redux";
import { createQuestion } from "../../actions/question_actions";
import QuestionForm from './question_form';
const mapStateToProps = ({ session, entities: { users, question } }) => {
  // const session = state.session;
  // const users = state.entities.users;
  return ({
    question: {
      title: '',
      body: '',
      owner_id: users[session.id].id
    },
    currentUser: users[session.id],
    formType: 'Post Your Question'
})
};

const mapDispatchToProps = dispatch => ({
  action: (question) => dispatch(createQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
