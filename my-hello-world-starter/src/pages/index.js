import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function Home({ children }) {
  return (
    <Layout>
      <section className={header}>
        {children}
        <div>
          <h1>Hi MY FIRST GATSBY PROJECT. </h1>
          <h2>welcome to the world of open source.</h2>
          <p>My PORTFOLIO WEBSITE</p>
          <Link to="projects" className={btn}>
            {children} For ProjectS
          </Link>
        </div>
      </section>
    </Layout>
  )
}
