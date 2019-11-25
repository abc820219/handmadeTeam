import {
  CART_NEXT_PAGE,
  CART_PREV_PAGE,
  SELECT_COURSE,
  UN_SELECT_COURSE,
  ADD_COURSE_ITEM,
  ADD_INGRE_ITEM,
  CANCEL_COURSE_ITEM,
  CANCEL_INGRE_ITEM,
  CORSE_CART_RERENDER,
  INGRE_CART_RERENDER,
  CHECK_OUT
} from "./CartAction";

export const cartIngreRerender = (state, action) => {
  switch (action.type) {
    case INGRE_CART_RERENDER:
      const id = action.payload;
      const ingreCart = localStorage.getItem(`ingreCart${id}`);
      return { ...state, ingreCart: ingreCart };
    default:
      return state;
  }
};

export const cartPageReducer = (state, action) => {
  switch (action.type) {
    case CART_NEXT_PAGE:
      const next = action.payload;
      return { ...state, step: next };
    case CART_PREV_PAGE:
      const prev = action.payload;
      return { ...state, step: prev };
    default:
      return state;
  }
};

export const cartCourseReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_COURSE_ITEM: {
      const addCourse = payload.item;
      const newCourse = [...state];
      const id = payload.id;
      localStorage.setItem(
        `courseCart${id}`,
        JSON.stringify([...newCourse, addCourse])
      );
      return [...newCourse, addCourse];
      break;
    }
    case CANCEL_COURSE_ITEM: {
      const cancelCourse = payload.item;
      let newCourse = [...state];
      newCourse = newCourse.filter(newCour => {
        return (
          newCour.course_sid !== cancelCourse.course_sid ||
          newCour.course_order_choose !== cancelCourse.course_order_choose
        );
      });
      const id = payload.id;
      localStorage.setItem(`courseCart${id}`, JSON.stringify(newCourse));
      return newCourse;
      break;
    }
    case CORSE_CART_RERENDER: {
      const id = payload;
      const courseCart = localStorage.getItem(`courseCart${id}`);
      return { ...state, courseCart: courseCart };
      break;
    }
    case CHECK_OUT: {
      console.log(state);
      return payload;
      break;
    }
    default:
      return state;
  }
};

export const cartIngreReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_INGRE_ITEM: {
      console.log(state);
      const addIngre = payload.item;
      const newIngre = [...state];
      const id = payload.id;
      localStorage.setItem(
        `ingreCart${id}`,
        JSON.stringify([...newIngre, addIngre])
      );
      return [...newIngre, addIngre];
      break;
    }
    case CANCEL_INGRE_ITEM: {
      const cancelIngre = payload.item;
      let newIngre = [...state];
      newIngre = newIngre.filter(newIng => {
        return newIng.ingredients_sid !== cancelIngre.ingredients_sid;
      });
      const id = payload.id;
      localStorage.setItem(`ingreCart${id}`, JSON.stringify(newIngre));
      return newIngre;
      break;
    }
    case INGRE_CART_RERENDER: {
      const id = payload;
      const ingreCart = localStorage.getItem(`ingreCart${id}`);
      return { ...state, ingreCart: ingreCart };
      break;
    }
    case CHECK_OUT: {
      return payload;
      break;
    }
    default:
      return state;
  }
};

export const courseCartCfReducer = (state, { type, payload }) => {
  switch (type) {
    case SELECT_COURSE: {
      let { courseInfo, pos } = payload;
      let newCourseCart = [...state];
      newCourseCart.splice(pos, 0, courseInfo);
      console.log(123);
      return newCourseCart;
    }
    case UN_SELECT_COURSE: {
      let { courseInfo, pos } = payload;
      let newCourseCart = [...state];
      newCourseCart.splice(pos, 1);
      console.log(456);
      return newCourseCart;
    }
    default:
      return state;
  }
};
