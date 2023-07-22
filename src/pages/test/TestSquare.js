import React from "react";
import "./TestSquare.scss";

function buttonClick() {
  console.log("click");
}

const TestSquare = (e) => {
  const imgName = "../../images/" + e.img + ".png";
  return (
    <div className="squareBorder">
      <img
        className="testImage"
        src={imgName}
        alt={imgName}
        style={{ width: "305px", position: "absolute" }}
      />

      <input
        type="button"
        className="squareButton"
        onClick="buttonClick();"
      ></input>
      <div className="textBox">{e.name}</div>
    </div>
  );
};

export default TestSquare;
