import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
// import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data, children }) {
  console.log(data)

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
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </section>
    </Layout>
  )
}
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
