import React, { useState } from "react";
import { PRODUCTS_DATA } from "./data/Products";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { CssBaseline } from "@mui/material";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsDashboard from "./pages/ProductsDashboard";
import ProductsDetail from "./pages/ProductsDetail";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import NotFound from "./pages/NotFound";
import ProductCart from "./pages/ProductCart";

const App = () => {
  
  const [productList, setProducts] = useState(PRODUCTS_DATA);
  const [cartList, setCartList] = useState([]);

  const handleDeleteInCart = (id) => {
    setCartList((prevState) => prevState.filter((cart) => cart.id !== id));
  };

  const handleIncrement = (id) => {
    const itemIndex = cartList.findIndex((cart) => cart.id === id);

    if (itemIndex !== -1) {
      setCartList((prevState) =>
        prevState.map((cart) => {
          if (cart.id === id) {
            return { ...cart, value: cart.value + 1 };
          }
          return cart;
        })
      );
    } else {
      const currentList = [...cartList];
      const newCart = {
        id,
        value: 1
      };
      currentList.push(newCart);
      setCartList(currentList);
    }
  };

  const handleDecrement = (id) => {
    const itemIndex = cartList.findIndex((cart) => cart.id === id);

    if (itemIndex !== -1) {
      setCartList((prevState) =>
        prevState.map((cart) => {
          if (cart.id === id) {
            if (cart.value <= 0) {
              return prevState.filter((item) => item.id !== cart.id)
            }
            return { ...cart, value: cart.value - 1 };
          }
          return cart;
        })
      );
    }
  };
  const getCountOfItems = () => {
    return cartList.filter((cart) => cart.value > 0).length;
  };

  const handleDeleteProducts = (id) => {
    setProducts((prevState) => prevState.filter((product) => product.id !== id));
    setCartList((prevState) => prevState.filter((item) => item.id !== id));
  };

  const generateId = () =>{
    
    return Math.max(...productList.map(product => product.id)) + 1
  }

  const handleAddProducts = (product) => {
    console.log(generateId())
    setProducts((prevState) => [...prevState, {...product, id: generateId()}])
  }

  const handleEditProducts = (id, product) => {
    const productDetails =  productList.find((item) =>item.id === id)
    setProducts((prevState) => prevState.map((oldProduct) =>{
      if(oldProduct.id === id){
        return {id, category: productDetails.category, rating: productDetails.rating, ...product}
      }
      return oldProduct
    }))
  }

  return (
    <>
      <CssBaseline />
      <Navbar totalCount={getCountOfItems()}></Navbar>
      <Container style={{ paddingTop: "30px" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />}></Route>
          <Route
            path="/dashboard"
            element={
              <ProductsDashboard
                productList={productList}
                cartList={cartList}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            }
          ></Route>
          <Route path="/products/:id" element={<ProductsDetail productList = {productList} onDelete={handleDeleteProducts} />} />
          <Route path="/products/new" element={<AddProduct onAdd ={handleAddProducts} />} />
          <Route path="/products/:id/edit" element={<EditProduct onEdit= {handleEditProducts} productList ={productList} />}></Route>
          <Route
            path="/cart"
            element={
              <ProductCart
                productList={productList}
                cartList={cartList}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDeleteInCart}
              />
            }
          ></Route>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
