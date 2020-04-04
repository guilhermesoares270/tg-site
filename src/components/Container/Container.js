import React from 'react';
import Navbar from '../Navbar/Navbar';
import Login from '../../pages/Login/Login';
import CadastroEmpresa from '../../pages/CadastroEmpresa';
import CadastroUsuario from '../../pages/CadastroUsuario';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';

const Container = () => {
    const logged = useSelector(x => x.isLogged);
    console.log(`Container: ${logged} - ${typeof logged}`);

    const NotLogged = () => <Login />;

    const Logged = () => {
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
                                        <CadastroEmpresa />
                                    </Route>
                                </Switch>
                            </div>
                        </Router>
                    </div>
                </div>
            </>
        );
    };

    return (logged === true ? <Logged /> : <NotLogged />);
};

export default Container;