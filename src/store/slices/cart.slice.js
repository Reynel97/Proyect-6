import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getConfigToken";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setcartG: (state, action) => action.payload,
    addCartG: (state, action) => [...state, action.payload],
    deleteCartG: (state, action) =>
      state.filter((prod) => prod.id !== action.payload),
  },
});

export const { setcartG, addCartG, deleteCartG } = cartSlice.actions;

export default cartSlice.reducer;

export const getCartThunk = () => (dispatch) => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";

  axios
    .get(url, getConfigToken())
    .then((res) => dispatch(setcartG(res.data)))
    .catch((err) => console.log(err));
};
