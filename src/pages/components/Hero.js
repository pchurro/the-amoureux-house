import styles from "@/styles/Hero.module.css";
import NavTabs from "./NavTabs";
import { motion, AnimatePresence } from "motion/react"
import AnimatedTextInView from "./AnimatedTextInView";
import RevealComponent from "./RevealComponent";
import { useState, useRef } from "react";
import HeroImage from "./HeroImage";
import Lottie from "lottie-react";
import hoverCircle from "../../../public/lottie/circle.json";


export default function Hero({ data }) {

    const lottieRef = useRef(null);

    const handleMouseEnter = () => {
        if (lottieRef.current) {
            lottieRef.current.setDirection(1);
            lottieRef.current.setSpeed(1.5);// Set direction to forward
            lottieRef.current.play(); // Play the animation
        }
    };

    const handleMouseLeave = () => {
        if (lottieRef.current) {
            lottieRef.current.setDirection(-1); // Set direction to reverse
            lottieRef.current.play();
        }
    };

    return (
        <section className={styles.hero}>

            <div className={styles.nav}>
                <NavTabs image={data.navImage} tabs={data.tabs} />
            </div>


            <h1 className={styles.titleThe}><AnimatedTextInView duration={1}>{data.title[0]}</AnimatedTextInView></h1>

            <HeroImage heroData={data.hero} />

            <h1 className={styles.titleAmoureux}><AnimatedTextInView duration={1} >{data.title[1]}</AnimatedTextInView></h1>

            <p className={`small ${styles.subtitle}`}>
                <RevealComponent>
                    <div style={{ overflow: "hidden" }}><motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.5 }}>{data.subtitle[0]}</motion.div></div>
                    <div style={{ overflow: "hidden" }}><motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.5, delay: 0.1 }} >{data.subtitle[1]}</motion.div></div>
                </RevealComponent>
            </p>

            <h1 className={styles.titleHouse}><AnimatedTextInView duration={1}>{data.title[2]}</AnimatedTextInView></h1>

            <div className={`${styles.button} button`} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <span style={{ position: "absolute" }}>{data.cta}</span>
                <div className={styles.lottieWrapper}><Lottie style={{ position: "relative", display: "flex", width: "100%", transform: "scale(1.25)" }} autoplay={false} loop={false} lottieRef={lottieRef} animationData={hoverCircle} /></div>
            </div>


        </section>
    )
}
