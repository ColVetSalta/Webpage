import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

type Menu = {
    name: string,
    items: Array<string>
}

const NavMenu: React.FC<Menu> = ({name, items})=>{
    return <Menu isLazy>
        <MenuButton>{name}</MenuButton>
        <MenuList>
            {items ? items.map((item)=>{
            return <MenuItem>
            {item}
            </MenuItem>
        }) : null}
        </MenuList>
        

    </Menu>
}
export default NavMenu