import { Order } from "../order/Order";

export type Customer = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
