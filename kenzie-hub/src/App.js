import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './Pages/login/LoginPage';
import { RegisterPage } from './Pages/register/RegisterPage';
import { HomePage } from './Pages/home/HomePage';
import GlobalStyle from './Styles/GlobalStyles';
import { toast, ToastContainer } from 'react-toastify';
import { AuthProvider } from './Contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={2000} theme="dark"/>
        <AuthProvider>
          <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/register" element={ <RegisterPage/>}/>
            <Route path="/" element={<LoginPage/>}/>
          </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
