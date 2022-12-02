import { yupResolver } from "@hookform/resolvers/yup";
import { DialogButton } from "../Buttons/AllButtons";
import { Input } from "../Inputs/Input";
import { SelectLevel } from "../Inputs/Select";
import { Dialogs } from "./Dialog";
import { useForm } from "react-hook-form";
import { newTechSchema } from "./newTechSchema";
import { api } from "../../services/api"
import { toast } from "react-toastify";

export function Dialog ( { dialogOpen, setDialogOpen, token, techs, setTechs, getUser, user, setUser } ) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(newTechSchema)
    })
    
    function closeDialog () {
        setDialogOpen(false)
    }

    async function handleNewTech (data) {
        try {
            const response = await api.post("users/techs", data, {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
            const upUser = await getUser()
            setUser(upUser)
            setTechs(upUser.techs)
            setDialogOpen(false)
            toast.success("Tecnologia criada com sucesso", {
                className: "toast"
            })
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message, {
                className: "toast"
            })
        }
    }

    return (
        <Dialogs open={dialogOpen}>
            <form className="wrapper flex flex-col" onSubmit={handleSubmit(handleNewTech)} noValidate>
                <div className="diag-header flex justify-between">
                    <h2>Cadastrar Tecnologia</h2>
                    <p onClick={closeDialog}>X</p>
                </div>
                <div className="diag-body flex flex-col">
                    <Input type="text" id="name" placeholder="Digite o nome da tecnologia" text="Nome" register={register("title")}/>
                    {errors.title && <span>{errors.title.message}</span>}
                    <SelectLevel register={register("status")}></SelectLevel>
                    {errors.status && <span>{errors.status.message}</span>}
                    <DialogButton handleSubmit={handleSubmit} handleNewTech={handleNewTech} text="Cadastrar Tecnologia" setDialogOpen={setDialogOpen} techs={techs} setTechs={setTechs}></DialogButton>
                </div>
            </form>
        </Dialogs>
    )
}