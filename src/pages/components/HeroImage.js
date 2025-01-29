import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import useMouse from "@react-hook/mouse-position";

export default function HeroImage({ heroData }) {
    const [hoveringFilm, setHoveringFilm] = useState(false);

    const handleMouseEnter = () => setHoveringFilm(true);
    const handleMouseLeave = () => setHoveringFilm(false);

    const ref = useRef(null);

    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28,
        opacity: {delay:0.15}

    };

    return (
        <motion.div ref={ref} className={styles.image} layout layoutId="loaderImage"
            transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <div className={styles.imageWrapper}><Image src={heroData.source} width={heroData.width} height={heroData.height} alt={heroData.alt} /></div>
            <div className={styles.playFilmWrapper}>
                <div className={styles.playFilm}>
                    <span className="small">Play Film</span>
                </div>
            </div>
            <AnimatePresence mode="wait">
                {hoveringFilm && <motion.div
                    className={styles.cursor}
                    transition={spring}
                    key={"cursor"}
                    initial={{ x: "50%", y: "50%", width: 0, height: 0, opacity:0 }}
                    animate={{ x: mouseXPosition - 50, y: mouseYPosition - 50, width: 100, height: 100, opacity:1 }}
                    exit={{ x: mouseXPosition - 50, y: mouseYPosition - 50, opacity: 0 }}
                >
                    <motion.div key={"cursorTextWrapper"} className={styles.cursorTextWrapper} style={{ overflow: "hidden" }}><motion.div initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.25 }} className={styles.cursorText}>View film</motion.div></motion.div>
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    );
} 