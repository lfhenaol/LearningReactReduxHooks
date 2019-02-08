import { createStore, applyMiddleware } from 'redux';
import { todos } from './reducers/todos';
import promise from 'redux-promise';
import logger from 'redux-logger';

// import { loadState, saveStorage } from './utils/localStorage';
// import throttle from 'lodash/throttle';


const middlewares = [promise];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

const store = createStore(todos, applyMiddleware(...middlewares));

export { store };
