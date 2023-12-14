import styles from "./ui.module.scss"

import type {CreateModalWindowProps} from "./types.ts"

import {FunctionComponent, useEffect} from "react";
import {createPortal} from "react-dom";


//разнести все..
export const ModalWindowTemplate: FunctionComponent<CreateModalWindowProps> = (props: CreateModalWindowProps) => {
    const onKeyDown = (event: KeyboardEvent) => {
        if (event.code === "Escape" && props.isShown) {
            props.hide();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [props.isShown]);

    const modal =(
        <div className={styles.modalWindowWrapper}>
            <div className={styles.contentWrapper}>
                <div className={styles.windowInfo}>
                    <span>{props.windowName}</span>
                    <button className={styles.closeButton} onClick={() => {props.hide()}}>X</button>
                </div>
                {props.children}
            </div>
        </div>)

    return props.isShown ?createPortal(modal, document.body) :null
}