import { yupResolver } from "@hookform/resolvers/yup";
import { DeleteButton, DialogButton, UpdateDialogButton } from "../Buttons/AllButtons.jsx";
import { Input } from "../Inputs/Input";
import { SelectLevel } from "../Inputs/Select";
import { Dialogs } from "./Dialog";
import { useForm } from "react-hook-form";
import { newTechSchema, updateTechSchema } from "./newTechSchema";
import { useContext } from "react";
import { TechContext } from "../../Contexts/techContext";

export function DialogCreate ( { dialogOpen, setDialogOpen } ) {
    const { CreateTech } = useContext(TechContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(newTechSchema)
    })
    
    function closeDialog () {
        reset()
        setDialogOpen(false)
    }

    async function handleNewTech ( data ) {
        await CreateTech(data)
        reset()
        setDialogOpen(false)
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
                    <DialogButton handleSubmit={handleSubmit} handleNewTech={handleNewTech} text="Cadastrar Tecnologia" setDialogOpen={setDialogOpen}></DialogButton>
                </div>
            </form>
        </Dialogs>
    )
}

export function DialogUpdate ( { updateDialog, setUpdateDialog } ) {
    const { currentTech, updateTech, deleteTech } = useContext(TechContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(updateTechSchema)
    })
    
    function closeDialog ( ) {
        reset()
        setUpdateDialog(false)
    }
    const techId = currentTech.id
    async function handleUpdateTech ( data, event ) {
        if (event.type === "click") {
            await updateTech(data, techId)
            reset()
            setUpdateDialog(false)
        } else {
            await deleteTech (techId)
            reset()
            setUpdateDialog(false)
        }
    }

    return (
        <Dialogs open={updateDialog}>
            <form className="wrapper flex flex-col" onSubmit={handleSubmit(handleUpdateTech)} noValidate>
                <div className="diag-header flex justify-between">
                    <h2>Atualizar Tecnologia</h2>
                    <p onClick={closeDialog}>X</p>
                </div>
                <div className="diag-body flex flex-col">
                    <Input disabled="true" value={currentTech.name} type="text" id="name" placeholder="Digite o nome da tecnologia" text="Nome"/>
                    <SelectLevel register={register("status")} defaultValue={currentTech.status}></SelectLevel>
                    {errors.status && <span>{errors.status.message}</span>}
                    <div className="flex justify-between button-div">
                        <UpdateDialogButton type="submit" handleSubmit={handleSubmit} handleUpdateTech={handleUpdateTech} text="Atualizar Tecnologia" setUpdateDialog={setUpdateDialog}></UpdateDialogButton>
                        <DeleteButton type="button" text="Excluir"></DeleteButton>
                    </div>
                </div>
            </form>
        </Dialogs>
    )
}