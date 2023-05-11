import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
	<Layout>
		<Seo title="Home" />
		<div className="container">
			<div className="w-full prose text-lg max-w-none lg:w-10/12 xl:w-7/12 mx-auto lg:px-8 dark:text-gray-300">
				<p>
					<span>Hi, I have worked with JavaScript and its frameworks, React and Vue are my main tools most of my time. I am passionate about interface, system design and best practice. I can use </span>
					<span className="text-pink-500 italic font-medium"> bootstrap</span>,
					<span className="text-pink-500 italic font-medium"> tailwindcss</span>,
					<span className="text-pink-500 italic font-medium"> vuejs</span>,
					<span className="text-pink-500 italic font-medium"> reactjs</span>,
					<span className="text-pink-500 italic font-medium"> gatsbyjs</span> and
					<span className="text-pink-500 italic font-medium"> others</span>.
				</p>
				<p>My official site is at <a href="https://fikriwado.com" className="text-pink-500 font-medium">https://fikriwado.com</a>.</p>
				<p>For this website I named portoby, <a href="https://github.com/fikriwado/portoby" className="text-pink-500 font-medium">check the repository</a>. You can use it for free, it uses Tailwindcss and Gatsbyjs technology. You only need to fork and change the profile, then you can deploy on netlify easily.</p>
				<Link to="/works" className="block border-2 border-cool-gray-600 text-cool-gray-600 hover:bg-cool-gray-600 hover:text-white duration-300 py-2 px-4 no-underline mt-8 text-center dark:border-cool-gray-400 dark:hover:bg-cool-gray-400 dark:text-cool-gray-400 dark:hover:text-white">Selected Works</Link>
			</div>
		</div>
	</Layout>
)

export default IndexPage
