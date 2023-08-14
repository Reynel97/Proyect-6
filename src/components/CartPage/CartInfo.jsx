import useCartApi from "../../hooks/useCartApi";
import "./style/CartInfo.css";

const CartInfo = ({ prodCart }) => {
  const { deleteProductInCart, updateProductInCart } = useCartApi();

  const handleDeleteCart = () => {
    deleteProductInCart(prodCart.id);
  };

  const handleUpdateCart = (quantity) => {
    updateProductInCart(prodCart.id, { quantity });
  };

  return (
    <article className="cartinfo__contain">
      <div className="cartinfo__nav">
        <header className="cartinfo__header">
          <img
            className="cartinfo__img"
            src={prodCart.product.images[0]?.url}
            alt=""
          />
        </header>
      </div>
      <section className="cartinfo__main">
        <h3 className="cartinfo__title">{prodCart.product.title}</h3>
        <div className="cartinfo__price">
          <span className="cartinfo__label">Subtotal: </span>
          <span className="cartinfo__subtotal">
            ${prodCart.product.price * prodCart.quantity}
          </span>
        </div>
        <div className="cartinfo__info-quantity">
          <button
            className="cartinfo__btn minus"
            onClick={() => handleUpdateCart(prodCart.quantity - 1)}
            disabled={prodCart.quantity <= 1}
          >
            -
          </button>
          <span className="cartinfo__quantity">{prodCart.quantity}</span>
          <button
            className="cartinfo__btn plus"
            onClick={() => handleUpdateCart(prodCart.quantity + 1)}
          >
            +
          </button>
        </div>
        <button className="cartinfo__trash" onClick={handleDeleteCart}>
          <i className="bx bx-trash"></i>
        </button>
      </section>
    </article>
  );
};

export default CartInfo;
