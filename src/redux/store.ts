import { combineReducers, createStore } from "redux";
import { loadState, saveState } from "../utils/localStorage-utils";
import { counterReducer } from "./counter-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
  });
  localStorage.setItem("app-state", JSON.stringify(store.getState()));
});
// @ts-ignore
window.store = store;

export type AppRootStateType = ReturnType<typeof rootReducer>;
