import React from 'react';
import Navbar from '../Navbar/Navbar';
import Login from '../../pages/Login/Login';
import CadastroEmpresa from '../../pages/CadastroEmpresa';
import CadastroUsuario from '../../pages/CadastroUsuario';
import ListarEmpresa from '../../pages/Empresas';
import { useLocation, withRouter } from 'react-router-dom';
import {
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';

const Container = () => {
  const location = useLocation();
  const logged = useSelector(x => x.isLoggedState.isLogged);
  const cnpj = useSelector(x => x.enterpriseStore.cnpj);
  const prefix = `enterprise/${cnpj}`;

  const allowedRoutes = [
    '/cadastroUsuario'
  ];

  const NotLogged = () => <Login />;

  const Logged = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <Navbar />
            <div className="container">
              <Switch>
                <Route path={`/${prefix}/cadastroEmpresa`}>
                  <CadastroEmpresa initValues={{
                    email: '',
                    razaoSocial: '',
                    cnpj: '',
                    password: '',
                    passwordRepeat: '',
                    isEdit: false,
                  }} />
                </Route>
                <Route path={`/${prefix}/cadastroUsuario`} >
                  <CadastroUsuario />
                </Route>
                <Route path={`${prefix}/listarEmpresa`} >
                  <ListarEmpresa />
                </Route>
                <Route path={`/${prefix}/`}>
                  <Login />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (logged || allowedRoutes.includes(location.pathname) ? <Logged /> : <NotLogged />);
};
export default withRouter(Container);