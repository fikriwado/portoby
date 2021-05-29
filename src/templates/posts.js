import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import _ from "lodash"

const BlogPage = ({data, pageContext}) => { 
    console.log(pageContext)
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
                            <div className="flex flex-wrap justify-between">
                                <div className="flex items-center text-sm lg:text-base">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="mr-4">{blog.frontmatter.date}</span>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                    </svg>
                                    <Link to={`/categories/${_.kebabCase(blog.frontmatter.category)}`} className="capitalize">
                                        {blog.frontmatter.category}
                                    </Link>
                                </div>
                                <Link to={`/post/${blog.frontmatter.slug}`}>
                                    <span className="font-medium text-right text-sm lg:text-base">Go Read</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                    
                    {pageContext.numberOfPages > 1 ? 
                        <div className="flex flex-wrap justify-between">
                            {pageContext.previousPagePath ? <Link to={pageContext.previousPagePath} className="py-1.5 px-5 border border-cool-gray-300 font-medium hover:bg-cool-gray-300 dark:hover:bg-cool-gray-400 dark:hover:text-white duration-100">Previous</Link> : <span className="py-1.5 px-5 border border-cool-gray-300 font-medium opacity-60 cursor-default">Previous</span>}
                            {pageContext.nextPagePath ? <Link to={pageContext.nextPagePath} className="py-1.5 px-5 border border-cool-gray-300 font-medium hover:bg-cool-gray-300 dark:hover:bg-cool-gray-400 dark:hover:text-white duration-100">Next</Link> : <span className="py-1.5 px-5 border border-cool-gray-300 font-medium opacity-60 cursor-default">Next</span>}
                        </div>
                    : null}
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