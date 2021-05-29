import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import _ from "lodash"

const ProjectDetails = ({data}) => {
	const { html } = data.markdownRemark
	const { title, category, date, tags, description } = data.markdownRemark.frontmatter

	return (
		<Layout>
			<Seo title={title} description={description} />
			<div className="fixwad-blog prose max-w-none text-gray-600">
				<div className="container">
					<div className="w-full lg:w-7/12 mx-auto lg:px-7">
						<Link to="/blog" className="block px-10 mb-10">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
							</svg>
						</Link>
						<div className="text-center font-fira-code mb-10">
							<h1 className="text-2xl lg:text-4xl leading-snug font-bold mb-3 text-gray-700">{title}</h1>
							<div className="flex items-center justify-center text-sm lg:text-base">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
								<span className="mr-4">{date}</span>
								
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
								</svg>
								<Link to={`/categories/${_.kebabCase(category)}`} className="no-underline text-gray-600 capitalize">
									{category}
								</Link>
							</div>
						</div>

            			<div dangerouslySetInnerHTML={{ __html: html }}></div>

						<div>
							{tags.map((tag, index) => (
								<Link to={`/tags/${tag}`} className="mr-2" key={index}>{`#${tag}`}</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default ProjectDetails


export const query = graphql`
	query getProjectDetail($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				description
				date
				category
				tags
			}
		}
	}
`