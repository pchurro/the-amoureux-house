import { useState } from "react";
import styles from "@/styles/NavTabs.module.css";
import AnimatedTextInView from "./AnimatedTextInView";

export default function NavTabs({ tabs }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
                <span className={styles.navButton} onClick={toggleMenu}>
                    {isOpen ? "Close" : "Menu"}
                </span>
            </div>
            {isOpen && (
                <div className={styles.mobileMenu}>
                    {tabs.map((tab, index) => (
                        <span key={index} className={`regular`}>
                            {tab}
                        </span>
                    ))}
                </div>
            )}
        </nav>
    );
} 