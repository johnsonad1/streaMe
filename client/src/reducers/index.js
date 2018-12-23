import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import streamReducer from './streamReducer'

/* 
  This project uses redux-form to streamline the process of 
  updating the state inside Redux store with data collected via forms. 
  Redux-form comes with it's own built in reducer!! It is 
  REQUIRED to assign the redux-form reducer to a key named 'form' 
  inside of combineReducers({})!!!

  Redux-form's built-in 'reducer' was renamed to 'formReducer' for 
  the purpose of clarity.
*/

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
})