import { combineReducers, createStore } from "redux";

//корневой reducer который получает все action-ы и раскидывает дальше по всем редьюсерам
const rootReducer = combineReducers({});

//создаёт тип на основе анализа того что rootReducer возвращает
export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;
