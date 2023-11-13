import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const params = useParams();
  const { products } = useProduct();

  const product = products.filter((item) => item.id === Number(params.id))[0];

  return (
    <>
      <div className="flex justify-center items-center">
        <ProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          stock={product.stock}
          category_id={product.category_id}
        />
      </div>
    </>
  );
};

export default Product;
