import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import NavTabs from "./NavTabs";
import { motion } from "motion/react"
import AnimatedTextInView from "./AnimatedTextInView";
import RevealComponent from "./RevealComponent";

export default function Hero({ data }) {

    return (
        <section className={styles.hero}>

            <div className={styles.nav}>
                <NavTabs image={data.navImage} tabs={data.tabs} />
            </div>


            <h1 className={styles.titleThe}><AnimatedTextInView duration={1}>{data.title[0]}</AnimatedTextInView></h1>

            <motion.div className={styles.image} layout layoutId="loaderImage"
                transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
            >
                <div className={styles.imageWrapper}><Image src={data.hero.source} width={data.hero.width} height={data.hero.height} alt={data.hero.alt} /></div>
                <div className={styles.playFilmWrapper}>
                    <div className={styles.playFilm}>
                        <span className="small">Play Film</span>
                    </div>
                </div>
            </motion.div>

            <h1 className={styles.titleAmoureux}><AnimatedTextInView duration={1} >{data.title[1]}</AnimatedTextInView></h1>

            <p className={`small ${styles.subtitle}`}>
                <RevealComponent>
                    <div style={{ overflow: "hidden" }}><motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.5 }}>{data.subtitle[0]}</motion.div></div>
                    <div style={{ overflow: "hidden" }}><motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.5, delay: 0.1 }} >{data.subtitle[1]}</motion.div></div>
                </RevealComponent>
            </p>

            <h1 className={styles.titleHouse}><AnimatedTextInView duration={1}>{data.title[2]}</AnimatedTextInView></h1>

            <span className={`${styles.button} button`}><AnimatedTextInView duration={0.5}>{data.cta}</AnimatedTextInView></span>


        </section>
    )
}
