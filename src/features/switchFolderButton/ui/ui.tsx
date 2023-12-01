import styles from "./ui.module.scss"

type SwitchFolderBtnProps = {
    isDisabled: boolean,
}

export const SwitchFolderButton = (props: SwitchFolderBtnProps) => {
    return (
        <button disabled={props.isDisabled} className={styles.buttonWrapper}>
            В папку
        </button>)
}