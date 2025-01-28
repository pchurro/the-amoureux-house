import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function About({ data }) {
    return (
        <section className={styles.about}>
            <h3 className={styles.title}>{data.title}</h3>
            <div className={styles.textFirstColumn}>
                <p className="regular">{data.text[0]}</p>
                <p className="regular">{data.text[1]}</p>
                
            </div>

            <div className={styles.textSecondColumn}>
                <p className="regular">{data.text[2]}</p>
                <p className="regular">{data.text[3]}</p>
            </div>

            <span className={`${styles.CTA} button`}>{data.cta}</span>

            <div className={styles.images}>
                <div className={styles.imagesFirstColumn}>
                    {data.images.slice(0, 2).map((image, index) => (
                        <Image key={index} className={styles.image} src={image.source} alt={image.alt} width={image.width} height={image.height} />
                    ))}
                </div>
                <div className={styles.imagesSecondColumn}>
                    {data.images.slice(2, 4).map((image, index) => (
                        <Image key={index} className={styles.image} src={image.source} alt={image.alt} width={image.width} height={image.height} />
                    ))}
                </div>
            </div>



        </section>
    );
}
