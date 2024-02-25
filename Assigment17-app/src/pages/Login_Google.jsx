import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../config/firebase-config/index";
import { Custom_Button } from "../components/Custom_Button";

function Login_Google() {
  const signInUser = () => {
    console.log("Triggered");
    signInWithPopup(auth, provider).catch((err) => alert(err.message));
  };
  return (
    <div>
      <Custom_Button onClick={signInUser}>Continue with Google</Custom_Button>
    </div>
  );
}

export default Login_Google;