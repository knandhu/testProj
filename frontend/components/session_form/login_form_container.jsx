import React from "react";
import { login } from "./../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "login",
  navLink: <Link to="/signup">sign up instead</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
