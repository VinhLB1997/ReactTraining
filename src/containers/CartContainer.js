import React from 'react';
import * as message from '../constants/Messages'
import CartItem from '../components/CartItem'
import Cart from '../components/Cart'
import { connect } from 'react-redux';

function CartContainer(props) {
    var { cart } = props
    return (
        <Cart>
            {showProductBuy(cart)}
        </Cart>
    );
}

function showProductBuy(cart) {
    var result = message.CART_EMPLTY;
    if (cart.length > 0) {
        result = cart.map((item, index) => (
            <CartItem key={index} item={item} />
        ))
    }
    return result;
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);