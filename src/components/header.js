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
				<div className="flex flex-wrap items-center justify-between border-b-2 border-gray-300 py-7">
					<div className="flex flex-wrap items-center">
						<StaticImage
							src="../images/profile.png"
							width={95}
							quality={95}
							formats={["AUTO", "WEBP", "AVIF"]}
							className="rounded-full mr-4 lg:mr-6 w-14 h-14 lg:w-auto lg:h-auto"
							alt="profile"
						/>
						<div className="font-fira-code">
							<h1 className="text-2xl lg:text-4xl font-bold mb-1"><Link to="/">{title}</Link></h1>
							<p className="text-sm lg:text-base ml-0.5 text-gray-500">{specialist}</p>
						</div>
					</div>
					<div className="flex flex-col md:flex-row items-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 mb-1 md:mb-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
						</svg>
						
						<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
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
