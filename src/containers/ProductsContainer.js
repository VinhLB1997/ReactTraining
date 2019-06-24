import React from 'react';
import Products from '../components/Products'
import Product from '../components/Product'
import { connect } from 'react-redux';
import { actAddToCart,actChangeMessage } from "../actions/index";

function ProductsContainer(props) {
    var { products } = props
    return (
        <Products>
            {showProducts(products,props)}
        </Products>
    );
}

function showProducts(products,props) {
    var result = null;
    var {onAddToCart, onChangeMessage} = props
    if (products.length > 0) {
        result = products.map((product, index) => (
            <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>
        ))
    }
    return result;
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) =>{
            dispatch(actAddToCart(product,1))
        },
        onChangeMessage: (message)=>{
            dispatch(actChangeMessage(message))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);