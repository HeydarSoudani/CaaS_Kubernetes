export const PostgresClusterIpService  = ({name}) => {
    return({
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
            "name": `${name}-cluster-ip-service`
        },
        "spec": {
            "type": "ClusterIP",
            "selector": {
                "component": "postgres"
            },
            "ports": [
                {
                    "port": 5432,
                    "targetPort": 5432
                }
            ]
        }
    });
};