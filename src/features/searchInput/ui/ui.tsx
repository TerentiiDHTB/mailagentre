import {FunctionComponent} from "react";

import styles from "./ui.module.scss"

export const SearchInput: FunctionComponent = () => {
    return (
        <input className={styles.inputWrapper}/>
    )
}