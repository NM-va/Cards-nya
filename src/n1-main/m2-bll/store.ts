import {combineReducers, createStore} from 'redux'
import { authReducer } from './auth-reducer';
import {profileReducer} from "./profile-reducer";
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    app: appReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>