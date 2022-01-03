import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}❤</h1>
      <Link to="/">Home</Link>
      <Link to="/about"> About us</Link>
      <Link to="/projects">Project Pages</Link>
    </nav>
  )
}
