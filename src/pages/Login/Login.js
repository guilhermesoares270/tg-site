import React, { useState, useEffect, useRef } from 'react';
import logo from '../../logo.svg';
// eslint-disable-next-line no-unused-vars
import tg from '../../assets/images/css/tg.css';
import { useSelector, useDispatch } from 'react-redux';
import { performLogin } from '../../services/sessions';
import ReactLoading from 'react-loading';
import { Redirect, withRouter, useHistory } from 'react-router-dom';

const Login = (props) => {
  const dispatch = useDispatch();
  const log = useSelector(x => x.isLoggedState.isLogged);
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const email = useRef('');
  const password = useRef('');

  useEffect(() => {
    console.log(`Changing login state: ${log}`);
  }, [log]);

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="barra">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card card-container">
          <img id="profile-img" src={logo} className="profile-img-card" alt="logo" style={{ width: '130px', height: 'auto' }} />
          <p id="profile-name" className="profile-name-card"></p>

          <form className="form-signin">
            <span id="login" className="reauth-email"></span>
            <input ref={email} type="email" id="login" name="login" className="form-control" placeholder="Email "></input>
            <p></p>
            <input ref={password} type="password" name="password" id="inputPassword" className="form-control" placeholder="Senha"></input>
            {/* <div id="remember" className="checkbox">
                            <label>
                                <input type="checkbox" value="LembrarSenha" />
                                <span style={{
                                    fontSize: '14px'
                                }}>Lembrar Senha
                                </span>
                            </label>
                        </div> */}
            <a href="#" className="forgot-password" onClick={() => history.push('/compararArquivo')}>
              Esqueci minha senha.
                        </a>
            <p></p>
            {loading ? <center><ReactLoading type="spin" color="#212121" height={50} width={50} /></center> : <></>}
            {!loading ?
              <input
                className="btn btn-lg btn-primary btn-block btn-signin"
                type="button"
                value="Entrar"
                onClick={async () => {
                  setLoading(true);
                  console.log(`performing login`);
                  try {
                    const isLogged = await performLogin(email.current.value, password.current.value);
                    dispatch({
                      type: 'SETENTERPRISE',
                      email: 'enterpriseData.email',
                      razaoSocial: 'enterpriseData.razao_social',
                      cnpj: isLogged.enterprise_cnpj,
                      isEdit: false,
                    });
                    dispatch({
                      type: 'LOGIN',
                      email: email.current.value,
                      password: password.current.value
                    });
                    props.history.push('/listarArquivos');
                  } catch (error) {
                    console.log(`Login error`);
                    setLoading(false);
                  }
                }}
              />
              : <></>}
          </form>
        </div>
      </div>
    </>
  );
};

// export default Login;
export default withRouter(Login);