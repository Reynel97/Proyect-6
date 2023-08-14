import axios from "axios";
import getConfigToken from "../utils/getConfigToken";
import { deleteCartG, getCartThunk } from "../store/slices/cart.slice";
import { useDispatch } from "react-redux";

const useCartApi = () => {
  const dispatch = useDispatch();
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";

  //POST
  const addProductInCart = (data) => {
    const url = `${baseUrl}/cart`;

    axios
      .post(url, data, getConfigToken())
      .then((res) => {
        console.log(res.data);
        dispatch(getCartThunk());
      })
      .catch((err) => console.log(err));
  };

  //DELETE

  const deleteProductInCart = (id) => {
    const url = `${baseUrl}/cart/${id}`;
    axios
      .delete(url, getConfigToken())
      .then((res) => {
        console.log(res.data);
        // dispatch(getCartThunk()) cualquier de los dos son buenos
        dispatch(deleteCartG(id));
      })
      .catch((err) => console.log(err));
  };

  //PUT

  const updateProductInCart = (id, quantity) => {
    const url = `${baseUrl}/cart/${id}`;

    axios
      .put(url, quantity, getConfigToken())
      .then((res) => {
        console.log(res.data);
        dispatch(getCartThunk());
      })
      .catch((err) => console.log(err));
  };

  return { addProductInCart, deleteProductInCart, updateProductInCart };
};

export default useCartApi;
