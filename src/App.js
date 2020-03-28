import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import CadastroEmpresa from './pages/CadastroEmpresa';
import Empresas from './pages/Empresas';
import Usuarios from './pages/Usuarios';
import Container from './components/Container';

const App = () => {
  return (
    <>
      {/* <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
      </div> */}
      <Container />


      {/* <CadastroUsuario /> */}
      {/* <CadastroEmpresa /> */}
      {/* <Empresas /> */}
      {/* <Usuarios /> */}
    </>
  );
};

export default App;
