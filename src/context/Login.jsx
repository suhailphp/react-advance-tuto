import React, { useContext } from "react";
import UserContext from "./userContext";

function Login(props) {
  let userContext = useContext(UserContext);
  return (
    <div>
      <button onClick={() => userContext.onUserLogin("Suhail M")}>Login</button>
    </div>
  );
}

export default Login;
