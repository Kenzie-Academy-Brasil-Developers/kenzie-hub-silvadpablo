import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../Buttons/AllButtons.jsx";
import { Input, PasswordInput} from "../Inputs/Input.jsx";
import { SelectType } from "../Inputs/Select.jsx"
import { StyledRegisterForm } from "./LoginForm";

export function RegisterForm() {
  const navigate = useNavigate();

  async function HandleRegister(event) {
    event.preventDefault()

    navigate("/login")
  }

  return (
    <StyledRegisterForm onSubmit={HandleRegister} className="flex flex-col">
      <h1>Crie sua conta</h1>
      <p>Rápido e grátis, vamos nessa</p>
      <Input id="name" type="name" text="Nome" placeholder="Digite aqui o seu nome"/>
      <Input id="email" type="email" text="Email" placeholder="Digite aqui o seu email"/>
      <PasswordInput id="password" type="password" text="Senha" placeholder="Digite aqui a sua senha"/>
      <PasswordInput id="confirmPassword" type="confirmPassword" text="Confirmar senha" placeholder="Digite novamente sua senha"/>
      <Input id="bio" type="text" text="Bio" placeholder="Fale sobre você"/>
      <Input id="contact" type="text" text="Contato" placeholder="Opção de contato"/>
      <SelectType text="Selecionar o módulo"></SelectType>
      <PrimaryButton type="submit" text="Cadastrar"></PrimaryButton>
    </StyledRegisterForm>
  )
}
