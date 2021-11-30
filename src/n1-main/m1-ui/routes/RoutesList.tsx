import {Route, Routes } from 'react-router-dom';
import Login from '../../../n2-features/f1-auth/a1-login/Login';
import Registration from '../../../n2-features/f1-auth/a2-register/Registration';
import BadRequest from "../../../n2-features/f1-auth/a3-404/404";
import NewPassword from '../../../n2-features/f1-auth/a4-newPassword/NewPassword';
import Profile from '../../../n2-features/f1-auth/a6-profile/Profile';
import PasswordRecovery from "../../../n2-features/f1-auth/a5-passwordRecovery/PasswordRecovery";
import Test from '../../../n2-features/f1-auth/a7-test/Test';

const RoutesList = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Registration/>}/>
            <Route path={'/404'} element={<BadRequest/>}/>
            <Route path={'/newPassword'} element={<NewPassword/>}/>
            <Route path={'/passwordRecovery'} element={<PasswordRecovery/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/test'} element={<Test/>}/>
        </Routes>
    )
}

export default RoutesList;