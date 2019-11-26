import React, { createContext } from "react";

export const OrderStore = {
  order_sid:[],
  courseLists: [],
  ingreLists: [],
  subjectList: [],
  orderDetailLists:[],
  courseIsFetch: false,
  ingreIsFetch: false,
  subjectIsFetch: false,
  orderDetailFetch: false,
  orderDetailItem: null,
  orderType: 1
};

const Store = createContext(OrderStore);

export default Store;
