import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarItem,
    NavbarBurger,
    NavbarMenu,
    NavbarStart,
    NavbarLink,
    NavbarDropdown,
    NavbarDivider,
    NavbarEnd
} from 'bloomer';
import { Link, StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class MainNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
        this.onClickNav = this.onClickNav.bind(this);
    }

    onClickNav() {
        this.setState({ isActive: !this.state.isActive});
    }

    dedupeCategories(allMarkdownRemark) {
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

    render() {
        return (
                <Navbar className="is-black">
                    <NavbarBrand>
                        <NavbarItem>
                            <Link to="/" style={{fontSize: '1.3rem', color: 'white'}}>Arrrni's Blog</Link>
                        </NavbarItem>
                        <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav}/>
                    </NavbarBrand>
                    <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                        <NavbarStart>
                            <NavbarItem><Link to="/" style={{color: 'white'}}>Home</Link></NavbarItem>
                            <NavbarItem hasDropdown isHoverable>
                                <NavbarLink href='#/documentation'>Categories</NavbarLink>
                                <NavbarDropdown>
                                <StaticQuery
                                    query={graphql`
                                        query CategoryListQuery {
                                            allMarkdownRemark {
                                                edges {
                                                    node {
                                                        frontmatter {
                                                            categories
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    `}
                                    render={data => (
                                        <>
                                        {this.dedupeCategories(data.allMarkdownRemark).map(
                                            (category) => <NavbarItem href={`/category/${category}`}>{category}</NavbarItem>
                                        )}
                                        </>
                                    )}
                                />
                                    <NavbarDivider/>
                                </NavbarDropdown>
                            </NavbarItem>
                        </NavbarStart>
                        <NavbarEnd>
                            <NavbarItem href="https://github.com/arrrni" isHidden='touch'>
                                <FontAwesomeIcon icon={faGithub}/>
                            </NavbarItem>
                            <NavbarItem href="https://www.linkedin.com/in/artur-szymczyk/" isHidden='touch'>
                                <FontAwesomeIcon icon={faLinkedinIn} style={{color: '#FFFFFF'}}/>
                            </NavbarItem>
                            <NavbarItem href="https://twitter.com/arnoldziq" isHidden='touch'>
                                <FontAwesomeIcon icon={faTwitter} style={{color: '#FFFFFF'}}/>
                            </NavbarItem>
                        </NavbarEnd>
                    </NavbarMenu>
                </Navbar>
        );
    }
}

export default MainNavbar;