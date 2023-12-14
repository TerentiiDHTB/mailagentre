import {useState} from "react";

import {CallModalWindowProps, ModalWindowTemplate} from "@/shared/modalWindowTemplate";
import {clickHandler} from "@/features/createFolderButton/model/clickHandler.ts";

export const CreateFolderModalWindow = (props: CallModalWindowProps) => {
    const [folderName, setFolderName] = useState("")
    const [errMessShow, setErrMessShow] = useState(false)

    return(
        <ModalWindowTemplate isShown={props.isShown} hide={props.hide} windowName="Создание папки">
            <label htmlFor="folderNameInput">Введите имя папки:</label>
            <input name="folderNameInput" value={folderName} onChange={(event) => {setFolderName(event.target.value)}}/>
            <label htmlFor="folderNameInput" style={{color: "red"}} hidden={!errMessShow}>ошибка при вводе имени папки</label>
            <button onClick={() => {clickHandler(folderName, props.hide, setErrMessShow); setFolderName("")}}>
                Создать папку
            </button>
        </ModalWindowTemplate>
    )
}