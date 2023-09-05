import ColvetLogo from '../../../assets/logo_.png'
import { useNavigate } from "react-router-dom";
import l from "./Landing.module.css";

export default function Landing(): JSX.Element {
    const navigate = useNavigate();
    function handleLogin() {
        navigate("/home");
    }
    return (
        <>
            <div onClick={handleLogin} className={l.land}>
                <img src={ColvetLogo} className={l.logo} alt="ColVet logo" />
            </div>
        </>
    );
}