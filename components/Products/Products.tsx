import React, { FC } from "react";
import { Grid } from "@mui/material";

import Product from "./Product/Product";
import useStyles from "./styles";

type AppProps = {
  products: Array<any>;
  onAddToCart: Function;
};

// interface CoolProps {
//   products: products[];
//   onAddToCart: Function;
// }
// const Products: FC<CoolProps> = ({ products, onAddToCart }) => {

const Products = ({ products, onAddToCart }: AppProps) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            {/* <Product product={product} onAddToCart={onAddToCart} /> */}
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
