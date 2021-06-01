const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { NavItem } = require('bloomer/lib/components/Nav/NavItem')

function dedupeCategories(allMarkdownRemark) {
  const uniqueCategories = new Set()
  // Iterate over all articles
  allMarkdownRemark.edges.forEach(({ node }) => {
    // Iterate over each category in an article
    node.frontmatter.categories.forEach(category => {
      uniqueCategories.add(category)
    })
  })
  // Create new array with duplicates removed
  return Array.from(uniqueCategories)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    categories
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        // Create array of every category without duplicates
        const dedupedCategories = dedupeCategories(result.data.allMarkdownRemark)
        // Iterate over categories and create page for each
        dedupedCategories.forEach(category => {
          createPage({
            path: `category/${category}`,
            component: path.resolve("./src/templates/category-page.js"),
            // Create props for our category-page.js component
            context: {
              category,
              // Create an array of ids of articles in this category
              ids: result.data.allMarkdownRemark.edges
                .filter(({ node }) => {
                  return node.frontmatter.categories.includes(category)
                })
                .map(({node}) => node.id),
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
