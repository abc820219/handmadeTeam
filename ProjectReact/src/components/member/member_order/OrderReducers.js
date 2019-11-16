import { REQ_COURSE_ORDER, REC_COURSE_ORDER, REQ_INGRE_ORDER, REC_INGRE_ORDER, REQ_ORDER_DETAIL, REC_ORDER_DETAIL } from "./OrderAction";

export const courseListReducer = (state, action) => {
  switch (action.type) {
    case REQ_COURSE_ORDER:
      return Object.assign({}, state, {
        courseIsFetch: true
      });
    case REC_COURSE_ORDER:
      const newcourseLists = action.payload;
      return Object.assign({}, state, {
        courseIsFetch: false,
        courseLists: newcourseLists
      });
    default:
      return state;
  }
};

export const ingreListReducer = (state, action) => {
  switch (action.type) {
    case REQ_INGRE_ORDER:
      return Object.assign({}, state, {
        ingreIsFetch: true
      });
    case REC_INGRE_ORDER:
      const newingreLists = action.payload;
      console.log(newingreLists);
      return Object.assign({}, state, {
        ingreIsFetch: false,
        ingreLists: newingreLists
      });
    default:
      return state;
  }
};


export const orderDetailReducer = (state, action) => {
  switch (action.type) {
    case REQ_ORDER_DETAIL:
      const newItem = action.payload.item;
      const newType = action.payload.type;
      console.log(newType);
      return Object.assign({}, state, {
        orderType: newType,
        orderDetailItem: newItem,
        orderDetailFetch: true
      });
    case REC_ORDER_DETAIL:
      const neworderDetailLists = action.payload;
      console.log(neworderDetailLists);
      return Object.assign({}, state, {
        orderDetailFetch: false,
        orderDetailLists: neworderDetailLists
      });
    default:
      return state;
  }
};
