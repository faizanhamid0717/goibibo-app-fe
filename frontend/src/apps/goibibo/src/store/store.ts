import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { applyMiddleware, compose, createStore } from "redux";
import { HIDE_LOADER, hideLoader, SHOW_LOADER, showLoader } from "@common/components/loader";


export const loaderMiddleware = (store:any)=>(next:any)=>(action:any)=>{
  
      if(action.type === SHOW_LOADER){
          console.debug('Loader Started:',action);
          store.dispatch(showLoader())
      }else if(action.type === HIDE_LOADER){
            console.debug('Loader Stopped :',action);
           store.dispatch(hideLoader())
      }

      return next(action);
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware,loaderMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;