import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsContainer from './containers/ProductsContainer'
import MessageContainer from './containers/MessageContainer'
import CartContainer from './containers/CartContainer'

function App() {
  return (
    <div>
      <Header />
      <ProductsContainer />
      <MessageContainer />
      <CartContainer />
      <Footer />
    </div>
  );
}

export default App;
