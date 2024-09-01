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
                    darkMode={props.darkMode}
                    data={"JUNHO 2012 - 2016"}
                    titulo={"Web Designer"}
                    empresa={"Pied Piper StartUp."}
                    texto={"Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"} />
                <Cards
                    darkMode={props.darkMode}
                    data={"AGOSTO 2016 - 2019"}
                    titulo={"Product Designer"}
                    empresa={"E Corp."}
                    texto={"Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"} />

                <Cards
                    darkMode={props.darkMode}
                    data={"FEVEREIRO 2019 - 2021"}
                    titulo={"Digital Consulting"}
                    empresa={"Arasaka Inc."}
                    texto={"Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"} />

            </div>
        </section>
    );
}