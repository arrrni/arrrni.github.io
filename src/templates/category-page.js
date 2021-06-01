import React from "react"
import { Link, graphql } from "gatsby"
import get from 'lodash/get'
import Helmet from 'react-helmet'
import SideMenu from '../components/SideMenu';
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { Columns, Column } from 'bloomer';

class CategoryPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (<Layout location={this.props.location} title={get(this, 'props.data.site.siteMetadata.title')}>
    <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${get(this, 'props.pageContext.category')} articles | ${siteTitle}`}
        />
    <Columns>
      <Column isSize={2}>
        <SideMenu />
      </Column>
      <Column isSize={10}>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug} className="content">
              <h1 className="title">
                <Link to={node.fields.slug} style={{textDecoration: 'none'}}>
                  {title}
                </Link>
              </h1>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Column>
    </Columns>
    <Bio />
  </Layout>)
  }
}

export const pageQuery = graphql`
  query CategoryPageQuery($ids: [String]!) {
    allMarkdownRemark(filter: { id: { in: $ids } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            slug
            title
            date(formatString: "MMM D, YYYY")
          }
        }
      }
    }
  }
`

export default CategoryPage