import { type  ODesc } from '../../../types';
import { Heading } from '@chakra-ui/react';
import { RoleData } from '../..';

export default function OrgDescription({ organism, staff, roles }: ODesc): JSX.Element {
    return <div>
        <Heading>{organism}</Heading>
        {roles ? roles.map((r) => {
            return <RoleData
                title={isNaN(Number(r)) ? r : null}
                name={staff[r].nombre}
                tel={staff[r].telefono}
                email={staff[r].correoElectronico} />;
        }) :
            null}
    </div>;
}