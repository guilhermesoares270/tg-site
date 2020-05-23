import React from 'react';
import Navbar from '../Navbar/Navbar';
import Login from '../../pages/Login/Login';
import CadastroEmpresa from '../../pages/CadastroEmpresa';
import CadastroUsuario from '../../pages/CadastroUsuario';
import ListarEmpresa from '../../pages/Empresas';
import ListFiles from '../../pages/ListFiles';
import UploadArquivos from '../../pages/UploadArquivos';
import ValidateFile from '../../pages/ValidateFile';
import { withRouter, Redirect } from 'react-router-dom';
import {
  Switch,
  Route,
} from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const logged = localStorage.getItem('isLogged') == 'true';
  console.log(`log: ${logged} - ${typeof logged}`);
  return logged ? <Route {...rest} render={props => (<Component {...props} />)} /> :
    <Redirect to={{ pathname: '/' }} />;
}

export const Container = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <div className="container justify-content-center" >
            <div style={{
              height: '50px'
            }} ></div>
            <Switch>
              <Route exact path='/'>
                <Login />
              </Route>
              <Route exact path='/cadastroUsuario' >
                <CadastroUsuario />
              </Route>
              <Route exact path='/cadastroEmpresa' >
                <CadastroEmpresa />
              </Route>
              <PrivateRoute exact path='/listarEmpresa'>
                <ListarEmpresa />
              </PrivateRoute>
              <PrivateRoute exact path='/listarArquivos' >
                <ListFiles />
              </PrivateRoute>
              <PrivateRoute exact path='/subirArquivo' >
                <UploadArquivos />
              </PrivateRoute>
              <PrivateRoute exact path='/compararArquivo' >
                <ValidateFile />
              </PrivateRoute>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Container);