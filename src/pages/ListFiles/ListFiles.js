import React, { useState, useEffect } from 'react';
import { index, currentEnterpriseContract } from '../../services/documents';
import ReactLoading from 'react-loading';
import { Formik } from 'formik';
import { Table } from 'react-bootstrap';
import ServerError from '../../components/ServerError';

const ListFiles = (props) => {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enterprise, setEnterprise] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const enterprise = await currentEnterpriseContract();
        const listOfDocuments = await index();
        console.log(`iii: ${JSON.stringify(listOfDocuments)}`);

        setFileList(listOfDocuments);
        setEnterprise(enterprise);
        setLoading(false);
      } catch (error) {
        console.log(`ListFiles: error: ${error}`);
        setError(error);
      }
    })();
  }, []);

  return (
    <>
      {
        error && <ServerError errorCode={500} />
      }
      {
        loading && !error &&
        <>
          <center>
            <ReactLoading type="spin" color="#212121" height={50} width={50} />
          </center>
        </>
      }
      {
        !loading && !error &&
        <>
          <Formik
            initialValues={{
              nome: '',
              sobrenome: '',
              email: '',
              cpf: '',
              password: '',
              passwordRepeat: '',
            }}
            onSubmit={async values => { }}
          >
            {
              props => {
                const {
                  handleSubmit,
                } = props;
                return (
                  <>
                    <form onSubmit={handleSubmit}>
                      <h2>Listar Arquivos</h2>
                      <br />

                      <Table striped bordered hover responsive="md" size="sm">
                        <thead>
                          <tr>
                            <th scope="col"><strong>CPF</strong></th>
                            <th scope="col"><strong>Email</strong></th>
                            <th scope="col"><strong>Ações</strong></th>
                          </tr>
                        </thead>
                        <tbody>
                          {fileList.data.map(x => {
                            return (
                              <tr>
                                {console.log(`FileList: ${JSON.stringify(x)}`)}
                                {/* <td>{x.signature}</td> */}
                                <td>{x.identity}</td>
                                <td>{x.email}</td>
                                <td>
                                  <div>
                                    <center>
                                      <button
                                        type="button"
                                        className="outline btn btn-light btn-confirma"
                                        // onClick={handleExclude}
                                        onClick={() => console.log(`exclude`)}
                                      >
                                        Verificar
                                    </button>

                                      <button
                                        type="button"
                                        className="outline btn btn-light btn-confirma"
                                        // onClick={handleExclude}
                                        onClick={() => console.log(`exclude`)}
                                      >
                                        Excluir
                                    </button>
                                    </center>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </form>
                  </>
                );
              }
            }
          </Formik>
        </>
      }
    </>
  );
};

export default ListFiles;