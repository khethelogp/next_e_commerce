import { GetStaticProps } from "next";
import React, { FC, useContext, useEffect, useState } from "react";
import commerce from "../lib/commerce";
import { Cart, GetProductsData, IProduct } from "../types/types";

interface CommerceInterface {
  cart?: Cart;
  products?: IProduct[];
  totalCartItems?: Number;
  handleAddToCart?: Function;
  handleUpdateCartQty?: Function;
  handleRemoveFromCart?: Function;
  handleEmptyCart?: Function;
}

export const CommerceContext = React.createContext<CommerceInterface | null>(
  null
);

export const useCommerce = () => {
  return useContext(CommerceContext);
};

interface Props {
  products?: IProduct[];
  children: any;
}

const CommerceProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({} as Cart);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const getProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const getCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId: string, quantity: number) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId: string, quantity: number) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId: string) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error: any) {
      setErrorMessage(error?.data.error.message);
    }
  };

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  useEffect(() => {
    setTotalCartItems(cart.total_items);
  }, [cart]);

  console.log(cart);
  console.log("###############");

  // a value to return from useCommerce()
  const value = {
    products: products,
    cart: cart,
    totalCartItems,
    handleAddToCart,
    handleUpdateCartQty,
    handleRemoveFromCart,
    handleEmptyCart,
    handleCaptureCheckout,
  };

  return (
    <CommerceContext.Provider value={value}>
      {children}
    </CommerceContext.Provider>
  );
};

export default CommerceProvider;
