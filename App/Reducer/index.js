import {combineReducers} from 'redux'
import ListReducer from './ListReducer'

const AppReducer = combineReducers({
    ListReducer
});

const rootReducer = (state, action) => {
    return AppReducer(state, action);
}

export default rootReducer;
