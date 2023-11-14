import { useState, FormEventHandler } from "react";
import Input from "./Input";
import useProduct from "../hooks/useProduct";
import { CategoryComponentProps } from "../interfaces";

const CategoryForm = ({ category }: CategoryComponentProps) => {
  const [name, setName] = useState("");
  const { editCategory } = useProduct();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const newCategory = {
      id: category.id,
      name,
    };
    editCategory(newCategory);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mr-3 flex flex-col gap-3">
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
