import React from 'react';
import './Login.css';
import StyledButton from '../../components/StyledButton/StyledButton';
import { BrowserRouter, Redirect } from 'react-router-dom';
import state from '../../State/GlobalState';
import { performLogin, performLogout} from '../../State/Actions/LoginActions';
import Main from '../Main/App';

class Login extends React.Component {

    constructor(props: any) {
        super(props);
        const stateObj = { page: 'login' };
        window.history.pushState(stateObj, 'Login Page', 'login');
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
                        <Form />
                        {/* <ClickableText text="Esqueci a senha" callback={ this.handleSubmit } /> */}
                        <ClickableText text="Login" callback={ () => {
                            state.dispatch(performLogin())
                            this.setState({});
                        } } />
                        <ClickableText text="Logout" callback={ () => state.dispatch(performLogout()) } />
                    </div>
                </div>
            </BrowserRouter>
            
        );
    }

    handleSubmit = () => {
        console.log('Logged - true');
        this.setState(() => ({
            isLogged: true
        }));
    }
}

const Form: React.FC = () => {
    return(
        <form className="LoginForm">
            <div>
            <Title text="Login" />
            </div>
            
            <Input name="Email"/>
            <Input name="Senha"/>
            {/* <Button text="Entrar" callback={ () => console.log('Button click') }/> */}
            <StyledButton />
        </form>
    );
}

const ClickableText: React.FunctionComponent<{ text: string, callback: () => void }> = ({ text, callback }) => {
    return(
        <p className="ClickableText" onClick={ callback }>{ text }</p>
    );
}

const Title: React.FunctionComponent<{ text: string }> = ({ text }) => {
    return(
        <section>
            <h2 className="Title">{ text }</h2>
        </section>
    );
}

const Button: React.FunctionComponent<{ text: string, callback: () => void }> = ({ text, callback }) => {
    return(
    <div className="StyledButton" onClick={ callback }>
        <section>
            <p>{ text }</p>
        </section>
    </div>
    );
}


const Input: React.FunctionComponent<{ name: string }> = ({ name }) => {
    return(
        <div className="StyledInput">
            <section>
                <input type="text" placeholder={name}/>
            </section>
        </div> 
    );
}

export default Login;