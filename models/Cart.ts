export interface ICart {
  created: Date;
  currency: { code: string; symbol: string };
  discount: [];
  expires: Date;
  hosted_checkout_url: string;
  id: string;
  line_items: [];
  meta: [];
  subtotal: {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
  total_items: number;
  total_unique_items: number;
  updated: Date;
}
