import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import './style/LoginPage.css'

const LoginPage = () => {

const {handleSubmit, reset, register} = useForm()
const { loginUser } = useAuth()
const navigate = useNavigate()

const submit = data => {
    loginUser( data, navigate )
    reset({
        email:'',
        password:''
    })
    navigate('/')
}


  return (
    <div className="login__contain">
    <form className="login__form" onSubmit={handleSubmit(submit)}>
    <h2 className="login__title">Login</h2>
      <div className="login__input">
        <label className="login__label" htmlFor="email">Email</label>
        <input {...register('email')}type="email" id="email"/>
      </div>
      <div className="login__input">
        <label className="login__label" htmlFor="password">Password</label>
        <input {...register('password')} type="password" id="password" />
      </div>
      <button className="login__btn">Login</button>
      <span className="login__register">Dont have an account? <Link className="link__register" to='/register'>Sing up</Link></span>
    </form>
    </div>
  )
};

export default LoginPage;
