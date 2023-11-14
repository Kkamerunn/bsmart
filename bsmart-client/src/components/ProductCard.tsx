import { Link } from "react-router-dom";
import { Product } from "../interfaces";
import useProduct from "../hooks/useProduct";

const ProductCard = ({ id, name, price, stock, category_id }: Product) => {
  const { deleteProduct, categories } = useProduct();

  const category = categories.filter(
    (item) => item.id === Number(category_id)
  )[0];

  return (
    <div className="w-10/12 my-7 mx-auto rounded-lg border border-sky-500 p-8">
      <h2 className="flex justify-end">
        <span className="text-right text-white font-semibold bg-sky-500 rounded-md p-2">
          {category.name ? category.name : "Uncategorized"}
        </span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-y-8 justify-between mt-5">
        <div className="">
          <p className="text-sky-600 text-2xl font-bold">{name}</p>
          <p className="my-3">
            <span className="p-1 rounded-md bg-sky-500 text-white font-bold">
              Stock:
            </span>{" "}
            <span className="text-sky-500 font-bold">{stock}</span>
          </p>
          <p>
            <span className="p-1 rounded-md bg-sky-500 text-white font-bold">
              Price:
            </span>{" "}
            <span className="text-sky-500 font-bold">$ {price}</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link
            className="bg-sky-600 text-white flex items-center justify-center rounded w-full sm:w-28 h-8"
            to={`/product/${id}`}
          >
            Edit
          </Link>
          <button
            onClick={() => deleteProduct(Number(id))}
            className="bg-red-500 text-white flex items-center justify-center rounded w-full sm:w-28 h-8"
          >
            Delete
          </button>
          <Link
            className="bg-green-400 text-white flex items-center justify-center rounded w-full sm:w-28 h-8"
            to={`/products/${id}`}
          >
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
