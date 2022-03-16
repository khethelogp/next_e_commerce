import React from "react";
import { Grid } from "@mui/material";

import Product from "./Product/Product";
import useStyles from "./styles";
import { IProduct } from "../../models/Product";

type AppProps = {
  products: IProduct[];
  onAddToCart?: () => {};
};

const Products = ({ products, onAddToCart }: AppProps) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
