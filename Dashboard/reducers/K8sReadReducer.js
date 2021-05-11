import {
    READ_DEPLOYMENTS
} from '../actions/types';

const INITIAL_STATE = {
    deployments: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case READ_DEPLOYMENTS: 
        return {
            ...state,
            deployments: action.payload
        };
    default:
        return state;
    }
};