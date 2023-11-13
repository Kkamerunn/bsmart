import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <div className="md:min-h-screen">
          <Header />
          <main className="p-10 flex justify-center">
            <Outlet />
          </main>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default ProtectedRoute;
