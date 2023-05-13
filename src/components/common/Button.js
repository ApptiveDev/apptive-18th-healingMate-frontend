import styled from "styled-components";

const StyledButton = styled.button`
  border: 3px solid;
  border-color: #6CFFCA;
  height: 4%;
  margin: 2%;
  background: #6CFFCA;
  border-radius: 35px;
  font-size: 18px;
  font-weight: bold;
  font-family: 'NanumSquareRound';
  text-shadow: 0 0 1.5px gray;
  padding: 0.6rem;
  color: white;
  outline: none;
  cursor: pointer;
  &:hover {
    background: white;
  }
  &.width{
    width: 46%
  }
  .fill {
    background: linear-gradient(to right, #6CFFCA, #7CF7FF);
  }
`;

const Button = props => <StyledButton {...props} />;

export default Button;