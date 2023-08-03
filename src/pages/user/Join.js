import React, { useState, useEffect } from "react";
import "./Join.scss";
import joinLogo from "../../images/join_logo1.png";
import NavBar from "../../components/NavBar";
import next from "../../images/nextButton.png";
import BlurEffect from "../../components/blurEffect";
import { Link } from "react-router-dom";

function Join() {
  return (
    <div className="join">
      <div className="joinMain">
        <div className="joinLogo">
          <img alt="join_logo1" src={joinLogo}></img>
        </div>

        <div className="joinNickname">
          <label className="JoinName">닉네임</label>
          <br />
          <input
            className="JoinName_"
            type="text"
            style={{ backgroundColor: "white" }}
          />
        </div>

        {<BlurEffect />}

        <div className="joinId">
          <label className="JoinId">아이디</label>
          <br />
          <input
            className="JoinId_"
            type="text"
            style={{ backgroundColor: "white" }}
          />
        </div>

        <div className="joinPassword">
          <label className="JoinPassword">비밀번호</label>
          <br />
          <input
            className="JoinPassword_"
            type="text"
            style={{ backgroundColor: "white" }}
          />
        </div>

        <div className="joinCheck">
          <label className="JoinCheck">비밀번호 확인</label>
          <br />
          <input
            className="JoinCheck_"
            type="text"
            style={{ backgroundColor: "white" }}
          />
        </div>

        <div className="joinNext">
          <Link to="/join2">
            <button className="JoinNext">
              <img alt="nextButton" src={next}></img>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Join;
