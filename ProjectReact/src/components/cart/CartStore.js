import { createContext } from "react";

const id = localStorage.getItem("member_id");

let ingreCart;
let courseCart;

if(localStorage.getItem("ingreCart" + id)){
  ingreCart = JSON.parse(localStorage.getItem("ingreCart" + id));
}else{
  localStorage.setItem("ingreCart" + id,'[]');
  ingreCart = [];
}

if(localStorage.getItem("courseCart" + id)){
  ingreCart = JSON.parse(localStorage.getItem("courseCart" + id));
}else{
  localStorage.setItem("courseCart" + id,'[]');
  courseCart = [];
}

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
