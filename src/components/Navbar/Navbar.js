import React from 'react';
import {
  Link
} from "react-router-dom";
import {
  NavDropdown,
  Navbar,
  Nav,
} from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <>
      {/* variant="dark"  */}
      <Navbar bg="dark" expand="lg" style={{ width: '100%' }}>
        <a className="navbar-brand" href="#">LOGO</a>

        <Nav>
          <NavDropdown title='Usuarios'>
            <Link className="nav-link" to='/cadastroUsuario' >Novo Usuário</Link>
            {/* <Link className="nav-link" to='/editarUsuario' >Editar Usuário</Link> */}
            <Link className="nav-link" to='/validateFile' >Validar Arquivo</Link>
          </NavDropdown>

          <NavDropdown title='Empresas'>
            <Link className="nav-link" to='/cadastroEmpresa' >Nova Empresa</Link>
            <Link className="nav-link" to='/listarArquivos' >Listar Arquivos</Link>
            <Link className="nav-link" to='/subirArquivo'>Upload Arquivos</Link>
          </NavDropdown>
        </Nav>

      </Navbar>
    </>
  );
};

export default CustomNavbar;