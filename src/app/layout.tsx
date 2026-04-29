import type { Metadata } from 'next';
import { inter, lora } from './fonts';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { GsapProvider } from '@/components/shared/GsapProvider';
import '@/styles/variables.css';
import '@/styles/reset.css';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Pedro Gutierrez — Portfolio',
  description:
    'Portfolio and professional services of Pedro Gutierrez — Software Development, Digital Marketing & Design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <LanguageProvider>
          <GsapProvider>
            {children}
          </GsapProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
