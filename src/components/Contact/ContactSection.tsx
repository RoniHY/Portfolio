'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { SectionReveal } from '../shared/SectionReveal';
import styles from './ContactSection.module.css';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactSection() {
  const { lang, t } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <SectionReveal>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.contact.title}</h2>
          <p className={styles.subtitle}>{t.contact.subtitle}</p>
        </div>
      </SectionReveal>

      <div className={styles.layout}>
        <SectionReveal className={styles.formWrap} delay={0.1}>
          {status === 'success' ? (
            <motion.div
              className={styles.successMsg}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {t.contact.success}
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>{t.contact.nameLabel}</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    autoComplete="name"
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>{t.contact.emailLabel}</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className={styles.field}>
                <span className={styles.label}>{t.contact.serviceLabel}</span>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">—</option>
                  <option value="software">{t.contact.serviceOptions.software}</option>
                  <option value="marketing">{t.contact.serviceOptions.marketing}</option>
                  <option value="design">{t.contact.serviceOptions.design}</option>
                  <option value="other">{t.contact.serviceOptions.other}</option>
                </select>
              </label>

              <label className={styles.field}>
                <span className={styles.label}>{t.contact.messageLabel}</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={styles.textarea}
                />
              </label>

              {status === 'error' && (
                <p className={styles.errorMsg}>{t.contact.error}</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className={styles.submit}
              >
                {status === 'sending' ? t.contact.sending : t.contact.send}
              </button>
            </form>
          )}
        </SectionReveal>

        <SectionReveal className={styles.sidebar} delay={0.2}>
          <div className={styles.directLinks}>
            <p className={styles.orReach}>{t.contact.orReach}</p>
            <a href="mailto:pdgutierrezcarrera@gmail.com" className={styles.emailLink}>
              <FaEnvelope aria-hidden="true" />
              pdgutierrezcarrera@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-daniel-gutierrez-carrera-7ab250254/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedin aria-hidden="true" />
              LinkedIn
            </a>
            <motion.a
              href="https://calendar.app.google/AMaCyyyZrrQw9Gu69"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.meetingBtn}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {t.contact.bookMeeting}
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
