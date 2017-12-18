import { compose, applyMiddleware, createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './ducks';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  routerMiddleware,
];

if (process.env.NODE_ENV !== 'production') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
