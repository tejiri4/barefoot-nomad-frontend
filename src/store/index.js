import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./sagas";

import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const allStoreEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, allStoreEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
