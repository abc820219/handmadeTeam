import { REQ_COURSE_ORDER, REC_COURSE_ORDER ,REQ_INGRE_ORDER,REC_INGRE_ORDER} from "./OrderAction";

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
