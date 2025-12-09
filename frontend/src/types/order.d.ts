export interface IOrder {
  OrderId: number;
  OrderDescription: string;
  CountOfProducts: number;
  CreatedDate: string;
  Products?: Product[];
}

export interface Product {
  Id: number;
  productName: string;
  productDescription: string;
}

export interface IcreateOrder {
  orderDescription: string;
  productIds: number[];
}

export interface IUpdateOrder {
  orderDescription: string;
  productIds: number[];
}
