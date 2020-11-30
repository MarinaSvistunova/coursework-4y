import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    About Digital Signage
                </title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Digital Signage</h1>

                <div className={styles.grid}>
                    <p><b>Digital Signage</b> (досл. цифровые вывески, объявления.; 
                        русскоязычные термины: видеореклама на мониторах) — это технология 
                        представления информации с электронных (цифровых) носителей (дисплеев, проекционных 
                        систем и т. д.), установленных в общественных местах.
                    </p>
                    
                    <p>В основном применяется для распространения рекламы. Рекламные сообщения, 
                        распространяемые посредством digital signage, как правило, имеют целью достижение 
                        целевой аудитории в нужном для контакта месте и в нужное время.
                    </p>

                    <p>Преимущества таких электронных сообщений над традиционными статичными формами 
                        наружной рекламы в более простой и быстрой замене содержимого сообщения; 
                        динамичности самого изображения; адаптируемости сообщения к окружающей обстановке и 
                        аудитории, в том числе интерактивно. Недостаток в том, что это технически сложно.
                    </p>
                    
                    <p>Digital Signage характеризуется высоким показателем окупаемости инвестиций 
                        ROI в сравнении с печатными рекламными объявлениями.
                    </p>

                    <Image
                        src="/digital-signage-man-coffee.jpeg"
                        alt="Picture of the man near Digital Signage"
                        width={579}
                        height={402}
                    />

                </div>
            </main>

            <div className={styles.grid}>
                <Link href="/"><a>
                    <h3>&larr; На главную &nbsp;</h3>
                </a></Link>
                |
                <Link href="/area-of-use"><a>
                    <h3>&nbsp; Области применения &rarr;</h3>
                </a></Link>
            </div>

            <footer className={styles.footer}>
                <p>Свистунова Марина, 4ИВТ. Cанкт-Петербург. 2020</p>
            </footer>
        </div>
    )
}