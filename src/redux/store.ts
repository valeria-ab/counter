import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

let preloadedState;
const persistedTodosString = localStorage.getItem("app-state");

if (persistedTodosString) {
  preloadedState = JSON.parse(persistedTodosString);
}

export const store = createStore(rootReducer, preloadedState);

store.subscribe(() => {
  localStorage.setItem("app-state", JSON.stringify(store.getState()));
});
// @ts-ignore
window.store = store;

export type AppRootStateType = ReturnType<typeof rootReducer>;
