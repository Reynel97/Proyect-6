import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import {
  getFilteredProductsThunk,
  getProductsThunk,
} from "../../store/slices/products.slice";

import "./style/FilterCategory.css";

const FilterCategory = () => {
  const [categories, getAllCategories] = useFetch();

  useEffect(() => {
    getAllCategories("/categories");
  }, []);

  const dispatch = useDispatch();

  const handleAllCategories = () => {
    dispatch(getProductsThunk());
  };

  const handleFilterCategories = (id) => {
    dispatch(getFilteredProductsThunk(id));
  };

  return (
    <article className="filter__category">
      <h3 className="filter__category__title">Category</h3>
      <ul className="filter__category__list">
        <li className="filter__category__item" onClick={handleAllCategories}>
          All Categories
        </li>
        {categories?.map((category) => (
          <li
            className="filter__category__item"
            onClick={() => handleFilterCategories(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
