import { CART_NEXT_PAGE, CART_PREV_PAGE } from "./CartAction";

export const cartPageReducer = (state, action) => {
    switch (action.type) {
        case CART_NEXT_PAGE:
            const next = action.payload;
            return {...state,step:next}
        case CART_PREV_PAGE:
            const prev = action.payload;
            return {...state,step:prev}
        default:
            return state;
    }
};
