import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";
import CustomInput from "../components/UI/input/CustomInput";
import CustomButton from "../components/UI/button/CustomButton";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const ref = useNavigate();
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    ref("/posts");
  };

  return (
    <div>
      <h1>The login page</h1>
      <form onSubmit={login}>
        <CustomInput type="text" placeholder="Input login:" />
        <CustomInput type="password" placeholder="Input password:" />
        <CustomButton>Enter</CustomButton>
      </form>
    </div>
  );
};

export default Login;
