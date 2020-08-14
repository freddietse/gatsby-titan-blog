import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <section>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id} className="mb-16">
            <header className="mb-4">
              <h3 className="entry-title hover:text-yellow-500 hover:underline">
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h3>
              <time className="text-base text-gray-700">
                {node.frontmatter.date}
              </time>
            </header>
            <div>
              <p className="text-gray-700">{node.excerpt}</p>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          id
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
