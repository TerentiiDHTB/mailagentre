import {FunctionComponent} from "react";

import styles from "./ui.module.scss"

export const SearchInput: FunctionComponent = () => {
    return (
        <input type="text" className={styles.inputWrapper}/>
    )
}