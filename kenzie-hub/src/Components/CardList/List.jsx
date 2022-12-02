import { useState } from "react";
import { AddButtons } from "../Buttons/Buttons.js";
import { Dialog } from "../Dialog/Dialog.jsx";
import { NoCard } from "./Card.jsx";
import { EachCard } from "./Card.jsx";
import { Lists } from "./Lists";

export function List ( { techs, setTechs } ) {
    const [dialogOpen, setDialogOpen] = useState(false)

    function openDialog () {
        setDialogOpen(true)
    }

    return (
        <Lists className="flex flex-col page-container">
            <Dialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} techs={techs} setTechs={setTechs}></Dialog>
            <div className="list-header flex justify-between items-center">
                <h2>Tecnologias</h2>
                <AddButtons onClick={openDialog}>+</AddButtons>
            </div>
            {
                (techs.length === 0) ?
                <NoCard></NoCard>
                :
                techs.map((tech) =>
                    <EachCard key={tech.id} title={tech.title} status={tech.status}></EachCard>
                )
            }
        </Lists>
    )
}
// export function List ( { techs } ) {
//     const [dialogOpen, setDialogOpen] = useState(false)

//     function openDialog () {
//         setDialogOpen(true)
//     }

//     return (
//         <Lists className="flex flex-col page-container">
//             <Dialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen}></Dialog>
//             <div className="list-header flex justify-between items-center">
//                 <h2>Tecnologias</h2>
//                 <AddButtons onClick={openDialog}>+</AddButtons>
//             </div>
//             {
//                 (techs.length === 0) ?
//                 <NoCard></NoCard>
//                 :
//                 techs.map((tech) =>
//                     <EachCard key={tech.id} title={tech.title} status={tech.status}></EachCard>
//                 )
//             }
//         </Lists>
//     )
// }