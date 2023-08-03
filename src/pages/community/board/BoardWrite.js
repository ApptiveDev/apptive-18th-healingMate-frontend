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
  const [contentInput, setContentInput] = useState("");
  const [category, setCategory] = useState("daily");

  const onChange = (e) => {
    setTitleInput(e.target.value);
  };

  const onChangeContent = (e) => {
    setContentInput(e.target.value);
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
            <span style={WriteStyles.Text}>
              제&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;목
            </span>
            <input
              name="title"
              type="string"
              onChange={onChange}
              value={titleInput}
              className="titleBox"
            />
          </View>
          <View style={WriteStyles.Title}>
            <span style={WriteStyles.Text}>카테고리</span>
            <CategoryFilter
              categories={categories}
              category={category}
              setCategory={setCategory}
            />
          </View>
        </div>
        <div
          style={{
            borderBottom: "2px solid gray",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            width: "1100px",
            marginLeft: "35px",
            height: "280px",
          }}
        >
          <input
            name="contentBox"
            type="string"
            onChange={onChangeContent}
            value={contentInput}
            className="contentBox"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
