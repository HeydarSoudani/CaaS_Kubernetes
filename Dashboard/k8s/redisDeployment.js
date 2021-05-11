export const RedisDeployment  = ({name, replicas}) => {
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
                    "component": "redis"
                }
            },
            "template": {
                "metadata": {
                    "labels": {
                        "component": "redis"
                    }
                },
                "spec": {
                    "containers": [
                        {
                            "name": "redis",
                            "image": "redis",
                            "ports": [
                                {
                                    "containerPort": 6379
                                }
                            ] 
                        }
                    ]
                }  
            }
        }
    });
};