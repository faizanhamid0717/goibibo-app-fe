import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { apply } from "redux-saga/effects";
import { applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware();
export const store = {
     reducer:rootReducer,
    middleware:applyMiddleware(sagaMiddleware)
};

sagaMiddleware.run(rootSaga);

export default store;