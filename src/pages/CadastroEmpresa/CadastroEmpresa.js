import React from 'react';

const CadastroEmpresa = () => {
    return (
        <>
            <div className="container-fluid ">

                <div className="form-row" style={{
                    justifyContent: 'center'
                }}>
                    <div className="form-group col-md-4">
                        <label for="inputEmail4" ><strong>Razão Social:</strong></label>
                        <input type="Sobrenome" className="form-control" ></input>
                    </div>
                    <div className="form-group col-md-4" >
                        <label for="inputPassword4" ><strong>CNPJ::</strong></label>
                        <input type="sobrenome" className="form-control" ></input>
                    </div>
                </div>

                <div className="form-row" style={{
                    justifyContent: 'center'
                }}>
                    <div className="form-group col-md-4">
                        <label for="inputEmail4"  ><strong>Email:</strong></label>
                        <input type="email" className="form-control" name="email" ></input>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputPassword4" ><strong>Senha:</strong></label>
                        <input type="password" className="form-control" name="Senha" ></input>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputPassword4" ><strong>Confirmar Senha:</strong></label>
                        <input type="password" className="form-control" ></input>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-xl-12 col-sm-12">
                <center>
                    <button type="submit" className="btn btn-light btn-confirma">CONFIRMAR
                    </button>
                </center>
            </div>
        </>
    );
};

export default CadastroEmpresa;