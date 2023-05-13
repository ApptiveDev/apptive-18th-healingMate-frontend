import { Link } from "react-router-dom";
import "../styles/NavBar.scss";
import symbol from "../images/hm_symbol.png";
import logo from "../images/hm_logo.png";
import bar from "../images/navbar_bar.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar_mainlink">
        <img alt="hm_symbol" src={symbol} style={{ height: "70px" }} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img alt="hm_logo" src={logo} style={{ height: "40px" }} />
      </Link>
      <div className="navbar_list">
        <Link to="/" className="navbar_list_item">
          홈
        </Link>
        <img
          alt="navbar_bar"
          src={bar}
          style={{ height: "20px", width: "1px" }}
        />
        <Link to="/community" className="navbar_list_item">
          커뮤니티
        </Link>
        <img
          alt="navbar_bar"
          src={bar}
          style={{ height: "20px", width: "1px" }}
        />
        <Link to="/information" className="navbar_list_item">
          질병정보
        </Link>
        <img
          alt="navbar_bar"
          src={bar}
          style={{ height: "20px", width: "1px" }}
        />
        <Link to="/test" className="navbar_list_item">
          검사
        </Link>
        <img
          alt="navbar_bar"
          src={bar}
          style={{ height: "20px", width: "1px" }}
        />
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="navbar_button login_button">
            <div className="button_text">로그인</div>
          </button>
        </Link>
        <Link to="/join" style={{ textDecoration: "none" }}>
          <button className="navbar_button join_button">
            <div className="button_text">회원가입</div>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
