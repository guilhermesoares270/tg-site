/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { findByPathParam } from '../../services/enterprise';
import ReactLoading from 'react-loading';
import { useLocation, withRouter } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import { useDispatch } from 'react-redux';
import CadastroUsuario from '../../pages/CadastroUsuario';
import CadastroEmpresa from '../../pages/CadastroEmpresa';
import UploadArquivos from '../../pages/UploadArquivos/UploadArquivos';

const verifyEnterprise = (props) => {
  const [exist, setExist] = useState(false);
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const location = useLocation();

  const dispatch = useDispatch();

  const allowedRoutes = [
    '/cadastroUsuario',
    '/cadastroEmpresa',
    '/uploadArquivos'
  ];

  useEffect(() => {
    (async () => {
      const res = allowedRoutes.includes(location.pathname);
      console.log(`RES: ${JSON.stringify(res)}`);
      setAllowed(res);

      const [found, enterpriseData] = await findByPathParam(location.pathname);
      console.log(`found: ${found} -- enterprise: ${enterpriseData}`);
      if (enterpriseData) {
        dispatch({
          type: 'SETENTERPRISE',
          email: enterpriseData.email,
          razaoSocial: enterpriseData.razao_social,
          cnpj: enterpriseData.cnpj,
          isEdit: false,
        });
      }
      setExist(found);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exist, loading]);

  return (
    <>
      {console.log(`uuu: ${allowedRoutes.includes(location.pathname)}`)}
      {
        allowed && location.pathname == '/cadastroUsuario' && <CadastroUsuario />
      }
      {
        allowed && location.pathname == '/cadastroEmpresa' && <CadastroEmpresa />
      }
      {
        allowed && location.pathname == '/uploadArquivos' && <UploadArquivos />
      }
      {
        !exist && !loading && !allowed && <Login />
      }
      {
        console.log(`exist: ${exist} - loading: ${loading}`)
      }
      {
        !exist && !allowed && (
          <div className="container-fluid" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
          }}>
            <center><ReactLoading type="spin" color="#212121" height={50} width={50} /></center>
          </div>
        )
      }
      {
        exist && (props.children || <h1>No Children</h1>)
      }
    </>
  );
};

export default withRouter(verifyEnterprise);
