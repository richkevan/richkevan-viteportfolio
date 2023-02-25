import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

export const Primary = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/blog",
        element: <Blog />
      }
    ]
  }
  
])