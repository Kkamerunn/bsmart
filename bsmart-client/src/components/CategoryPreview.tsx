import { useState } from "react";
import useProduct from "../hooks/useProduct";
import { Category } from "../interfaces";
import CategoryForm from "./CategoryForm";

const CategoryPreview = ({ id, name }: Category) => {
  const [form, setForm] = useState(false);
  const { deleteCategory } = useProduct();

  const handleEditCategory = () => {
    setForm(!form);
  };
  return (
    <li key={id} className="flex justify-between my-3">
      {form ? (
        <CategoryForm category={{ id, name }} />
      ) : (
        <p className="text-sky-400 font-semibold">{name}</p>
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
          onClick={() => deleteCategory(id)}
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default CategoryPreview;
