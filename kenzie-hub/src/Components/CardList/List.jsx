import { useContext, useState } from "react";
import { TechContext } from "../../Contexts/techContext.jsx";
import { AddButtons } from "../Buttons/Buttons.js";
import { DialogCreate, DialogUpdate } from "../Dialog/Dialogs.jsx";
import { NoCard } from "./Card.jsx";
import { EachCard } from "./Card.jsx";
import { Lists } from "./Lists";

export function List () {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [updateDialog, setUpdateDialog] = useState(false)
    const { tech } = useContext(TechContext)

    function openDialog () {
        setDialogOpen(true)
    }

    return (
        <Lists className="flex flex-col page-container">
            <DialogCreate dialogOpen={dialogOpen} setDialogOpen={setDialogOpen}></DialogCreate>
            <DialogUpdate updateDialog={updateDialog} setUpdateDialog={setUpdateDialog}></DialogUpdate>
            <div className="list-header flex justify-between items-center">
                <h2>Tecnologias</h2>
                <AddButtons onClick={openDialog}>+</AddButtons>
            </div>
            {
                (tech.length === 0) ?
                <NoCard></NoCard>
                :
                tech.map((eachTech) =>
                    <EachCard updateDialog={updateDialog} setUpdateDialog={setUpdateDialog} key={eachTech.id} id={eachTech.id} title={eachTech.title} status={eachTech.status}></EachCard>
                )
            }
        </Lists>
    )
}