import { useState } from "react";
import useProduct from "../hooks/useProduct";
import { CategoryComponentProps } from "../interfaces";
import CategoryForm from "./CategoryForm";

const CategoryPreview = ({ category }: CategoryComponentProps) => {
  const [form, setForm] = useState(false);
  const { deleteCategory } = useProduct();

  const handleEditCategory = () => {
    setForm(!form);
  };
  return (
    <li key={category.id} className="flex justify-between my-3">
      {form ? (
        <CategoryForm category={category} />
      ) : (
        <p className="text-sky-400 font-semibold">{category.name}</p>
      )}
      <div className="w-3/6 flex justify-between items-center gap-x-5">
        <button
          className="text-white bg-green-600 rounded-md font-bold p-2 w-5/12"
          onClick={handleEditCategory}
        >
          edit
        </button>
        <button
          className="text-white bg-red-600 rounded-md font-bold p-2 w-5/12"
          onClick={() => deleteCategory(category.id)}
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default CategoryPreview;
