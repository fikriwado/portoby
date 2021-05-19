import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
	const data = useStaticQuery(graphql`
		query SeoQuery {
			dataSite: site {
				siteMetadata {
					title
					description
					author
					keywords
					siteURL
				}
			}
			dataImage: file(relativePath: {eq: "profile.png"}) {
				childImageSharp {
					fluid(maxWidth: 300) {
						src
					}
				}
			}
		}
	`)

	const metaDescription = description || data.dataSite.siteMetadata.description
	const metaKeywords = data.dataSite.siteMetadata.keywords
	const metaURL = data.dataSite.siteMetadata.siteURL
	const defaultTitle = data.dataSite.siteMetadata?.title

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					name: `keywords`,
					content: metaKeywords,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:image`,
					content: metaURL + data.dataImage.childImageSharp.fluid.src,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:url`,
					content: metaURL,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: data.dataSite.siteMetadata?.author || ``,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				{
					name: `twitter:image`,
					content: metaURL + data.dataImage.childImageSharp.fluid.src,
				},
			].concat(meta)}
		/>
	)
}

Seo.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default Seo
