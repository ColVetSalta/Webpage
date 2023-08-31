import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

type Menu = {
    name: string,
    items:  {
        subindexTitle: string;
        url: string;
    }[]
}

const NavMenu: React.FC<Menu> = ({name, items})=>{
    return <Menu 
    isLazy>
        <MenuButton>{name}</MenuButton>
        <MenuList
        bgColor={'rgb(0, 0, 0, 0.68)'}
        marginBlockStart={'1em'}
        >
            {items ? items.map((item)=>{
            return <MenuItem>
            {item.subindexTitle}
            </MenuItem>
        }) : null}
        </MenuList>
        

    </Menu>
}
export default NavMenu