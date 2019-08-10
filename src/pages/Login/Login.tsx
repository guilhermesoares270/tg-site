import React from 'react';
import './Login.css';
import { Icon } from 'antd';
import { IconType } from 'antd/lib/notification';
import { IconComponent, IconProps } from 'antd/lib/icon';

const Login: React.FunctionComponent = () => {
    return (
        <div className="Background">
            <div className="LoginModal">
                <Form />
            </div>
        </div>
    );
}

const Form: React.FunctionComponent = () => {
    return(
        <form className="LoginForm">
            <div>
            <Title text="Login" />
            </div>
            
            
            <Input name="Email"/>
            <Input name="Senha"/>
            <Button text="Entrar" callback={ () => console.log("Teste") }/>
            <ClickableText text="Esqueci a senha" callback={ () => console.log("aaa") } />
        </form>
    );
}

const ClickableText: React.FunctionComponent<{ text: string, callback: () => void }> = ({ text, callback }) => {
    return(
        <p className="ClickableText" onClick={ callback }>{ text }</p>
    );
}

const Title: React.FunctionComponent<{ text: string, icon?: IconProps }> = ({ text, icon }) => {
    return(
        <section>
            <h2 className="Title">{ icon } { text }</h2>
        </section>
    );
}

const Button: React.FunctionComponent<{ text: string, callback: () => void }> = ({ text, callback }) => {
    return(
    <div className="StyledButton" onClick={ callback }>
        <section>
            {/* <button onClick={callback}>{text}</button> */}
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