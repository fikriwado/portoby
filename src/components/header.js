import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
    const [isDark, setIsDark] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

	const data = useStaticQuery(graphql`
		query SiteHeaderQuery {
			site {
				siteMetadata {
					title
					specialist
					email
					youtube
				}
			}
		}
	`)

	const { title, specialist, email, youtube } = data.site.siteMetadata

	const toggleTheme = (value) => {
		setIsDark(value)
		const html = document.querySelector('html')

		let mode = ''
		if (value === true) {
			if (html.getAttribute('class') !== 'dark') {
				mode = 'dark'
			}else{
				mode = 'light'
				setIsDark(!value)
			}
		}else {
			mode = 'light'
		}
		
		var exDate = new Date();
		// exDate.setDate(exDate.getDate() + 1);
		localStorage.setItem('fixwadExDate', exDate.getTime() + 10000)
		localStorage.setItem('fixwadTheme', mode)
		html.classList.add(localStorage.getItem('fixwadTheme'))
		if(mode === 'dark') {
			html.classList.remove('light')
		}else {
			html.classList.remove('dark')
		}
	}


	useEffect(() => {
		var dateNow = new Date();
		if(localStorage.fixwadExDate <= dateNow.getTime()) {
			localStorage.removeItem('fixwadExDate')
			localStorage.removeItem('fixwadTheme')
		}

		if (localStorage.fixwadTheme === 'dark' || (!('fixwadTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.querySelector('html').classList.add('dark')
		} else {
			document.querySelector('html').classList.remove('dark')
		}
	}, [])

	return (
		<header className="sm:py-5">
			<div className="container">
				<div className="w-full lg:w-10/12 xl:w-7/12 mx-auto lg:px-8">
					<div className="flex flex-wrap items-center justify-between border-b-2 border-gray-300 pt-7 pb-6">
						<div className="w-full sm:w-auto flex flex-wrap items-center order-2 sm:order-1">
							<Link to="/" className="mt-2">
								<StaticImage
									src="../images/profile.png"
									width={95}
									quality={95}
									formats={["AUTO", "WEBP", "AVIF"]}
									className="rounded-full mr-4 sm:mr-6 w-16 h-16 sm:w-auto sm:h-auto"
									alt="profile"
								/>
							</Link>
							<div className="felx font-fira-code">
								<h1 className="text-2xl font-bold mb-1"><Link to="/">{title}</Link></h1>
								<p className="ml-0.5 text-gray-500 dark:text-gray-400">{specialist}</p>
							</div>
						</div>
						<div className="w-full sm:w-auto flex sm:flex-col lg:flex-row items-center justify-end order-1 sm:order-2 bg-gray-200 dark:bg-gray-800 py-1 px-4 mb-4 rounded-full sm:bg-transparent sm:dark:bg-transparent sm:p-0 sm:mb-0 sm:rounded-none">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => toggleTheme(!isDark)}>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
							</svg>
							
							<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setIsOpen(!isOpen)}>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</div>
					</div>

					{isOpen ? <Menu isOpen={isOpen} setIsOpen={setIsOpen} email={email} youtube={youtube}/> : null}

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

const Menu = ({isOpen, setIsOpen, email, youtube}) => {
	const classMenus = 'block mx-3.5 my-3 duration-100 text-white text-lg lg:text-xl hover:text-gray-400'
	
	return (
		<div className="flex flex-col justify-center fixed inset-0 bg-gray-800 text-center z-50">
			<div className="w-6 h-6 absolute top-5 right-4">
				<button className="focus:outline-none text-white" onClick={() => setIsOpen(!isOpen)}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			
			<nav className="flex flex-col">
				<Link to="/about" className={classMenus}>About</Link>
				<Link to="/works" className={classMenus}>Works</Link>
				<Link to="/blogs" className={classMenus}>Blog</Link>
				<a href={youtube} className={classMenus} target="_blank" rel="noreferrer">Youtube</a>
				<a href={`mailto:${email}`} className={classMenus}>Contact</a>
			</nav>
		</div>
	)
}