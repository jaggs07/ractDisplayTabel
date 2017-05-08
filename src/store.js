import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger as logger } from 'redux-logger';
import dataReducer from './reducers/DataReducer';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export default createStore(
    combineReducers({
    	dataReducer
    }), 
    {}, 
    applyMiddleware(logger(), thunk, promise())
);