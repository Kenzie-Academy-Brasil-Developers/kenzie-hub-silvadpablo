import { DialogButton, PrimaryButton } from "../Buttons/AllButtons";
import { Input } from "../Inputs/Input";
import { SelectLevel } from "../Inputs/Select";
import { Dialogs } from "./Dialog";

export function Dialog ( { dialogOpen, setDialogOpen } ) {
    
    function closeDialog () {
        setDialogOpen(false)
    }

    return (
        <Dialogs open={dialogOpen}>
            <div className="wrapper flex flex-col">
                <div className="diag-header flex justify-between">
                    <h2>Cadastrar Tecnologia</h2>
                    <p onClick={closeDialog}>X</p>
                </div>
                <div className="diag-body flex flex-col">
                    <Input type="text" id="name" placeholder="Digite o nome da tecnologia" text="Nome"/>
                    <SelectLevel></SelectLevel>
                    <DialogButton text="Cadastrar Tecnologia" setDialogOpen={setDialogOpen}></DialogButton>
                </div>
            </div>
        </Dialogs>
    )
}