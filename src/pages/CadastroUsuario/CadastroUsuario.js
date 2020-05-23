import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { create } from '../../services/user';
import { DisplayFormikState } from '../CadastroEmpresa/helper';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import ReactLoading from 'react-loading';
import InputMask from 'react-input-mask';

const CadastroUsuario = (props) => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    if (success)
      props.history.push('/');
    else setShow(false);
  };

  const handleShow = () => {
    console.log(`success: ${success}`);
    setShow(true);
  };

  const modalBody = 'Não foi possível criar o usuário';
  const modalSuccess = 'Usuário criado com sucesso';

  const touchedAndWrong = (errors, touched) => {
    const errorsKeys = Object.keys(errors);
    const touchedKeys = Object.keys(touched);

    return (
      <>
        {
          errorsKeys.map(x => {
            if (touchedKeys.includes(x)) {
              return <div className="input-feedback">{errors[x]}</div>
            }
          })
        }
      </>
    );
  };

  return (
    <div>
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
          // nome: '',
          // sobrenome: '',
          razao_social: '',
          username: '',
          email: '',
          cpf: '',
          password: '',
          // passwordRepeat: '',
        }}
        onSubmit={async values => {
          setLoading(true);
          try {
            const user = {
              username: values.username,
              email: values.email,
              password: values.password,
              razao_social: values.razao_social,
            };
            const newUser = await create(user);
            if (newUser.errors.length !== 0) throw Error('Some errors ocurred');

            setSuccess(true);
            handleShow();

            setLoading(false);

          } catch (error) {
            setSuccess(false);
            setLoading(false);
            handleShow();
          }

        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required('O campo username é obrigatório'),
          password: Yup.string().min(8, 'A senha deve ter um mínimo de 8 caracteres').required('O campo senha é obrigatório'),
          email: Yup.string()
            .email()
            .required("O campo de email é obrigatório"),
          cpf: Yup.string()
            .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido').required("O campo de cpf é obrigatório"),
          razao_social: Yup.string().required('O campo razão social é obrigatório'),
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
              <form onSubmit={handleSubmit}>

                <div className="col-md-12 col-xl-12 col-sm-12" >

                  <div className="form-row">
                    <div className="form-group col-md-4 col-xl-6 col-sm-12" >
                      <label htmlFor="username" ><strong>Username:</strong></label>
                      <input
                        id="username"
                        className="form-control"
                        placeholder="Username"
                        type="text"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                      </input>
                    </div>

                    <div className="form-group col-md-4 col-xl-6 col-sm-12">
                      <label htmlFor="email" id="contato" ><strong>Email:</strong></label>
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

                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-2 col-xl-6 col-sm-12">
                      <label htmlFor="cpf" id="contato"><strong>CPF</strong></label>
                      <InputMask
                        id="cpf"
                        className="form-control"
                        placeholder="CPF"
                        type="text"
                        mask="999.999.999-99"
                        value={values.cpf}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                      </InputMask>
                    </div>

                    <div className="form-group col-md-4 col-xl-6 col-sm-12">
                      <label htmlFor="password" ><strong>Senha:</strong></label>
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

                  </div>

                  <div className="form-row">

                    <div className="form-group col-md-4 col-xl-6 col-sm-12">
                      <label htmlFor="razao_social" ><strong>Razão Social:</strong></label>
                      <input
                        id="razao_social"
                        className="form-control"
                        placeholder="Razão social"
                        type="text"
                        value={values.razao_social}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                      </input>
                    </div>

                  </div>

                  {
                    touchedAndWrong(errors, touched)
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

                      {
                        loading ? <center><ReactLoading type="spin" color="#212121" height={50} width={50} /></center> :
                          <button
                            type="submit"
                            className="btn btn-light btn-confirma"
                            disabled={isSubmitting}
                          >CONFIRMAR
                          </button>
                      }

                    </center>
                  </div>

                </div>

                {/* <DisplayFormikState {...props} /> */}
              </form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

// export default CadastroUsuario;
export default withRouter(CadastroUsuario);