import React from 'react';
import styles from "@/styles/Loader.module.css";
import Image from "next/image";
import { motion } from "motion/react"

//Handles initial splash screen

const Loader = ({ setLoading, loaderImage }) => {

    setTimeout(() => {
        setLoading(false);
    }, 3000); //Loads homepage after 3 seconds

    return (
        <div className={styles.loader}>
            <motion.div className={styles.loaderImageWrapper}
                initial={{ scale: 0.9, y: -150 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 2 }}
            >  
                <motion.div className={styles.loaderImage} layout layoutId="loaderImage"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.6, delay: 1, ease: [0.85, 0, 0.15, 1] }}
                >
                    <Image src={loaderImage.source} width={loaderImage.width} height={loaderImage.height} alt={loaderImage.alt} />
                </motion.div>

                <motion.div className={styles.imageCover}
                    initial={{ y: "0%" }}
                    animate={{ y: "-100%" }}
                    transition={{ duration: 1.6,delay:0.5, ease: [0.85, 0, 0.15, 1] }}
                >

                </motion.div>

            </motion.div>
        </div>
    );
};

export default Loader;
