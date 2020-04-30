export const enterpriseStore = (state = {
  email: '',
  razaoSocial: '',
  cnpj: '',
  password: '',
  passwordRepeat: '',
  isEdit: false,
}, action) => {
  switch (action.type) {
    case 'SETENTERPRISE':
      return state;
    default:
      return state;
  }
};

export default enterpriseStore;