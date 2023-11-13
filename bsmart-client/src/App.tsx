import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./layouts/ProtectedRoute";
import { ProductsProvider } from "./context/ProductsProvider";
import { AuthProvider } from "./context/AuthProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Product from "./pages/Product";
import EditCreateLayout from "./layouts/EditCreateLayout";
import EditProduct from "./pages/EditProduct";
import CreateProduct from "./pages/CreateProduct";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ProductsProvider>
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="register" element={<Register />} />
                {/*      
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="forgot-password/:token"
              element={<NewPassword />}
            />
            <Route path="confirm/:id" element={<ConfirmAccount />} /> */}
              </Route>
              <Route path="/products" element={<ProtectedRoute />}>
                <Route index element={<Products />} />
                <Route path=":id" element={<Product />} />
                {/* 
            <Route index element={<Projects />} />
            <Route path="create-project" element={<NewProject />} />
            <Route path=":id" element={<Project />} />
            */}
              </Route>
              <Route path="/product" element={<EditCreateLayout />}>
                <Route path=":id" element={<EditProduct />} />
                <Route path="create" element={<CreateProduct />} />
              </Route>
            </Routes>
          </ProductsProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
