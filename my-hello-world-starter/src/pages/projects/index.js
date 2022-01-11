import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import { portfolio, projectt } from "../../styles/project.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export default function projectpage({ data, children }) {
  console.log(data)
  const projects = data.projects.nodes

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
              <GatsbyImage
                image={
                  project.frontmatter.thumb.childImageSharp.gatsbyImageData
                }
                alt="project thumbnail"
              />
              {/* <GatsbyImage
                image={getImage(
                  project.frontmatter.thumb.childImageSharp.gatsbyImageData
                )}
                alt="Banner"
              /> */}
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
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___title }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        id
      }
    }
  }
`
