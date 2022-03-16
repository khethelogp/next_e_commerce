export interface IProduct {
  active: boolean;
  assets: [{}];
  attributes: [];
  categories: [];
  checkout_url: { checkout: string; display: string };
  collects: {
    fullname: boolean;
    shipping_address: boolean;
    billing_address: boolean;
    extra_fields: boolean;
  };
  conditionals: {
    is_active: boolean;
    is_tax_exempt: false;
    is_pay_what_you_want: false;
    is_inventory_managed: boolean;
    is_sold_out: boolean;
  };
  created: Date;
  description: string;
  extra_fields: [];
  has: {
    digital_delivery: boolean;
    physical_delivery: boolean;
    images: boolean;
  };
  id: string;
  image: {
    id: string;
    url: string;
    description: string;
    is_image: boolean;
    filename: string;
  };
  inventory: { managed: false; available: number };
  is: {
    active: boolean;
    tax_exempt: false;
    pay_what_you_want: false;
    inventory_managed: false;
    sold_out: false;
  };
  media: { type: string; source: string; asset_id: string };
  meta: [];
  name: string;
  permalink: string;
  price: {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
  related_products: [];
  seo: { title: string; description: string };
  sku: [];
  sort_order: number;
  thank_you_url: string;
  updated: Date;
  variant_groups: [];
}
