import { useNavigate } from "react-router-dom";
import { BlackButton, PrimaryButton } from "../Buttons/AllButtons.jsx";
import { Input, PasswordInput } from "../Inputs/Input.jsx";
import { StyledForm } from "./LoginForm";

export function LoginForm() {
  const navigate = useNavigate();

  async function HandleLogin(event) {
    event.preventDefault()
    const buttonText = event.nativeEvent.submitter.textContent

    if (buttonText === "Entrar"){
      navigate("/")
    } else {
      navigate("/register")
    }
  }

  return (
    <StyledForm onSubmit={HandleLogin} className="flex flex-col">
      <h1>Login</h1>
      <Input id="email" type="email" text="Email" placeholder="Digite aqui o seu email"/>
      <PasswordInput id="password" type="password" text="Senha" placeholder="Digite aqui a sua senha"/>
      <PrimaryButton id="loginButton" type="submit" text="Entrar"></PrimaryButton>
      <p>Ainda não possui uma conta?</p>
      <BlackButton type="button" text="Cadastre-se"></BlackButton>
    </StyledForm>
  )
}
