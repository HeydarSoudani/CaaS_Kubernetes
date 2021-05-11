export const PostgresPasswordSecret  = ({name, password}) => {
    return({
        "apiVersion": "v1",
        "kind": "Secret",
        "metadata": {
            "name": name
        },
        "type": "Opaque",
        "data": {
            "PGPASSWORD": password
        }
    });
};