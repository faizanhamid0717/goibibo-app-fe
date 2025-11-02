import { loaderReducer } from '@common/components/loader';
import { combineReducers } from 'redux';
console.log({loaderReducer});
const rootReducer = combineReducers({
    // Add your reducers here
    loader:loaderReducer,
});

export default rootReducer;