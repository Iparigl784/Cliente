import clasesFooter from "./footer.module.css";
import SocialLinks from "./SocialLinks/SocialLinks"

function Footer() {
    return (
        <footer className={`${clasesFooter.footer} ${clasesFooter["color-fondo"]}`}>
            <span>Logo</span>
            <span>Cosas</span>
            <span>Redes Sociales</span>
            <SocialLinks/>
        </footer>
    )
}

export default Footer;