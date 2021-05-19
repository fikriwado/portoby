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
		<header className="py-6 lg:py-10">
			<div className="container">
				<div className="w-full lg:w-7/12 mx-auto lg:px-7">
					<div className="flex flex-wrap items-center border-b pb-7">
						<StaticImage
							src="../images/profile.png"
							width={100}
							quality={95}
							formats={["AUTO", "WEBP", "AVIF"]}
							className="rounded-full mr-6"
							alt="profile"
						/>
						<div>
							<h1 className="text-xl font-medium"><Link to="/">{title}</Link></h1>
							<p>{specialist}</p>
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
