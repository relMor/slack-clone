import React from "react";

import "./Login.css";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../logic/StateProvider";
import { actionTypes } from "../../logic/reducer";

import { Button } from "@material-ui/core";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.icon-icons.com/icons2/2201/PNG/512/slack_logo_icon_134008.png"
          alt=""
        />
        <h1>Sign in to Clever Programmer HQ</h1>
        <p>cleverprogrammer.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
