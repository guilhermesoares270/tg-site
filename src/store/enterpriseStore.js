export const enterpriseStore = (state = {
  email: '',
  razaoSocial: '',
  cnpj: JSON.parse(localStorage.getItem('cnpj')),
  isEdit: false,
}, action) => {
  switch (action.type) {
    case 'SETENTERPRISE':
      return {
        email: action.email,
        razaoSocial: action.razaoSocial,
        cnpj: action.cnpj,
        isEdit: action.isEdit
      };
    default:
      return state;
  }
};

export default enterpriseStore;