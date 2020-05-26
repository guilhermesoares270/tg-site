import React from 'react';
import {
  Link
} from "react-router-dom";
import {
  NavDropdown,
  Navbar,
  Nav,
  NavLink,
} from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title='Usuarios'>
              <Link className="nav-link" to='/cadastroUsuario' >Novo Usuário</Link>
              <Link className="nav-link" to='/validateFile' >Validar Arquivo</Link>
            </NavDropdown>

            <NavDropdown title='Empresas'>
              {/* <Link className="nav-link" to='/cadastroEmpresa' >Nova Empresa</Link> */}
              <Link className="nav-link" to='/cadastroEmpresa' >Nova Empresa</Link>
              <Link className="nav-link" to='/listarArquivos' >Listar Arquivos</Link>
              <Link className="nav-link" to='/subirArquivo'>Upload Arquivos</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;