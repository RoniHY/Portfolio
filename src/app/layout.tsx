import type { Metadata } from 'next';
import { inter, lora } from './fonts';
import '@/styles/variables.css';
import '@/styles/reset.css';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Pedro Gutierrez — Portfolio',
  description:
    'Portfolio, CV, and professional experience of Pedro Gutierrez — Digital Marketer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
