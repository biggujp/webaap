export type OrderStatus =
  | "pending"
  | "confirmed"
  | "completed"
  | "cancelled";

export type OrderItem = {
  productId: number;
  productName: string;
  quantity: number;
};

export type Order = {
  id: string;
  userId: string;
  status: OrderStatus;
  items: OrderItem[];
  note?: string;
};

export type CreateOrderInput = {
  userId: string;
  items: OrderItem[];
  note?: string;
};