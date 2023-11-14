import React, { useState, useEffect, createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Product, Category } from "../interfaces";
import axiosClient from "../config/axios";

export type ProductContextData = {
  products: Product[];
  links: string[];
  categories: Category[];
  product: Product;
  loading: boolean;
  getProducts: () => void;
  getProduct: (id: string) => void;
  createProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  getCategories: () => void;
  errors: string[];
  successMsg: string;
  openModal: boolean;
  handleOpenModal: () => void;
  editCategory: (category: Category) => void;
  createCategory: (newCategory: string) => void;
  deleteCategory: (id: number) => void;
};

const ProductsContext = createContext<ProductContextData | undefined>(
  undefined
);

const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [links, setLinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    stock: 0,
    category_id: 0,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length > 0) {
      return;
    } else {
      getCategories();
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      return;
    } else {
      getProducts();
    }
  }, []);

  const getProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axiosClient("/products");
      setProducts(data.data);
      const linksMoreProducts = [...data.meta.links].slice(2);
      linksMoreProducts.pop();
      const links = linksMoreProducts.map((link) => link.url);
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
    setLoading(false);
  };

  const getProduct = async (id: string) => {
    setLoading(true);
    try {
      const { data } = await axiosClient(`/products/${id}`, config);
      setProduct(data.data);
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
    setLoading(false);
  };

  const createProduct = async (product: Product) => {
    setErrors([]);
    setLoading(true);
    try {
      const { data } = await axiosClient.post("/products", product, config);
      setSuccessMsg(data.message);
      setTimeout(() => {
        setSuccessMsg("");
        navigate("/products");
      }, 4000);
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
    setLoading(false);
  };

  const editProduct = async (product: Product) => {
    setErrors([]);
    setLoading(true);
    try {
      const { data } = await axiosClient.put(
        `/products/${product.id}`,
        product,
        config
      );
      setSuccessMsg(data.message);
      setTimeout(() => {
        setSuccessMsg("");
        navigate("/products");
      }, 4000);
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
    setLoading(false);
  };

  const deleteProduct = async (id: number) => {
    setLoading(true);
    try {
      await axiosClient.delete(`/products/${id}`, config);
      const newProductsState = products.filter((item) => item["id"] !== id);
      setProducts(newProductsState);
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
    setLoading(false);
  };

  const getCategories = async () => {
    setLoading(true);
    try {
      const { data } = await axiosClient("/categories");
      setCategories(data.data);
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
    setLoading(false);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const editCategory = async (category: Category) => {
    setErrors([]);
    setLoading(true);
    try {
      await axiosClient.put(`/categories/${category.id}`, category, config);
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
    setLoading(false);
  };

  const createCategory = async (newCategory: string) => {
    setErrors([]);
    setLoading(true);
    const newCategoryData = {
      name: newCategory,
    };
    try {
      const { data } = await axiosClient.post(
        "/categories",
        newCategoryData,
        config
      );
      setSuccessMsg(data.message);
      setTimeout(() => {
        setSuccessMsg("");
      }, 4000);
      getCategories();
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
    setLoading(false);
  };

  const deleteCategory = async (id: number) => {
    setLoading(true);
    try {
      await axiosClient.delete(`/categories/${id}`, config);
      const newCategoriesState = categories.filter((item) => item["id"] !== id);
      setProducts(newCategoriesState);
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
    setLoading(false);
  };

  const contextValue: ProductContextData = {
    products,
    links,
    categories,
    product,
    getProducts,
    getCategories,
    getProduct,
    createProduct,
    editProduct,
    deleteProduct,
    loading,
    errors,
    successMsg,
    openModal,
    handleOpenModal,
    editCategory,
    createCategory,
    deleteCategory,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };

export default ProductsContext;
