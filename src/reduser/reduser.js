import {combineReducers} from 'redux';

import user from './user'; 
import pagination from './pagination'; 





const reducer = combineReducers({
    user,
    pagination
})

export default reducer;