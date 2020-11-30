import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Main page
                </title>
            </Head>
            
            <main className={styles.main}>
                <h1 className={styles.title}>Digital Signage</h1>
                {/* <p className={styles.description}>Курсовая работа</p> */}
                {/* <h2><Link href="/"><a>Обратно</a></Link></h2> */}
                
                <div className={styles.grid}>
                    <Link href="/digital-signage"><a className={styles.card}>
                        <h3>Digital Signage &rarr;</h3>
                        <p>Немного о Digital Signage</p>
                    </a></Link>
          
                    <Link href="/area-of-use"><a className={styles.card}>
                        <h3>Области применения Digital Signage &rarr;</h3>
                        <p>Список областей, где используется Digital Signage</p>
                    </a></Link>

                    <Link href="/problems"><a className={styles.card}>
                        <h3>Проблемы Digital Signage и их решение &rarr;</h3>
                        <p>Список проблем технологии и варианты их решения</p>
                    </a></Link>
            
                    <Link href="/new-digital-signage"><a className={styles.card}>
                        <h3>Интересные разработки &rarr;</h3>
                        <p>Примеры интересных Digital Signage проектов</p>
                    </a></Link>
                    
                    <Link href="/test"><a className={styles.card}>
                        <h3>Тест &rarr;</h3>
                        <p>Небольшой тест</p>
                    </a></Link>
                    
                </div>
            </main>
      
            <footer className={styles.footer}>
                <p>Свистунова Марина, 4ИВТ. Cанкт-Петербург. 2020</p>
            </footer>
        </div>
    )
}
