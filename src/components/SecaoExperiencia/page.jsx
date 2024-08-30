import styles from "./SecaoExperiencia.module.css";
import Cards from "../Cards/page";

export default function SecaoExperiencia(props) {
    return (
        <section className={props.darkMode ? styles.exp_darkMode : styles.exp_lightMode}>
            <div className={styles.exp_descricao}>
                <h3>Experiências De Trabalho</h3>

                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.</p>
            </div>

            <div className={styles.container_cards}>
                <Cards
                    data={"JUNHO 2012 - 2016"}
                    titulo={"Web Designer"}
                    empresa={"Pied Piper StartUp."}
                    texto={"Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"} />
                <Cards
                    data={"JUNHO 2012 - 2016"}
                    titulo={"Web Designer"}
                    empresa={"Pied Piper StartUp."}
                    texto={"Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"} />

                <Cards
                    data={"JUNHO 2012 - 2016"}
                    titulo={"Web Designer"}
                    empresa={"Pied Piper StartUp."}
                    texto={"Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"} />

            </div>
        </section>
    );
}