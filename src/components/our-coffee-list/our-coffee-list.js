import "./our-coffee-list.css";
import picture from "../../img/71qBQnpQFYL.jpg";

const OurCoffeeList = () => {
  return (
    <div>
      <p className="looking_for">Lookiing for</p>
      <input
        className="input_for_search"
        placeholder=" start typing here..."
      ></input>
      <p className="our_filter">Or filter</p>
      <button className="button_filter brazil">Brazil</button>
      <button className="button_filter kenya">Kenya</button>
      <button className="button_filter columbia">Columbia</button>
      <div className="best_list_filter">
        <div className="wrapper">
          <img className="foto1" alt="foto1" src={picture}></img>
          <p className="text_under_item">Solimo Coffee Beans 2 kg</p>
          <p className="country">Brazil</p>
          <p className="price_under_item">10.73$</p>
        </div>
        <div className="wrapper">
          <img className="foto1" alt="foto1" src={picture}></img>
          <p className="text_under_item">Solimo Coffee Beans 2 kg</p>
          <p className="country">Brazil</p>
          <p className="price_under_item">10.73$</p>
        </div>
        <div className="wrapper">
          <img className="foto1" alt="foto1" src={picture}></img>
          <p className="text_under_item">Solimo Coffee Beans 2 kg</p>
          <p className="country">Brazil</p>
          <p className="price_under_item">10.73$</p>
        </div>
        <div className="wrapper">
          <img className="foto1" alt="foto1" src={picture}></img>
          <p className="text_under_item">Solimo Coffee Beans 2 kg</p>
          <p className="country">Brazil</p>
          <p className="price_under_item">10.73$</p>
        </div>
        <div className="wrapper">
          <img className="foto1" alt="foto1" src={picture}></img>
          <p className="text_under_item">Solimo Coffee Beans 2 kg</p>
          <p className="country">Brazil</p>
          <p className="price_under_item">10.73$</p>
        </div>
        <div className="wrapper">
          <img className="foto1" alt="foto1" src={picture}></img>
          <p className="text_under_item">Solimo Coffee Beans 2 kg</p>
          <p className="country">Brazil</p>
          <p className="price_under_item">10.73$</p>
        </div>
      </div>
    </div>
  );
};

export default OurCoffeeList;
