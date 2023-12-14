import {ModalWindowTemplate} from "@/shared/modalWindowTemplate";

import {useState} from "react";
import {createFolder} from "@/features/createFolderButton/model/createFolder.ts";

//TODO: добавить инпута айдишки, добавить лейблам форы. то же самое и для всех остальных.

export const CreateFolderModalWindow = (props: { isShown: boolean, toggle: () => void }) => {
    const [folderName, setFolderName] = useState("")
    const [errMessShow, setErrMessShow] = useState(false)

    return(
        <ModalWindowTemplate isShown={props.isShown} hide={props.toggle} windowName="Создание папки">
            <label>Введите имя папки:</label>
            <input value={folderName} onChange={(event) => {setFolderName(event.target.value)}}/>
            <label style={{color: "red"}} hidden={!errMessShow}>ошибка при вводе имени папки</label>
            <button onClick={() => {
                if (folderName.length === 0){setErrMessShow(true)}
                else {
                    createFolder(folderName);
                    props.toggle();
                    setErrMessShow(false)
                    setFolderName("")
                }
            }}>
                Создать папку
            </button>
        </ModalWindowTemplate>
    )
}