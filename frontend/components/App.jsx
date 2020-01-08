import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import NavBarContainer from "./navbar/navbar_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import DemoContainer from "./session_form/demo_container";
import QuestionsContainer from "./questions/questions_container";
import CreateQuestionFormContainer from "./questions/create_question_form_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/demo" component={DemoContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <ProtectedRoute path="/questions" component={QuestionsContainer} /> */}
      <ProtectedRoute exact path="/" component={QuestionsContainer} />
      <ProtectedRoute exact path="/ask" component={CreateQuestionFormContainer}/>
    </Switch>
  </div>
);

export default App;
