import { NavLink } from "react-router-dom"

const Navigation = () => {
  const activeClass = "activeNav"
  const inactiveClass = "h3"

  return (
    <div className="nav">
      <NavLink to="/" className={({ isActive }) => isActive ? activeClass: inactiveClass}>Home</NavLink>
      <NavLink to="about" className={({ isActive }) => isActive ? activeClass: inactiveClass}>About</NavLink>
      <NavLink to="projects" className={({ isActive }) => isActive ? activeClass: inactiveClass}>Projects</NavLink>
      <NavLink to="contact" className={({ isActive }) => isActive ? activeClass: inactiveClass}>Contact</NavLink>
      <NavLink to="blog" className={({ isActive }) => isActive ? activeClass: inactiveClass}>Blog</NavLink>
    </div>
  )
}

export default Navigation