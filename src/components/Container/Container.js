import React from 'react';
import Navbar from '../Navbar/Navbar';
import Login from '../../pages/Login';
import CadastroEmpresa from '../../pages/CadastroEmpresa';
import CadastroUsuario from '../../pages/CadastroUsuario';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Container = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <Router>
                        <Navbar />

                        <div className="container">
                            <Switch>
                                <Route path="/cadastroEmpresa">
                                    <CadastroEmpresa />
                                </Route>
                                <Route path="/cadastroUsuario">
                                    <CadastroUsuario />
                                </Route>
                                <Route path="/">
                                    <Login />
                                </Route>
                            </Switch>
                        </div>

                    </Router>
                </div>
            </div>
        </>
    );
};

// <div className="container-fluid">
//     <div className="row">
//         <Navbar />
//     </div>
// </div>

export default Container;