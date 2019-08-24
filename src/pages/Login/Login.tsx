import React, { createRef } from 'react';
import './Login.css';
import StyledButton from '../../components/StyledButton/StyledButton';
import { BrowserRouter } from 'react-router-dom';
import state from '../../State/GlobalState';
import { performLogin, performLogout} from '../../State/Actions/LoginActions';
import Main from '../Main/App';
import ClickableText from '../../components/ClickableText/ClickableText';
import StyledInput from '../../components/StyledInput/Styledinput';

class Login extends React.Component {

    protected emailRef: any;
    protected passRef: any;

    public constructor(props: any) {
        super(props);
        const stateObj = { page: 'login' };
        window.history.pushState(stateObj, 'Login Page', 'login');

        this.emailRef = createRef();
        this.passRef = createRef();
    }

    componentDidMount() {
        const item = localStorage.getItem('token');
        if (item) console.log(item);
    }

    render() {
        state.subscribe( () => console.log(state.getState()));

        if (state.getState().isLogged) {
            console.log('Está logado!!!');
            const stateObj = { page: 'main' };
            window.history.pushState(stateObj, 'Main Page', 'main');
            return(<Main />);
        }

        return(
            <BrowserRouter>
                <div className="Background">
               
                    <div className="LoginModal">
                        
                        { this.loginFrom() }

                        <ClickableText text="Login" callback={ () => {
                            state.dispatch(performLogin())
                            this.setState({});
                        }} />

                        <ClickableText text="Esqueci minha senha" callback={ 
                            () => state.dispatch(performLogout())
                        } />

                    </div>
                </div>
            </BrowserRouter>
        );
    }

    private isAuthenticated(
        email: string = this.emailRef.current.value,
        pass: string = this.passRef.current.value
    ) {
        // console.log(email, pass);

        if (email === 'Guilherme' && pass === '123') {
            state.dispatch(performLogin())
            localStorage.setItem('token', 'Default JWT');
            this.setState({});
        } else {
            alert('Email or Password are incorrect');
        }
    }

    private loginFrom = () => {

        return (
            <form className="LoginForm">
                <div>
                    {/* <Title text="Login" /> */}
                    <h2 className="Title">Login</h2>
                </div>
                
                <StyledInput refe={ this.emailRef } name="Email" type="text" />
                <StyledInput refe={ this.passRef } name="Senha" type="text"/>

                <StyledButton text="Login123" callback={ () => {
                    this.isAuthenticated();
                }} />
            </form>
        );
    }
}

export default Login;