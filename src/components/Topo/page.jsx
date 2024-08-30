import styles from "./Topo.module.css"
import Image from "next/image";

// import Imagens
import Logo from "../../../public/logo.png";
import LightIcone from "../../../public/sun.png";
import DarkIcone from "../../../public/moon.png";


export default function Topo() {

    return (
        <header className={styles.topo_area}>
            <div className={styles.container_base}>
                <Image src={Logo} alt="Logo Agência" title="Agência" className={styles.logo_img}></Image>

                <button>Clique</button>
            </div>
        </header>
    );
}