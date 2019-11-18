import { createContext } from "react";

const id = localStorage.getItem("member_id");
const ingreCart = JSON.parse(localStorage.getItem("ingreCart" + id));
const courseCart = JSON.parse(localStorage.getItem("courseCart" + id));

export const CartStoreStatus = {
  id: id,
  step: 0,
  courseCart: courseCart,
  ingreCart: ingreCart,
  courseCartCf: courseCart,
  ingreCartCf: ingreCart,
  checkoutFinish: false
};

const CartStore = createContext(CartStoreStatus);

export default CartStore;
