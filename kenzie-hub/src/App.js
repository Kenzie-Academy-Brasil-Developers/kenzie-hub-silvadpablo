import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './Pages/login/LoginPage';
import { RegisterPage } from './Pages/register/RegisterPage';
import { HomePage } from './Pages/home/HomePage';
import GlobalStyle from './Styles/GlobalStyles';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={2000} theme="dark"/>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={ <RegisterPage/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
