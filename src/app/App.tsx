import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {routes} from "./providers/routes.tsx";

const App = () => {
  return (
    <RouterProvider router={createBrowserRouter(routes)}/>
  )
}

export default App
