import React from 'react'
import CartTable from '../components/CartTable'

const ProductCart = ({productList,cartList, onIncrement, onDecrement, onDelete}) => {
  return (
    <div>
      <CartTable
        productList={productList}
        cartList={cartList}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    </div>
  );
}

export default ProductCart
