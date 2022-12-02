import * as yup from "yup"

export const newTechSchema = yup.object().shape({
    title: yup.string().required("Insira o nome da tecnologia"),
    status: yup.string().required("Selecione um nível")
})