import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/login_symbol.png";

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  padding-top: 20vh;
  width: 360px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <Box>
        <div className="logo-area">
          <Link to="/" className="login_logo">
            <img alt="login_logo" src={logo} style={{ height: "11rem" }} />
          </Link>
        </div>
        {children}
      </Box>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
