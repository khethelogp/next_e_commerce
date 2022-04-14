import React, { FC } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { IProduct } from "../../../types/types";
import { useCommerce } from "../../../context/CommerceContext";

type Props = {
  product: IProduct;
};

const Product: FC<Props> = ({ product }) => {
  const { handleAddToCart } = useCommerce();

  return (
    <Card
      sx={{
        maxWidth: "100%",
      }}
    >
      <CardMedia
        image={product.media.source}
        title={product.name}
        sx={{
          height: 0,
          paddingTop: "56.25%", //16:9
        }}
      />
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          aria-label="Add to card"
          onClick={() => handleAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
