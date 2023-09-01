import React from 'react'

type RData = {
    title: string;
    name: string;
    tel: string;
    email: string;
}

const RoleData: React.FC<RData> = ({ title, name, tel, email }) => {
    return <>
        <div>
            <h4>{title}</h4>
            <h5>{name}</h5>
            <h6>Telefono: {tel}</h6>
            <h6>e-mail: {email}</h6>
        </div>
    </>
}

export default RoleData;