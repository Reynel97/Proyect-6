import { Link, useNavigate } from "react-router-dom";
import "./style/Header.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const cart = useSelector((reducer) => reducer.cart);

  const navigate = useNavigate();
  const handleCloseAccount = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const totalNotify = cart.reduce((acc, cv) => {
    return acc + cv.quantity;
  }, 0);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <nav className="header__navbar">
        <Link to={"/"}>
          <h1 className="header__logo">e-commerce</h1>
        </Link>
        <ul
          onClick={handleMenu}
          className={`header__list ${showMenu ? "show--menu" : ""}`}
        >
          <li
            className={`header__item ${
              localStorage.getItem("token") ? "token-none" : ""
            }`}
          >
            <Link className="header__link" to="/register">
              Register
            </Link>
          </li>
          <li
            className={`header__item ${
              localStorage.getItem("token") ? "token-none" : ""
            }`}
          >
            <Link className="header__link" to="/login">
              Login
            </Link>
          </li>
          <li className="header__item cart-link">
            <Link className="header__link " to="/cart">
              Cart
            </Link>
            {localStorage.getItem("token")
              ? totalNotify > 0 && <span className="notify">{totalNotify}</span>
              : ""}
          </li>
          <li className="header__item">
            <Link className="header__link" to="/purchases">
              Purchases
            </Link>
          </li>
          {localStorage.getItem("token") && (
            <button
              className="header__item btn-singout"
              onClick={handleCloseAccount}
            >
              Sing out
            </button>
          )}
        </ul>
        <div onClick={handleMenu} className="header__icon display-none">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
