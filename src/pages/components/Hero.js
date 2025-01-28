import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import NavTabs from "./NavTabs";

export default function Hero({ data }) {

    return (
        <section className={styles.hero}>

            <div className={styles.nav}>
                <NavTabs tabs={data.tabs} />
            </div>


            <h1 className={styles.titleThe}>{data.title[0]}</h1>

            <div className={styles.image}>
                <Image src={data.hero.source} width={data.hero.width} height={data.hero.height} alt={data.hero.alt} />
                <div className={styles.playFilmWrapper}>
                    <div className={styles.playFilm}>
                        <span className="small">Play Film</span>
                    </div>
                </div>
            </div>

            <h1 className={styles.titleAmoureux}>{data.title[1]}</h1>

            <p className={`small ${styles.subtitle}`}><span>{data.subtitle[0]}</span><span>{data.subtitle[1]}</span></p>

            <h1 className={styles.titleHouse}>{data.title[2]}</h1>

            <span className={`${styles.button} button`}>{data.cta}</span>


        </section>
    )
}
