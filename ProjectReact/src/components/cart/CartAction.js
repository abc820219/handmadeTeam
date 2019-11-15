const CART_PREV_PAGE = "CART_PREV_PAGE";
const CART_NEXT_PAGE = "CART_NEXT_PAGE";
const CHECK_OUT = 'CHECK_OUT';
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

export {
    CART_PREV_PAGE,
    CART_NEXT_PAGE,
    cartNext,
    cartPrev,
    CHECK_OUT
};
