import styles from "@/styles/About.module.css";
import Image from "next/image";
import AnimatedTextInView from "./AnimatedTextInView";
import RevealComponent from "./RevealComponent";
import SplitText from "./SplitText/SplitText";
import ImageWrapper from "./ImageWrapper";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import hoverUnderline from "../../public/lottie/underline.json";
import { useRef } from "react";

//About Section

export default function About({ data }) {


    //Handles hover in and out for lottie animation
    const lottieRef = useRef(null);
    const handleMouseEnter = () => {
        if (lottieRef.current) {
            lottieRef.current.setDirection(1); // Set direction to forward
            lottieRef.current.setSpeed(1.5);
            lottieRef.current.play(); // Play the animation
        }
    };
    const handleMouseLeave = () => {
        if (lottieRef.current) {
            lottieRef.current.setDirection(-1); // Set direction to reverse
            lottieRef.current.play(); // Play the animation
        }
    };

    return (
        <section className={styles.about}>
            <h3 className={styles.title}><AnimatedTextInView threshold={0.75} duration={1}>{data.title}</AnimatedTextInView></h3>
            <div className={styles.textFirstColumn}>
                <p className="regular">
                    <RevealComponent>
                        <SplitText
                            LineWrapper={({ lineIndex, children }) => (
                                <div key={lineIndex} style={{ overflow: "hidden" }}>
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: lineIndex * 0.05, ease: [0.25, 1, 0.5, 1], duration: 0.5 }}
                                    >
                                        {children}
                                    </motion.div>
                                </div>
                            )}
                        >
                            {data.text[0]}
                        </SplitText>
                    </RevealComponent>
                </p>
                <p className="regular">
                    <RevealComponent>
                        <SplitText
                            LineWrapper={({ lineIndex, children }) => (
                                <div key={lineIndex} style={{ overflow: "hidden" }}>
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: lineIndex * 0.05, ease: [0.25, 1, 0.5, 1], duration: 0.5 }}
                                    >
                                        {children}
                                    </motion.div>
                                </div>
                            )}
                        >
                            {data.text[1]}
                        </SplitText>
                    </RevealComponent>
                </p>

            </div>

            <div className={styles.textSecondColumn}>
                <p className="regular">
                    <RevealComponent>
                        <SplitText
                            LineWrapper={({ lineIndex, children }) => (
                                <div key={lineIndex} style={{ overflow: "hidden" }}>
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: lineIndex * 0.05, ease: [0.25, 1, 0.5, 1], duration: 0.5 }}
                                    >
                                        {children}
                                    </motion.div>
                                </div>
                            )}
                        >
                            {data.text[2]}
                        </SplitText>
                    </RevealComponent>
                </p>
                <p className="regular">
                    <RevealComponent>
                        <SplitText
                            LineWrapper={({ lineIndex, children }) => (
                                <div key={lineIndex} style={{ overflow: "hidden" }}>
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: lineIndex * 0.05, ease: [0.25, 1, 0.5, 1], duration: 0.5 }}
                                    >
                                        {children}
                                    </motion.div>
                                </div>
                            )}
                        >
                            {data.text[3]}
                        </SplitText>
                    </RevealComponent>
                </p>
            </div>

            <div className={`${styles.CTA} button`} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <span style={{ position: "absolute" }}>{data.cta}</span>
                <div className={styles.lottieWrapper}>
                    <Lottie style={{ position: "relative", display: "flex", width: "100%", transform: "scale(0.6) translateY(45%)" }} autoplay={false} loop={false} lottieRef={lottieRef} animationData={hoverUnderline} />
                </div>
            </div>

            <div className={styles.images}>
                <div className={styles.imagesFirstColumn}>
                    {data.images.slice(0, 2).map((image, index) => (
                        <ImageWrapper key={index} image={image} direction={"left"} />
                    ))}
                </div>
                <div className={styles.imagesSecondColumn}>
                    {data.images.slice(2, 3).map((image, index) => (
                        <ImageWrapper key={index} image={image} direction={"right"} />
                    ))}
                    {data.images.slice(3, 4).map((image, index) => (
                        <ImageWrapper key={index} image={image} direction={"right"} width={"75%"} />
                    ))}
                </div>
            </div>



        </section>
    );
}
