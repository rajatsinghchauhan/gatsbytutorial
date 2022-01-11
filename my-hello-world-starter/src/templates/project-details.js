import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { details, featured } from "../styles/project-details.module.css"
export default function ProjectDetails({ data, children }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={details}>
        {children}
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          {children}
          <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} />
        </div>
        <div className={html} dangerouslySetInnerHTML={{ __html: html }} />
        {children}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ProjectPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
