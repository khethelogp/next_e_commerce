import { NextApiRequest, NextApiResponse } from "next";
import commerce from "../../lib/commerce";
import { IProduct } from "../../types/types";

type Data = {
  products: IProduct[];
};

const fetchShopData = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { data: products } = await commerce.products.list();

  res.status(200).json(products);
};

export default fetchShopData;
