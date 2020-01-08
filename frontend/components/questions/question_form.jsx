import React from 'react';
import QuestionsIndex from './questions_index';

export default class QuestionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field) {
        return (e => (
            this.setState({ [field]: e.target.value })
        ));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
        this.setState({
            title: '',
            body: ''
        });
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="">
                Title
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                />
              </label>

              <br />
              <label htmlFor="">
                Body
                <input
                  type="text"
                  value={this.state.body}
                  onChange={this.update("body")}
                />
                    </label>
                    <br />
                    <button type='submit'>{this.props.formType}</button>
                </form>
                
          </div>
        );
    }
}