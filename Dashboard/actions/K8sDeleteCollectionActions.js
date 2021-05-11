import fetch from 'isomorphic-unfetch';

import {API_BASE_URL} from '../config/config';
import {} from './types';

export const deleteCollectionDeployments = ({ namespace }) => dispatch => {
    fetch(`${API_BASE_URL}/apis/apps/v1/namespaces/${namespace}/deployments`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(() => {
    });
};

export const deleteCollectionServices = ({ namespace }) => dispatch => {
    
    fetch(`${API_BASE_URL}/api/v1/namespaces/${namespace}/services`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        if ( response.items.length !== 0 ) { 
            response.items.map((item, key) => {
                if ( item.metadata.name !== 'kubernetes' ) {
                    fetch(`${API_BASE_URL}/api/v1/namespaces/${namespace}/services/${item.metadata.name}`, {
                        method: 'DELETE',
                        headers: {
                            Accept: 'application/json',
                        }
                    })
                    .then(response => response.json())
                    .then(response => {
                        console.log(response)
                    })
                    .catch(() => {
                    });
                }
            });
        }
    })
    .catch(() => {
    });
    
};

export const deleteCollectionSecrets = ({ namespace }) => dispatch => {
    fetch(`${API_BASE_URL}/api/v1/namespaces/${namespace}/secrets`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(() => {
    });
};

export const deleteCollectionPvcs = ({ namespace }) => dispatch => {
    fetch(`${API_BASE_URL}/api/v1/namespaces/${namespace}/persistentvolumeclaims`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(() => {
    });
};

export const deleteCollectionIngresses = ({ namespace }) => dispatch => {
    fetch(`${API_BASE_URL}/apis/networking.k8s.io/v1beta1/namespaces/${namespace}/ingresses`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(() => {
    });
};