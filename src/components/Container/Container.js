import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Login from '../../pages/Login/Login';
import CadastroEmpresa from '../../pages/CadastroEmpresa';
import CadastroUsuario from '../../pages/CadastroUsuario';
import ListarEmpresa from '../../pages/Empresas';
import ListFiles from '../../pages/ListFiles';
import UploadArquivos from '../../pages/UploadArquivos';
import { useLocation, withRouter, Router, Redirect } from 'react-router-dom';
import {
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { ROUTES_PREFIX } from '../../shared/global';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(`isLogged: ${localStorage.getItem('isLogged')}`);
  return <Route
    {...rest}
    render={props =>
      localStorage.getItem('isLogged') ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/' }} />
        )
    }
  />
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
              <PrivateRoute exact path='/subirArquivo'>
                <UploadArquivos />
              </PrivateRoute>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Container);