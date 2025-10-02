import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from '@/data/resume';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { NoSSR } from '@/components/NoSSR';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: `Portfolio profissional de ${personalInfo.name}. ${personalInfo.title} especializado em Data Science, Machine Learning e desenvolvimento web.`,
  keywords: ['Data Science', 'Machine Learning', 'Python', 'React', 'Next.js', 'Oceanografia', 'Pedro Calixto', 'PEDEA', 'SEMA-CE'],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://pedro-calixto.vercel.app',
    siteName: `${personalInfo.name} - Portfolio`,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: `Portfolio profissional de ${personalInfo.name} - Data Scientist & Oceanographer`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: `Portfolio profissional de ${personalInfo.name} - Data Scientist & Oceanographer`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f25924',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent hydration issues from browser extensions
              (function() {
                try {
                  // Remove any attributes added by browser extensions
                  const body = document.body;
                  if (body) {
                    const attributes = body.attributes;
                    for (let i = attributes.length - 1; i >= 0; i--) {
                      const attr = attributes[i];
                      if (attr.name.startsWith('inject_') || 
                          attr.name.startsWith('data-extension-') || 
                          attr.name === 'inject_video_svd' ||
                          attr.name.startsWith('data-') && attr.name.includes('extension') ||
                          attr.name.includes('chrome-extension') ||
                          attr.name.includes('moz-extension')) {
                        body.removeAttribute(attr.name);
                      }
                    }
                  }
                  
                  // Also clean up any extension-added elements
                  const extensionElements = document.querySelectorAll('[data-extension], [inject_], [data-chrome-extension]');
                  extensionElements.forEach(el => {
                    if (el.parentNode) {
                      el.parentNode.removeChild(el);
                    }
                  });
                } catch (e) {
                  // Ignore errors
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <NoSSR>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </NoSSR>
      </body>
    </html>
  );
}
