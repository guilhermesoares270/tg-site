import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const ServerError = (props) => {

  return (
    <div class="page-wrap d-flex flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <span class="display-1 d-block">{props.errorCode}</span>
            <div class="mb-4 lead">Ocorreu um erro ao processar sua requisição.</div>
            <Button
              variant="link"
              onClick={() => props.history.push('/subirArquivo')}
            >
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ServerError);