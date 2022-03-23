import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import useStyles from "./styles";
import { IProduct } from "../../models/Product";
import { useCommerce } from "../../context/CommerceContext";

/* type AppProps = {
  products: IProduct[];
}; */

const Products = () => {
  const classes = useStyles();
  // TODO why are you doing this to me ?? :(
  const { products } = useCommerce();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product: IProduct) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
