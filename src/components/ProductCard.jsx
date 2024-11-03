import {Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductCard = ({ product, cartList, onDecrement, onIncrement }) => {
  
    const getCountInCart = () => {

    const cart = cartList.find((cart) => cart.id === product.id)
    
    if(cart){
        return cart.value
    } else return 0;
    
  };

  return (
    <Card sx={{ width: 300 }}>
      <CardHeader title={product.title} subheader={`P${product.price}`} />
        <CardMedia
          component="img"
          height="200px"
          width="200px"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.description}
          </Typography>
        </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        {getCountInCart() && getCountInCart() > 0 ? (
            (
                <div>
                  <button
                    disabled={(() => getCountInCart()) <= 0}
                    onClick={() => onDecrement(product.id)}
                    className="btn btn-secondary"
                  >
                    -
                  </button>
                  <span style={{justifyContent: 'center', margin: '20px'}}>{getCountInCart()}</span>
                  <button
                    onClick={() => onIncrement(product.id)}
                    className="btn btn-primary"
                  >
                    +
                  </button>
                </div>
              )):
          <div
              onClick={() => onIncrement(product.id)} style={{color: 'blue', cursor: 'pointer'}}
            >
            <ShoppingCartIcon/> Add To Cart
            </div>
        }
      </CardActions>
    </Card>
  );
};

export default ProductCard;
