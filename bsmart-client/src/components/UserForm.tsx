import { useState, FormEventHandler, ChangeEventHandler } from "react";
import Input from "./Input";
import Alert from "./Alert";
import Spinner from "./Spinner";
import useAuth from "../hooks/useAuth";
import { Form, UserFormProps } from "../interfaces";

const initialValues: Form = {
  name: "",
  email: "",
  password: "",
  password_repeat: "",
};

const UserForm = ({ isRegister }: UserFormProps) => {
  const [form, setForm] = useState<Form>(initialValues);
  const { login, register, loading, errors } = useAuth();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof Form;
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    !isRegister ? login(form) : register(form);
    setForm(initialValues);
  };

  return (
    <>
      <form
        className="my-10 bg-white shadow rounded-lg px-6 py-3"
        onSubmit={handleSubmit}
      >
        {errors.map((error, index) => (
          <Alert key={index} type="error" textContent={error} />
        ))}
        {loading && <Spinner />}
        {isRegister && (
          <div className="my-4">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="name"
            >
              Name
            </label>
            <Input
              name="name"
              placeholder="Your name"
              type="text"
              value={form.name}
              handleChange={handleChange}
            />
          </div>
        )}
        <div className="my-4">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <Input
            name="email"
            placeholder="Your email"
            type="email"
            value={form.email}
            handleChange={handleChange}
          />
        </div>
        <div className="my-4">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            name="password"
            placeholder="Your password"
            type="password"
            value={form.password}
            handleChange={handleChange}
          />
        </div>
        {isRegister && (
          <div className="my-4">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password_repeat"
            >
              Repeat password
            </label>
            <Input
              name="password_repeat"
              placeholder="Repeat your password"
              type="password"
              value={form.password_repeat}
              handleChange={handleChange}
            />
          </div>
        )}
        <input
          type="submit"
          value={!isRegister ? "log in" : "sign up"}
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer
                    hover:bg-sky-800 transition-colors mb-4"
        />
      </form>
    </>
  );
};

export default UserForm;
