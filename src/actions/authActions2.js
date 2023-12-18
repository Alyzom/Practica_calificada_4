//AUTH: LOGIN 
//social auth: lOGIn REDES SOCIALES
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});