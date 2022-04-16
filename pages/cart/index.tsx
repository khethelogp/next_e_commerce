import React from "react";
import { Cart } from "../../types/types";
import { Typography, Grid, Button, Container } from "@mui/material";
import Link from "next/link";
import theme from "../../src/theme";
import { CartItem } from "../../components";
import { useCommerce } from "../../context/CommerceContext";

// type Props = {
//   cart: Cart;
// };

const Cart = ({}) => {
  const { cart, handleEmptyCart } = useCommerce();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart
      <Button sx={{ textTransform: "Capitalize" }}>
        <Link href="/">Start adding some items!</Link>
      </Button>
    </Typography>
  );

  const onEmptyCart = () => handleEmptyCart();

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart?.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>

      <div
        style={{
          display: "flex",
          marginTop: "10%",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">
          Subtotal: {cart?.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            sx={{
              minWidth: "150px",
              [theme.breakpoints?.down("xs")]: {
                marginBottom: "5px",
              },
              [theme.breakpoints?.up("xs")]: {
                marginRight: "20px",
              },
            }}
            onClick={onEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="primary"
            sx={{
              minWidth: "150px",
            }}
          >
            <Link href="/checkout">Checkout</Link>
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart?.line_items) return "Loading....";

  return (
    <Container>
      <div />
      <Typography variant="h3" gutterBottom sx={{ marginTop: "5%" }}>
        Your Shopping Cart
      </Typography>
      {!cart?.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;

/* export async function getStaticProps() {
  const { cart } = await commerce.cart.retrieve();

  return {
    props: {
      cart,
    },
  };
} */
