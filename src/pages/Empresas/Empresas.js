import React from 'react';

const Empresas = () => {
    return (
        <>
            <div class="col-md-12 col-sm-12 col-xl-12">
                <h2> LISTAR EMPRESAS   </h2>
                <br />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"><strong>Razão Social </strong></th>
                            <th scope="col"><strong>CNPJ</strong></th>
                            <th scope="col"><strong>Ação</strong></th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Informação bd</td>
                        <td>Informação bd</td>
                        <td><a class="btn btn-editar" href="edita_empresa.html" role="button">Editar</a>
                            <a class="btn btn-excluir" href="" role="button">Excluir</a>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default Empresas;