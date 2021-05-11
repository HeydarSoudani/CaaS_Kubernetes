import {
    SERVICES_TAB_CHANGE
} from './types';

export const servicesTabChange = (tab) => {
    return {
        type: SERVICES_TAB_CHANGE,
        payload: tab
    };
};
