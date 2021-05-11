export const IngressService  = ({
    name,
    clientPath,
    clientServiceName,
    clientServicePort,
    serverPath,
    serverServiceName,
    serverServicePort
}) => {
    return({
        "apiVersion": "networking.k8s.io/v1beta1",
        "kind": "Ingress",
        "metadata": {
            "name": name,
            "annotations": {
                "kubernetes.io/ingress.class": "nginx",
                "nginx.ingress.kubernetes.io/rewrite-target": "/$1",
                "certmanager.k8s.io/cluster-issuer": "letsencrypt-prod",
                "nginx.ingress.kubernetes.io/ssl-redirect": "false"
            }
        },
        "spec": {
            "rules": [
                {
                    "http": {
                        "paths": [
                            {
                                "path": clientPath,
                                "backend": {
                                    "serviceName": `${clientServiceName}-cluster-ip-service`,
                                    "servicePort": clientServicePort
                                }
                            },
                            {
                                "path": serverPath,
                                "backend": {
                                    "serviceName": `${serverServiceName}-cluster-ip-service`,
                                    "servicePort": serverServicePort
                                }
                            }
                        ]
                    }
                }
            ]
        }
    });
};