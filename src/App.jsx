import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { getProductsThunk } from "./store/slices/products.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/shared/Header";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductIdPage from "./pages/ProductIdPage";
import CartPage from "./pages/CartPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import PurchasesPage from "./pages/PurchasesPage";

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductIdPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/purchases" element={<PurchasesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
