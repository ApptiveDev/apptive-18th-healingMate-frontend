import React from "react";
import "./ChronicCommunity.scss";
import { Link } from "react-router-dom";
import arrow_right from "../../images/arrow_right.png";
import category_line from "../../images/category_line.png";

const chronicCategory = [
  {
    id: 1,
    kor_name: "만성콩팥병",
    eng_name: "Crohnic renal failure",
  },
  {
    id: 2,
    kor_name: "콜린성 두드러기",
    eng_name: "Cholinergic urticarla",
  },
  {
    id: 3,
    kor_name: "만성콩팥병",
    eng_name: "Crohnic renal failure",
  },
  {
    id: 4,
    kor_name: "만성콩팥병",
    eng_name: "Crohnic renal failure",
  },
  {
    id: 5,
    kor_name: "만성콩팥병",
    eng_name: "Crohnic renal failure",
  },
  {
    id: 6,
    kor_name: "만성콩팥병",
    eng_name: "Crohnic renal failure",
  },
];

const ChronicCommunity = () => {
  return (
    <div>
      <div className="chronicBox">
        <div className="titleLeft">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;만성질환</p>
        </div>
        <br />
        <div className="chronic">
          {chronicCategory.map((a, i) => {
            return (
              <div className="category" style={{ "margin-top": "15px" }}>
                <Link
                  to={`/board/${a.id}`}
                  key={chronicCategory.id}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    "justify-content": "space-between",
                    alignContent: "center",
                  }}
                >
                  <span className="categoryText">
                    <div style={{ "font-size": "20px" }}>{a.kor_name}</div>
                    <text style={{ "font-size": "14px" }}>({a.eng_name})</text>
                  </span>
                  <img
                    className="arrow_right"
                    alt="arrow_right"
                    src={arrow_right}
                    style={{
                      width: "20px",
                      height: "15px",
                      "margin-right": "30px",
                      marginTop: "15px",
                    }}
                  />
                </Link>
                <div>
                  <img
                    alt="line"
                    src={category_line}
                    style={{ width: "325px", "margin-left": "25px" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChronicCommunity;
