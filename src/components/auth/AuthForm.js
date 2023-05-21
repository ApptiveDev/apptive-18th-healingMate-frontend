import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import BorderButton from "../common/BorderButton";
import { useEffect, useState } from "react";
import axios from "axios";
import login_button from "../../images/login_login.png";
import "./AuthForm.scss";

const AuthFormBlock = styled.div`
  width: 100%;
  h3 {
    font-family: "NanumSquareRound";
    font-size: 17px;
    margin: 0;
    color: black;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 0.3rem;
  }
`;

const StyledInput = styled.input`
  font-size: 13px;
  height: 26px;
  width: 310px;
  border: none;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px -5px;
  border-radius: 8px;
  padding: 0.7rem;
  outline: none;
  &:focus {
    color: $oc-teal-7;
    border: 1px solid gray;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const AuthForm = () => {
  const [loginInput, setLoginInput] = useState({
    nickname: "",
    password: "",
  });

  const onChange = (e) => {
    console.log(e.target.value);
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const { nickname, password } = loginInput;

  const getLoginInfo = () => {
    const accessToken = localStorage.getItem("accessToken");
    return { accessToken };
  };

  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const { accessToken } = getLoginInfo();
    setAccessToken(accessToken);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://43.201.163.27:8080/login",
        {
          memberNickname: nickname,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(onLoginSuccess)
      .catch(function (error) {
        console.log(error);
      });
  };

  function onLoginSuccess(response) {
    const { accessToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
    console.log(accessToken);

    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    console.log(response);
  }

  return (
    <AuthFormBlock>
      <form>
        <h3>닉네임</h3>
        <StyledInput
          autoComplete="nickname"
          name="nickname"
          placeholder="닉네임"
          type="String"
          onChange={onChange}
          value={nickname}
        />
        <h3 style={{ "margin-top": "20px" }}>비밀번호</h3>
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={password}
        />
        <div className="button_row">
          <Link to={"/login"}>
            <button className="button login_button"></button>
          </Link>
          <Link to={"/join"}>
            <button className="button join_button"></button>
          </Link>
        </div>
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
