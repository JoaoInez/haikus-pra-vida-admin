import React from "react";
import { Login } from "react-admin";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "#/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const LoginPage = (props) => (
  <Login
    {...props}
    backgroundImage="https://source.unsplash.com/random/1600x900/daily"
  >
    <h2 style={{ textAlign: "center" }}>Login</h2>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  </Login>
);

export default LoginPage;
