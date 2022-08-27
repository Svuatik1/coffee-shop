import "./main-header.css";
import logo from "../../img/Group.png";
import logoOne from "../../img/Vector.png";

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
        <a href="/">Coffee house</a>
        <a href="/">Our coffee</a>
        <a href="/">For your pleasure</a>
      </nav>
      <h1>Everything You Love About Coffee</h1>
      <hr className="hr-first"></hr>
      <img className="logo1" alt="logo" src={logoOne}></img>
      <hr className="hr-second"></hr>
      <h2>We makes every day full of energy and taste</h2>
      <h3>Want to try our beans?</h3>
      <button className="more-button">More</button>
      <div className="main_img"></div>
    </div>
  );
};

export default MainHeader;
