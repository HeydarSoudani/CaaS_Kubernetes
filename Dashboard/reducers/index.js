import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import K8sWatchReducer from './K8sWatchReducer';
import K8sReadReducer from './K8sReadReducer';
import SettingReducer from './SettingReducer';

export default combineReducers({
    K8sWatch: persistReducer({
        key: 'K8sWatchReducer',
        storage,
        whitelist: []
    }, K8sWatchReducer),
    K8sRead: persistReducer({
        key: 'K8sReadReducer',
        storage,
        whitelist: []
    }, K8sReadReducer),
    setting: persistReducer({
        key: 'SettingReducer',
        storage,
        whitelist: ['servicesTab']
    }, SettingReducer),
});
