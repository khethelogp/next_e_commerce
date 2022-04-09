import React, { useContext } from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import { useCommerce } from "../../context/CommerceContext";

// type Props = {
//   children:any;
// };

const Products = ({}) => {
  const { products } = useCommerce();

  return (
    <main style={{ flexGrow: "1" }}>
      <div />
      <Grid container justifyContent="center" spacing={4}>
        {products?.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
