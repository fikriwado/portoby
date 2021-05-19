import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ children }) => {
	return (
		<div className="font-saira min-h-screen bg-gray-100 text-cool-gray-700 font-saira leading-relaxed antialiased">
			<Header />
			<main className="py-6">{children}</main>
			<footer className="py-10">
				<div className="container text-center">
					<div className="w-full lg:w-7/12 mx-auto lg:px-8">
						<p className="mb-0.5">© 2021 Fikri Wado</p>
						<p className="mb-1.5">Made with Love in Tasikmalaya, Indonesia</p>
						<div className="flex items-center justify-center">
							<a href="https://www.linkedin.com/in/fikriwado" className="mx-2.5" aria-label="linkedin" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLinkedin} className="align-middle text-3xl lg:text-2xl"/>
							</a>
							<a href="https://www.instagram.com/fikriwado_" className="mx-2.5" aria-label="instagram" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faInstagram} className="align-middle text-3xl lg:text-2xl"/>
							</a>
							<a href="https://github.com/fikriwado" className="mx-2.5" aria-label="github" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faGithub} className="align-middle text-3xl lg:text-2xl"/>
							</a>
						</div>
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
