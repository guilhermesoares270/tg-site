import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { create } from '../../services/user';
import { DisplayFormikState } from '../CadastroEmpresa/helper';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PREFIX } from '../../shared/global';

const CadastroUsuario = () => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClose = () => setShow(false);
  const handleRedirect = () => <Link to={`${ROUTES_PREFIX()}/cadastroUsuario`} />;
  const handleShow = () => {
    console.log(`success: ${success}`);
    setShow(true);
  };

  const modalBody = 'Não foi possível criar o usuário';
  const modalSuccess = 'Usuário criado com sucesso';

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criação de usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>{success ? modalSuccess : modalBody}</Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-light btn-confirma" variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Formik
        initialValues={{
          nome: '',
          sobrenome: '',
          email: '',
          cpf: '',
          password: '',
          passwordRepeat: '',
        }}
        onSubmit={async values => {
          try {
            const user = {
              username: values.nome,
              email: values.email,
              password: values.password,
              razao_social: `${values.nome}/${values.email}`
            };
            const newUser = await create(user);

            setSuccess(true);
            handleShow();

          } catch (error) {
            setSuccess(false);
            handleShow();
          }

        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Required"),
          // cpf: Yup.string()
          //   .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido'),
        })}
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
              <br />
              <br />
              <br />
              <form onSubmit={handleSubmit}>

                <div className="col-md-12 col-xl-12 col-sm-12" >

                  <div className="form-row">
                    <div className="form-group col-md-4 col-xl-6 col-sm-12">
                      <label for="nome" id="contato"><strong>Nome:</strong></label>
                      <input
                        id="nome"
                        className="form-control"
                        placeholder="Nome"
                        type="text"
                        value={values.nome}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                      </input>
                    </div>

                    <div className="form-group col-md-4 col-xl-6 col-sm-12" >
                      <label for="inputPassword4" id="contato"><strong>Sobrenome:</strong></label>
                      <input
                        id="sobrenome"
                        className="form-control"
                        placeholder="Sobrenome"
                        type="text"
                        value={values.sobrenome}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                      </input>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-4 col-xl-6 col-sm-12">
                      <label for="email" id="contato" ><strong>Email:</strong></label>
                      <input
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                      </input>
                    </div>
                    <div className="form-group col-md-2 col-xl-6 col-sm-12">
                      <label for="cpf" id="contato"><strong>CPF</strong></label>
                      <input
                        id="cpf"
                        className="form-control"
                        placeholder="CPF"
                        type="text"
                        value={values.cpf}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                      </input>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-4 col-xl-6 col-sm-12">
                      <label for="password" ><strong>Senha:</strong></label>
                      <input
                        id="password"
                        className="form-control"
                        placeholder="Senha"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                      </input>
                    </div>
                    <div className="form-group col-md-4 col-xl-6 col-sm-12">
                      <label for="passwordRepeat"><strong>Confirmar Senha:</strong></label>
                      <input
                        id="passwordRepeat"
                        className="form-control"
                        placeholder="Repete Senha"
                        type="password"
                        value={values.passwordRepeat}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                      </input>
                    </div>
                  </div>

                  {
                    errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )
                  }

                  <div className="col-md-12 col-xl-12 col-sm-12">
                    <center>
                      <button
                        type="button"
                        className="outline btn btn-light btn-confirma"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Reset
                </button>
                      <button
                        type="submit"
                        className="btn btn-light btn-confirma"
                        disabled={isSubmitting}
                      >CONFIRMAR
                    </button>
                    </center>
                  </div>

                </div>

                {/* <DisplayFormikState {...props} /> */}
              </form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default CadastroUsuario;