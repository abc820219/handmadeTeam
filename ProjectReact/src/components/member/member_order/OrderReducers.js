import { REQ_COURSE_ORDER, REC_COURSE_ORDER } from "./OrderAction";

export const courseListReducer = (state, action) => {
  switch (action.type) {
    case REQ_COURSE_ORDER:
      return Object.assign({}, state, {
        courseIsFetch: true
      });
    case REC_COURSE_ORDER:
      return Object.assign({}, state, {
        courseIsFetch: false,
        courseLists: [...state.courseLists, action.payload]
      });
    default:
      return state;
  }
};

export const ingreListReducer = (state, action) => {
  switch (action.type) {
    case "REQ_INGRE_ORDER":
      return Object.assign({}, state, {
        orders: state.orders.concat({ id: state.orders.length })
      });
    default:
      return state;
  }
};
