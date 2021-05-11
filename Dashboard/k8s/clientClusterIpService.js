export const ClientClusterIpService  = ({name, port}) => {
    return({
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
            "name": `${name}-cluster-ip-service`
        },
        "spec": {
            "type": "ClusterIP",
            "selector": {
                "component": "web"
            },
            "ports": [
                {
                    "port": port,
                    "targetPort": port
                }
            ]
        }
    });
};