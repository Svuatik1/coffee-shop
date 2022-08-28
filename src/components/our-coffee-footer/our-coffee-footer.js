import "../main-footer/main-footer.css";
import logo from "../../img/Vector (2).png";
import logoOne from "../../img/VectorAboutUs.png";

import { Link } from "react-router-dom";

const OurCoffeeFooter = () => {
  return (
    <div className="main_footer" style={{ top: "1490px" }}>
      <nav className="navigation_footer">
        <img
          style={{ background: "none" }}
          className="logo_footer"
          alt="logo"
          src={logo}
        ></img>
        <Link to="/">Coffee house</Link>
        <Link to="/our_coffee">Our coffee</Link>
        <a href="#">For your pleasure</a>
      </nav>
      <hr className="hr-footer-first"></hr>
      <img className="footer_logo" alt="footer-logo" src={logoOne}></img>
      <hr className="hr-footer-second"></hr>
    </div>
  );
};

export default OurCoffeeFooter;
