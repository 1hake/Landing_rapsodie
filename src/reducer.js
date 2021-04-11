import { applyMiddleware, createStore } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";

const ACTIONS = {
  STORE_REF: "STORE_REF"
};

function reducer(state = {}, action) {
  switch (action.type) {
    case ACTIONS.STORE_REF:
      return {
        ...state,
        [action.name]: action.ref
      };
    default:
      return state;
  }
}

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
