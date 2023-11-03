import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Auth = () => {
  let navigate = useNavigate();
  const signInWIthGoggle = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    if (res) {
      console.log(res.user);
      navigate("/");
    }
  };
  return (
    <div>
      <button onClick={signInWIthGoggle}>Sign in with google</button>
    </div>
  );
};

export default Auth;
