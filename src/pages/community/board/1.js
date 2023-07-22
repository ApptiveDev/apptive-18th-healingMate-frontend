import React, { useState } from "react";
import "./BoardMain.scss";
import { View } from "react-native";
import { ListStyles, Styles } from "./Styles";
import search_icon from "../../../images/search_icon.png";
import { Link } from "react-router-dom";

const BoardList = () => {
  return (
    <div className="CommuContentBox">
      <View style={ListStyles.listBox}>
        <View style={ListStyles.listLeft}>
          <img
            alt="CategoryIcon"
            className="CategoryIcon"
            src="../../images/treat_icon.png"
            style={{
              height: "31px",
              alignItems: "center",
              marginBottom: "4px",
            }}
          ></img>
          <div
            style={{
              flex: 1,
              height: "10px",
              fontSize: "12px",
              alignItems: "center",
            }}
          >
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </View>
        <View style={ListStyles.listCenter}>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              paddingBottom: "6px",
            }}
          >
            제목&nbsp;
            <img
              alt="CategoryIcon"
              src="../../images/image_icon.png"
              style={{
                flex: 1,
                width: "16px",
                height: "16px",
                alignItems: "center",
              }}
            ></img>
          </div>
          <div style={{ fontSize: "13.5px" }}>내용 앞부분</div>
        </View>
        <View style={ListStyles.listRight}>
          <div style={{ fontSize: "14px" }}>작성자</div>
          <div style={ListStyles.likesAndComments}>
            <span style={{ marginRight: "14px" }}>
              <img
                alt="like"
                src="../../images/like_icon.png"
                style={{ height: "15px", marginRight: "5px" }}
              ></img>
              2
            </span>
            <span>
              <img
                alt="comment"
                src="../../images/comment_icon.png"
                style={{ height: "15px", marginRight: "5px" }}
              ></img>
              3
            </span>
          </div>
        </View>
      </View>
    </div>
  );
};

const BoardMainOne = () => {
  const [searchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="CommuMain">
      <View style={Styles.bigTitle}>
        <div className="CommuTitle">
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>만성콩팥병</div>
          (Chronic renal failure)
        </div>
        <span style={Styles.boardButton}>
          <div style={Styles.buttonText}>질병정보</div>
        </span>
        <span style={Styles.buttonBox}>
          <div style={Styles.buttonText}>게시판</div>
        </span>
      </View>

      <div className="CommuBoard">
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <View style={ListStyles.Bottom}>
          <div className="searchingBox">
            <input
              placeholder="검색"
              name="search"
              type="search"
              onChange={onChange}
              value={searchInput}
              className="searchingInputBox"
            />
            <img
              src={search_icon}
              alt="search_icon"
              style={{ height: "20px" }}
            />
          </div>
          <img
            alt="pagenation"
            src="../../images/pagenation.png"
            style={{
              height: "16px",
              width: "200px",
            }}
          ></img>
          <div className="write">
            <Link to={`/write`}>
              <input
                type="button"
                className="writeButton"
                onClick={null}
              ></input>
            </Link>
          </div>
        </View>
      </div>
    </div>
  );
};

export default BoardMainOne;
