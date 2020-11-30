import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Lil test
                </title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Тест</h1>
                <br></br>
                <h2>Продукты Digital Signage в большинстве своем - это ...</h2>
                <div className={styles.card}>
                    <Link href="/correct-answer"><a><b>закрытые системы.</b></a></Link>
                </div>
                <div className={styles.card}>
                    <Link href="/false-answer"><a><b>открытые системы.</b></a></Link>
                </div>
            </main>

            <div className={styles.grid}>
                <Link href="/new-digital-signage"><a>
                    <h3>&larr; Интересные разработки &nbsp;</h3>
                </a></Link>
                |
                <Link href="/"><a>
                    <h3>&nbsp; На главную &rarr;</h3>
                </a></Link>
            </div>

            <footer className={styles.footer}>
                <p>Свистунова Марина, 4ИВТ. Cанкт-Петербург. 2020</p>
            </footer>
        </div>
    )
}