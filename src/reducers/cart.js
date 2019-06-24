import * as types from '../constants/ActionType'

var data = JSON.parse(localStorage.getItem("cart"));

var initialState = data ? data : []

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    switch (action.type) {
        case types.ADD_TO_CART:
            var index = findProductInCart(state, product);
            if (index === -1) {
                state.push({
                    product, quantity
                });
            } else {
                state[index].quantity += quantity;
            }
            localStorage.setItem("cart", JSON.stringify(state))
            return [...state];
        default: return [...state];
    }
}

const findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var idx = 0; idx < cart.length; idx++) {
            if (cart[idx].product.id === product.id) {
                index = idx;
                break;
            }
        }
    }
    return index;
}

export default cart;    