import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <form className="login-box" onSubmit={this.handleSubmit}>
          <h1>Welcome To GetAnswers</h1>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="input-fields">
            <br />
            <label htmlFor="">
              Username
              <input
                type="text"
                className="login-input"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </label>
            <br />
            <label htmlFor="">
              Password
              <input
                type="password"
                className="login-input"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
