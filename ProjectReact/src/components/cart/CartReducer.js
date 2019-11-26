import {
  SELECT_COURSE,
  UN_SELECT_COURSE,
  ADD_COURSE_ITEM,
  ADD_INGRE_ITEM,
  CANCEL_COURSE_ITEM,
  CANCEL_INGRE_ITEM,
  CHECK_OUT
} from "./CartAction";

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
      console.log(cancelCourse);
      console.log(newCourse);
      const id = payload.id;
      localStorage.setItem(`courseCart${id}`, JSON.stringify(newCourse));
      return newCourse;
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
      return newCourseCart;
    }
    default:
      return state;
  }
};
