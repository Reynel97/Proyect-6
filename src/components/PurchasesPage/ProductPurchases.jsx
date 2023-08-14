import { useNavigate } from "react-router-dom";
import "./style/ProductPurchases.css";

const ProductPurchases = ({ purchase }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${purchase.product.id}`);
  };

  return (
    <article onClick={handleNavigate} className="purch__container">
      <img className="purch__img" src={purchase.product.images[0].url} alt="" />
      <h3 className="purch__title">{purchase.product.title}</h3>
      <div className="purch__quantity">{purchase.quantity}</div>
      <div className="purch__price">
        ${purchase.product.price * purchase.quantity}
      </div>
    </article>
  );
};

export default ProductPurchases;
