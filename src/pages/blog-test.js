import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogTestPage = () => (
	<Layout>
		<Seo title="About" />
		<div className="container">
			<div className="w-full text-lg max-w-none lg:w-10/12 xl:w-7/12 mx-auto lg:px-8 dark:text-gray-300 text-cool-gray-600">
                <div className="text-center mb-4">
                    <h1 className="text-3xl font-fira-code font-bold mb-0.5">My Writing</h1>
                    <p>In Indonesian Language</p>
                </div>

				<div className="py-6">
                    <h3 className="text-2xl font-semibold mb-4">Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sint enim earum dolorem optio eligendi nobis, ab inventore quae placeat asperiores amet quaerat, laboriosam fugit quisquam facere. Facilis, quae ipsum!</p>
                </div>
				<div className="py-6">
                    <h3 className="text-2xl font-semibold mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sint enim earum dolorem optio eligendi nobis, ab inventore quae placeat asperiores amet quaerat, laboriosam fugit quisquam facere. Facilis, quae ipsum!</p>
                </div>
				<div className="py-6">
                    <h3 className="text-2xl font-semibold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, obcaecati?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sint enim earum dolorem optio eligendi nobis, ab inventore quae placeat asperiores amet quaerat, laboriosam fugit quisquam facere. Facilis, quae ipsum!</p>
                </div>
			</div>
		</div>
	</Layout>
)

export default BlogTestPage
