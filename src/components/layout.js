import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen bg-gray-100 text-gray-700 font-saira leading-relaxed antialiased">
			<Header />
			<main className="py-8">{children}</main>
			<footer>
				<div className="container">
					<div className="w-full lg:w-7/12 mx-auto lg:px-7">
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.com">Gatsby</a>
					</div>
				</div>
			</footer>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
