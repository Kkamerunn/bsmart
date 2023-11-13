import { useContext } from "react";
import ProductsContext, {
  ProductContextData,
} from "../context/ProductsProvider";

const useProduct = () => {
  const context = useContext(ProductsContext) as ProductContextData;

  return context;
};

export default useProduct;
