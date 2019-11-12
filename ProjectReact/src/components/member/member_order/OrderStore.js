import React, { createContext } from "react";

// export const Store = createContext(
//   // courseLists: [],
//   // ingreLists: [],
//   // courseIsFetch: false,
//   // ingreIsFetch: false
//   {abc:"123"}
// );

// export default function OrderStore (props) {
//   return (
//     <Store.Provider>
//       {props.children}
//     </Store.Provider>
//   )
// }

export const OrderStore = {
  courseLists: [],
  ingreLists: [],
  courseIsFetch: false,
  ingreIsFetch: false
};

const Store = createContext(OrderStore);

export default Store;
