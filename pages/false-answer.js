import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

import Image from 'next/image'
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    False answer
                </title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Результат</h1>

                <h2>Неверно!</h2> 
                <h3>Попробуйте пройти тест снова!</h3>
                <Image
                    src="/mailservice.gif"
                    alt="false"
                    width={504}
                    height={370}
                />
            </main>

            <div className={styles.grid}>
                <Link href="/test"><a>
                    <h3>&larr; Тест &nbsp;</h3>
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