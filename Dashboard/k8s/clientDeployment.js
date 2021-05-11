export const ClientDeployment  = ({name, replicas, image, port}) => {
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
                    "component": "web"
                }
            },
            "template": {
                "metadata": {
                    "labels": {
                        "component": "web"
                    }
                },
                "spec": {
                    "containers": [
                        {
                            "name": "client",
                            "image": image,
                            "ports": [
                                {
                                    "containerPort": port
                                }
                            ]
                        }
                    ]
                }  
            }
        }
    });
}