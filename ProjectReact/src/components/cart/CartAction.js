const CART_PREV_PAGE = "CART_PREV_PAGE";
const CART_NEXT_PAGE = "CART_NEXT_PAGE";
const CHECK_OUT = 'CHECK_OUT';
const SELECT_COURSE = 'SELECT_COURSE';
const UN_SELECT_COURSE = 'UN_SELECT_COURSE';
const ADD_COURSE_ITEM = 'ADD_COURSE_ITEM';
const CANCEL_COURSE_ITEM = 'CANCEL_COURSE_ITEM';
const CANCEL_INGRE_ITEM = 'CANCEL_INGRE_ITEM';
const ADD_INGRE_ITEM = 'ADD_INGRE_ITEM';
const CORSE_CART_RERENDER = 'CORSE_CART_RERENDER';
const INGRE_CART_RERENDER = 'INGRE_CART_RERENDER';

const courseCartRerender= (id) => ({
    type: CART_PREV_PAGE,
    payload: id
});

const ingreCartRerender = (id) => ({
    type: INGRE_CART_RERENDER,
    payload: id
});

const cartPrev = () => ({
    type: CART_PREV_PAGE,
    payload: 0
});

const cartNext = () => ({
    type: CART_NEXT_PAGE,
    payload: 1
});

const checkOut = () => ({
    type: CHECK_OUT,
    payload: []
});

const addCourse = (item,id) =>({
    type: ADD_COURSE_ITEM,
    payload: {item:item,id:id}
})

const cancelCourse = (item,id) =>({
    type: CANCEL_COURSE_ITEM,
    payload: {item:item,id:id}
})

const addIngre = (item,id) =>({
    type: ADD_INGRE_ITEM,
    payload: {item:item,id:id}
})

const cancelIngre = (item,id) =>({
    type: CANCEL_INGRE_ITEM,
    payload: {item:item,id:id}
})

const selectCourse = (pos,courseInfo) => ({
    type: SELECT_COURSE,
    payload: {pos:pos,courseInfo:courseInfo}
})

const unSelectCourse = (pos,courseInfo) => ({
    type: UN_SELECT_COURSE,
    payload: {pos:pos,courseInfo:courseInfo}
})

export {
    CART_PREV_PAGE,
    CART_NEXT_PAGE,
    cartNext,
    cartPrev,
    CHECK_OUT,
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
    CORSE_CART_RERENDER,
    INGRE_CART_RERENDER,
    courseCartRerender,
    ingreCartRerender
};
