import { useState } from "react";
import { AddButtons } from "../Buttons/Buttons.js";
import { Dialog } from "../Dialog/Dialog.jsx";
import { EachCard } from "./Card.jsx";
import { Lists } from "./Lists";

export function List () {
    const [dialogOpen, setDialogOpen] = useState(false)

    function openDialog () {
        setDialogOpen(true)
    }

    return (
        <Lists className="flex flex-col page-container">
            <Dialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen}></Dialog>
            {/* <dialog
                open={diaOpen}
                onClose={closeDialog}
            >
                <h1>teste</h1>
                <button onClick={closeDialog}>Close</button>
            </dialog> */}
            <div className="list-header flex justify-between items-center">
                <h2>Tecnologias</h2>
                <AddButtons onClick={openDialog}>+</AddButtons>
            </div>
            <EachCard></EachCard>
        </Lists>
    )
}