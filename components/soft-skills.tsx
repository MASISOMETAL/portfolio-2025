import { language } from "@/lib/language"
import styles from "./soft-skills.module.css"
import { motion } from "framer-motion";

type SoftSkill = {
  title: string
  description: string
  icon: string
}

interface Params {
  lan: string
}

export default function SoftSkills({ lan }: Params) {

  const currentLanguage = language[lan as keyof typeof language];

  const softSkills: SoftSkill[] = [
    {
      title: currentLanguage.softSkillTitle[0],
      description: currentLanguage.softSkillDescription[0],
      icon: "👥",
    },
    {
      title: currentLanguage.softSkillTitle[1],
      description: currentLanguage.softSkillDescription[1],
      icon: "🧩",
    },
    {
      title: currentLanguage.softSkillTitle[2],
      description: currentLanguage.softSkillDescription[2],
      icon: "🚀",
    },
    {
      title: currentLanguage.softSkillTitle[3],
      description: currentLanguage.softSkillDescription[3],
      icon: "🤝",
    },
    {
      title: currentLanguage.softSkillTitle[4],
      description: currentLanguage.softSkillDescription[4],
      icon: "💬",
    },
    {
      title: currentLanguage.softSkillTitle[5],
      description: currentLanguage.softSkillDescription[5],
      icon: "⏱️",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.1 }}
    >
      <section id="soft-skills" className={styles.softSkills}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{currentLanguage.softSkillTitleGral}</h2>
          <p className={styles.sectionDescription}>
            {currentLanguage.softSkillSubTitleGral}
          </p>

          <div className={styles.skillsGrid}>
            {softSkills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <h3 className={styles.skillTitle}>{skill.title}</h3>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

