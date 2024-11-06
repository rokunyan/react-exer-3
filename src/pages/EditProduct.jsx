import React from "react";
import ProductForm from "../components/ProductForm";
import { useParams } from "react-router-dom";

const EditProduct = ({ onEdit, productList }) => {
  const param = useParams();
  const productId = +param.id;

  const { id, category, rating, ...productDetails } = productList.find(
    (product) => product.id === productId
  );

  return (
    <ProductForm
      onSubmit={(form) => onEdit(productId, form)}
      currentValue={productDetails}
    />
  );
};

export default EditProduct;
