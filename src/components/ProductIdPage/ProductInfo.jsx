import { useState } from "react";
import useCartApi from "../../hooks/useCartApi";
import "./style/ProductInfo.css";

const ProductInfo = ({ product }) => {
  const [counter, setCounter] = useState(1);

  const { addProductInCart } = useCartApi();

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleAddCart = () => {
    const data = {
      quantity: counter,
      productId: product.id,
    };
    addProductInCart(data);
  };

  return (
    <div className="productinfo__contain">
      <h4 className="productinfo__brand">{product?.brand}</h4>
      <h3 className="productinfo__title">{product?.title}</h3>
      <p className="productinfo__description">{product?.description}</p>
      <div className="productinfo__flex">
        <section className="productinfo__group-price">
          <h3 className="productinfo__label">price</h3>
          <span className="productinfo__price">{product?.price}</span>
        </section>
        <section className="productinfo__group-quantity">
          <h4 className="productinfo__label">quantity</h4>
          <div className="productinfo__count">
            <button className="productinfo__btn" onClick={handleMinus}>
              -
            </button>
            <span>{counter}</span>
            <button className="productinfo__btn" onClick={handlePlus}>
              +
            </button>
          </div>
        </section>
      </div>
      <footer className="productinfo__footer">
        <button className="productinfo__btn-add" onClick={handleAddCart}>
          Add to cart <i className="bx bxs-cart"></i>
        </button>
      </footer>
    </div>
  );
};

export default ProductInfo;
