import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
	const data = useStaticQuery(graphql`
		query SiteHeaderQuery {
			site {
				siteMetadata {
					title
					specialist
				}
			}
		}
	`)

	const { title, specialist } = data.site.siteMetadata

	return (
		<header className="py-5">
			<div className="container">
				<div className="w-full lg:w-7/12 mx-auto lg:px-8">
					<div className="flex flex-wrap items-center border-b-2 border-gray-300 py-7">
						<StaticImage
							src="../images/profile.png"
							width={95}
							quality={95}
							formats={["AUTO", "WEBP", "AVIF"]}
							className="rounded-full mr-6"
							alt="profile"
						/>
						<div className="font-fira-code">
							<h1 className="text-4xl font-bold mb-1"><Link to="/">{title}</Link></h1>
							<p className="ml-0.5 text-gray-500">{specialist}</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
