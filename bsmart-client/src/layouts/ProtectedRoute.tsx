import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import CategoryModal from "../components/CategoryModal";
import useProduct from "../hooks/useProduct";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const { openModal } = useProduct();

  return (
    <>
      {token ? (
        <div className="md:min-h-screen relative">
          <Header />
          <main className="p-10 ">
            <Outlet />
          </main>
          {openModal && <CategoryModal />}
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default ProtectedRoute;
