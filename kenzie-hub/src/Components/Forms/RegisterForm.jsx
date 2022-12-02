import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PrimaryButton } from "../Buttons/AllButtons.jsx";
import { Input, PasswordInput} from "../Inputs/Input.jsx";
import { SelectType } from "../Inputs/Select.jsx"
import { StyledRegisterForm } from "./LoginForm";
import { registerSchema } from "./registerSchema.js";
import { api } from "../../services/api"

export function RegisterForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema)
  })

  async function HandleRegister(data) {
    try {
      const response = await api.post("users", data)
      toast.success("Conta criada com successo", {
        className: "toast"
      })
      navigate("/login")
    } catch (error) {
      const message = error.response.data.message
      if (Array.isArray(message)){
        toast.error(message[0], {
          className: "toast"
        })
      } else {
        toast.error(message, {
          className: "toast"
        })
      }
    }
  }

  return (
    <StyledRegisterForm className="flex flex-col" onSubmit={handleSubmit(HandleRegister)} noValidate>
      <h1>Crie sua conta</h1>
      <p>Rápido e grátis, vamos nessa</p>
      <Input register={register("name")}id="name" type="name" text="Nome" placeholder="Digite aqui o seu nome"/>
      {errors.name && <span>{errors.name.message}</span>}
      <Input register={register("email")}id="email" type="email" text="Email" placeholder="Digite aqui o seu email"/>
      {errors.email && <span>{errors.email.message}</span>}
      <PasswordInput register={register("password")} id="password" type="password" text="Senha" placeholder="Digite aqui a sua senha"/>
      {errors.password && <span>{errors.password.message}</span>}
      <PasswordInput register={register("confirmPassword")} id="confirmPassword" type="confirmPassword" text="Confirmar senha" placeholder="Digite novamente sua senha"/>
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      <Input register={register("bio")} id="bio" type="text" text="Bio" placeholder="Fale sobre você"/>
      {errors.bio && <span>{errors.bio.message}</span>}
      <Input register={register("contact")} id="contact" type="text" text="Contato" placeholder="Opção de contato"/>
      {errors.contact && <span>{errors.contact.message}</span>}
      <SelectType register={register("course_module")}></SelectType>
      {errors.course_module && <span>{errors.course_module.message}</span>}
      <PrimaryButton type="submit" text="Cadastrar"></PrimaryButton>
    </StyledRegisterForm>
  )
}
