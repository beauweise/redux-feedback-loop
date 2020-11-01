import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from'redux';
import logger from 'redux-logger';



const pageOneReducer = (state=[], action) => {
    switch(action.type){
        case 'SET_PAGEONE':
          return action.payload;
        default:
          return state;
      }
}
const pageTwoReducer = (state=[], action) => {
    switch(action.type){
        case 'SET_PAGETWO':
          return action.payload;
        default:
          return state;
      }
}
const pageThreeReducer = (state=[], action) => {
    switch(action.type){
        case 'SET_PAGETHREE':
          return action.payload;
        default:
          return state;
      }
}
const pageFourReducer = (state=[], action) => {
    switch(action.type){
        case 'SET_PAGEFOUR':
          return action.payload;
        default:
          return state;
      }
}



const storeInstance = createStore(
    combineReducers({
       pageOneReducer,
       pageTwoReducer,
       pageThreeReducer,
       pageFourReducer,
    }),
  applyMiddleware(logger)

);
ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();

