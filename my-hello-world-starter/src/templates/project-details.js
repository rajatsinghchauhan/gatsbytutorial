import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { details, featured } from "../styles/project-details.module.css"
export default function ProjectDetails({ children }) {
  return (
    <Layout>
      <div className={details}>
        {children}
        <h2>title</h2>
        <h3>stack</h3>
        {/* <div className={featured}>{children}
           image
        </div> */}
        {/* <div dangerouslySetInnerHTML={}/> */}
      </div>
    </Layout>
  )
}
