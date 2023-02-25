import { Outlet, RouterProvider } from "react-router"
import Header from "./components/header"
import Footer from "./components/footer"
import { Primary } from "./routes/Primary-Routes"
import "./styles/app.css"

const App = () => {

  return (
    <div className="main">
      <Header />
      <div className="body">
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App