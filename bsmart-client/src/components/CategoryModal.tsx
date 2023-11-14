import { useState } from "react";
import useProduct from "../hooks/useProduct";
import CategoryPreview from "./CategoryPreview";
import CategoryForm from "./CategoryForm";

const CategoryModal = () => {
  const [formActive, setFormActive] = useState(false);
  const { handleOpenModal, categories } = useProduct();

  const handleOnClick = () => {
    setFormActive(!formActive);
  };

  return (
    <div className="bg-slate-700/[.4] h-screen w-full flex justify-center items-center fixed inset-0">
      <div className="border border-sky-500 bg-white shadow-md w-4/6 h-3/6 rounded-md p-3 overflow-y-scroll">
        <button
          onClick={handleOpenModal}
          className="float-right text-sky-400 font-bold text-2xl"
        >
          Close
        </button>
        <ul className="mt-12 w-11/12 mx-auto">
          {categories.length > 0 &&
            categories.map((category) => {
              const { id, name } = category;
              return <CategoryPreview key={category.id} id={id} name={name} />;
            })}
        </ul>
        <div className="w-full flex flex-col items-center justify-center">
          <button
            onClick={handleOnClick}
            className="mx-auto my-5 bg-sky-500 rounded-md text-white font-bold w-5/12 p-2"
          >
            New category
          </button>
          {formActive && <CategoryForm addNewCategory={true} />}
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
