'use client';

import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
}

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: i * 0.06,
    },
  }),
};

export function AnimatedText({ text, className, delay = 0, stagger = 0.06, as: Tag = 'span' }: Props) {
  const words = text.split(' ');

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      aria-label={text}
      style={{ display: 'block' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i + delay / stagger}
          variants={wordVariants}
          style={{ display: 'inline-block', marginRight: '0.2em', overflow: 'hidden' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            variants={{
              hidden: { y: '100%' },
              visible: {
                y: 0,
                transition: {
                  duration: 0.65,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: (i * stagger) + delay,
                },
              },
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </motion.span>
  );
}
