import React from 'react';
import { Formik } from 'formik';
import { MoreResources, DisplayFormikState } from './helper';
import * as Yup from 'yup';
import { create } from '../../services/enterprise';

const CadastroEmpresa = () => (
  <>
    <Formik
      initialValues={{
        email: '',
        razaoSocial: '',
        cnpj: '',
        password: '',
        passwordRepeat: ''
      }}
      onSubmit={async values => {
        try {
          const send = Object.assign({}, values, { razao_social: values.razaoSocial });
          delete send.passwordRepeat;
          delete send.razaoSocial;

          const res = await create(send);
          alert(JSON.stringify(res, null, 2));
        } catch (error) {
          alert('Não foi possível criar a empresa', null, 2);
        }
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        cnpj: Yup.string().matches(
          /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/gm,
          'CPF format is invalid')
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

            {/* <DisplayFormikState {...props} /> */}
          </form>
        );
      }}
    </Formik>
  </>
);

export default CadastroEmpresa;