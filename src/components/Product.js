import React from 'react';
import * as Message from '../constants/Messages'

export default function Product(props) {
    var { product } = props;
    return (
        <div className="col-sm-4">
            <div className="panel panel-primary">
                <div className="panel-heading">{product.name}</div>
                <div className="panel-body"><img src={product.image} className="img-responsive" style={{ width: '50%' }} alt="Image" /></div>
                <div className="panel-footer">{product.price} VNĐ&emsp;&emsp;
                    <span className="glyphicon glyphicon-shopping-cart" onClick={() => { onAddToCart(product) }}></span>
                </div>
            </div>
        </div>
    );

    function onAddToCart(product) {
        props.onAddToCart(product);
        props.onChangeMessage(Message.ADD_TO_CART_SUCCESS);
    }
}