import {RouteType} from "./types.ts";

import {Main} from "../../pages/main";

export const routes: RouteType[] = [
    {
        path: "",
        element:<Main/>
    },
    {
        path:"/*",
        element:<>404</>
    }
];