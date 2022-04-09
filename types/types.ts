export interface GetCommerce {
  cart?: Cart[];
  products?: IProduct[];
}

export interface GetProductsData {
  data: IProduct[];
  meta: Meta;
}

export interface Meta {
  pagination: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: {};
  };
}

export interface Product {
  id: string;
  created: Date;
  updated: Date;
  url: string;
  name: string;
  description: null;
  is_image: boolean;
  filename: string;
  file_size: null;
  file_extension: null;
  image_dimensions: any[];
  meta: any[];
  created_at: number;
  updated_at: number;
}

export interface IProduct {
  id: string;
  created: Date;
  updated: Date;
  active: boolean;
  permalink: string;
  name: string;
  description: string;
  price: {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
  inventory: { managed: boolean; available: number };
  sku: null;
  sort_order: number;
  seo: { title: string; description: string };
  thank_you_url: string;
  meta: null;
  conditionals: {
    is_active: boolean;
    is_tax_exempt: boolean;
    is_pay_what_you_want: boolean;
    is_inventory_managed: boolean;
    is_sold_out: boolean;
    has_digital_delivery: boolean;
    has_physical_delivery: boolean;
    has_images: boolean;
    collects_fullname: boolean;
    collects_shipping_address: boolean;
    collects_billing_address: boolean;
    collects_extra_fields: boolean;
    has_video: boolean;
    has_rich_embed: boolean;
  };
  is: {
    active: boolean;
    tax_exempt: boolean;
    pay_what_you_want: boolean;
    inventory_managed: boolean;
    sold_out: boolean;
  };
  has: {
    digital_delivery: boolean;
    physical_delivery: boolean;
    images: boolean;
  };
  collects: {
    fullname: boolean;
    shipping_address: boolean;
    billing_address: boolean;
    extra_fields: boolean;
  };
  checkout_url: {
    checkout: string;
    display: string;
  };
  media: {
    type: string;
    source: string;
    asset_id: string;
  };
  extra_fields: [];
  variant_groups: [];
  categories: [];
  assets: [[Object]];
  image: {
    id: string;
    url: string;
    description: string;
    is_image: boolean;
    filename: string;
    file_size: number;
    file_extension: string;
    image_dimensions: [Object];
    meta: [];
    created_at: Date;
    updated_at: Date;
  };
  related_products: [];
  attributes: [];
}

export interface Cart {
  id: string;
  created: number;
  updated: number;
  expires: number;
  total_items: number;
  total_unique_items: number;
  subtotal: Subtotal;
  hosted_checkout_url: string;
  line_items: LineItem[];
  currency: Currency;
  discount: any[];
  meta: null;
}

export interface Currency {
  code: string;
  symbol: string;
}

export interface LineItem {
  id: string;
  product_id: string;
  name: string;
  product_name: string;
  sku: null;
  permalink: string;
  quantity: number;
  price: Subtotal;
  line_total: Subtotal;
  is_valid: boolean;
  product_meta: any[];
  selected_options: any[];
  variant: null;
  image: null;
}

export interface Subtotal {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}
