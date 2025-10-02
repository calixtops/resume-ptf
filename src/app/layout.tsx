import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from '@/data/resume';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ClientOnly } from '@/components/ClientOnly';

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
                    const attributes = Array.from(body.attributes);
                    attributes.forEach(attr => {
                      if (attr.name.startsWith('inject_') || 
                          attr.name.startsWith('data-extension-') || 
                          attr.name === 'inject_video_svd' ||
                          attr.name.startsWith('data-') && attr.name.includes('extension') ||
                          attr.name.includes('chrome-extension') ||
                          attr.name.includes('moz-extension') ||
                          attr.name.includes('firefox-extension') ||
                          attr.name.startsWith('data-') && attr.name.includes('browser') ||
                          attr.name.startsWith('data-') && attr.name.includes('addon')) {
                        body.removeAttribute(attr.name);
                      }
                    });
                  }
                  
                  // Clean up extension-added elements
                  const extensionSelectors = [
                    '[data-extension]',
                    '[inject_]',
                    '[data-chrome-extension]',
                    '[data-moz-extension]',
                    '[data-firefox-extension]',
                    '[data-browser-extension]',
                    '[data-addon]'
                  ];
                  
                  extensionSelectors.forEach(selector => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(el => {
                      if (el.parentNode) {
                        el.parentNode.removeChild(el);
                      }
                    });
                  });
                  
                  // Clean up any script tags added by extensions
                  const scripts = document.querySelectorAll('script[src*="extension"], script[src*="addon"]');
                  scripts.forEach(script => {
                    if (script.parentNode) {
                      script.parentNode.removeChild(script);
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
        <ClientOnly>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
