import { PageHeaders } from "./PageHeaders";
import Logo from "../../Imgs/logo.png"
import { SmallButton } from "../Buttons/AllButtons.jsx"
export function PageHeader () {
    return (
        <PageHeaders className="flex justify-between page-container">
            <img src={Logo} alt="page logo" />
            <SmallButton text="Sair"></SmallButton>
        </PageHeaders>
    )
}