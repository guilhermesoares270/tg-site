/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { findByPathParam } from '../../services/enterprise';
import ReactLoading from 'react-loading';
import { useLocation, withRouter } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import { useDispatch } from 'react-redux';
import { ROUTES_PREFIX } from '../../shared/global';
import CadastroUsuario from '../../pages/CadastroUsuario';
import { useSelector } from 'react-redux';

const verifyEnterprise = (props) => {
  const cnpj = useSelector(x => x.enterpriseStore.cnpj);
  const [exist, setExist] = useState(false);
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const location = useLocation();

  const dispatch = useDispatch();

  const allowedRoutes = [
    '/cadastroUsuario'
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
  }, [exist, loading]);

  return (
    <>
      {console.log(`uuu: ${allowedRoutes.includes(location.pathname)}`)}
      {
        allowed && <CadastroUsuario />
      }
      {console.log(`exit: ${exist} - loading: ${loading}`)}
      {
        !exist && !loading && !allowed && <Login />
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
