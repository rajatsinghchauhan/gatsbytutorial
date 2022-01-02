import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/project.module.css"

export default function projectpage({ children }) {
  return (
    <Layout>
      <div className={portfolio}>
        {children}
        <h2>Another page inside project</h2>
      </div>
    </Layout>
  )
}
