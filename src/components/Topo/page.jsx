"use client";
import styles from "./Topo.module.css"
import Image from "next/image";

// import Imagens
import Logo from "../../../public/logo.png";
import LightIcone from "../../../public/sun.png";
import DarkIcone from "../../../public/moon.png";


export default function Topo(props) {

    return (
        <header className={props.darkMode ? styles.topo_darkMode : styles.topo_lightMode}>
            <div className={styles.container_base}>
                <Image src={Logo} alt="Logo Agência" title="Agência" className={styles.logo_img}></Image>

                <button onClick={props.mudarTema} className={styles.btn_config}>
                    <Image className={styles.icone} src={props.darkMode ? LightIcone : DarkIcone}></Image>
                </button>
            </div>
        </header>
    );
}