import "./for-your-plesure-header.css";
import logo from "../../img/Group.png";

import { Link } from "react-router-dom";

const ForYourPlesureHeader = () => {
  return (
    <div className="for_your_plesure_header">
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
      <h1 className="h1_our_coffe">For your pleasure</h1>
    </div>
  );
};

export default ForYourPlesureHeader;
