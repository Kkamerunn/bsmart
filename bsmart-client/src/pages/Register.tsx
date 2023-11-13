import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";
import Alert from "../components/Alert";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { errors } = useAuth();

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Sign up and see your <span className="text-slate-700">products</span>
      </h1>
      {errors &&
        errors.map((item) => (
          <Alert key={item} type="error" textContent={item} />
        ))}
      <UserForm isRegister={true} />
      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          Already have an account yet? Sign in
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/forgot-password"
        >
          Forgot your password?
        </Link>
      </nav>
    </>
  );
};

export default Register;
