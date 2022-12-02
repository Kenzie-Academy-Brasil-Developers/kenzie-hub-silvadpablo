import { SmallButton } from "../../Components/Buttons/AllButtons.jsx";
import { RegisterForm } from "../../Components/Forms/RegisterForm.jsx"
import Logo from "../../Imgs/logo.png";

export function RegisterPage() {
  return (
    <div className="flex flex-col items-center  justify-center page-size">
      <div className="flex flex-col form-container">
        <div className="flex justify-between form-header">
          <img src={Logo} alt="logo" />
          <SmallButton text="Voltar"></SmallButton>
        </div>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
}