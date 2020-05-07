import React, { useState, useEffect } from 'react';
import { index, currentEnterpriseContract } from '../../services/documents';
import ReactLoading from 'react-loading';
import { Formik } from 'formik';

const ListFiles = (props) => {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enterprise, setEnterprise] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const enterprise = await currentEnterpriseContract();
        const listOfDocuments = await index();
        setEnterprise(enterprise);
        setFileList(fileList);
        setLoading(false);
      } catch (error) {
        console.log(`ListFiles: error: ${error}`);
      }
    })();
  }, []);

  return (
    <>
      {console.log(`popopo: ${JSON.stringify(fileList)}`)}
      {loading && <ReactLoading type="spin" color="#212121" height={50} width={50} />}
      {
        !loading &&
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
                  values,
                  touched,
                  errors,
                  dirty,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset
                } = props;
                return (
                  <>
                    <form onSubmit={handleSubmit}>
                      <div className="col-md-12 col-sm-12 col-xl-12">
                        <h2>Listar Arquivos</h2>
                        <br />
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col"><strong>Signature</strong></th>
                              <th scope="col"><strong>Identity</strong></th>
                            </tr>
                          </thead>
                          {fileList.map(x => {
                            return (
                              <tr>
                                <td>{x.signature}</td>
                                <td>{x.identity}</td>
                                <td>{x.email}</td>
                                <td>{x.cep}</td>
                                <td>
                                  <button
                                    type="button"
                                    className="outline btn btn-light btn-confirma"
                                    // onClick={handleEdit.bind(null, x.id)}
                                    onClick={() => console.log(`edit`)}
                                  >
                                    Editar
                              </button>
                                  <button
                                    type="button"
                                    className="outline btn btn-light btn-confirma"
                                    // onClick={handleExclude}
                                    onClick={() => console.log(`exclude`)}
                                  >
                                    Excluir
                              </button>
                                </td>
                              </tr>
                            );
                          })}
                        </table>
                      </div>
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