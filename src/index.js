import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';



const feelingReducer = (state = 0, action) => {
    console.log(state);

    switch (action.type) {
        case 'SET_FEELING':
            return action.payload;
        default:
            return state;
    }
}
const understandingReducer = (state = [], action) => {
    console.log(state);

    switch (action.type) {
        case 'SET_UNDERSTANDING':
            return action.payload;
        default:
            return state;
    }
}
const supportReducer = (state = [], action) => {
    console.log(state);

    switch (action.type) {
        case 'SET_SUPPORT':
            return action.payload;
        default:
            return state;
    }
}
const commentsReducer = (state = [], action) => {
    console.log(state);

    switch (action.type) {
        case 'SET_COMMENTS':
            return action.payload;
        default:
            return state;
    }
}
const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
    }),
    applyMiddleware(logger)

);
ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();

