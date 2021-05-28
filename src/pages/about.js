import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
	<Layout>
		<Seo title="About" />
		<div className="container">
			<div className="w-full prose text-lg max-w-none lg:w-10/12 xl:w-7/12 mx-auto lg:px-8 dark:text-gray-300">
				<p>
					<span>Hi, I am a front-end developer from Indonesia for about 5 years experience. I can work with a pure basic front-end and even frameworks like</span>
					<span className="text-pink-500 italic font-medium"> bootstrap</span>,
					<span className="text-pink-500 italic font-medium"> tailwindcss</span>,
					<span className="text-pink-500 italic font-medium"> vuejs</span>,
					<span className="text-pink-500 italic font-medium"> reactjs</span>,
					<span className="text-pink-500 italic font-medium"> gatsbyjs</span> and
					<span className="text-pink-500 italic font-medium"> others</span>.
				</p>

                <p>My official site is at <a href="https://fikriwado.com" className="text-pink-500 font-medium">https://fikriwado.com</a>.</p>
			</div>
		</div>
	</Layout>
)

export default AboutPage
