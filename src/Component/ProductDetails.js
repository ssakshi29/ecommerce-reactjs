import React from "react";
import { Typography } from "@material-ui/core";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2"></Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Rating: ${product.rating}
      </Typography>
      <Typography variant="body1" component="p">
        {product.description}
      </Typography>
    </div>
  );
};

export default ProductDetails;
