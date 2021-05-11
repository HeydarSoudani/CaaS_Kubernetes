export const RedisClusterIpService  = ({name}) => {
    return({
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
            "name": `${name}-cluster-ip-service`
        },
        "spec": {
            "type": "ClusterIP",
            "selector": {
                "component": "redis"
            },
            "ports": [
                {
                    "port": 6379,
                    "targetPort": 6379
                }
            ]
        }
    });
};