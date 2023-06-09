import React from "react";
import "./RareCommunity.scss";
import { Link } from "react-router-dom";
import arrow_left from "../../images/arrow_left.png";
import category_line from "../../images/category_line.png";

const rareCategory = [
  {
    id: 1,
    kor_name: "크론병",
    eng_name: "Crohn's disease",
  },
  {
    id: 2,
    kor_name: "망막색소변성증",
    eng_name: "Retinitis Pigmentosa",
  },
  {
    id: 3,
    kor_name: "크로이츠펠트-야콥병",
    eng_name: "Creutzfeldt-Jakob disease",
  },
  {
    id: 4,
    kor_name: "크론병",
    eng_name: "Crohn's disease",
  },
  {
    id: 5,
    kor_name: "크론병",
    eng_name: "Crohn's disease",
  },
  {
    id: 6,
    kor_name: "크론병",
    eng_name: "Crohn's disease",
  },
];

const RareCommunity = () => {
  return (
    <div>
      <div className="rareBox">
        <div className="titleRight">
          <p>희귀질환&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <br />
        <div className="rare">
          {rareCategory.map((a, i) => {
            return (
              <div className="category" style={{ "margin-top": "15px" }}>
                <Link
                  to={`/community/${a.id}`}
                  key={rareCategory.id}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    "justify-content": "space-between",
                    alignContent: "center",
                  }}
                >
                  <img
                    className="arrow_left"
                    alt="arrow_left"
                    src={arrow_left}
                    style={{
                      width: "20px",
                      height: "15px",
                      "margin-left": "30px",
                      marginTop: "15px",
                    }}
                  />
                  <span className="categoryText">
                    <div style={{ "font-size": "20px" }}>{a.kor_name}</div>
                    <text style={{ "font-size": "14px" }}>({a.eng_name})</text>
                  </span>
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

export default RareCommunity;
