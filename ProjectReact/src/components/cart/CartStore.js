import { createContext } from "react";

const id = localStorage.getItem('member_id');
const teacherCart = localStorage.getItem('teacherCart'+id);
const ingreCart = localStorage.getItem('ingreCart'+id);

export const CartStoreStatus = {
    step: 0,
    teacherCart: {},
    ingreCart: {}
};

const CartStore = createContext(CartStoreStatus);

export default CartStore;