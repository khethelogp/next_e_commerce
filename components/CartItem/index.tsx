import React, { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { LineItem } from "../../types/types";

type Props = {
  item: LineItem;
  onUpdateCartQty: Function;
  onRemoveFromCart: Function;
};

const CartItem: FC<Props> = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item">
      <CardMedia
        component="img"
        image={item.image}
        alt={item.image}
        sx={{ height: 260 }}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
