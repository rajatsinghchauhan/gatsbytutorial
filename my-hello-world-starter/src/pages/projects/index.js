import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import { portfolio, projectt } from "../../styles/project.module.css"

export default function projectpage({ children, data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={portfolio}>
        {children}
        <h2>Another page inside project</h2>
      </div>

      <div className={(portfolio, projectt)}>
        {children}
        {projects.map(project => (
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <div>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Projectpage {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___title }) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`
