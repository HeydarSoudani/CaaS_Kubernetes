import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { END } from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const makeStore = (initialState) => {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(
            thunkMiddleware,
            sagaMiddleware
        )),
    );

    store.runSaga = () => {
        // Avoid running twice
        if (store.saga) return;
        store.saga = sagaMiddleware.run(rootSaga);
    };

    store.stopSaga = async () => {
        // Avoid running twice
        if (!store.saga) return;
        store.dispatch(END);
        await store.saga.done;
        store.saga = null;
    };

    store.execSagaTasks = async (isServer, tasks) => {
        // run saga
        store.runSaga();
        // dispatch saga tasks
        tasks(store.dispatch);
        // Stop running and wait for the tasks to be done
        await store.stopSaga();
        // Re-run on client side
        if (!isServer) {
            store.runSaga();
        }
    };

    // Initial run
    store.runSaga();

    return store;
};

export default makeStore;



// export function initializeStore (initialState = {}) {
//     return createStore(
//         reducers,
//         initialState,
//         composeWithDevTools(applyMiddleware(
//             thunkMiddleware,
//             sagaMiddleware
//         ))
//     );
// }