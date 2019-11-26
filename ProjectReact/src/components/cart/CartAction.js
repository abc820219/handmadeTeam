const SELECT_COURSE = "SELECT_COURSE";
const UN_SELECT_COURSE = "UN_SELECT_COURSE";
const ADD_COURSE_ITEM = "ADD_COURSE_ITEM";
const CANCEL_COURSE_ITEM = "CANCEL_COURSE_ITEM";
const CANCEL_INGRE_ITEM = "CANCEL_INGRE_ITEM";
const ADD_INGRE_ITEM = "ADD_INGRE_ITEM";
const CHECK_OUT = "CHECK_OUT";

const addCourse = (item, id) => ({
  type: ADD_COURSE_ITEM,
  payload: { item: item, id: id }
});

const cancelCourse = (item, id) => ({
  type: CANCEL_COURSE_ITEM,
  payload: { item: item, id: id }
});

const addIngre = (item, id) => ({
  type: ADD_INGRE_ITEM,
  payload: { item: item, id: id }
});

const cancelIngre = (item, id) => ({
  type: CANCEL_INGRE_ITEM,
  payload: { item: item, id: id }
});

const selectCourse = (pos, courseInfo) => ({
  type: SELECT_COURSE,
  payload: { pos: pos, courseInfo: courseInfo }
});

const unSelectCourse = (pos, courseInfo) => ({
  type: UN_SELECT_COURSE,
  payload: { pos: pos, courseInfo: courseInfo }
});

const checkoutAction = () => ({
  type: CHECK_OUT,
  payload: []
});

export {
  SELECT_COURSE,
  UN_SELECT_COURSE,
  selectCourse,
  unSelectCourse,
  ADD_COURSE_ITEM,
  CANCEL_COURSE_ITEM,
  addCourse,
  cancelCourse,
  ADD_INGRE_ITEM,
  CANCEL_INGRE_ITEM,
  addIngre,
  cancelIngre,
  CHECK_OUT,
  checkoutAction
};
