const _ = require(`lodash`)
const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { data } = await graphql(`
        query CreatePageQuery {
            allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/posts/**"}}) {
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
        items: data.allMarkdownRemark.nodes,
        itemsPerPage: 3,
        pathPrefix: '/blog',
        component: path.resolve('./src/templates/posts.js')
    })
}