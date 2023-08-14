import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardProduct from "../HomePage/CardProduct";
import "./style/SimilarProducts.css";

const SimilarProducts = ({ product }) => {
  const [productsByCategory, getProductsByCategory] = useFetch();

  useEffect(() => {
    if (product) {
      getProductsByCategory(`/products?categoryId=${product.categoryId}`);
    }
  }, [product]);

  const cbFilter = (prod) => {
    if (prod.id !== product.id) {
      return prod;
    }
  };

  return (
    <div className="similar__contain">
      <h2 className="similar__title">similar products</h2>
      <div className="similar__cards">
        {productsByCategory?.filter(cbFilter).map((prod) => (
          <CardProduct key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
