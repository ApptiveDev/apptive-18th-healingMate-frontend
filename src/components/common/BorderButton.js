import styled from "styled-components";

const StyledButton = styled.button`
  border: 3px solid;
  border-color: #7CF7FF;
  height: 4%;
  background-image: linear-gradient(to right, #6CFFCA, #7CF7FF);
  border-radius: 35px;
  background-clip: text;
  margin: 2%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color:transparent;
  font-size: 18px;
  font-weight: bold;
  font-family: 'NanumSquareRound';
  padding: 0.6rem;
  outline: none;
  cursor: pointer;
  &:hover {
    
  }
  &.width{
    width: 46%
  }
`;

const Button = props => <StyledButton {...props} />;

export default Button;