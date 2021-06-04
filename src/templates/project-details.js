import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectDetails = ({data}) => {
	const { html } = data.markdownRemark
	const { title, liveUrl, date, description, featuredImg } = data.markdownRemark.frontmatter
	const imageSeo = data.markdownRemark.frontmatter.featuredImg.childImageSharp.fluid.src

	return (
		<Layout>
			<Seo title={title} image={imageSeo} description={description} />
			<div className="container">
				<div className="prose w-full text-lg max-w-none lg:w-10/12 xl:w-7/12 mx-auto lg:px-8 text-cool-gray-600 dark:text-gray-300">
					<Link to="/works" className="flex flex-wrap items-center block lg:px-4 mb-10 no-underline text-cool-gray-600 dark:text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
						</svg>
						<span>Works</span>
					</Link>
					<div className="text-center font-fira-code mb-10">
						<h1 className="text-2xl lg:text-4xl leading-snug font-bold mb-3 text-cool-gray-700 dark:text-gray-300">{title}</h1>
						<div className="flex items-center justify-center text-sm lg:text-base mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
							<span className="mr-4">{date}</span>
							
							<a href={liveUrl} className="flex items-center no-underline text-cool-gray-600 dark:text-gray-300 capitalize">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
								</svg>
								<span>Visit Website</span>
							</a>
						</div>

						<GatsbyImage image={getImage(featuredImg)} className="w-full mb-4" alt={title} />
					</div>

					<div dangerouslySetInnerHTML={{ __html: html }}></div>
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
				liveUrl
				featuredImg {
                    childImageSharp {
                        gatsbyImageData(
                            width: 700
                            quality: 95
                            placeholder: DOMINANT_COLOR
                            formats: [AUTO, WEBP, AVIF]
                        )
						fluid(maxWidth: 300) {
							src
						}
                    }
                }
			}
		}
	}
`