import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BlackButton, PrimaryButton } from "../Buttons/AllButtons.jsx";
import { Input, PasswordInput } from "../Inputs/Input.jsx";
import { StyledForm } from "./LoginForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema.js";

export function LoginForm() {
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  })

  async function handleLogin(data) {
    console.log(data)


    navigate("/")
    toast.success("Entrou", {
      className: "toast"
    })
    // const buttonText = event.nativeEvent.submitter.textContent
    // console.log(data)
    // if (buttonText === "Entrar"){
    //   navigate("/")
    //   toast.success("Entrou", {
    //     className: "toast"
    //   })
    // } else {
    //   navigate("/register")
    // }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit(handleLogin)} className="flex flex-col">
        <h1>Login</h1>
        <Input id="email" type="email" text="Email" placeholder="Digite aqui o seu email" register={register("email")}/>
        {errors.email && <span>{errors.email.message}</span>}
        <PasswordInput id="password" type="password" text="Senha" placeholder="Digite aqui a sua senha" register={register("password")}/>
        {errors.password && <span>{errors.password.message}</span>}
        <PrimaryButton id="loginButton" type="submit" text="Entrar"></PrimaryButton>
        <p>Ainda não possui uma conta?</p>
      </StyledForm>
        <div className="flex justify-center">
          <BlackButton type="button" text="Cadastre-se"></BlackButton>
        </div>
    </>
  )
}
