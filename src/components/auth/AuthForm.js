import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import BorderButton from "../common/BorderButton";

const AuthFormBlock = styled.div`
  width: 100%;
  h3 {
    font-family: "NanumSquareRound";
    font-size: 17px;
    margin: 0;
    color: black;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
  }
`;

const StyledInput = styled.input`
  font-size: 13px;
  height: 2.6rem;
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
  return (
    <AuthFormBlock>
      <form>
        <h3>닉네임</h3>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="닉네임"
          type="text"
        />
        <h3 style={{ "margin-top": "20px" }}>비밀번호</h3>
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        <div style={{ "margin-top": "20px" }}>
          <Link to={"/login"}>
            <Button>로그인</Button>
          </Link>
          <Link to={"/join"}>
            <BorderButton>회원가입</BorderButton>
          </Link>
        </div>
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
