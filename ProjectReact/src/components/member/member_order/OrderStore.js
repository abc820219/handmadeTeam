import React, { createContext } from "react";

export const OrderStore = {
  courseLists: [],
  ingreLists: [],
  courseIsFetch: false,
  ingreIsFetch: false
};

const Store = createContext(OrderStore);

export default Store;
