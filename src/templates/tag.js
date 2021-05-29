import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import _ from "lodash"

const TagPage = ({data, pageContext}) => {
    const tag = pageContext.tag
    return (
        <Layout>
            <Seo title={tag.charAt(0).toUpperCase() + tag.slice(1)} />
            <div className="container">
                <div className="w-full text-lg max-w-none lg:w-10/12 xl:w-7/12 mx-auto lg:px-8 dark:text-gray-300 text-cool-gray-600">
                    <div className="text-center font-fira-code mb-10">
                        <h1 className="text-4xl font-bold mb-1.5">My Writing</h1>
                        <p>In Indonesian Language</p>
                    </div>

                    <div className="divide-y divide-gray-200 divide-solid mb-8">
                        <h1 className="inline-block border-b-2 pb-1 border-fixwad-yellow mt-2 text-lg font-bold">
                            Tags: <span className="font-medium italic capitalize">{tag}</span>
                        </h1>
                        {data.allMarkdownRemark.edges.map((blog) => (
                            <div key={blog.node.id}>
                                <div className="py-6">
                                    <Link to={`/post/${blog.node.frontmatter.slug}`}>
                                        <h2 className="text-2xl font-semibold mb-4">{blog.node.frontmatter.title}</h2>
                                    </Link>
                                    <p className="mb-2">{blog.node.frontmatter.description}</p>
                                    <div className="flex flex-wrap justify-between">
                                        <div className="flex items-center text-sm lg:text-base">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="mr-4">{blog.node.frontmatter.date}</span>
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                            </svg>
                                            <Link to={`/categories/${_.kebabCase(blog.node.frontmatter.category)}`} className="capitalize">
                                                {blog.node.frontmatter.category}
                                            </Link>
                                        </div>
                                        <Link to={`/post/${blog.node.frontmatter.slug}`}>
                                            <span className="font-medium text-right text-sm lg:text-base">Go Read</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {pageContext.numberOfPages > 1 ?
                        <div className="flex flex-wrap justify-between">
                            {pageContext.previousPagePath
                            ? <Link to={pageContext.previousPagePath} className="py-1.5 px-5 border border-gray-300 font-medium hover:bg-gray-300 duration-100">Previous</Link>
                            : <span className="py-1.5 px-5 border border-gray-300 font-medium opacity-60 cursor-default">Previous</span>}

                            {pageContext.nextPagePath
                            ? <Link to={pageContext.nextPagePath} className="py-1.5 px-5 border border-gray-300 font-medium hover:bg-gray-300 duration-100">Next</Link>
                            : <span className="py-1.5 px-5 border border-gray-300 font-medium opacity-60 cursor-default">Next</span>}
                        </div>
                    : null}
                </div>
            </div>
        </Layout>
    )
}

export default TagPage


export const pageQuery = graphql`
  query GetTagPosts ($skip: Int!, $limit: Int!, $tag: String!) {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {glob: "**/posts/**"}, frontmatter: { tags: { in: [$tag] } }}
      sort: {fields: frontmatter___date, order: DESC}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
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
  }
`