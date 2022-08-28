import logo from "../../img/Group.png";
import girlpicture from "../../img/girl-865304_1920.jpg";
import logo1 from "../../img/VectorAboutUs.png";
import "./our-coffee-header.css";

import { Link } from "react-router-dom";

const OurCoffeeHeader = () => {
  return (
    <div className="our_coffee_header">
      <nav className="navigation">
        <img
          style={{ background: "none" }}
          className="logo"
          alt="logo"
          src={logo}
        ></img>
        <Link to="/">Coffee house</Link>
        <Link to="/our_coffee">Our coffee</Link>
        <a href="#">For your pleasure</a>
      </nav>
      <h1 className="h1_our_coffe">Our Coffee</h1>
    </div>
  );
};

export default OurCoffeeHeader;
