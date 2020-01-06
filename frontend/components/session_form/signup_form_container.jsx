import React from "react";
import { signup } from "./../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "signup",
  navLink: <Link to="/login">log in instead</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
