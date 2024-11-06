import {Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';  
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, cartList, onDecrement, onIncrement }) => {

    const navigate = useNavigate()

    const getCountInCart = () => {

    const cart = cartList.find((cart) => cart.id === product.id)
    
    if(cart){
        return cart.value
    } else return 0;
    
  };

  return (
    <Card sx={{ width: 300 }}>
      <CardHeader
        style={{cursor:"pointer"}}
        title={product.title}
        subheader={`P${product.price}`}
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <CardActions>
      <CardMedia
        style={{cursor:"pointer"}}
        onClick={() => navigate(`/products/${product.id}`)}
        component="img"
        height="200px"
        width="200px"
        image={product.image}
        alt={product.title}
      />
      </CardActions>
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        {getCountInCart() && getCountInCart() > 0 ? (
          <div>
            <button
              disabled={(() => getCountInCart()) <= 0}
              onClick={() => onDecrement(product.id)}
              className="btn btn-secondary"
            >
              -
            </button>
            <span style={{ justifyContent: "center", margin: "20px" }}>
              {getCountInCart()}
            </span>
            <button
              onClick={() => onIncrement(product.id)}
              className="btn btn-primary"
            >
              +
            </button>
          </div>
        ) : (
          <div
            onClick={() => onIncrement(product.id)}
            style={{ color: "blue", cursor: "pointer" }}
          >
            <ShoppingCartIcon /> Add To Cart
          </div>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
