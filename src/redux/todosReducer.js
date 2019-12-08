import {FETCH_TODOS } from './types';

const initialState = {
    items: []
};

export const todos = (state = initialState, action) => {

    switch(action.type){

        case FETCH_TODOS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return {...state};
    }

}