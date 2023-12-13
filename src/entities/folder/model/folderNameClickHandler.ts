import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";
import React from "react";

const clickHandler = (event: React.MouseEvent<HTMLButtonElement> ,folderId: string) => {
    event.preventDefault()
    folderStore.setCurrentFolder(folderId)
}

export {clickHandler}