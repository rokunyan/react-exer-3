import React from 'react'
import ProductForm from '../components/ProductForm'

const AddProduct = ({onAdd}) => {
  return (
    <ProductForm onSubmit ={onAdd}/>
  )
}

export default AddProduct