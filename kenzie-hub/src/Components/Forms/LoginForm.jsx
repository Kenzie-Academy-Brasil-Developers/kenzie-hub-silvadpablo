import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { PrimaryButton } from "../Buttons/AllButtons.jsx";
import { Input, PasswordInput } from "../Inputs/Input.jsx";
import { StyledForm } from "./LoginForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema.js";
import { useContext } from "react";
import { UserContext } from "../../Contexts/userContext.jsx";

export function LoginForm() {
  const { LoginUser, loading } = useContext(UserContext)
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  })

  async function handleLogin ( data ) {
    const response = await LoginUser( data )
    if (response.statusText === "OK") {
      navigate("/home")
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit(handleLogin)} className="flex flex-col">
        <h1>Login</h1>
        <Input id="email" type="email" text="Email" placeholder="Digite aqui o seu email" register={register("email")}/>
        {errors.email && <span>{errors.email.message}</span>}
        <PasswordInput id="password" type="password" text="Senha" placeholder="Digite aqui a sua senha" register={register("password")}/>
        {errors.password && <span>{errors.password.message}</span>}
        { (loading === true) ?
           <PrimaryButton id="loginButton" type="submit" text="Entrando"></PrimaryButton>
           :
           <PrimaryButton id="loginButton" type="submit" text="Entrar"></PrimaryButton>
        }
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">Cadastrar-se</Link>
      </StyledForm>
    </>
  )
}
