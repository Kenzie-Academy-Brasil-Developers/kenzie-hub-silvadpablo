import { LoginForm } from "../../Components/Forms/LoginForm.jsx";
import Logo from "../../Imgs/logo.png";

export function LoginPage() {
  

  return (
    <div className="flex flex-col items-center  justify-center page-size">
      <div className="flex flex-col form-container">
        <img src={Logo} alt="logo" />
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}