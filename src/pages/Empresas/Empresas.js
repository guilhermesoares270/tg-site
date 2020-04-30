import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { index, del } from '../../services/enterprise';
import {
  Link,
  Redirect,
} from "react-router-dom";
import { CadastroEmpresa } from '../CadastroEmpresa/CadastroEmpresa';

const Empresas = () => {
  const [enterprises, setEnterprises] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [enter, setEnter] = useState({});
  // let editEnterprise = null;

  const getEnterpriseById = id => {
    const enterprise = enterprises.filter(x => x.id === id);
    if (enterprise.length === 0) return [];
    return enterprise[0];
  };

  const handleEdit = async id => {
    console.log(`edit: ${id}`);
    // editEnterprise = getEnterpriseById(id);
    setEnter(getEnterpriseById(id));
    console.log(`ppp: ${JSON.stringify(enter)}`);
    setEdit(true);
  };

  const handleExclude = async id => {
    console.log('exclude');
    await del(id);
  };

  useEffect(() => {
    console.log('aaa');
    (async () => {
      if (enterprises.length === 0 && refetch) {
        setLoading(true);
        const res = await index();
        await setEnterprises(res);
        console.log(JSON.stringify(res));
        setLoading(false);
        setRefetch(false);
      }
    })();
  }, [loading]);

  return (
    <>
      {
        edit && enter && <Link to='/cadastroEmpresa' >
          <CadastroEmpresa initValues={{ ...enter }} />
          {/* <CadastroEmpresa initValues={{
            email: enter.email,
            razaoSocial: enter.razao_social,
            cnpj: enter.cnpj,
            password: enter.password,
            passwordRepeat: enter.password,
          }} /> */}
        </Link>
      }
      {
        !edit && <>
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
                                  {/* <a className="btn btn-editar" href="edita_empresa.html" role="button">Editar</a> */}
                                  {/* <a className="btn btn-excluir" href="" role="button">Excluir</a> */}

                                  <button
                                    type="button"
                                    className="outline btn btn-light btn-confirma"
                                    onClick={handleEdit.bind(null, x.id)}
                                  // disabled={!dirty || isSubmitting}
                                  >
                                    Editar
                              </button>
                                  <button
                                    type="button"
                                    className="outline btn btn-light btn-confirma"
                                    onClick={handleExclude}
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