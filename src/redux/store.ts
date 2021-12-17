import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

//создаёт тип на основе анализа того что rootReducer возвращает
export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;
