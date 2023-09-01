import React from 'react';
import { type  ODesc } from '../../../types';
import { Heading } from '@chakra-ui/react';
import { RoleData } from '../..';

const OrgDescription: React.FC<ODesc> = ( { organism, staff, roles } ) => {
    return <div>
        <Heading>{organism}</Heading>
                    {
                        roles ? roles.map((r) => {
                            return <RoleData 
                                title = {r}
                                name={ staff[r].nombre}
                                tel= {staff[r].telefono}
                                email= {staff[r].correoElectronico}
                            />
                        }) :
                            null
                    }
        </div>
}

export default OrgDescription;