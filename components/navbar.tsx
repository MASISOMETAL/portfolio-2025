"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./navbar.module.css"
import { language } from "@/lib/language"

interface Params {
  lan: string
}

export default function Navbar({ lan }: Params) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const currentLanguage = language[lan as keyof typeof language];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Farias Cristian
        </Link>

        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={styles.menuIcon}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li>
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                {currentLanguage.inicioNav}
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                {currentLanguage.skillsNav}
              </a>
            </li>
            <li>
              <a href="#soft-skills" onClick={() => setIsMenuOpen(false)}>
                {currentLanguage.skillSoftNav}
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                {currentLanguage.projectsNav}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                {currentLanguage.contactoNav}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

