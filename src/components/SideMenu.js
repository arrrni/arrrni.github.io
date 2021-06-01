import React from 'react';
import {Menu, MenuLabel, MenuList, MenuLink} from 'bloomer';

const SideMenu = () => (
    <Menu>
        <MenuLabel>FAQ</MenuLabel>
        <MenuList>
            <li><MenuLink>Who am I?</MenuLink></li>
            <li><MenuLink>What is this site for?</MenuLink></li>
        </MenuList>
    </Menu>
);

export default SideMenu;