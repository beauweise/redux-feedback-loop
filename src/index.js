import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from'redux';
import logger from 'redux-logger';



const pageOneReducer = (state=0, action) => {
    console.log(action.payload);
    
    switch(action.type){
        case 'SET_PAGEONE':
          return action.payload;
        default:
          return state;
      }
}
const pageTwoReducer = (state=[], action) => {
    console.log(action.payload);

    switch(action.type){
        case 'SET_PAGETWO':
          return action.payload;
        default:
          return state;
      }
}
const pageThreeReducer = (state=[], action) => {
    console.log(action.payload);

    switch(action.type){
        case 'SET_PAGETHREE':
          return action.payload;
        default:
          return state;
      }
}
const pageFourReducer = (state=[], action) => {
    console.log(action.payload);

    switch(action.type){
        case 'SET_PAGEFOUR':
          return action.payload;
        default:
          return state;
      }
}
const reviewReducer = (state =[], action)=>{
    console.log(state);

    
}



const storeInstance = createStore(
    combineReducers({
       pageOneReducer,
       pageTwoReducer,
       pageThreeReducer,
       pageFourReducer,
       reviewReducer
    }),
  applyMiddleware(logger)

);
ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();

