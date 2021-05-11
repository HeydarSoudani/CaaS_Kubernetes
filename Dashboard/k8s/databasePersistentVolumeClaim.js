export const DatabasePersistentVolumeClaim  = ({
    persistentVolumeClaimName,
    accessModes,
    storage
}) => {
    return({ apiVersion: 'v1',
  kind: 'PersistentVolumeClaim',
  metadata: { name: 'database-persistent-volume-claim' },
  spec: 
   { accessModes: [ 'ReadWriteOnce' ],
     resources: { requests: { storage: '2Gi' } } } });
};

// {
//     "apiVersion": "v1",
//     "kind": "PersistentVolumeClaim",
//     "metadata": {
//         "name": `${persistentVolumeClaimName}-persistent-volume-claim`
//     },
//     "spec": {
//         "accessModes": accessModes,
//         "resources": {
//             "requests": {
//                 "storage": storage
//             }
//         }
//     }
// }