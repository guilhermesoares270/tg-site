import React, { useState, useEffect } from 'react';
import crypto from 'crypto';
import { storeContract } from '../../services/documents/index';
import ReactLoading from 'react-loading';
import jwtDdecode from 'jwt-decode';
import MyModal from '../../components/MyModal';

export const UploadArquivos = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  // const [modalMessage, setModalMessage] = useState('Falha ao enviar o arquivo');
  const successMessage = 'Sucesso ao enviar o arquivo';
  const failureMessage = 'Falha ao enviar o arquivo';
  let currentMessage = failureMessage;
  const modalTitle = 'Upload de arquivo';

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const handleFileRequest = async () => {
    setLoading(true);
    const success = await processFile();

    // await sleep(3000);
    // const success = true;

    setError(!success);
    setLoading(false);
    if (success) currentMessage = successMessage;
    else currentMessage = failureMessage;
    setShow(true);
  };

  const processFile = async () => {
    try {
      if (file != null) {
        console.log(`fileName: ${file.name}`);
        var md5sum = crypto.createHash('md5');
        md5sum.update(await file.text());
        const hash = md5sum.digest('hex');

        // const token = localStorage.getItem('token');
        // const decodedJwt = jwtDdecode(token);

        const dataToSend = {
          signature: hash,
          cpf: 'mock-cpf'
        };

        console.log(`hash: ${JSON.stringify(dataToSend)}`);

        await storeContract(dataToSend);

        return true;
      }
    } catch (err) {
      console.log(`processFile error: ${err}`);
      return false;
    }
  };

  useEffect(() => {

  }, [loading, error]);

  const showFalse = () => setShow(false);

  return (
    <>
      {
        <MyModal
          show={show}
          handleClose={showFalse}
          message={currentMessage}
          title={modalTitle}
        />
      }
      {
        console.log(`loading: ${loading} - show: ${show}`)
      }
      {
        error && <h1>Error</h1>
      }
      <div className="container-fluid">
        <center><h4> Enviar de Arquivo </h4></center>
        <br />
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xl-4">
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-xl-4"></div>

        <form>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={(e) => setFile(e.currentTarget.files[0])}
            ></input>
            <label className="custom-file-label" htmlFor="customFile">Procurar</label>
          </div>

          <br />
          <br />
          {
            !loading &&
            <>
              <div className="col-md-12 col-sm-12 col-xl-12">
                <center>
                  <button
                    type="button"
                    className="outline btn btn-light btn-confirma"
                    // onClick={() => handleFileRequest()}
                    onClick={() => {
                      // setShow(true);
                      handleFileRequest();
                    }}
                  >
                    Enviar
                    </button>
                </center>
              </div>
            </>
          }

          {
            loading && !error && <center><ReactLoading type="spin" color="#212121" height={50} width={50} /></center>
          }

        </form>

      </div>
    </>
  );
};

export default UploadArquivos;