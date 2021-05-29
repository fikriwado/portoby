import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import _ from "lodash"

const BlogPage = ({data, pageContext}) => { 
    console.log(data)
    return (
        <Layout>
            <Seo title="Blog" />
            <div className="container">
                <div className="w-full text-lg max-w-none lg:w-10/12 xl:w-7/12 mx-auto lg:px-8 dark:text-gray-300 text-cool-gray-600">
                    <div className="text-center mb-4">
                        <h1 className="text-3xl font-fira-code font-bold mb-0.5">My Writing</h1>
                        <p>In Indonesian Language</p>
                    </div>

                    {data.allMarkdownRemark.nodes.map((blog) => (
                        <div className="py-6" key={blog.id}>
                            <h3 className="text-2xl font-semibold mb-4">{blog.frontmatter.title}</h3>
                            <p>{blog.frontmatter.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
export default BlogPage

export const pageQuery = graphql`
  query GetPosts ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
        nodes {
            frontmatter {
                title
                description
                date
                category
                slug
            }
            id
        }
    }
  }
`