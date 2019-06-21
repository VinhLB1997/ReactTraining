import React from 'react'

export default function CartItem(props) {
    var { item } = props
    return (
        <React.Fragment>
            <tr>
                <td>{item.product.name}</td>
                <td>{item.product.price}</td>
                <td>{item.quantity}</td>
                <td>{totalPrice(item.product.price, item.quantity)}</td>
            </tr>
        </React.Fragment>
    );

    function totalPrice(price, quantity) {
        return price * quantity;
    }
}