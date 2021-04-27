import { combineReducers } from 'redux';
// 
import historial from './Calculadora';
import Auth from './Auth'

export default combineReducers({
    auth: Auth,
    historial,
});
