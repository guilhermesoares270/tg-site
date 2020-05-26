import React, { useState, useEffect } from 'react';
import crypto from 'crypto';
import { storeContract } from '../../services/documents/index';
import ReactLoading from 'react-loading';
import jwtDdecode from 'jwt-decode';

export const UploadArquivos = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const handleFileRequest = async () => {
    setLoading(true);
    const success = await processFile();
    setError(success);
    setLoading(false);
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

  // useEffect(() => {
  //   setLoading(true);
  //   const res = processFile();
  //   setLoading(false);
  // }, [loading]);

  useEffect(() => {

  }, [loading, error]);

  return (
    <>
      {
        console.log(`loading: ${loading}`)
      }
      {
        error && <h1>Error</h1>
      }
      {/* {
        !loading && !error &&
        
      } */}
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
                    // onClick={() => processFile()}
                    onClick={() => handleFileRequest()}
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