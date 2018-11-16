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
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
                                <NavbarItem href='#/'>There will be some</NavbarItem>
                                <NavbarItem href='#/'>Categories</NavbarItem>
                                <NavbarDivider/>
                                <NavbarItem href='#/'>In near future</NavbarItem>
                            </NavbarDropdown>
                        </NavbarItem>
                    </NavbarStart>
                    <NavbarEnd>
                        <NavbarItem href="https://github.com/arrrni" isHidden='touch'>
                            <FontAwesomeIcon icon={faGithub}/>
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