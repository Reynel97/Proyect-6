import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react";
import CartInfo from "../components/CartPage/CartInfo";
import usePurchases from "../hooks/usePurchases";
import './style/CartPage.css'

const CartPage = () => {

  const cart = useSelector(reducer => reducer.cart)

  const { makeAPurchase} = usePurchases()
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk())
}, []);

console.log(cart)

const totalAmount = cart.reduce( (acc, cv) => {
  const subTotal = cv.quantity * cv.product.price
  return acc + subTotal
},0)

const handlePurchase = () => {
    makeAPurchase()
}

  return (
    <section className="cartpage__container">
      <h2 className="cartpage__title">Cart</h2>
     { totalAmount < 1 
     ? <h2 className="cartpage__message">There are no products in the cart.</h2>
     :
      <div className="cartpage__product">
        {
          cart.map( prod => (
           <CartInfo
           key={prod.id}
          prodCart={prod}
           />
          ) )
        }
      </div>}
      <footer className="cartpage__footer">
        <div className="cartpage__container-total">
          <div className="cartpage__amount">
        <span className="cartpage__label">Total:</span>
        <h3 className="cartpage__total">${totalAmount}</h3>
          </div>
        <button className="cartpage__btn" onClick={handlePurchase}>Checkout</button>
        </div>
      </footer>
    </section>
  )
}

export default CartPage