
import fetch from 'isomorphic-unfetch';

import {API_BASE_URL} from '../config/config';
import {} from './types';


export const createDeployment = ({ namespace, deployment }) => dispatch => {
    fetch(`${API_BASE_URL}/apis/apps/v1/namespaces/${namespace}/deployments`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(deployment)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(() => {});
};

export const createService = ({ namespace, service }) => dispatch => {
    fetch(`${API_BASE_URL}/api/v1/namespaces/${namespace}/services`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(service)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(() => {});
};

export const createSecret = ({ namespace, secret }) => dispatch => {
    fetch(`${API_BASE_URL}/api/v1/namespaces/${namespace}/secrets`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(secret)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(() => {});
};

export const createPersistentVolumeClaim = ({ namespace, persistentvolumeclaim }) => dispatch => {
    fetch(`${API_BASE_URL}/api/v1/namespaces/${namespace}/persistentvolumeclaims`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(persistentvolumeclaim)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(() => {});
};

export const createIngress = ({ namespace, ingress }) => dispatch => {
    fetch(`${API_BASE_URL}/apis/networking.k8s.io/v1beta1/namespaces/${namespace}/ingresses`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingress)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(() => {});
};




