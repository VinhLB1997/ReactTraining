import React from 'react';
import Products from '../components/Products'
import Product from '../components/Product'
import { connect } from 'react-redux';
import { actAddToCart } from "../actions/index";

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
    var {onAddToCart} = props
    if (products.length > 0) {
        result = products.map((product, index) => (
            <Product key={index} product={product} onAddToCart={onAddToCart}/>
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);