import Image from "next/image"
import styles from "./banner.module.css"
import { language } from "@/lib/language";

interface Params {
  lan: string
}

export default function Banner({ lan }: Params) {

  const currentLanguage = language[lan as keyof typeof language];

  return (
    <section id="home" className={styles.banner}>
      <div className={`container ${styles.bannerContainer}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Cristian Farias</h1>
          <h2 className={styles.subtitle}>{currentLanguage.subTitleGral}</h2>
          <p className={styles.description}>
            {currentLanguage.descripcionGral}
          </p>
          <a href="#contact" className={styles.contactButton}>
            {currentLanguage.contactoNav}
          </a>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/img-principal.jpg?height=400&width=400"
              alt="programador"
              width={400}
              height={400}
              className={styles.profileImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

