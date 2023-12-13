import styles from "./ui.module.scss"
import {useModal} from "@/shared/modalWindowTemplate";
import {CreateFolderModalWindow} from "@/features/createFolderButton/ui/createFolderModal.tsx";

export const CreateFolderButton = () => {
    const [isShown, toggle] = useModal()

    return(
        <>
            <button className={styles.createFolderBtn} onClick={() => {toggle()}}>
                создать папку
            </button>
            <CreateFolderModalWindow isShown={isShown} toggle={toggle}/>
        </>
    )
}