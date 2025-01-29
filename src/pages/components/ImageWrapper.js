import { motion } from "motion/react";
import Image from "next/image";
import styles from "@/styles/ImageWrapper.module.css";

export default function ImageWrapper({ image, direction, width = "100%" }) {
  return (
    <div className={styles.imageWrapper} style={{width}}>
      <motion.div 
        className={styles.imageCover}
        initial={{ x: "0%" }}
        whileInView={direction === "left" ? { x: "-100%" } : {x:"100%"}}
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