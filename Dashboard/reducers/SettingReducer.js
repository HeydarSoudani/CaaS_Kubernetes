import {
    SERVICES_TAB_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
    servicesTab: 'FB'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SERVICES_TAB_CHANGE:
        return {
            ...state,
            servicesTab: action.payload
        };
    default:
        return state;
    }
};