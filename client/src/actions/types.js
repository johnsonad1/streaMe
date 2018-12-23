/*
  When writing out the { type: '' } properties inside action creators
  and reducers it is increasingly easy to misspell the string values associated
  with each distinct type as the number of action creators and reducers goes up.
  This is a particularily difficult issue to identify because no error will be 
  thrown if the string value of a type inside a reducer doesn't match its 
  corresponding value inside an action creator, and yet it will prevent our state 
  from updating successfully. To remedy this problem action creators and reducers
  can reference a variable set equal to the original string value: if a
  variable is misspelt an error will be thrown and the location of the error will
  be provided. This allows for more practical and efficient debugging.
*/

export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const CREATE_STREAM = 'CREATE_STREAM'
export const FETCH_STREAMS = 'FETCH_STREAMS'
export const FETCH_STREAM = 'FETCH_STREAM'
export const DELETE_STREAM = 'DELETE_STREAM'
export const EDIT_STREAM = 'EDIT_STREAM'
