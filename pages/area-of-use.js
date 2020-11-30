import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Area of use
                </title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Области применения Digital Signage</h1>

                <div className={styles.grid}>
                    <h3>Digital Signage применяется для множества различных задач, наиболее распространены из которых:</h3>

                    <ul>
                        <li><b>Публичная информация</b> — новости, погода, локальная информация, такая как месторасположение пожарного выхода.</li>
                        <br></br>
                        <li><b>Внутренняя информация</b> — внутрикорпоративные новости, специфическая информация в учреждениях здравоохранения и т.д.</li>
                        <br></br>
                        <li><b>Реклама</b> - как специфичная для аудитории по месту расположения дисплея, так и рассчитанная на традиционные СМИ.</li>
                        <br></br>
                        <li><b>Имидж</b> - с целью повышения статуса магазина или предприятия, создания требуемой атмосферы.</li>
                        <br></br>
                        <li><b>Влияние на поведение потребителя</b> — привлечения потребителя к определённым зонам, увеличение времени пребывания в магазине.</li>
                        <br></br>
                        <li><b>Расширение потребительского опыта</b> — приложения, занимающие внимание потребителя во время ожидания в очереди, например, демонстрация рецептов в продуктовом магазине.</li>
                        <br></br>
                        <li><b>Улучшение окружающей обстановки</b> — информационные киоски и динамическая навигация.</li>
                    </ul>
                </div>
            </main>

            <div className={styles.grid}>
                <Link href="/digital-signage"><a>
                    <h3>&larr; Digital Signage &nbsp;</h3>
                </a></Link>
                |
                <Link href="/"><a>
                    <h3>&nbsp; На главную &nbsp;</h3>
                </a></Link>
                |
                <Link href="/problems"><a>
                    <h3>&nbsp; Проблемы Digital Signage &rarr;</h3>
                </a></Link>
            </div>

            <footer className={styles.footer}>
                <p>Свистунова Марина, 4ИВТ. Cанкт-Петербург. 2020</p>
            </footer>
        </div>
    )
}