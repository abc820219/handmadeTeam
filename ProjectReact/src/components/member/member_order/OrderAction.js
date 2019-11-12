const REQ_COURSE_ORDER = "REQ_COURSE_ORDER";
const REC_COURSE_ORDER = "REC_COURSE_ORDER";
const REQ_INGRE_ORDER = "REQ_INGRE_ORDER";
const REC_INGRE_ORDER = "REC_INGRE_ORDER";

//开始请求
const requestCourseOrder = () => ({
  type: REQ_COURSE_ORDER
});

//接收到数据
const receiveCourseOrder = datajson => ({
  type: REC_COURSE_ORDER,
  payload: datajson
});

const requestIngreOrder = () => ({
  type: REQ_INGRE_ORDER
});

//接收到数据
const receiveIngreOrder = datajson => ({
  type: REC_INGRE_ORDER,
  payload: datajson
});

export {
  REQ_COURSE_ORDER,
  REC_COURSE_ORDER,
  REQ_INGRE_ORDER,
  REC_INGRE_ORDER,
  requestCourseOrder,
  receiveCourseOrder,
  requestIngreOrder,
  receiveIngreOrder
};
