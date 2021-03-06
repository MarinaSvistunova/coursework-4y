import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    New Digital Signage projects
                </title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Примеры интересных Digital Signage проектов</h1>

                <div className={styles.grid}>
                    <h3>Двусторонние витринные дисплеи, не тускнеющие на солнце</h3>
                    <p>Владельцы магазинов готовы пойти на многое, чтобы привлечь покупателей. 
                        Одно из средств – добавить динамики витринам, а одно из решений – витринные 
                        дисплеи.</p>
                    <p>В этом году Samsung представила новую серию профессиональных дисплеев OMN/OMN-D, 
                        способных ярко и четко отображать контент даже при прямом солнечном освещении и 
                        при любых погодных условиях привлекать взгляды прохожих. Устройства обладают 
                        яркостью 4 000 нит и высокой контрастностью 5000:1. Новинка будет выпускаться в 
                        двух размерах: 46 и 55 дюймов.</p>
                    <Image
                        src="/ISE-Samsung-OMN.jpeg"
                        alt="ISE Samsung OMN"
                        width={1280}
                        height={837}
                    />

                    <p>На двухсторонних дисплеях (серия OMN-D) отображается контент и в наружной 
                        витрине, и в помещении, а это способ заинтересовать посетителей внутри и снаружи 
                        магазина одновременно. Информация к дисплеям поступает по Wi-Fi, так что 
                        количество проводов сокращено до минимума. Толщина — около 5,5 см. Заметно, 
                        как каждым годом это оборудование становится тоньше, элегантнее и, 
                        главное, ярче.</p>
                    
                    <br></br>
                    
                    <h3>Прозрачные дисплеи</h3>
                    <p>Технология уже давно не является новинкой, однако судя по большому количеству 
                        экспонентов, производители видят в ней большие перспективы. С помощью прозрачных 
                        дисплеев в витринном окне магазина можно транслировать информацию об акциях, 
                        запускать рекламные видеоролики, размещать привлекающий внимание видеоконтент по 
                        тематике магазина. Решение позволяет транслировать цифровой контекст, будь то 
                        тексты или изображение, не закрывая витрину, а как бы поверх нее. Выключенные 
                        экраны выглядят как обычное стекло. Решение интересно для использования в торговых 
                        центрах и в street-ритейле. На фото — прозрачные дисплеи компании LG.</p>
                    <Image
                        src="/20190205_133957.jpg"
                        alt="Transparent display"
                        width={1280}
                        height={637}
                    />

                    <br></br>
                    <h3>Интерактивные столы</h3>
                    <p>Интерактивные мультисенсорные системы стали выпускать не только в виде настенных 
                        панелей, но и в виде столов и стен с использованием сенсорного экрана и технологии 
                        распознавания объектов. Пользоваться таким гаджетом достаточно просто — берем товар 
                        и ставим на стол, а стол выдает полную информацию об этом продукте, от состава, 
                        вариаций цветов до советов по использованию. Например, если это машина, то можно 
                        узнать о ее внутреннем устройстве. Если продукт питания — посмотреть состав, 
                        где он был произведен, рецепт приготовления. Технология интересна для шоурумов, 
                        флагманских магазинов. На фото — оборудование компании EyeFactive.</p>
                    <Image
                        src="/integrated_systems_europe_6.jpg"
                        alt="Integrated systems Europe"
                        width={1280}
                        height={680}
                    />
                </div>
            </main>

            <div className={styles.grid}>
                <Link href="/problems"><a>
                    <h3>&larr; Проблемы Digital Signage &nbsp;</h3>
                </a></Link>
                |
                <Link href="/"><a>
                    <h3>&nbsp; На главную &nbsp;</h3>
                </a></Link>
                |
                <Link href="/test"><a>
                    <h3>&nbsp; Тест &rarr;</h3>
                </a></Link>
            </div>

            <footer className={styles.footer}>
                <p>Свистунова Марина, 4ИВТ. Cанкт-Петербург. 2020</p>
            </footer>
        </div>
    )
}