import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { PrimaryButton } from "../Buttons/AllButtons.jsx";
import { Input, PasswordInput } from "../Inputs/Input.jsx";
import { StyledForm } from "./LoginForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema.js";
import { api } from "../../services/api.js";
import { useState } from "react";

export function LoginForm() {
  const navigate = useNavigate();
  // const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  })

  async function handleLogin(data) {
    try {
      const response = await api.post("sessions", data)
      setLoading(true)
      if (response.request.statusText === "OK") {
        localStorage.setItem("KenzieHubToken", response.data.token)
        localStorage.setItem("KenzieHubUser", JSON.stringify(response.data.user))
        // setUser(response.data.user)
        toast.success(`Que bom te ver, ${response.data.user.name}!`, {
          className: "toast"
        })
        navigate("/home")
      } else {
        throw response
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        className: "toast"
      })
    } finally {
      setLoading(false)
    }

    // const buttonText = event.nativeEvent.submitter.textContent
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
        {/* <div className="flex justify-center">
          <BlackButton type="button" text="Cadastre-se"></BlackButton>
        </div> */}
    </>
  )
}
