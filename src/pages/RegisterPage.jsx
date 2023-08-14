import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./style/RegisterPage.css";

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { createUser } = useAuth();

  const submit = (data) => {
    createUser(data, navigate);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    });
    navigate("/login");
  };

  return (
    <div className="register__contain">
      <form className="register__form" onSubmit={handleSubmit(submit)}>
        <h2 className="register__title">Register</h2>
        <div className="register__input">
          <label className="register__label" htmlFor="firstname">
            First Name
          </label>
          <input {...register("firstName")} type="text" id="firstname" />
        </div>
        <div className="register__input">
          <label className="register__label" htmlFor="lastName">
            Last Name
          </label>
          <input {...register("lastName")} type="text" id="lastname" />
        </div>
        <div className="register__input">
          <label className="register__label" htmlFor="email">
            Email
          </label>
          <input {...register("email")} type="email" id="email" />
        </div>
        <div className="register__input">
          <label className="register__label" htmlFor="password">
            Password
          </label>
          <input {...register("password")} type="password" id="password" />
        </div>
        <div className="register__input">
          <label className="register__label" htmlFor="phone">
            Phone
          </label>
          <input {...register("phone")} type="text" id="phone" />
        </div>
        <button className="register__btn">Create User</button>
      </form>
    </div>
  );
};

export default RegisterPage;
