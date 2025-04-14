import React from "react";
import { FaFacebook } from "react-icons/fa";
import "./Login.css";
import { Button } from "@mui/material";

import { auth, provider } from "../../API/firebase";
import { signInWithPopup } from "firebase/auth";
import useStateValue from "../../context/useStateValue";
import { actionTypes } from "../../context/AppReducer";

export const Login = () => {
  const { state, dispatch } = useStateValue();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed");
    }
  };

  return (
    <div className="login">
      <div className="login__top">
        <FaFacebook className="login__icon" />
        <h3>facebook</h3>
      </div>
      <Button className="login__btn" variant="contained" onClick={handleSignIn}>
        SIGN IN
      </Button>
    </div>
  );
};
