import * as yup from "yup"

export const registerSchema = yup.object().shape({
    name: yup.string().required("Insira o nome").min(3, "O nome precisa ter mais de três letras").max(40, "O nome não pode ter mais que 40 caracteres"),
    email: yup.string().required("Insira o email").email("Email inválido"),
    password: yup.string().required("Insira a senha"),
    course_module: yup.string().required("Selecione um módulo")
})