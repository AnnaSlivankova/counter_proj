import {combineReducers, legacy_createStore} from "redux";
import {AppReducer} from "./app-reducer";

const rootReducer = combineReducers({
        app: AppReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store