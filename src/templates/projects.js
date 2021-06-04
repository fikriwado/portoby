import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import _ from "lodash"

const ProjectPage = ({data, pageContext}) => (
    <Layout>
        <Seo title="Project" />
        <div className="container">
            <div className="w-full text-lg max-w-none lg:w-10/12 xl:w-7/12 mx-auto lg:px-8 dark:text-gray-300 text-cool-gray-600">
                {data.allMarkdownRemark.nodes.map((blog) => (
                    <div className="p-6 mb-10 border" key={blog.id}>
                        <Link to={`/blog/${blog.frontmatter.slug}`}>
                            <GatsbyImage image={getImage(blog.frontmatter.featuredImg)} alt={blog.frontmatter.title} className="w-full" />
                            <h3 className="text-xl md:text-2xl font-semibold my-4">{blog.frontmatter.title}</h3>
                        </Link>
                        <p className="mb-2 text-sm md:text-base">{blog.frontmatter.description}</p>
                    </div>
                ))}
                
                {pageContext.numberOfPages > 1 ? 
                    <div className="flex flex-wrap justify-between text-sm lg:text-base">
                        {pageContext.previousPagePath ? <Link to={pageContext.previousPagePath} className="py-1.5 px-5 border border-cool-gray-300 font-medium hover:bg-cool-gray-300 dark:hover:bg-cool-gray-400 dark:hover:text-white duration-100">Previous</Link> : <span className="py-1.5 px-5 border border-cool-gray-300 font-medium opacity-60 cursor-default">Previous</span>}
                        {pageContext.nextPagePath ? <Link to={pageContext.nextPagePath} className="py-1.5 px-5 border border-cool-gray-300 font-medium hover:bg-cool-gray-300 dark:hover:bg-cool-gray-400 dark:hover:text-white duration-100">Next</Link> : <span className="py-1.5 px-5 border border-cool-gray-300 font-medium opacity-60 cursor-default">Next</span>}
                    </div>
                : null}
            </div>
        </div>
    </Layout>
)

export default ProjectPage

export const pageQuery = graphql`
  query GetProjects ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {glob: "**/projects/**"}}
      skip: $skip
      limit: $limit
    ) {
        nodes {
            frontmatter {
                title
                description
                date
                slug
                featuredImg {
                    childImageSharp {
                        gatsbyImageData(
                            width: 700
                            quality: 95
                            placeholder: DOMINANT_COLOR
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