import styles from "./Banner.module.css";
import Image from "next/image";

import FotoBanner from "/public/banner.jpg";

export default function Banner() {
    return (
        <section className={styles.banner_area}>
            <Image src={FotoBanner} alt="programadores" title="programadores" className={styles.banner_image}></Image>

            <div className={styles.banner_descricao}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>

                <h2>Agência de Branding</h2>

                <span>e design digital</span>
            </div>
        </section>
    );
}