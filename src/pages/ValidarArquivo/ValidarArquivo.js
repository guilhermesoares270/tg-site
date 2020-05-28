import React, { useState, useEffect } from 'react';
import crypto from 'crypto';
import { getDocument } from '../../services/documents/index';
import ReactLoading from 'react-loading';
import MyModal from '../../components/MyModal';

export const UploadArquivos = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fileHash = async (fileText) => {
    var md5sum = crypto.createHash('md5');
    md5sum.update(fileText);
    return md5sum.digest('hex');
  };

  const processFile = async () => {
    try {
      if (file != null) {
        const hash = fileHash(await file.text());

        const dataToSend = {
          signature: hash,
        };

        console.log(`hash: ${JSON.stringify(dataToSend)}`);

        const doc = await getDocument();
        const userCpf = doc.cpf;

        return true;
      }
    } catch (err) {
      console.log(`processFile error: ${err}`);
      setError(true);
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
        <div className="container-fluid">
          <center>
            <h4>Validar Arquivo</h4>
          </center>
          <center>
            <h6>Escolha um arquivo para verificar se o mesmo já foi enviado para o blockchain.</h6>
          </center>
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
              <label className="custom-file-label" for="customFile">Procurar</label>
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
                  Procurar
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