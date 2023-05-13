import React from "react";
import "./Login.scss";
import AuthTemplate from "../../components/auth/AuthTemplate";
import AuthForm from "../../components/auth/AuthForm";

const Login = () => {
  return (
    <AuthTemplate>
      <AuthForm />
    </AuthTemplate>
  );
};

export default Login;
