import logo from "../../img/Vector (2).png";
import logoOne from "../../img/VectorAboutUs.png";

import { Link } from "react-router-dom";

const ForYourPlesureFooter = () => {
  return (
    <div className="main_footer" style={{ top: "1410px" }}>
      <nav className="navigation_footer">
        <img
          style={{ background: "none" }}
          className="logo_footer"
          alt="logo"
          src={logo}
        ></img>
        <Link to="/">Coffee house</Link>
        <Link to="/our_coffee">Our coffee</Link>
        <Link to="/for_your_plesure">For your pleasure</Link>
      </nav>
      <hr className="hr-footer-first"></hr>
      <img className="footer_logo" alt="footer-logo" src={logoOne}></img>
      <hr className="hr-footer-second"></hr>
    </div>
  );
};

export default ForYourPlesureFooter;
