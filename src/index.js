import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from'redux';
import logger from 'redux-logger';



const pageOneReducer = (state=[], action) => {
    if(action.type === 'SET_PIZZA_MENU'){
        console.log('payload', action.payload);
        return action.payload
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
       pageOneReducer,
    }),
  applyMiddleware(logger)

);
ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();

