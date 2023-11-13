import {
  useState,
  FormEventHandler,
  ChangeEventHandler,
  useEffect,
} from "react";
import Input from "./Input";
import Select from "./Select";
import Alert from "./Alert";
import Spinner from "./Spinner";
import useProduct from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import { Product, ProductFormProps } from "../interfaces";

const initialValues: Product = {
  name: "",
  price: 0,
  stock: 0,
  category_id: 0,
};

const ProductForm = ({ isEdit }: ProductFormProps) => {
  const [form, setForm] = useState<Product>(initialValues);
  const { editProduct, createProduct, products, errors, loading, successMsg } =
    useProduct();
  const params = useParams();

  useEffect(() => {
    if (isEdit) {
      const currentProduct = products.filter(
        (item) => item.id === Number(params.id)
      )[0];
      setForm(currentProduct);
    }
  }, []);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const name = e.target.name as keyof Product;
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    isEdit ? editProduct(form) : createProduct(form);
    setForm(initialValues);
  };

  return (
    <>
      <form
        className="my-10 bg-white shadow rounded-lg px-6 py-3 w-3/6"
        onSubmit={handleSubmit}
      >
        {errors.map((error) => (
          <Alert key={error} type="error" textContent={error} />
        ))}
        {loading && <Spinner />}
        {successMsg && <Alert type="success" textContent={successMsg} />}
        <div className="my-4">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="name"
          >
            Name
          </label>
          <Input
            name="name"
            placeholder="Product name"
            type="text"
            value={form.name}
            handleChange={handleChange}
          />
        </div>
        <div className="my-4">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="price"
          >
            Price
          </label>
          <Input
            name="price"
            placeholder="Product price"
            type="number"
            value={form.price}
            handleChange={handleChange}
          />
        </div>
        <div className="my-4">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="stock"
          >
            Stock
          </label>
          <Input
            name="stock"
            placeholder="Your password"
            type="number"
            value={form.stock}
            handleChange={handleChange}
          />
        </div>
        <div className="my-4">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="category_id"
          >
            Category
          </label>
          <Select name="category_id" handleChange={handleChange} />
        </div>
        <input
          type="submit"
          value={isEdit ? "update product" : "create product"}
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors mb-4"
        />
      </form>
    </>
  );
};

export default ProductForm;
