import { useState, useEffect } from "react";
import styles from "@/styles/NavTabs.module.css";
import AnimatedTextInView from "./AnimatedTextInView";
import { AnimatePresence, motion } from "motion/react";
import ImageWrapper from "./ImageWrapper";
import { useLenis } from 'lenis/react'

export default function NavTabs({ tabs, image }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const lenis = useLenis();

    useEffect(() => {
        if (isOpen) lenis.stop();
        else lenis.start();
    }, [isOpen]);



    return (
        <nav>
            <div className={styles.navTabs}>
                {tabs.map((tab, index) => (
                    <span key={index} className={`regular`}>
                        <AnimatedTextInView duration={0.5}>{tab}</AnimatedTextInView>
                    </span>
                ))}
            </div>
            <div className={styles.navMobile}>
                <span
                    className={styles.navButton}
                    onClick={toggleMenu}
                    style={isOpen ? { color: 'var(--primary)' } : {}}
                >
                   <AnimatedTextInView>{isOpen ? "Close" : "Menu"}</AnimatedTextInView>
                </span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div key={"mobileMenu"} className={styles.mobileMenu}
                        initial={{ y: "-100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
                    >
                        <div className={styles.tabsWrapper}>
                            {tabs.map((tab, index) => (
                                <motion.span key={tab + index} className={`regular`}
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <AnimatedTextInView globalDelay={0.25}>{tab}</AnimatedTextInView>
                                </motion.span>
                            ))}
                        </div>

                        <motion.div key="navImage" initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }} className={styles.image}><ImageWrapper image={image} direction={"down"} /></motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
} 