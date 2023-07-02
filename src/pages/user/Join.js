import React, { useState, useEffect} from 'react';
import './Join.scss';
import { useNavigate } from 'react-router-dom';
import joinLogo from '../../images/join_logo1.png';
import NavBar from '../../components/NavBar';
import next from '../../images/nextButton.png';
import BlurEffect from '../../components/blurEffect';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Join() {
  const navigate = useNavigate();

  const headers = {
    'Content-Type': 'application/json'
  };

  const [memberNickname, setMemberNickname] = useState('');
  const [pwd1, setPwd1] = useState('');
  const [pwd2, setPwd2] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const signUpData = {
      memberNickname: memberNickname,
      pwd1: pwd1,
      pwd2: pwd2
    };

    axios.post('http://43.201.163.27:8080/member/join/1', signUpData, { headers })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="join">
      <form onSubmit={handleSubmit}>
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
              style={{ backgroundColor: 'white' }}
              value={memberNickname}
              onChange={e => setMemberNickname(e.target.value)}
            />
          </div>

          <div className="joinPassword">
            <label className="JoinPassword">비밀번호</label>
            <br />
            <input
              className="JoinPassword_"
              type="text"
              style={{ backgroundColor: 'white' }}
              value={pwd1}
              onChange={e => setPwd1(e.target.value)}
            />
          </div>

          <div className="joinCheck">
            <label className="JoinCheck">비밀번호 확인</label>
            <br />
            <input
              className="JoinCheck_"
              type="text"
              style={{ backgroundColor: 'white' }}
              value={pwd2}
              onChange={e => setPwd2(e.target.value)}
            />
          </div>

          <div className="joinNext">
           
              <button className="JoinNext">
                <img alt="nextButton" src={next}></img>
              </button>
        
          </div>
        </div>
      </form>
    </div>
  );
}

export default Join;