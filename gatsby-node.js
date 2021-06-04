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
            categories: allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/posts/**"}}) {
                group(field: frontmatter___category) {
                    fieldValue
                    nodes {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
            tags: allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/posts/**"}}) {
                group(field: frontmatter___tags) {
                    fieldValue
                    nodes {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
            projects: allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/projects/**"}}) {
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

    data.categories.group.forEach(category => {
        paginate({
            createPage,
            items: category.nodes,
            itemsPerPage: 3,
            pathPrefix: `/category/${_.kebabCase(category.fieldValue)}`,
            component: path.resolve('./src/templates/category.js'),
            context: {category: category.fieldValue}
        })
    })
    
    data.tags.group.forEach(tag => {
        paginate({
            createPage,
            items: tag.nodes,
            itemsPerPage: 3,
            pathPrefix: `/tag/${_.kebabCase(tag.fieldValue)}`,
            component: path.resolve('./src/templates/tag.js'),
            context: {tag: tag.fieldValue}
        })
    })

    paginate({
        createPage,
        items: data.projects.nodes,
        itemsPerPage: 3,
        pathPrefix: '/works',
        component: path.resolve('./src/templates/projects.js')
    })
}