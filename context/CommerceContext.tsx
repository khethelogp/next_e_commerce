import React, { FC, useContext, useEffect, useState } from "react";
import { commerce } from "../lib/commerce";
import { IProduct } from "../models/Product";
import { ICart } from "../models/Cart";

interface CommerceInterface {
  cart: ICart[];
  products: IProduct[];
}

interface Props {
  children: any;
}

const CommerceContext = React.createContext<CommerceInterface | null>(null);

export const useCommerce = () => {
  return useContext(CommerceContext);
};

const CommerceProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<ICart[]>([]);

  const getProducts = async () => {
    const data = await commerce.products.list();
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

  // a value to return from useCommerce()
  const value = {
    products,
    cart,
  };

  return (
    <CommerceContext.Provider value={value}>
      {children}
    </CommerceContext.Provider>
  );
};

export default CommerceProvider;
