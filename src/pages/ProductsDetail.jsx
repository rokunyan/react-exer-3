import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Delete, Edit } from "@mui/icons-material";

const ProductsDetail = ({ productList, onDelete }) => {
  const param = useParams();
  const productId = +param.id;
  const navigate = useNavigate();

  const getProductDetails = () => {
    return productList.find((product) => product.id === productId);
  };

  return (
    <div style={{ justifyItems: "center" }}>
      <Card sx={{ width: 500 }}>
        <CardHeader
          title={getProductDetails().title}
          subheader={`P${getProductDetails().price}`}
        />
        <CardMedia
          component="img"
          height="300px"
          width="300px"
          image={getProductDetails().image}
          alt={getProductDetails().title}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {getProductDetails().description}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "right", cursor: "pointer" }}>
          <div
            style={{ color: "blue" }}
            onClick={() => {
              navigate(`/products/${productId}/edit`);
            }}
          >
            <Edit />
          </div>{" "}
          <div
            style={{ color: "red" }}
            onClick={() => {
              onDelete(productId);
              navigate("/dashboard");
            }}
          >
            <Delete />
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductsDetail;
