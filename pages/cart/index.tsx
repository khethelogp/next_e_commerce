import React, { FC } from "react";
import { Cart, IProduct } from "../../types/types";
import useStyles from "./styles";
import { Typography, Grid, Button, Container } from "@mui/material";
import Link from "next/link";
import theme from "../../src/theme";

type Props = {
  cart: Cart;
  handleEmptyCart: Function;
};

const Cart = ({ cart }: Props) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart
      <Link href="/">
        <a className={classes.link}> start addinf some items!</a>
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      {cart?.line_items.map((item) => (
        <li>{item.name}</li>
      ))}

      {/* <Grid container spacing={3}>
        {cart.line_items.map((item: IProduct) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCartQty}/> 
          </Grid>
        ))}
      </Grid> */}

      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            // onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            <Link href="checkout">Checkout</Link>
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart?.line_items) return "Loading....";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
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
