import React from "react";
import { View } from "react-native";
import { Styles, WriteStyles } from "./Styles";
import "./BoardMain.scss";
import { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";

const categories = [
  {
    name: "일상",
    value: "daily",
  },
  {
    name: "치료",
    value: "treatment",
  },
  {
    name: "기타",
    value: "etc",
  },
];

const BoardWrite = () => {
  const [titleInput, setTitleInput] = useState("");
  const [category, setCategory] = useState("");

  const onChange = (e) => {
    setTitleInput(e.target.value);
  };

  return (
    <div className="CommuMain">
      <View style={Styles.bigTitle}>
        <div className="CommuTitle">
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>만성콩팥병</div>
          (Chronic renal failure)
        </div>
        <span style={Styles.boardButton}></span>
      </View>
      <div className="CommuBoard">
        <div className="WriteTop">
          <View style={WriteStyles.Title}>
            <span style={{ marginTop: "5px" }}>제&nbsp;&nbsp;&nbsp;목</span>
            <input
              name="title"
              type="string"
              onChange={onChange}
              value={titleInput}
              className="titleBox"
            />
          </View>
          <View style={WriteStyles.Title}>
            <span>카테고리</span>
            <CategoryFilter
              categories={categories}
              category={category}
              setCategory={setCategory}
            />
          </View>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
