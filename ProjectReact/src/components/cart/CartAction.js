const CART_PREV_PAGE = "CART_PREV_PAGE";
const CART_NEXT_PAGE = "CART_NEXT_PAGE";
const CHECK_OUT = 'CHECK_OUT';
const SELECT_COURSE = 'SELECT_COURSE';
const UN_SELECT_COURSE = 'UN_SELECT_COURSE';

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
    unSelectCourse
};
