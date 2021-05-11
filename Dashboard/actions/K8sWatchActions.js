import fetch from 'isomorphic-unfetch';

import {API_BASE_URL} from '../config/config';
import {
    WATCH_DEPLOYMENT_UPDATE
} from './types';

export const watchDeployment = ({ namespace, deploymentName }) => dispatch => {
    const watchDeploymentInterval = setInterval(() => {
        fetch(`${API_BASE_URL}/apis/apps/v1/namespaces/${namespace}/deployments/${deploymentName}?watch=true`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: WATCH_DEPLOYMENT_UPDATE,
                payload: {
                    deploymentName,
                    status: response.status.conditions && response.status.conditions[0] && response.status.conditions[0].status==="True"?true:false
                }
            });
            if (
                response.status.conditions &&
                response.status.conditions[0] &&
                response.status.conditions[0].status === "True"
            ) {
                clearInterval(watchDeploymentInterval);
            }
        })
        .catch(() => {
            clearInterval(watchDeploymentInterval);
        });
    }, 500);
};
