export const ServerClusterIpService  = ({name, port}) => {
    return({
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
            "name": `${name}-cluster-ip-service`
        },
        "spec": {
            "type": "ClusterIP",
            "selector": {
                "component": "server"
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