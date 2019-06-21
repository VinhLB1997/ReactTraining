import * as types from '../constants/ActionType'

var initialState = [
    {
        product: {
            id: 1,
            name: "Samsung Galaxy S10+ 128GB Bạc Đa Sắc",
            image: "https://cdn.tgdd.vn/Products/Images/42/203207/samsung-galaxy-s10-plus-128gb-bac-da-sac-400x400.jpg",
            price: 23990000
        },
        quantity: 10
    }
]

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