import React, { useState } from 'react'
import { PRODUCTS_DATA } from './data/Products'
import Navbar from './components/Navbar';
import CartTable from './components/CartTable';
import ProductList from './components/ProductList';
import "bootstrap/dist/css/bootstrap.css";

const App = () => {

  const productList = PRODUCTS_DATA;
  const [cartList, setCartList] = useState([])
  const [showCart, setShowCart] = useState(false)


  const handleDelete = (id) => {
    setCartList((prevState) =>
      prevState.filter((cart) => cart.id !== id)
    );
  };

  const handleIncrement = (id) => {

    const itemIndex = cartList.findIndex((cart) => cart.id === id)
    console.log(cartList)

    if(itemIndex !==-1){
      setCartList((prevState) =>
        prevState.map((cart) => {
          if (cart.id === id) {
            return { ...cart, value: cart.value + 1 };
          }
          return cart;
        })
      );
    } else {
      const currentList = [...cartList]
      const newCart = {id, value: 1}
      currentList.push(newCart)
      setCartList(currentList)
    }
  };

  const handleDecrement = (id) => {

    const itemIndex = cartList.findIndex((cart) => cart.id === id)

    if(itemIndex !==-1){
      setCartList((prevState) =>
        prevState.map((cart) => {
          if (cart.id === id) {
            return { ...cart, value: cart.value - 1 };
          }
          return cart;
        })
      )
    } 
  };

  const handleShowCart = () => {
    setShowCart((prevState) => !prevState);
  };

  const getCountOfItems = () => {
    return cartList.filter((cart) => cart.value > 0).length;
  };


  return (
    <div>
      <Navbar
        onTogglePage={handleShowCart}
        totalCount={getCountOfItems()}
        showCart={showCart}
      ></Navbar>

      {showCart ? (
        <div className="container" style={{ paddingTop: "50px"}}>
          <CartTable
            productList={productList}
            cartList={cartList}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete = {handleDelete}
          />
        </div>
      ) : (
        <div className="container" style={{ paddingTop: "50px"}}>
            <ProductList
              productList={productList}
              cartList={cartList}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
        </div>
      )}
    </div>
  );
}

export default App