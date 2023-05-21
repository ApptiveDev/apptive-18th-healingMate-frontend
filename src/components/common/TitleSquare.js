import React from "react";
import styled from "styled-components";

const StyledSquare = styled.div`
  border: none;
  width: 365px;
  height: 50px;
  font-color: black;
  font-size: 18px;
  font-weight: 500;
  font-family: "NanumSquareNeo";
  margin-top: 20vh;
  text-align: right;
  background: linear-gradient(to right, #6cffca, #7cf7ff);
`;

const TitleSquare = (props) => {
  <StyledSquare>
    <text>...props</text>
  </StyledSquare>;
};

export default TitleSquare;
