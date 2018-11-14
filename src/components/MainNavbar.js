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
    NavbarEnd,
    Field,
    Control,
    Button,
    Icon
} from 'bloomer';

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
                        <span style={{fontSize: '1.3rem'}}>Arrrni's home</span>
                    </NavbarItem>
                    <NavbarItem isHidden='desktop'>
                        <Icon className='fa fa-github'/>
                    </NavbarItem>
                    <NavbarItem isHidden='desktop'>
                        <Icon className='fa fa-twitter' style={{color: '#55acee'}}/>
                    </NavbarItem>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav}/>
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                    <NavbarStart>
                        <NavbarItem href='#/'>Home</NavbarItem>
                        <NavbarItem hasDropdown isHoverable>
                            <NavbarLink href='#/documentation'>Documentation</NavbarLink>
                            <NavbarDropdown>
                                <NavbarItem href='#/'>One A</NavbarItem>
                                <NavbarItem href='#/'>Two B</NavbarItem>
                                <NavbarDivider/>
                                <NavbarItem href='#/'>Two A</NavbarItem>
                            </NavbarDropdown>
                        </NavbarItem>
                    </NavbarStart>
                    <NavbarEnd>
                        <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden='touch'>
                            <Icon className='fa fa-github'/>
                        </NavbarItem>
                        <NavbarItem href="https://twitter.com/AlgusDark" isHidden='touch'>
                            <Icon className='fa fa-twitter' style={{color: '#55acee'}}/>
                        </NavbarItem>
                        <NavbarItem>
                            <Field isGrouped>
                                <Control>
                                    <Button id="twitter" data-social-network="Twitter" data-social-action="tweet"
                                            data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer:
                    a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                                        <Icon className="fa fa-twitter"/>
                                        <span>Tweet</span>
                                    </Button>
                                </Control>
                            </Field>
                        </NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        );
    }
}

export default MainNavbar;