import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <NavLink className={styles.navLink} to="/login">Login</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink className={styles.navLink} to="/register">Register</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink className={styles.navLink} to="/404">404</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink className={styles.navLink} to="/newPassword">NewPassword</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink className={styles.navLink} to="/passwordRecovery">PasswordRecovery</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink className={styles.navLink} to="/profile">Profile</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink className={styles.navLink} to="/test">Test</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;