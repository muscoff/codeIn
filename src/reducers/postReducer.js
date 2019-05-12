import { FETCH_POST } from '../actions/types';

const initialState = {
    images: []
}

export default function (state=initialState, action){
    switch(action.type){
        case FETCH_POST:
        return {
            ...state,
            images: action.payload
        }
        default:
            return state;
    }
}