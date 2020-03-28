import React from 'react';
import logo from '../logo.svg'
import tg from '../assets/images/css/tg.css';

const Login = () => {
    return (
        <>
            {/* <div className="container-fluid ">
                <div className="row">
                    <div className="barra">
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="card card-container">
                    <img id="profile-img" src={logo} className="profile-img-card" alt="logo" style={{ width: '130px', height: 'auto' }} />
                    <p id="profile-name" className="profile-name-card"></p>

                    <form className="form-signin" method="post" action="">
                        <span id="login" className="reauth-email"></span>
                        <input type="email" id="login" name="login" className="form-control" placeholder="Email "></input>
                        <p></p>
                        <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Senha"></input>
                        <div id="remember" className="checkbox">
                            <label>
                                <input type="checkbox" value="LembrarSenha" />
                                <span style={{
                                    fontSize: '14px'
                                }}>Lembrar Senha
                                </span>
                            </label>
                        </div>
                        <a href="#" className="forgot-password">
                            Esqueci minha senha.
                        </a>
                        <p></p>
                        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" target="_blank">Entrar</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;