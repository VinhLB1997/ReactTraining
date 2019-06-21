import React from 'react';

function Menu() {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">Logo</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><a>Home</a></li>
                        <li><a>Products</a></li>
                        <li><a>Deals</a></li>
                        <li><a>Stores</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a><span className="glyphicon glyphicon-user"></span> Your Account</a></li>
                        <li><a><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu