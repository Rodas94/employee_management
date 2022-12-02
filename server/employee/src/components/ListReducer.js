import { GET_I, ADD_I, UPDATE_I, DELETE_I } from '../../types/types';
import uuid from 'uuid';

const initialState = {
    items: [
        { id: uuid(), name: 'Item 1' },
        { id: uuid(), name: 'Item 2' },
        { id: uuid(), name: 'Item 3' },
        { id: uuid(), name: 'Item 4' }
    ]
};

export default (state = initialState, action) => {
    switch(action.types) {
        case GET_I:
        return {
            ...state
        }
        case ADD_I:
        return {
            ...state
        }
        case UPDATE_I:
        return {
            ...state
        }
        case DELETE_I:
        return {
            ...state
        }
        default:
        return state;
    }
}