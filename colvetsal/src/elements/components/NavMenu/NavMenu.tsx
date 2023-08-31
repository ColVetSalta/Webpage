import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

type Menu = {
    name: string,
    items: Array<string>
}

const NavMenu: React.FC<Menu> = ({name, items})=>{
    return <Menu 
    isLazy>
        <MenuButton
        bgColor={'inherit'}
        color={'inherit'}

        >{name}</MenuButton>
        <MenuList
        bgColor={'gainsboro'}>
            {items ? items.map((item)=>{
            return <MenuItem
            bgColor={'inherit'}>
            {item}
            </MenuItem>
        }) : null}
        </MenuList>
        

    </Menu>
}
export default NavMenu