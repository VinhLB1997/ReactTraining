import React from 'react'
import CartItem from './CartItem'

export default function Cart(props) {
    return (
        <div className="container">
            <h2>Sản phẩm đã mua</h2>
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    );
}