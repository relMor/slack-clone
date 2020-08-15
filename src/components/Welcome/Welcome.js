import React from "react";

import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__info">
        <h1>Welcome Guys!!!</h1>
        <p>
          Over here you can create a new channel and have a real time chat
          experience with google authentication as well as auto-signin feature
          and can logout by using logout button but rest of the buttons are just
          replica of slack so they don't work
        </p>
      </div>
    </div>
  );
}

export default Welcome;
