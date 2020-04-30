import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Login from '../../pages/Login/Login';
import CadastroEmpresa from '../../pages/CadastroEmpresa';
import CadastroUsuario from '../../pages/CadastroUsuario';
import ListarEmpresa from '../../pages/Empresas';
import { useLocation, withRouter } from 'react-router-dom';

import {
  // BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';
// import { Path } from 'path-parser'
import { findByPathParam, get } from '../../services/enterprise';

const Container = () => {

  const location = useLocation();

  const logged = useSelector(x => x.isLoggedState.isLogged);
  console.log(`Container: ${logged} - ${typeof logged}`);

  const allowedRoutes = [
    '/cadastroUsuario'
  ];

  useEffect(() => {
    (async () => {

      // const t = await get('43850031810');
      // console.log(`ttt: ${JSON.stringify(t)}`);

      const p = await findByPathParam(location.pathname);
      console.log(`ppp: ${p}`);
      // console.log(`path: ${JSON.stringify(path)}`);
    })();
  }, []);

  const NotLogged = () => <Login />;

  const Logged = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            {/* <Router> */}
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/cadastroEmpresa">
                  <CadastroEmpresa initValues={{
                    email: '',
                    razaoSocial: '',
                    cnpj: '',
                    password: '',
                    passwordRepeat: '',
                    isEdit: false,
                  }} />
                </Route>
                <Route path="/cadastroUsuario">
                  <CadastroUsuario />
                </Route>
                <Route path="/listarEmpresa">
                  <ListarEmpresa />
                </Route>
                <Route path="/">
                  <CadastroEmpresa />
                </Route>
              </Switch>
            </div>
            {/* </Router> */}
          </div>
        </div>
      </>
    );
  };

  return (logged || allowedRoutes.includes(location.pathname) ? <Logged /> : <NotLogged />);
};
export default withRouter(Container);