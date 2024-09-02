import styles from "./Rodape.module.css";
import Image from "next/image";
import Link from "next/link";

// import de Imagens
import Logo from "/public/logo.png";
import Face from "/public/facebook.png";
import Google from "/public/google.png";
import Linkedin from "/public/linkedin.png";
import X from "/public/twitter.png";
import Be from "/public/behance.png";
import Dribble from "/public/dribble.png";

export default function Rodape(props) {
    return (
        <footer className={props.darkMode ? styles.rodapeDarkMode : styles.rodapeLightMode}>
            <div className={styles.rodape_descricao}>
                <Image src={Logo} alt="logo empresa" title="Logo empresa" className={styles.img_logo}/>

                <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas.</p>
            </div>

            <div className={styles.redes_sociais}>
                <Image src={Face} alt="facebook" title="facebook" className={styles.img_icones}/>

                <Image src={Google} alt="google" title="google" className={styles.img_icones}/>

                <Image src={X} alt="X" title="X" className={styles.img_icones}/>

                <Image src={Linkedin} alt="linkedin" title="linkedin" className={styles.img_icones}/>

                <Image src={Be} alt="behance" title="behance" className={styles.img_icones}/>

                <Image src={Dribble} alt="dribble" title="dribble" className={styles.img_icones}/>
            </div>

            <div className={styles.creditos}>
                <p>Copyright 2024 &copy; <Link href={"https://github.com/Robson-Lima-Jr"} className={styles.link_nome}>Robson Jr</Link></p>
            </div>
        </footer>
    );
}