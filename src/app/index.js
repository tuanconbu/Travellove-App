import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
// Saga (import)
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// Reducers
import authReducer from '../modules/auth/reducer';
import registerReducer from '../modules/register/reducer';
// import cartsReducer from '../modules/carts/reducers'

// Saga (root)
import rootSagas from './rootSagas';

// Screen(import)
import AppNavigator from '../screens/AppNavigator';
// ROOT REDUCER
const rootReducer = combineReducers({
  authReducer,
  registerReducer,
  // cartsReducer
});
// MIDDLEWARE
//Saga (middleware)
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  // Custom Middleware
  // logger

  // SAGA
  sagaMiddleware,
];
// STORE
const store = createStore(
  rootReducer,
  // ONLY FOR DEBUG
  composeWithDevTools(applyMiddleware(...middlewares)),
);

// Saga (run)
sagaMiddleware.run(rootSagas);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
