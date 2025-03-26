import { language } from "@/lib/language"
import styles from "./technical-skills.module.css"
import { motion } from "framer-motion";

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
    { name: "HTML", icon: "🌐", category: "Frontend" },
    { name: "CSS", icon: "🎨", category: "Frontend" },
    { name: "JavaScript", icon: "📜", category: "Frontend" },
    { name: "TypeScript", icon: "📘", category: "Frontend" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "React Native", icon: "📱", category: "Mobile" },
    { name: "Next.js", icon: "⏭️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Express", icon: "🚂", category: "Backend" },
    { name: "SQL", icon: "🗄️", category: "Database" },
    { name: "Git", icon: "📊", category: "Tools" },
    { name: "RESTful APIs", icon: "🔄", category: "Backend" },
    { name: "Redux", icon: "🔄", category: "Frontend" },
    { name: "Responsive Design", icon: "📱", category: "Frontend" },
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
                <div className={styles.skillIcon}>{skill.icon}</div>
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

