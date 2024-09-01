import styles from "./Cards.module.css";

export default function Cards({darkMode,data, titulo, empresa, texto}) {
    return(
        <div className={darkMode ? styles.cards_darkMode : styles.cards_lightMode}>
            <div className={styles.cards_titulos}>
                <span>{data}</span>
                <h4>{titulo}</h4>
                <small>{empresa}</small>
            </div>

            <p>{texto}</p>
        </div>
    );
}