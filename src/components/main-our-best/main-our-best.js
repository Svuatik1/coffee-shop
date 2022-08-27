import "./main-our-best.css";
import foto1 from "../../img/815O9ktyfUL.jpg";
import foto2 from "../../img/91Ryk2gKejL.jpg";
import foto3 from "../../img/71qBQnpQFYL.jpg";

const MainOurBest = () => {
  return (
    <div className="our_best_container">
      <h2 className="our_best">Our best</h2>
      <div className="best_list">
        <div className="rectangle">
          <img className="foto1" alt="foto1" src={foto1}></img>
          <p className="text_under_item">Solimo Coffee Beans 2 kg</p>
          <p className="price_under_item1">10.73$</p>
        </div>
        <div className="rectangle">
          <img className="foto2" alt="foto2" src={foto2}></img>
          <p className="text_under_item">Presto Coffee Beans 1 kg</p>
          <p className="price_under_item2">15.99$</p>
        </div>
        <div className="rectangle">
          <img className="foto3" alt="foto3" src={foto3}></img>
          <p className="text_under_item">AROMISTICO Coffee 1 kg</p>
          <p className="price_under_item3">6.99$</p>
        </div>
      </div>
    </div>
  );
};

export default MainOurBest;
