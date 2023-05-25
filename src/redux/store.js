import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../models/rootSaga';
import { rootReducer } from './rootReducer';
// ----------------------------------------------------------------------

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

sagaMiddleware.run(rootSaga);

export { store, persistor, dispatch, useSelector, useDispatch };

// const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = configureStore(
//   {
//     reducer: persistReducer(rootPersistConfig, rootReducer),
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: false,
//         immutableCheck: false,
//       }),
//   },
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// );

// const persistor = persistStore(store);

// const { dispatch } = store;

// const useSelector = useAppSelector;

// const useDispatch = () => useAppDispatch();

// sagaMiddleware.run(rootSaga);

// export { store, persistor, dispatch, useSelector, useDispatch };
