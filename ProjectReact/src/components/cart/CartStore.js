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
  courseCart = JSON.parse(localStorage.getItem("courseCart" + id));
}else{
  localStorage.setItem("courseCart" + id,'[]');
  courseCart = [];
}

export const CartStoreStatus = {
  id: id,
  courseCart: courseCart,
  ingreCart: ingreCart,
  // courseCartCf: courseCart,
  // ingreCartCf: ingreCart,
  checkoutFinish: false,
  afterCoupon:0,
  couponSelect:null
};

const CartStore = createContext(CartStoreStatus);

export default CartStore;
