import styles from "./home.module.css"
import savings from "../img/savings.svg"

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <a href="/">Criar projeto</a>
      <img src={savings} alt="Costs" />
    </section>
  )
}
