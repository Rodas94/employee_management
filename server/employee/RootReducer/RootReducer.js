import { combineReducers } from 'redux';
import ListReducer from '../components/ListReducer';

export default combineReducers({
    list: ListReducer
})