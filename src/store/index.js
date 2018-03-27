import { applyMiddleware,createStore } from 'redux'
import reducer from '../reducer'
import thunk from "redux-thunk";
import initialState from '../reducer/initState.json'
const logger = store => next => action => {
    console.groupCollapsed('dispatching', action)
   
    let result = next(action)

    
   
    console.log('next state', store.getState())
    console.groupEnd();
    return result
}
/* 
const middelware = applyMiddleware(thunk,logger);
 */
/* const store = createStore(reducer, middelware)
 */
const store= createStore(
    reducer,
    applyMiddleware(thunk)
);


export default store;

