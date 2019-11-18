import { CART_NEXT_PAGE, CART_PREV_PAGE, CHECK_OUT, SELECT_COURSE, UN_SELECT_COURSE } from "./CartAction";

export const cartPageReducer = (state, action) => {
    switch (action.type) {
        case CART_NEXT_PAGE:
            const next = action.payload;
            return { ...state, step: next }
        case CART_PREV_PAGE:
            const prev = action.payload;
            return { ...state, step: prev }
        default:
            return state;
    }
};

export const cartCourseReducer = (state, action) => {
    switch (action.type) {
        case CART_NEXT_PAGE:
            const next = action.payload;
            return { ...state, step: next }
        case CART_PREV_PAGE:
            const prev = action.payload;
            return { ...state, step: prev }
        default:
            return state;
    }
};

export const cartCheckoutReducer = (state, action) => {
    switch (action.type) {
        case CHECK_OUT:
            const checkOrder = action.payload;
            return { ...state, checkoutFinish: true, courseCart: checkOrder, ingreCart: checkOrder };
        default:
            return state;
    }
};

export const courseCartCfReducer = (state, { type, payload}) => {
    switch (type) {
        case SELECT_COURSE:{
            let {courseInfo,pos} = payload;
            let newCourseCart = [...state];
            newCourseCart.splice(pos, 0, courseInfo);
            console.log(newCourseCart);
            return newCourseCart;
        }
        case UN_SELECT_COURSE:{
            let {courseInfo,pos} = payload;
            let newCourseCart = [...state];
            console.log(pos);
            newCourseCart.splice(pos,1);
            console.log(newCourseCart);
            return newCourseCart;
        }
        default:
            return state;
    }
};