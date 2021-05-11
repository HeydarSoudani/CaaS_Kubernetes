export const PostgresDeployment  = ({
    name,
    replicas,
    persistentVolumeClaimName,
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
                    "component": "postgres"
                }
            },
            "template": {
                "metadata": {
                    "labels": {
                        "component": "postgres"
                    }
                },
                "spec": {
                    "volumes": [
                        {
                            "name": "postgres-storage",
                            "persistentVolumeClaim": {
                                "claimName": `${persistentVolumeClaimName}-persistent-volume-claim`
                            }
                        }
                    ],
                    "containers": [
                        {
                            "name": "postgres",
                            "image": "postgres",
                            "ports": [
                                {
                                    "containerPort": 5432
                                }
                            ],
                            "volumeMounts": [
                                {
                                    "name": "postgres-storage",
                                    "mountPath": "/var/lib/postgresql/data",
                                    "subPath": "postgres"
                                }
                            ],
                            "env": [
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