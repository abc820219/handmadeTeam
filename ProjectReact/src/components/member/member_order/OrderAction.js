const REQ_COURSE_ORDER = "REQ_COURSE_ORDER";
const REC_COURSE_ORDER = "REC_COURSE_ORDER";

const REQ_INGRE_ORDER = "REQ_INGRE_ORDER";
const REC_INGRE_ORDER = "REC_INGRE_ORDER";

const REQ_ORDER_DETAIL = "REQ_ORDER_DETAIL";
const REC_ORDER_DETAIL = "REC_ORDER_DETAIL";

///------------------
const REC_ORDER_SID = "REC_ORDER_SID";
///------------------

const SET_ORDER_ITEM = "SET_ORDER_ITEM";

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

const receiveIngreOrder = datajson => ({
  type: REC_INGRE_ORDER,
  payload: datajson
});

const requestOrderDetail = (item, type) => ({
  type: REQ_ORDER_DETAIL,
  payload: { item: item, type: type }
});

const receiveOrderDetail = datajson => ({
  type: REC_ORDER_DETAIL,
  payload: datajson
});


const receiveOrderSid = datajson => ({
  type: REC_ORDER_SID,
  payload: datajson
});

export {
  REQ_COURSE_ORDER,
  REC_COURSE_ORDER,
  REQ_INGRE_ORDER,
  REC_INGRE_ORDER,
  REQ_ORDER_DETAIL,
  REC_ORDER_DETAIL,
  REC_ORDER_SID,
  requestCourseOrder,
  receiveCourseOrder,
  requestIngreOrder,
  receiveIngreOrder,
  requestOrderDetail,
  receiveOrderDetail,
  receiveOrderSid
};
