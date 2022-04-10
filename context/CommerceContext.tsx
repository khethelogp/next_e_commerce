import { GetStaticProps } from "next";
import React, { FC, useContext, useEffect, useState } from "react";
import commerce from "../lib/commerce";
import { Cart, GetProductsData, IProduct } from "../types/types";

interface CommerceInterface {
  cart?: Cart[];
  products?: IProduct[];
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
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const getCart = async () => {
    const data = await commerce.cart.retrieve();
    setCart(data);
  };

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  console.log(cart);
  console.log("###############");

  // a value to return from useCommerce()
  const value: CommerceInterface = {
    products: products,
    cart: cart,
  };

  return (
    <CommerceContext.Provider value={value}>
      {children}
    </CommerceContext.Provider>
  );
};

export default CommerceProvider;
