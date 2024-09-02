import styles from "./Rodape.module.css";
import Image from "next/image";

// import de Imagens
import Logo from "/public/logo.png";
import Face from "/public/facebook.png";
import Google from "/public/google.png";
import Linkedin from "/public/linkedin.png";
import Twitter from "/public/twitter.png";
import Be from "/public/behance.png";
import Dribble from "/public/dribble.png";

export default function Rodape(props) {
    return (
        <footer className={props.darkMode ? styles.rodapeDarkMode : styles.rodapeLightMode}>
            <div className={styles.footer_descricao}>
                <Image src={Logo} alt="logo empresa" title="Logo empresa"/>

                <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas.</p>
            </div>
        </footer>
    );
}