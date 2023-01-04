import React, { useEffect, useState } from "react";
import { Grid, Paper, makeStyles, Button } from "@material-ui/core";
import ProductDetails from "./ProductDetails";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: theme.spacing(3),
  },
}));

const ProductsList = ({ handleItems }) => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);

  const [selectedProductId, setSelectedProductId] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  const handleShowDetails = (productId) => {
    setSelectedProductId(productId);
    setVisible(!visible);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={4} key={product.id}>
            <Paper className={classes.paper}>
              <img
                src={`${product.images[0]}`}
                srcSet={`${product.images[0]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={product.thumbnail}
                loading="lazy"
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              {selectedProductId === product.id && visible && (
                <ProductDetails product={product} />
              )}
              <div data-testid="show-details-button">
                <Button onClick={() => handleShowDetails(product.id)}>
                  {selectedProductId === product.id && visible
                    ? "hide details "
                    : "show details"}
                </Button>
              </div>

              <Button
                data-testid="add-to-cart"
                onClick={() => handleItems(product)}
              >
                Add to Cart
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsList;
