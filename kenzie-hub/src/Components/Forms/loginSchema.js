import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Insira um email"),
    password: yup.string().required("Insira a senha")
  })