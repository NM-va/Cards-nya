import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {AppReducer, AppReducerActionsType} from "./app-reducer";
import {RegistrationReducerActionsType, RegReducer} from "../features/reg/reg-reducer";
import {newPasswordReducer, NewPasswordReducerActionsType} from "../features/newPassword/new-password-reducer";
import {
    forgotPasswordReducer,
    ForgotPasswordReducerActionsType
} from "../features/forgotPassword/forgot-password-reducer";
import {AuthReducer, AuthReducerActionsType} from "../api/AuthReducer";
import {PacksReducer, PacksReducerActionsType} from "../features/packs/PacksReducer";
import {searchCardReducer, SearchCardReducerActionsType} from "../features/search/search-reducer";
import {searchPackReducer, SearchPackReducerActionsType} from "../features/search/search-pack-reducer";
import {ActionsCardsType, CardsReducers } from "../features/cards/cards-reducer";
import {learningProcessReducer} from "../features/learning-process/learrning-process-reducer";


const rootReducer = combineReducers({
    app: AppReducer,
    reg: RegReducer,
    auth: AuthReducer,
    newPassword: newPasswordReducer,
    forgotPassword: forgotPasswordReducer,
    packs:PacksReducer,
    searchCard: searchCardReducer,
    searchPack: searchPackReducer,
    cards: CardsReducers,
    learningProcess: learningProcessReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppRootActionsType = AppReducerActionsType
    | AuthReducerActionsType
    | ForgotPasswordReducerActionsType
    | NewPasswordReducerActionsType
    | PacksReducerActionsType
    | RegistrationReducerActionsType
    | SearchCardReducerActionsType
    | SearchPackReducerActionsType
    | ActionsCardsType;

export type ThunkActionType = ThunkAction<void, AppRootStateType, unknown, AppRootActionsType>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;