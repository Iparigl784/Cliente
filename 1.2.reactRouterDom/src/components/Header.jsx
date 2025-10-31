import styleHeader from "./header.module.css";
import Navigation from "./Navigation/Navigation";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={`${styleHeader.header} ${styleHeader["background-header"]}`}>
            <span>
                <Link to="/">Logo</Link></span>
            <Navigation />
        </header>
    )
}

export default Header;