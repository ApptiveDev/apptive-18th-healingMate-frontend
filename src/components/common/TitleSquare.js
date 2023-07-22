import React from "react";
import styled from "styled-components";

const StyledSquare = styled.div`
  border: none;
  width: 365px;
  height: 50px;
  font-color: black;
  font-size: 18px;
  font-weight: bold;
  font-family: "NanumSquareRound";
  text-align: right;
  justify-content: center;
  align-items: right;
  padding-top: 18vh;
  background: linear-gradient(to right, #6cffca, #7cf7ff);
`;

const TitleSquare = (props) => <StyledSquare {...props} />;

export default TitleSquare;
