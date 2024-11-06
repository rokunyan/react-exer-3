import React from 'react'
import ProductList from '../components/ProductList';
import { Button, Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';
import { Add } from "@mui/icons-material";

const ProductsDashboard = ({productList,cartList,onIncrement, onDecrement}) => {
  return (
    <>
      <Grid2
      container
      spacing={2}
      justifyContent={"flex-end"}
      textAlign={"right"}
      paddingBottom={"10px"}>
      <Grid2 size={4}>
        <Button
          variant="text"
          startIcon={<Add/>}
          LinkComponent={Link}
          to="/products/new">
          Add Product
        </Button>
      </Grid2>
      </Grid2>
      <ProductList
        productList={productList}
        cartList={cartList}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </>
  );
}

export default ProductsDashboard