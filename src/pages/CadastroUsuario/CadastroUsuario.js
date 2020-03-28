import React from 'react';
import Navbar from '../../components/Navbar';

const CadastroUsuario = () => {
    return (
        <>
            {/* <div className="container-fluid">
                <div className="row">
                    <Navbar />
                </div>
            </div> */}
            <br />
            <br />
            <br />
            <div className="container">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="inputEmail4" id="contato"><strong>Nome:</strong></label>
                        <input type="Sobrenome" className="form-control" name="nome" id="inputEmail4" ></input>
                    </div>
                    <div className="form-group col-md-4" >
                        <label for="inputPassword4" id="contato"><strong>Sobrenome:</strong></label>
                        <input type="sobrenome" className="form-control" name="sobrenome" ></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="inputEmail4" id="contato" ><strong>Email:</strong></label>
                        <input type="email" className="form-control" name="email" ></input>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputPassword4" id="contato"><strong>CPF</strong></label>
                        <input type="text" className="form-control" name="cpf" ></input>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputPassword4" id="contato"><strong>CNPJ:</strong></label>
                        <input type="text" className="form-control" name="cnpj" ></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="inputEmail4" id="senha" ><strong>Senha:</strong></label>
                        <input type="password" className="form-control" ></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputPassword4" id="contato"><strong>Confirmar Senha:</strong></label>
                        <input type="password" className="form-control" ></input>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CadastroUsuario;