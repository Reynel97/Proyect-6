import { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import ProductPurchases from "../components/PurchasesPage/ProductPurchases";
import "./style/PurchasesPage.css";

const PurchasesPage = () => {
  const { getAllPurchase, purchases } = usePurchases();

  useEffect(() => {
    getAllPurchase();
  }, []);

  return (
    <section className="purchases__container">
      <h2 className="purchases__title">My Purchases</h2>
      <div className="purchases__products">
        {purchases?.map((purch) => (
          <ProductPurchases key={purch.id} purchase={purch} />
        ))}
      </div>
    </section>
  );
};

export default PurchasesPage;
