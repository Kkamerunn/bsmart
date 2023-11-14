import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";
import Alert from "../components/Alert";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { errors } = useAuth();

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Log in and see your <span className="text-slate-700">products</span>
      </h1>
      {errors &&
        errors.map((item) => (
          <Alert key={item} type="error" textContent={item} />
        ))}
      <UserForm isRegister={false} />
      <nav className="lg:flex lg:justify-center">
        <Link
          className="block my-5 text-slate-500 uppercase text-sm"
          to="/register"
        >
          Don't you have an account yet? Sign up
        </Link>
      </nav>
    </>
  );
};

export default Login;
