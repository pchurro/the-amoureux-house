import styles from "@/styles/LineSeparator.module.css";
import { motion } from "motion/react"

export default function LineSeparator() {
    return (
        <div className={styles.separator}>
            <motion.hr 
            initial={{width:0, opacity:0}}
            whileInView={{width:"100%", opacity:1}}
            viewport={{once:true, amount:1}}
            transition={{duration:1.5, ease:[0.22, 1, 0.36, 1]}}
            />
        </div>
    );
}
