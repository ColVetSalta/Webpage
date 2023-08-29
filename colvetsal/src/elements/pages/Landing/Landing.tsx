import React from "react";
import ColvetLogo from '../../../assets/logo_.png'
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
    const navigate = useNavigate();

    function handleLogin() {
        navigate("/home")
    }

    return (
        <>
            <div onClick={handleLogin}>
                <img src={ColvetLogo} className="logo colvet" alt="ColVet logo" />
            </div>
        </>
    )
};

export default Landing;