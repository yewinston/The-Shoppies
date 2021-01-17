import { combineReducers } from 'redux';
import nominateReducer from './nominate';
import drawerReducer from './drawer';

const allReducers = combineReducers({
    nominations: nominateReducer,
    drawer: drawerReducer,
});

export default allReducers;