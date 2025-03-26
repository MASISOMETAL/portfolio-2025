"use client"

import type React from "react"

import { useRef, useState, type FormEvent } from "react"
import styles from "./contact.module.css"
import { language } from "@/lib/language"
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

interface Params {
  lan: string
}

export default function Contact({ lan }: Params) {

  const currentLanguage = language[lan as keyof typeof language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_KEY as string

    try {
      await emailjs.sendForm(serviceID, templateID, form.current!, { publicKey: publicKey });

      setSubmitStatus({
        success: true,
        message: currentLanguage.contactMsgSubmitAccert,
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

    } catch (error) {
      setSubmitStatus({
        success: false,
        message: currentLanguage.contactMsgSubmitError,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2 }}
    >
      <section id="contact" className={styles.contact}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{currentLanguage.contactTitle}</h2>
          <p className={styles.sectionDescription}>{currentLanguage.contactSubTitle}</p>

          <div className={styles.contactContainer}>
            <form className={styles.contactForm} onSubmit={handleSubmit} ref={form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  {currentLanguage.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder={currentLanguage.namePHolder}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  {currentLanguage.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder={currentLanguage.emailPHolder}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  {currentLanguage.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder={currentLanguage.subject}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  {currentLanguage.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                  placeholder={currentLanguage.messagepHolder}
                  rows={6}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? currentLanguage.contactSending : currentLanguage.contactSendMsg}
              </button>

              {submitStatus.message && (
                <div className={`${styles.statusMessage} ${submitStatus.success ? styles.success : styles.error}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

