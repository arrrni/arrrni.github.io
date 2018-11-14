import React from 'react';
import {Menu, MenuLabel, MenuList, MenuLink} from 'bloomer';

const SideMenu = () => (
    <Menu>
        <MenuLabel>Main</MenuLabel>
        <MenuList>
            <li><MenuLink>What is this?</MenuLink></li>
            <li><MenuLink>There will be something soon</MenuLink></li>
        </MenuList>
        <MenuLabel>FAQ</MenuLabel>
        <MenuList>
            <li><MenuLink>What is this?</MenuLink></li>
            <li><MenuLink>There will be something soon</MenuLink></li>
        </MenuList>
    </Menu>
);

export default SideMenu;