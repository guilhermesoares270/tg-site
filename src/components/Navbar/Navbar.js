import React from 'react';
import {
  Link
} from "react-router-dom";
import {
  NavDropdown,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { ROUTES_PREFIX } from '../../shared/global';

const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" style={{ width: '100%', color: 'red' }}>
        <a className="navbar-brand" href="#">LOGO</a>

        <Nav>
          <NavDropdown title='Usuarios'>
            <Link className="nav-link" to={`${ROUTES_PREFIX()}/cadastroUsuario`} >Novo Usuário</Link>
            <Link className="nav-link" to={`${ROUTES_PREFIX()}/editarUsuario`} >Editar Usuário</Link>
          </NavDropdown>

          <NavDropdown title='Empresas'>
            <Link className="nav-link" to={`${ROUTES_PREFIX()}/cadastroEmpresa`} >Nova Empresa</Link>
            <Link className="nav-link" to={`${ROUTES_PREFIX()}/editarEmpresa`} >Editar Empresa</Link>
          </NavDropdown>
        </Nav>

      </Navbar>
    </>
  );
};

export default CustomNavbar;