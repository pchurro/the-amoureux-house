import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import NavTabs from "./NavTabs";
import { motion } from "motion/react"
import AnimatedTextInView from "./AnimatedTextInView";

export default function Hero({ data }) {

    return (
        <section className={styles.hero}>

            <div className={styles.nav}>
                <NavTabs tabs={data.tabs} />
            </div>


            <h1 className={styles.titleThe}><AnimatedTextInView duration={1} globalDelay={1.6}>{data.title[0]}</AnimatedTextInView></h1>

            <motion.div className={styles.image} layout layoutId="loaderImage"
                transition={{ duration: 1.6, ease: [0.85, 0, 0.15, 1] }}
            >
                <Image src={data.hero.source} width={data.hero.width} height={data.hero.height} alt={data.hero.alt} />
                <div className={styles.playFilmWrapper}>
                    <div className={styles.playFilm}>
                        <span className="small">Play Film</span>
                    </div>
                </div>
            </motion.div>

            <h1 className={styles.titleAmoureux}><AnimatedTextInView duration={1} globalDelay={1.6}>{data.title[1]}</AnimatedTextInView></h1>

            <p className={`small ${styles.subtitle}`}><span>{data.subtitle[0]}</span><span>{data.subtitle[1]}</span></p>

            <h1 className={styles.titleHouse}><AnimatedTextInView duration={1} globalDelay={1.6}>{data.title[2]}</AnimatedTextInView></h1>

            <span className={`${styles.button} button`}>{data.cta}</span>


        </section>
    )
}
