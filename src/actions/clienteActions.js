export const POST_CLIENTE = 'POST_CLIENTE';
export const POST_CLIENTE_SUCCESS = 'POST_CLIENTE_SUCCESS';
export const POST_CLIENTE_ERROR = 'POST_CLIENTE_ERROR';

const isPostingCliente = () => {
  return {
    type: POST_CLIENTE
  }
}

const postClienteSuccess = (response) => {
  return {
    type: POST_CLIENTE_SUCCESS,
    response
  }
}