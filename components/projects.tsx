import Image from "next/image"
import Link from "next/link"
import styles from "./projects.module.css"
import { language } from "@/lib/language"
import { motion } from "framer-motion";


type Project = {
  title: string
  description: string
  image: string
  skills: string[]
  githubUrl: string
  liveUrl: string
}

interface Params {
  lan: string
}

export default function Projects({ lan }: Params) {

  const currentLanguage = language[lan as keyof typeof language];

  const projects: Project[] = [
    {
      title: currentLanguage.projectsTitles[0],
      description: currentLanguage.projectDescription[0],
      image: "/fixture.jpg?height=300&width=500",
      skills: ["Next js", "React", "TypeScript"],
      githubUrl: "https://github.com/MASISOMETAL/fixture-creator",
      liveUrl: "https://fixture-creator.netlify.app/",
    },
    {
      title: currentLanguage.projectsTitles[1],
      description: currentLanguage.projectDescription[1],
      image: "/ecommerce-nuts.jpg?height=300&width=500",
      skills: ["Next js", "React", "TypeScript"],
      githubUrl: "https://github.com/MASISOMETAL/ecommerce-nuts",
      liveUrl: "https://ecommerce-nuts.netlify.app/",
    },
    {
      title: currentLanguage.projectsTitles[2],
      description: currentLanguage.projectDescription[2],
      image: "/pokedle.jpg?height=300&width=500",
      skills: ["React", "Javascript", "HTML/CSS"],
      githubUrl: "https://github.com/MASISOMETAL/pokecrisdle",
      liveUrl: "https://pokecrisdle.netlify.app/",
    },
    {
      title: currentLanguage.projectsTitles[3],
      description: currentLanguage.projectDescription[3],
      image: "/project-img-movistar.jpg?height=300&width=500",
      skills: ["React Native", "Redux", "javascript"],
      githubUrl: "https://github.com/MASISOMETAL/app-movistar-ultimo-desafio",
      liveUrl: "https://github.com/MASISOMETAL/app-movistar-ultimo-desafio",
    },
    {
      title: currentLanguage.projectsTitles[4],
      description: currentLanguage.projectDescription[4],
      image: "/project-img-ppt.jpg?height=300&width=500",
      skills: ["React Native", "Redux", "javascript"],
      githubUrl: "https://github.com/MASISOMETAL/piedra-papel-tijera",
      liveUrl: "https://github.com/MASISOMETAL/piedra-papel-tijera",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2 }}
    >
      <section id="projects" className={styles.projects}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{currentLanguage.projectsTitleGral}</h2>
          <p className={styles.sectionDescription}>
            {currentLanguage.projectSubTitleGral}
          </p>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>

                  <div className={styles.projectSkills}>
                    {project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      GitHub
                    </Link>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

