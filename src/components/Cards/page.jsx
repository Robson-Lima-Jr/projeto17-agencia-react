import styles from "./Cards.module.css";

export default function Cards({data, titulo, empresa, texto}) {
    return(
        <div className={styles.cards_area}>
            <span>{data}</span>

            <h4>{titulo}</h4>

            <small>{empresa}</small>

            <p>{texto}</p>
        </div>
    );
}