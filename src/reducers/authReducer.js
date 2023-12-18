// authReducer.js
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';
const initialState = {
    isAuthenticated: false,
};
//creando una variable de estado.
//isAuthenticated <-- Para detectar si estoy logeado o NO. 

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;