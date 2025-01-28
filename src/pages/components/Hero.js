import styles from "@/styles/Hero.module.css";
import Image from "next/image";

export default function Hero({ data }) {

    return (
        <section className={styles.hero}>
            {/* <div className={styles.firstRow}>
                <div className={styles.firstColumn}>
                    <div className={styles.navTabs}>
                        {data.tabs.map((tab, index) => (
                            <span key={index} className={styles.tab}>
                                {tab}
                            </span>
                        ))}
                    </div>
                    <h1>{data.title[0]}</h1>

                </div>
                <div className={styles.secondColumn}>
                    <Image src={data.hero} width={1982} height={1018} />
                </div>
            </div>
            <div className={styles.secondRow}>
                <h1>{data.title[1]}</h1>
            </div>
            <div className={styles.thirdRow}>
                
            </div> */}

            <div className={styles.navTabs}>
                {data.tabs.map((tab, index) => (
                    <span key={index} className={`regular`}>
                        {tab}
                    </span>
                ))}
            </div>

            <h1 className={styles.titleThe}>{data.title[0]}</h1>

            <div className={styles.image}>
                <Image src={data.hero.source} width={data.hero.width} height={data.hero.height} alt={data.hero.alt} />
            </div>

            <h1 className={styles.titleAmoureux}>{data.title[1]}</h1>

            <p className={`small ${styles.subtitle}`}><span>{data.subtitle[0]}</span><span>{data.subtitle[1]}</span></p>

            <h1 className={styles.titleHouse}>{data.title[2]}</h1>

            <span className={`${styles.button} button`}>{data.cta}</span>


        </section>
    )
}
