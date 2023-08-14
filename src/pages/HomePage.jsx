import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";
import { useRef, useState } from "react";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";
import "./style/HomePage.css";

const HomePage = () => {
  const [nameValue, setNameValue] = useState("");
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });
  const [showAside, setShowAside] = useState(false);

  const inputName = useRef();
  const products = useSelector((reducer) => reducer.products);

  const handleFilterName = () => {
    console.log(inputName.current.value);
    setNameValue(inputName.current.value);
  };

  const cbFilter = (prod) => {
    //filter by name
    const inputNameLower = nameValue.toLowerCase().trim();
    const nameReal = prod.title?.toLowerCase();
    const filterName = nameReal.includes(inputNameLower);
    //filter by price
    const price = +prod.price;
    const filterPrice = fromTo.from < price && price <= fromTo.to;

    return filterName && filterPrice;
  };

  const handleAside = () => {
    setShowAside(!showAside);
  };

  return (
    <div className="home__container">
      <div className={`home__aside ${showAside ? "show--aside" : ""}`}>
        <div className="fixed">
          <i onClick={handleAside} className="bx bx-x show--filter"></i>
          <FilterPrice setFromTo={setFromTo} />
          <FilterCategory />
        </div>
      </div>
      <div className="main__contain">
        <input
          onChange={handleFilterName}
          type="text"
          value={nameValue}
          ref={inputName}
          placeholder="What are you looking for?"
        />
        <div className="home__filter show--filter">
          <span onClick={handleAside} className="filter__label">
            Filter
          </span>
          <i onClick={handleAside} className="bx bxs-filter-alt"></i>
        </div>
        <div className="contain__card">
          {products?.filter(cbFilter).length === 0 ? (
            <h2 className="home__error">
              Sorry, Not exist products with this filter. ❌
            </h2>
          ) : (
            products
              ?.filter(cbFilter)
              .map((prod) => <CardProduct key={prod.id} product={prod} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
