import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  fullName?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
};
