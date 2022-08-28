import girlpicture from "../../img/girl-865304_1920.jpg";
import logo1 from "../../img/VectorAboutUs.png";
import "./our-coffee-content.css";

const OurCoffeeContent = () => {
  return (
    <div>
      <img className="picture_with_girl" alt="girl" src={girlpicture}></img>
      <p className="about_our_beans">About our beans</p>
      <hr className="hr-first-our-coffee"></hr>
      <img className="logo1" alt="logo1" src={logo1}></img>
      <hr className="hr-second-our-coffee"></hr>
      <p className="about_our_beans_content">
        Extremity sweetness difficult behaviour he of. On disposal of as
        landlord horrible.
        <br /> <br />
        Afraid at highly months do things on at. Situation recommend objection
        do intention so questions.
        <br /> As greatly removed calling pleased improve an. Last ask him cold
        feel
        <br /> met spot shy want. Children me laughing we prospect answered
        followed. At it went
        <br /> is song that held help face.
      </p>
      <hr className="underline"></hr>
    </div>
  );
};

export default OurCoffeeContent;
