import React, { useState, useEffect } from "react";
import "./Join2.scss";
import joinLogo from "../../images/join_logo1.png";
import NavBar from "../../components/NavBar";
import JoinButton from "../../images/joinButton.png";
import BlurEffect from "../../components/blurEffect";

function Join2() {
  return (
    <div className="join">
      <div className="joinMain">
        <div className="joinLogo">
          <img alt="join_logo1" src={joinLogo}></img>
        </div>

        <div className="gender">
          <select name="성별">
            <option value="">성별 선택</option>
            <option value="여자">여자</option>
            <option value="남자">여자</option>
          </select>
        </div>

        {<BlurEffect />}

        <div className="age">
          <select name="나이">
            <option value="">나이 선택</option>
            <option value="10대">10대</option>
            <option value="20대">20대</option>
          </select>
        </div>

        <div className="disease">
          <select name="관심질환">
            <option value="">질환 선택</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>

        <div className="checkBox1">
          <input type="checkbox" id="CheckBox1" className="CheckBox1" />
          <label> 서비스 이용약관 동의(필수)</label>
          <br />
        </div>

        <div className="checkBox2">
          <input type="checkbox" className="CheckBox2" />
          <label>
            개인정보 수집 및 이용 동의(필수)
            <br />
          </label>
        </div>

        <div className="joinButton">
          <button className="JoinButton">
            <img alt="joinButton" src={JoinButton}></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Join2;
