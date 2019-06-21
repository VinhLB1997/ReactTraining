import React from 'react';

function Products(props) {
    return (
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    );
}

export default Products;