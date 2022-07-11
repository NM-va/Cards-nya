import React, {useEffect} from 'react';
import {Header} from '../components/header/Header';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {logoutTC, profileInfoTC, setLoggedInAC} from "../api/AuthReducer";
import classes from "./App.module.css";
import {RequestStatusType, setInitialized} from "./app-reducer";
import {PacksContainer} from '../features/packs/PacksContainer';
import {CardsContainer} from '../features/cards/CardsContainer';
import {ProfileContainer} from '../features/profile/ProfileContainer';
import {Registration} from '../features/reg/Registration';
import {LoginContainer} from '../features/login/LoginContainer';
import {NewPassword} from '../features/newPassword/NewPassword';
import {ForgotPassword} from '../features/forgotPassword/ForgotPassword';
import {Route, Routes, Navigate} from 'react-router-dom';
import {ErrorModal} from "../components/modals/ErrorModal";
import {Err404} from "../utils/Err404";
import {LogoutOutlined} from "@ant-design/icons";
import SuperButton from "../components/SuperButton/SuperButton";
import {LearningProcess} from "../features/learning-process/LearningProcess";


export function App() {
    const dispatch = useDispatch();
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    const status: RequestStatusType = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    const error = useSelector<AppRootStateType, string>(state => state.app.error);
    const logout = () => {
        dispatch(logoutTC());
    }

    useEffect(() => {
        dispatch(profileInfoTC());
    }, []);

    useEffect(() => {
        if (error === 'you are not authorized /ᐠ-ꞈ-ᐟ\\') {
            dispatch(setLoggedInAC(false));
        }
    }, [error])

    if (!isInitialized) {
        return <div className={classes.app}/>
    }
    return (
        <div className={classes.app}>
            <ErrorModal error={error}/>
            <Header/>
            <main className={classes.main}>
                {isLoggedIn && <SuperButton className={`${classes.logOutButton}`} disabled={status === 'loading'}
                             onClick={logout}><LogoutOutlined/></SuperButton>}
                <Routes>
                    <Route path={'/packs'} element={<PacksContainer/>}/>
                    <Route path={'/cards/:id'} element={<CardsContainer/>}/>
                    <Route path={'/learning-process/:id'} element={<LearningProcess/>}/>
                    <Route path={'/profile'} element={<ProfileContainer/>}/>
                    <Route path={'/login'} element={<LoginContainer/>}/>
                    <Route path={'/registration'} element={<Registration/>}/>
                    <Route path={'/forgot-password'} element={<ForgotPassword/>}/>
                    <Route path={'/create-new-password'} element={<NewPassword/>}/>
                    <Route path={'/404'} element={<Err404/>}/>
                    <Route path='/' element={<Navigate to='/profile'/>}/>
                    <Route path='*' element={<Navigate to='/404'/>}/>
                </Routes>
            </main>
        </div>
    );
}


