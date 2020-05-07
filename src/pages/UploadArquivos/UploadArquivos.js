import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTES_PREFIX } from '../../shared/global';

export const UploadArquivos = () => {
  const [redirect, setRedirect] = useState(false);

  return (
    <>
      {
        redirect && <Redirect to={`${ROUTES_PREFIX()}/cadastroUsuario`} />
      }
      {
        !redirect && <button onClick={() => setRedirect(true)}>Redirect</button>
      }
    </>
  );
};

export default UploadArquivos;