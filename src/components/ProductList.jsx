import React from 'react'
import ProductCard from './ProductCard';
import { Box, Grid2 } from '@mui/material';

const ProductList = ({productList, cartList, onIncrement, onDecrement}) => {
    return (

        <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {productList.map((product) => (
            <Grid2 item xs={2} sm={4} md={4} key={product.id}>
                 <ProductCard
              key={product.id}
              product={product}
              cartList={cartList}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
            </Grid2>       
          ))}
        </Grid2>
      </Box>
    )
}

export default ProductList