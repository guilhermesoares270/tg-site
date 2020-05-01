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
import { Link } from 'react-router-dom';

export const CadastroEmpresa = (props) => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClose = () => setShow(false);
  const handleRedirect = () => <Link to="" />;
  const handleShow = () => {
    console.log(`success: ${success}`);
    setShow(true);
  };

  const modalBody = 'Não foi possível criar a empresa';
  const modalSuccess = 'Empresa criada com sucesso';

  return (
    <>
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
        // initialValues={{ ...props }}
        onSubmit={async values => {
          try {
            const send = Object.assign({}, values, { razao_social: values.razaoSocial });
            delete send.passwordRepeat;
            delete send.razaoSocial;

            const res = await create(send);

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
          // cnpj: Yup.string().matches(
          //   /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/gm,
          //   'CNPJ format is invalid')
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
                <div className="form-group col-md-4">
                  <label for="razaoSocial" ><strong>Razão Social:</strong></label>
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
                <div className="form-group col-md-4" >
                  <label for="cnpj" ><strong>CNPJ:</strong></label>
                  <input
                    id="cnpj"
                    className="form-control"
                    placeholder="CNPJ"
                    type="text"
                    value={values.cnpj}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
              </div>

              <div className="form-row" style={{
                justifyContent: 'center'
              }}>
                <div className="form-group col-md-4">
                  <label for="email"  ><strong>Email:</strong></label>
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
                <div className="form-group col-md-2">
                  <label for="password" ><strong>Senha:</strong></label>
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
                <div className="form-group col-md-2">
                  <label for="passwordRepeat" ><strong>Confirmar Senha:</strong></label>
                  <input
                    id="passwordRepeat"
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    value={values.passwordRepeat}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
              </div>

              {
                errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )
              }
              {
                errors.cnpj && touched.cnpj && (
                  <div className="input-feedback">{errors.cnpj}</div>
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

              <DisplayFormikState {...props} />
            </form>
          );
        }}
      </Formik>
    </>
  );
};
export default CadastroEmpresa;