import * as yup from "yup"

export const registerSchema = yup.object().shape({
    name: yup.string().required("Insira o nome").min(3, "O nome precisa ter mais de três letras").max(40, "O nome não pode ter mais que 40 caracteres"),
    email: yup.string().required("Insira o email").email("Email inválido"),
    password: yup.string().required("Insira a senha")
    .min(8, "A senha precisa ter pelo menos 8 caracteres")
    .matches(/(?=.*[0-9])/, "A senha precisa de um número")
    .matches(/(?=.*[a-z])/, "A senha precida de uma letra minúscula")
    .matches(/(?=.*[A-Z])/, "A senha precisa de uma letra maiúscula")
    .matches(/(?=.*[!@#$%^&*])/, "A senha precisa de um caractere especial"),
    confirmPassword: yup.string().required("Digite novamente a senha").oneOf([yup.ref("password"), null], "A senhas devem ser iguais"),
    course_module: yup.string().required("Selecione um módulo"),
    bio: yup.string().required("Fale algo sobre você"),
    contact: yup.string().required("Insira algum contato ou rede social")
})