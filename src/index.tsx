import React from "react"
import ReactDOM  from "react-dom/client"
import { RouterProvider } from "react-router"
import { Primary } from "./routes/Primary-Routes"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Primary} />
  </React.StrictMode>
)