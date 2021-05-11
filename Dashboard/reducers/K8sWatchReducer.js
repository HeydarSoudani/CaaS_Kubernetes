import {
    WATCH_DEPLOYMENT_UPDATE,
    WATCH_SERVICE_UPDATE,
    WATCH_PVC_UPDATE,
    WATCH_SECRET_UPDATE,
    WATCH_INGRESS_UPDATE,
} from '../actions/types';

const INITIAL_STATE = {
    deployments: {},
    services: {},
    pvcs: {},
    secrets: {},
    ingresses: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case WATCH_DEPLOYMENT_UPDATE: 
        return {
            ...state,
            deployments: {
                ...state.deployments,
                [action.payload.deploymentName]: {
                    status: action.payload.status
                }
            }
        };
    case WATCH_SERVICE_UPDATE: 
        return {
            ...state,
            services: {
                ...state.services,
                [action.payload.serviceName]: {
                    status: action.payload.status
                }
            }
        };
    case WATCH_PVC_UPDATE: 
        return {
            ...state,
            pvcs: {
                ...state.pvcs,
                [action.payload.pvcName]: {
                    status: action.payload.status
                }
            }
        };
    case WATCH_SECRET_UPDATE: 
        return {
            ...state,
            secrets: {
                ...state.secrets,
                [action.payload.secretName]: {
                    status: action.payload.status
                }
            }
        };
    case WATCH_INGRESS_UPDATE: 
        return {
            ...state,
            ingresses: {
                ...state.ingresses,
                [action.payload.ingressName]: {
                    status: action.payload.status
                }
            }
        };
    default:
        return state;
    }
};