import useProduct from "../hooks/useProduct";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

const Products = () => {
  const { products, loading } = useProduct();

  return (
    <>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          stock={item.stock}
          category_id={item.category_id}
        />
      ))}
      {products.length > 0 && (
        <div className="flex justify-center">
          <button className="p-2 rounded-md bg-sky-600 text-white font-bold">
            load more
          </button>
        </div>
      )}
      {loading && <Spinner />}
    </>
  );
};

export default Products;
