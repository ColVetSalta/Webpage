import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { type Menutype } from '../../../types'

export default function NavMenu({ name, items }: Menutype): JSX.Element {
    return <Menu
        isLazy>
        <MenuButton>{name}</MenuButton>
        <MenuList
            bgColor={'rgb(0, 0, 0, 0.68)'}
            marginBlockStart={'1em'}
        >
            {items ? items.map((item) => {
                return <MenuItem
                    key={item.subindexTitle}
                    as={Link}
                    to={'sc/' + name.toLowerCase() + '_' + item.url}
                    >
                    {item.subindexTitle}
                </MenuItem>;
            }) : null}
        </MenuList>


    </Menu>;
}