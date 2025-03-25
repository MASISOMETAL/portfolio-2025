'use client'

import { useState } from "react"
import Navbar from "@/components/navbar"
import Banner from "@/components/banner"
import TechnicalSkills from "@/components/technical-skills"
import SoftSkills from "@/components/soft-skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import styles from "./page.module.css"
import Image from "next/image"

export default function Home() {

  const [lan, setLan] = useState<"es" | "en">("es")

  const toogleLanguage = () => {
    lan === "es" ? setLan("en") : setLan("es")
  }

  return (
    <main>
      <Navbar lan={lan} />
      <Banner lan={lan} />
      <TechnicalSkills lan={lan} />
      <SoftSkills lan={lan} />
      <Projects lan={lan} />
      <Contact lan={lan} />
      <button className={styles.imageWrapper} onClick={toogleLanguage}>
        {lan === "es" &&
          <Image
            src="/eeuu.svg?"
            alt="EEUU"
            width={30}
            height={22}
            className={styles.btnImage}
            priority
          />}
        {lan === "en" &&
          <Image
            src="/arg.svg?"
            alt="EEUU"
            width={30}
            height={22}
            className={styles.btnImage}
            priority
          />}
      </button>
      <Footer lan={lan} />
    </main>
  )
}

