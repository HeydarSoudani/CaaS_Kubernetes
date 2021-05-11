export const ServerDeployment  = ({
    name,
    replicas,
    image,
    port,
    redisServiceName,
    postgresServiceName,
    postgresSecretName
}) => {
    return({
        "apiVersion": "apps/v1",
        "kind": "Deployment",
        "metadata": {
            "name": `${name}-deployment`
        },
        "spec": {
            "replicas": replicas,
            "selector": {
                "matchLabels": {
                    "component": "server"
                }
            },
            "template": {
                "metadata": {
                    "labels": {
                        "component": "server"
                    }
                },
                "spec": {
                    "containers": [
                        {
                            "name": "server",
                            "image": image,
                            "ports": [
                                {
                                    "containerPort": port
                                }
                            ],
                            "env": [
                                {
                                    "name": "REDIS_HOST",
                                    "value": `${redisServiceName}-cluster-ip-service`
                                },
                                {
                                    "name": "REDIS_PORT",
                                    "value": "6379"
                                },
                                {
                                    "name": "PGUSER",
                                    "value": "postgres"
                                },
                                {
                                    "name": "PGHOST",
                                    "value": `${postgresServiceName}-cluster-ip-service`
                                },
                                {
                                    "name": "PGPORT",
                                    "value": "5432"
                                },
                                {
                                    "name": "PGDATABASE",
                                    "value": "postgres"
                                },
                                {
                                    "name": "PGPASSWORD",
                                    "valueFrom": {
                                        "secretKeyRef": {
                                            "name": postgresSecretName,
                                            "key": "PGPASSWORD"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }  
            }
        }
    });
};