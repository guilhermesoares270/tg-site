import React from 'react';
import { Formik } from 'formik';
import { DisplayFormikState } from './helper';
import * as Yup from 'yup';
import { create } from '../../services/enterprise';
import {
  Modal,
  Button,
} from 'react-bootstrap';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ReactLoading from 'react-loading';
import InputMask from 'react-input-mask';

export const CadastroEmpresa = (props) => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setRedirect(true);
  const handleShow = () => setShow(true);

  const modalBody = 'Não foi possível criar a empresa';
  const modalSuccess = 'Empresa criada com sucesso. Você será redirecinado para a tela de login';

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

  const form = () => {
    return (<>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criação de empresa</Modal.Title>
        </Modal.Header>
        <Modal.Body>{success ? modalSuccess : modalBody}</Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-light btn-confirma" variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Formik
        enableReinitialize={true}
        initialValues={{ ...props.initValues }}
        onSubmit={async values => {
          setLoading(true);
          try {
            const send = Object.assign({}, values, { razao_social: values.razaoSocial, cep: values.cep.toString() });
            delete send.passwordRepeat;
            delete send.razaoSocial;

            console.log(`obj: ${JSON.stringify(send)}`);

            const res = await create(send);

            setSuccess(true);
            setLoading(false);
            handleShow();
          } catch (error) {
            console.log(`error: ${error.message}`);
            setSuccess(false);
            setLoading(false);
            handleShow();
          }
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Required"),
          cnpj: Yup.string().matches(
            /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/gm,
            'CNPJ format is invalid').required('O campo cnpj é obrigatório'),
          cep: Yup.number('O campo deve ser numérico')
            .positive('Números negativos não são aceitos')
            .min(8, 'Cep deve conter ao menos 8 caracteres')
            .required('O campo cep é obrigatório')
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
            <form onSubmit={handleSubmit}>

              <div className="form-row" style={{
                justifyContent: 'center'
              }}>
                <div className="form-group col-md-6">
                  <label htmlFor="razaoSocial" ><strong>Razão Social:</strong></label>
                  <input
                    id="razaoSocial"
                    className="form-control"
                    placeholder="Razão Social"
                    type="text"
                    value={values.razaoSocial}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                <div className="form-group col-md-6" >
                  <label htmlFor="cnpj" ><strong>CNPJ:</strong></label>
                  <InputMask
                    id="cnpj"
                    className="form-control"
                    placeholder="CNPJ"
                    type="text"
                    mask="99.999.999/9999-99"
                    value={values.cnpj}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                  </InputMask>
                </div>
              </div>

              <div className="form-row" style={{
                justifyContent: 'center'
              }}>
                <div className="form-group col-md-4">
                  <label htmlFor="email"  ><strong>Email:</strong></label>
                  <input
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="password" ><strong>Senha:</strong></label>
                  <input
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="cep" ><strong>Cep:</strong></label>
                  <input
                    id="cep"
                    className="form-control"
                    placeholder="Cep"
                    type="number"
                    value={values.cep}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
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

              {/* <DisplayFormikState {...props} /> */}
            </form>
          );
        }}
      </Formik>
    </>);
  }

  return (
    <>
      {
        console.log(`redirect: ${redirect}`)
      }
      {
        redirect ? <Redirect to='/' /> : form()
      }
    </>
  );
};
export default CadastroEmpresa;