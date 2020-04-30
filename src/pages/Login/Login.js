import React, { useState, useEffect, useRef } from 'react';
import logo from '../../logo.svg';
import tg from '../../assets/images/css/tg.css';
import { useSelector, useDispatch } from 'react-redux';
import { performLogin } from '../../services/sessions';
import ReactLoading from 'react-loading';

const Login = () => {
  const dispatch = useDispatch();
  // const log = useSelector(x => x.isLogged);
  const log = useSelector(x => x.isLoggedState.isLogged);

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
            <a href="#" className="forgot-password">
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
                    await performLogin(email.current.value, password.current.value);
                    dispatch({
                      type: 'LOGIN',
                      email: email.current.value,
                      password: password.current.value
                    });
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

export default Login;