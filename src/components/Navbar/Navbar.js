import React from 'react';
import {
    Link
} from "react-router-dom";
import {
    Dropdown,
    NavDropdown,
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" style={{ width: '100%', color: 'red' }}>
                <a className="navbar-brand" href="#">LOGO</a>

                <Nav>
                    <NavDropdown title='Usuarios'>
                        <Link className="nav-link" to='/cadastroUsuario' >Novo Usuário</Link>
                        <Link className="nav-link" to='/editarUsuario' >Editar Usuário</Link>
                    </NavDropdown>

                    <NavDropdown title='Empresas'>
                        <Link className="nav-link" to='/cadastroEmpresa' >Nova Empresa</Link>
                        <Link className="nav-link" to='/editarEmpresa' >Editar Empresa</Link>
                    </NavDropdown>
                </Nav>

            </Navbar>
        </>
    );
};

export default CustomNavbar;