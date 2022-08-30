import { useEffect, useState } from "react";
import "./our-coffee-list.css";
import picture from "../../img/71qBQnpQFYL.jpg";
import data from "../../backend/data";

const OurCoffeeList = () => {
  const [coffeeBase] = useState(data);
  const [filterBase, setFilterBase] = useState([]);
  const [onFilter, setOnFilter] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [inputFilter, setInputFilter] = useState("");

  const onInput = (e) => {
    setInputFilter(e.currentTarget.value);
  };

  const checkFrom = (e) => {
    const firstPartId = e.target.className
      .split(" ")[1]
      .split("")[0]
      .toUpperCase();
    const secondPartId = e.target.className.split(" ")[1].slice(1);
    const id = firstPartId + secondPartId;
    filterElements(id);
    setActiveButton(id);
  };

  const filterElements = (id) => {
    const someElements = coffeeBase.filter((item) => item.from === id);
    setFilterBase(someElements);
    setOnFilter(true);
  };

  let filter = onFilter ? filterBase : coffeeBase;

  useEffect(() => {
    const someElements = coffeeBase.filter(
      (item) => item.name.indexOf(inputFilter) > -1
    );
    setFilterBase(someElements);
    // eslint-disable-next-line
    filter = filterBase;
    setOnFilter(true);
  }, [inputFilter]);

  let viewElms = filter.map((item) => {
    return (
      <div className="wrapper" key={item.id}>
        <img className="foto1" alt="foto1" src={picture}></img>
        <p className="text_under_item">{item.name}</p>
        <p className="country">{item.from}</p>
        <p className="price_under_item">{item.price}$</p>
      </div>
    );
  });

  return (
    <div>
      <p className="looking_for">Lookiing for</p>
      <input
        value={inputFilter}
        className="input_for_search"
        placeholder=" start typing here..."
        onChange={onInput}
      ></input>
      <p className="our_filter">Or filter</p>
      <button
        onClick={checkFrom}
        className={`button_filter brazil ${
          activeButton === "Brazil" ? "active" : ""
        }`}
      >
        Brazil
      </button>
      <button
        onClick={checkFrom}
        className={`button_filter kenya ${
          activeButton === "Kenya" ? "active" : ""
        }`}
      >
        Kenya
      </button>
      <button
        onClick={checkFrom}
        className={`button_filter columbia ${
          activeButton === "Columbia" ? "active" : ""
        }`}
      >
        Columbia
      </button>
      <div className="best_list_filter">{viewElms}</div>
    </div>
  );
};

export default OurCoffeeList;
