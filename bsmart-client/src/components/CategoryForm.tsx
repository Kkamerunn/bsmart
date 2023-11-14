import { useState, FormEventHandler } from "react";
import Input from "./Input";
import Alert from "./Alert";
import Spinner from "./Spinner";
import useProduct from "../hooks/useProduct";
import {
  updateCategoryComponentProps,
  newCategoryComponentProps,
} from "../interfaces";

type CategoryComponentProps = updateCategoryComponentProps &
  newCategoryComponentProps;

const CategoryForm = ({ category, addNewCategory }: CategoryComponentProps) => {
  const [name, setName] = useState("");
  const { editCategory, createCategory, loading, errors, successMsg } =
    useProduct();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (category && !addNewCategory) {
      const newCategory = {
        id: category.id,
        name,
      };
      editCategory(newCategory);
      setName("");
      return;
    } else if (addNewCategory) {
      createCategory(name);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mr-3 flex flex-col gap-3">
      {errors.map((error) => (
        <Alert key={error} type="error" textContent={error} />
      ))}
      {loading && <Spinner />}
      {successMsg && <Alert type="success" textContent={successMsg} />}
      <Input
        name="name"
        placeholder="New category name"
        type="text"
        value={name}
        handleChange={(e) => setName(e.target.value)}
      />
      <input
        type="submit"
        className="bg-sky-500 text-white p-1 rounded-md w-full cursor-pointer"
        value="save"
      />
    </form>
  );
};

export default CategoryForm;
