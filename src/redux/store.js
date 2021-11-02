import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import adminSlice from './features/adminSlice';
import watcherSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  admin: adminSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(watcherSaga);

export default store;
