import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as houses } from './ducks/houses';

const rootReducer = combineReducers({
    houses,
})

export default createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);