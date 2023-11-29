import {FunctionComponent} from "react";

import styles from "./ui.module.scss"
import logo from "../../../shared/icons/logo/main-logo.svg"

import {SearchInput} from "../../../features/searchInput";
import {NavLink} from "react-router-dom";
import {userInfoStore} from "../../../shared/stores/userInfoStore/userInfoStore.ts";

export const Header: FunctionComponent = () => {
    return (
        <div className={styles.headerWrapper}>
            <img src={logo} alt={"logo"}/>
            <SearchInput/>
            <section className={styles.userInfo}>
                <NavLink to="/office">{userInfoStore.getUserName()}</NavLink>
                <img src={userInfoStore.getUserImage()} alt="userImg" className={styles.userImg}/>
            </section>
        </div>
    )
}