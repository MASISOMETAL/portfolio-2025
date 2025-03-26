import { language } from "@/lib/language"
import styles from "./technical-skills.module.css"
import { motion } from "framer-motion";
import Image from "next/image";

type Skill = {
  name: string
  icon: string
  category?: string
}

interface Params {
  lan: string
}

export default function TechnicalSkills({ lan }: Params) {

  const currentLanguage = language[lan as keyof typeof language];

  const skills: Skill[] = [
    { name: "HTML", icon: "./skills/html.svg", category: "Frontend" },
    { name: "CSS", icon: "./skills/css.svg", category: "Frontend" },
    { name: "JavaScript", icon: "./skills/js.svg", category: "Frontend" },
    { name: "TypeScript", icon: "./skills/ts.svg", category: "Frontend" },
    { name: "React", icon: "./skills/react.svg", category: "Frontend" },
    { name: "React Native", icon: "./skills/react.svg", category: "Mobile" },
    { name: "Next.js", icon: "./skills/nextjs.svg", category: "Frontend" },
    { name: "Node.js", icon: "./skills/nodejs.svg", category: "Backend" },
    { name: "Express", icon: "./skills/express.svg", category: "Backend" },
    { name: "SQL", icon: "./skills/sql.svg", category: "Database" },
    { name: "Git", icon: "./skills/git.svg", category: "Tools" },
    { name: "RESTful APIs", icon: "./skills/api.svg", category: "Backend" },
    { name: "Redux", icon: "./skills/redux.svg", category: "Frontend" },
    { name: "Responsive Design", icon: "./skills/responsive.svg", category: "Frontend" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2 }}
    >
      <section id="skills" className={styles.skills}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{currentLanguage.tecHabTitle}</h2>
          <p className={styles.sectionDescription}>{currentLanguage.tecHabSubtitle}</p>

          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className={styles.skillsImage}
                  />
                </div>
                <h3 className={styles.skillName}>{skill.name}</h3>
                {skill.category && <span className={styles.skillCategory}>{skill.category}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

