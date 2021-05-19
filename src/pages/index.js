import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
	<Layout>
		<Seo title="Home" />
		<div className="container">
			<div className="w-full prose text-lg max-w-none lg:w-7/12 mx-auto lg:px-8">
				<p>
					<span>Hi, I am a front-end developer from Indonesia with about 5 years experience. I can work with a pure basic front-end and even frameworks like</span>
					<span className="text-pink-500 italic font-medium"> bootstrap</span>,
					<span className="text-pink-500 italic font-medium"> tailwindcss</span>,
					<span className="text-pink-500 italic font-medium"> vuejs</span>,
					<span className="text-pink-500 italic font-medium"> reactjs</span>,
					<span className="text-pink-500 italic font-medium"> gatsbyjs</span> and
					<span className="text-pink-500 italic font-medium"> others</span>.
				</p>
				<p>My official site is at <a href="https://fikriwado.com" className="text-pink-500 font-medium">https://fikriwado.com</a>.</p>
				<p>For this website I named portoby, <a href="https://github.com/fikriwado/portoby" className="text-pink-500 font-medium">check the repository</a>. You can use this freely, it uses Tailwindcss and Gatsbyjs technology. You only need to fork then change the profile, then you can deploy on netlify easily.</p>
			</div>
		</div>
	</Layout>
)

export default IndexPage
