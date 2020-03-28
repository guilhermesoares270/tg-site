import React from 'react';

const Usuarios = () => {
    return (
        <>
            <div class="col-md-12 col-sm-12 col-xl-12">

                <h2> LISTAR USUÁRIOS </h2>
                <br />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"><strong>Nome</strong></th>
                            <th scope="col"><strong>Email</strong></th>
                            <th scope="col"><strong>CPF</strong></th>
                            <th scope="col"><strong>AÇÃO</strong></th>


                        </tr>
                    </thead>

                    <tr>
                        <td>Informação bd</td>
                        <td>Informação bd</td>
                        <td>Informação bd</td>
                        <td><a class="btn btn-editar" href="edita_usuario.html" role="button">Editar</a>
                            <a class="btn btn-excluir" href="" role="button">Excluir</a>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default Usuarios;