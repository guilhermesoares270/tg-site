import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { index, del } from '../../services/enterprise';
import {
  Link,
} from "react-router-dom";
import { CadastroEmpresa } from '../CadastroEmpresa/CadastroEmpresa';

const Empresas = () => {
  const [enterprises, setEnterprises] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [enter, setEnter] = useState({});
  const [error, setError] = useState(false);

  const getEnterpriseById = id => {
    const enterprise = enterprises.filter(x => x.id === id);
    if (enterprise.length === 0) return [];
    return enterprise[0];
  };

  const handleEdit = async id => {
    setEnter(getEnterpriseById(id));
    setEdit(true);
  };

  const handleExclude = async id => {
    await del(id);
    setRefetch(true);
  };

  useEffect(() => {
    (async () => {
      try {
        // if (enterprises.length === 0 && refetch) {
        if (refetch) {
          setLoading(true);
          const res = await index();
          await setEnterprises(res);
          setLoading(false);
          setRefetch(false);
        }
      } catch (error) {
        setError(true);
      }
    })();
  }, [loading, refetch]);

  return (
    <>
      {
        error && <h1>Error</h1>
      }
      {
        edit && enter && !error && <Link to='/cadastroEmpresa' >
          <CadastroEmpresa initValues={{ ...enter }} />
        </Link>
      }
      {
        !edit && !error && <>
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
            {props => {
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
                  {loading && <h1>LOADING</h1>}

                  {!loading &&
                    <form onSubmit={handleSubmit}>
                      <div className="col-md-12 col-sm-12 col-xl-12">
                        <h2> LISTAR EMPRESAS   </h2>
                        <br />
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col"><strong>Razão Social </strong></th>
                              <th scope="col"><strong>CNPJ</strong></th>
                              <th scope="col"><strong>email</strong></th>
                              <th scope="col"><strong>cep</strong></th>
                              <th scope="col"><strong>Ação</strong></th>
                            </tr>
                          </thead>
                          {enterprises.map(x => {
                            return (
                              <tr>
                                <td>{x.razao_social}</td>
                                <td>{x.cnpj}</td>
                                <td>{x.email}</td>
                                <td>{x.cep}</td>
                                <td>
                                  <button
                                    type="button"
                                    className="outline btn btn-light btn-confirma"
                                    onClick={handleEdit.bind(null, x.id)}
                                  >
                                    Editar
                              </button>
                                  <button
                                    type="button"
                                    className="outline btn btn-light btn-confirma"
                                    onClick={handleExclude.bind(null, x.id)}
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
                  }

                </>
              );
            }}
          </Formik>
        </>
      }

    </>
  );
};

export default Empresas;