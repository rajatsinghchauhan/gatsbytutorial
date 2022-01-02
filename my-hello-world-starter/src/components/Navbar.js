import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <h1>CALLMECALM</h1>
      <Link to="/">Home</Link>
      <Link to="/about"> About us</Link>
      <Link to="/projects">Project Page</Link>
    </nav>
  )
}
