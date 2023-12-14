import {CallModalWindowProps, ModalWindowTemplate} from "@/shared/modalWindowTemplate";
import {FolderT} from "@/shared/types";
import {useState} from "react";
import {clickHandler} from "../model/clickHandler.ts";


export const RenameFolderModalWindow = (props: CallModalWindowProps & FolderT) => {
    const [newName, setNewName] = useState("")
    const [errMessShow, setErrMessShow] = useState(false)

    return(
        <ModalWindowTemplate
            windowName={props.windowName} isShown={props.isShown} hide={props.hide}>
            <label>введите новое имя для папочки {props.folderName}</label>
            <input value={newName} onChange={event => {setNewName(event.target.value)}}/>
            <label hidden={!errMessShow} style={{color:"red"}}>введите имя папочки</label>
            <button
                onClick={() => {clickHandler(newName, props.folderId, props.hide, setErrMessShow); setNewName("")}}
            >
                переименовать
            </button>
        </ModalWindowTemplate>
    )
}