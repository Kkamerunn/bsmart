import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useProduct from "../hooks/useProduct";

const Header = () => {
  const { logout } = useAuth();
  const { handleOpenModal } = useProduct();
  const token = localStorage.getItem("token");

  return (
    <nav className="sm:flex sm:justify-between p-4 items-center w-full bg-sky-600">
      <div>
        <Link
          className="text-center my-5 text-white uppercase text-sm font-bold"
          to="/products"
        >
          Home
        </Link>
      </div>
      <div className="sm:flex gap-x-8 items-center">
        {token ? (
          <>
            <button
              className="bg-white text-sky-600 p-2 rounded-md font-bold h-10"
              onClick={handleOpenModal}
            >
              Categories
            </button>
            <button
              className="bg-white text-sky-600 p-2 rounded-md font-bold h-10"
              onClick={logout}
            >
              Log out
            </button>
            <Link
              to="/product/create"
              className="text-center my-5 text-white uppercase text-sm font-bold"
            >
              New Product
            </Link>
          </>
        ) : (
          <Link
            className="text-center my-5 text-white uppercase text-sm font-bold"
            to="/"
          >
            Log in
          </Link>
        )}
        <Link
          className="text-center my-5 text-white uppercase text-sm font-bold"
          to="/register"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
