const _ = require(`lodash`)
const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { data } = await graphql(`
        query CreatePageQuery {
            posts: allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/posts/**"}}) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)

    paginate({
        createPage,
        items: data.posts.nodes,
        itemsPerPage: 3,
        pathPrefix: '/blog',
        component: path.resolve('./src/templates/posts.js')
    })

    data.posts.nodes.forEach(post => {
        createPage({
            path: '/blog/' + post.frontmatter.slug,
            component: path.resolve('./src/templates/post-details.js'),
            context: {slug: post.frontmatter.slug}
        })
    })
}