import fetch from 'isomorphic-unfetch';

import {API_BASE_URL} from '../config/config';
import {
    READ_DEPLOYMENTS
} from './types';

export const readDeployments = ({ namespace }) => dispatch => {
    fetch(`${API_BASE_URL}/apis/apps/v1/namespaces/${namespace}/deployments`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    })
    .then(response => response.json())
    .then(response => {
        dispatch({
            type: READ_DEPLOYMENTS,
            payload: response.items? response.items:[]
        });
    })
    .catch(() => {
    });
};