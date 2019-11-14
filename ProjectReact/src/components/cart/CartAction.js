const CART_PREV_PAGE = "CART_PREV_PAGE";
const CART_NEXT_PAGE = "CART_NEXT_PAGE";

const cartPrev = () => ({
    type: CART_PREV_PAGE,
    payload: 0
});

const cartNext = () => ({
    type: CART_NEXT_PAGE,
    payload: 1
});


export {
    CART_PREV_PAGE,
    CART_NEXT_PAGE,
    cartNext,
    cartPrev
};
