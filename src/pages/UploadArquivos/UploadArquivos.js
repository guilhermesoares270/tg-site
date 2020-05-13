import React, { useState, useEffect } from 'react';
import crypto from 'crypto';
import { storeContract } from '../../services/documents/index';
import ReactLoading from 'react-loading';

export const UploadArquivos = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const processFile = async () => {
    try {
      if (file != null) {
        console.log(`fileName: ${file.name}`);
        var md5sum = crypto.createHash('md5');
        md5sum.update(await file.text());
        // console.log(md5sum.digest('hex'));
        const hash = md5sum.digest('hex');

        const dataToSend = {
          signature: hash,
          identity: hash,
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
    setLoading(true);
    processFile();
    setLoading(false);
  }, []);

  return (
    <>
      {
        loading && !error && <center><ReactLoading type="spin" color="#212121" height={50} width={50} /></center>
      }
      {
        error && <h1>Error</h1>
      }
      {
        !loading && !error &&
        <div class="container-fluid">
          <center><h4> Enviar de Arquivo </h4></center>
          <br />
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xl-4">
            </div>
          </div>

          <div class="col-md-12 col-sm-12 col-xl-4"></div>

          <form>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="customFile"
                onChange={(e) => setFile(e.currentTarget.files[0])}
              ></input>
              <label class="custom-file-label" for="customFile">Procurar</label>
            </div>

            <br />
            <br />

            <div className="col-md-12 col-sm-12 col-xl-12">
              <center>
                <button
                  type="button"
                  className="outline btn btn-light btn-confirma"
                  onClick={() => processFile()}
                >
                  Enviar
              </button>
              </center>
            </div>

          </form>

        </div>
      }
    </>
  );
};

export default UploadArquivos;