import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ProductInfo from "../components/ProductIdPage/ProductInfo";
import SimilarProducts from "../components/ProductIdPage/SimilarProducts";
import SliderImgs from "../components/ProductIdPage/SliderImgs";
import "./style/ProductIdPage.css";

const ProductIdPage = () => {
  const { id } = useParams();

  const [product, getSingleProduct] = useFetch();

  useEffect(() => {
    getSingleProduct(`/products/${id}`);
  }, [id]);

  return (
    <div className="productpage__container">
      <div className="productpage__info">
        <div className="col">
          <SliderImgs product={product} />
        </div>
        <div className="col">
          <ProductInfo product={product} />
        </div>
      </div>
      <SimilarProducts product={product} />
    </div>
  );
};

export default ProductIdPage;
