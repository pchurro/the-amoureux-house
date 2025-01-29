import { motion } from "motion/react";
import Image from "next/image";
import styles from "@/styles/ImageWrapper.module.css";

//Component to wrap images in so they have a cover that slides out when in view

export default function ImageWrapper({ image, direction, width = "100%" }) {
  return (
    <div className={styles.imageWrapper} style={{width}}>
      <motion.div 
        className={styles.imageCover}
        initial={{ y: "0%", x:"0%" }}
        whileInView={direction === "down" ? { y: "100%" } : direction === "left" ? { x: "-100%" } : {x:"100%"}}
        transition={{ duration: 1.6, ease: [0.85, 0, 0.15, 1] }}
        viewport={{once:true, amount:0.75}}
      />
      <Image 
        className={styles.image} 
        src={image.source} 
        alt={image.alt} 
        width={image.width} 
        height={image.height} 
      />
    </div>
  );
} 