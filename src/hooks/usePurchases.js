import axios from "axios";
import getConfigToken from "../utils/getConfigToken";
import { useState } from "react";
import { getCartThunk } from "../store/slices/cart.slice";
import { useDispatch } from "react-redux";

const usePurchases = () => {
  const [purchases, setPurchases] = useState();

  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases";

  const dispatch = useDispatch();

  //POST
  const makeAPurchase = () => {
    axios
      .post(url, {}, getConfigToken())
      .then((res) => {
        console.log(res.data);
        dispatch(getCartThunk());
      })
      .catch((err) => console.log(err));
  };

  //.GET
  const getAllPurchase = () => {
    axios
      .get(url, getConfigToken())
      .then((res) => {
        console.log(res.data);
        setPurchases(res.data);
      })
      .catch((err) => console.log(err));
  };

  return { makeAPurchase, getAllPurchase, purchases };
};

export default usePurchases;
