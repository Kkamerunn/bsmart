import { ChangeEventHandler } from "react";

export interface Form {
  name: string;
  email: string;
  password: string;
  password_repeat: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  password_repeat: string;
}

export interface authUser {
  name: string;
  email: string;
  token: string;
}

export interface Product {
  id?: number;
  name: string;
  price: number;
  stock: number;
  category_id: number;
}

export interface Category {
  id?: number;
  name: string;
}

export interface InputProps {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string | number;
  type: string;
}

export interface SelectProps {
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  name: string;
}

export interface ProductFormProps {
  isEdit: boolean;
}

export interface UserFormProps {
  isRegister: boolean;
}

export interface AlertProps {
  textContent: string;
  type: string;
}
