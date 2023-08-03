import React from "react";
import "./Community.scss";
import ChronicCommunity from "./ChronicCommunity";
import RareCommunity from "./RareCommunity";
import commu_icon from "../../images/commu_icon.png";
import logo from "../../images/hm_logo.png";
import search_icon from "../../images/search_icon.png";
import { useEffect, useState } from "react";

const Community = () => {
  const [searchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="categoryBox">
      <RareCommunity />
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <img src={commu_icon} alt="commu_icon" style={{ height: "60px" }} />
        <br />
        <br />
        <div style={{ height: "40px" }}>
          <img src={logo} alt="logo" style={{ height: "40px" }} />
          <text
            style={{
              fontSize: "30px",
              fontFamily: "NanumSquare Neo",
              marginBottom: "50px",
            }}
          >
            &nbsp;커뮤니티입니다
          </text>
        </div>
        <br />
        <br />
        <div
          style={{
            fontSize: "18px",
            fontFamily: "NanumSquare Neo",
          }}
        >
          사람들과 소중한 경험과 노하우를 나누고
        </div>
        <br />
        <div className="searchMainBox">
          <input
            placeholder="검색"
            name="search"
            type="search"
            onChange={onChange}
            value={searchInput}
            className="searchMainInputBox"
          />
          <img src={search_icon} alt="search_icon" style={{ height: "20px" }} />
        </div>
        <br />
        <div
          style={{
            fontSize: "18px",
            fontFamily: "NanumSquare Neo",
          }}
        >
          서로 힘을 주고 받아요
        </div>
      </div>

      <ChronicCommunity />
    </div>
  );
};

export default Community;
