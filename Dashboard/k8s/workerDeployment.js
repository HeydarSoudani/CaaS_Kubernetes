export const WorkerDeployment  = ({
    name,
    replicas,
    image,
    redisServiceName
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
                    "component": "worker"
                }
            },
            "template": {
                "metadata": {
                    "labels": {
                        "component": "worker"
                    }
                },
                "spec": {
                    "containers": [
                        {
                            "name": "worker",
                            "image": image,
                            "env": [
                                {
                                    "name": "REDIS_HOST",
                                    "value": `${redisServiceName}-cluster-ip-service`
                                },
                                {
                                    "name": "REDIS_PORT",
                                    "value": '6379'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    });
};