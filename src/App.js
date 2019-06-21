import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsContainer from './containers/ProductsContainer'
import Message from './components/Message'
import Cart from './components/Cart'
import CartContainer from './containers/CartContainer'

function App() {
  return (
    <div>
      <Header />
      <ProductsContainer />
      <Message />
      <CartContainer />
      <Footer />
    </div>
  );
}

export default App;
