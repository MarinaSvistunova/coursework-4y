import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Correct answer
                </title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Результат</h1>

                <h2>Верно!</h2> 
                <h3>Хорошая работа!</h3>
                <Image
                    src="/mailservice2.gif"
                    alt="true"
                    width={504}
                    height={370}
                />
            </main>

            <div className={styles.grid}>
            <Link href="/"><a>
                    <h3>На главную</h3>
                </a></Link>
            </div>

            <footer className={styles.footer}>
                <p>Свистунова Марина, 4ИВТ. Cанкт-Петербург. 2020</p>
            </footer>
        </div>
    )
}