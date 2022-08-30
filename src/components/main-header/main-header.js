import "./main-header.css";
import logo from "../../img/Group.png";
import logoOne from "../../img/Vector.png";

import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="header">
      <nav className="navigation">
        <img
          style={{ background: "none" }}
          className="logo"
          alt="logo"
          src={logo}
        ></img>
        <Link to="/">Coffee house</Link>
        <Link to="/our_coffee">Our coffee</Link>
        <Link to="/for_your_plesure">For your pleasure</Link>
      </nav>
      <h1>Everything You Love About Coffee</h1>
      <hr className="hr-first-main-header"></hr>
      <img className="logo1-main-header" alt="logo" src={logoOne}></img>
      <hr className="hr-second-main-header"></hr>
      <h2>We makes every day full of energy and taste</h2>
      <h3>Want to try our beans?</h3>
      <Link to="/our_coffee">
        <button className="more-button">More</button>
      </Link>
      <div className="main_img"></div>
    </div>
  );
};

export default MainHeader;
