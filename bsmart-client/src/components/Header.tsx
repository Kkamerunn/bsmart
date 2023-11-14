import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useProduct from "../hooks/useProduct";

const Header = () => {
  const { logout } = useAuth();
  const { handleOpenModal } = useProduct();
  const token = localStorage.getItem("token");

  return (
    <nav className="sm:flex sm:justify-between p-4 items-center w-full bg-sky-600">
      <div className="text-center mb-2 sm:text-left sm:mb-0">
        <Link
          className="my-5 text-white uppercase text-sm font-bold"
          to="/products"
        >
          Home
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4 sm:gap-y-0  items-center">
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
              className="text-center sm:my-5 text-white uppercase text-sm font-bold"
            >
              New Product
            </Link>
          </>
        ) : (
          <Link
            className="text-center sm:my-5 text-white uppercase text-sm font-bold"
            to="/"
          >
            Log in
          </Link>
        )}
        <Link
          className="text-center sm:my-5 text-white uppercase text-sm font-bold"
          to="/register"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
