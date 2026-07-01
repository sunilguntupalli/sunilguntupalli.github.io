import type { Metadata } from 'next';
import './globals.css';
import Analytics from './components/analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://sunilguntupalli.github.io'),
  title: 'Sunil Guntupalli | Java Full Stack Engineer',
  description: 'Java full stack engineer building Spring Boot, React, Azure, and event-driven cloud applications.',
  keywords: ['Java', 'Spring Boot', 'React', 'Azure', 'Kafka', 'Kubernetes', 'Full Stack Engineer'],
  authors: [{ name: 'Sunil Guntupalli', url: 'https://github.com/sunilguntupalli' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Sunil Guntupalli | Java Full Stack Engineer',
    description: 'Spring Boot, React, Azure, and event-driven cloud applications.',
    url: '/',
    siteName: 'Sunil Guntupalli',
    type: 'website',
    images: [{ url: '/images/cinematic-hero.png', alt: 'Sunil Guntupalli portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunil Guntupalli | Java Full Stack Engineer',
    description: 'Spring Boot, React, Azure, and event-driven cloud applications.',
    images: ['/images/cinematic-hero.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sunil Guntupalli',
    url: 'https://sunilguntupalli.github.io/',
    jobTitle: 'Java Full Stack Engineer',
    sameAs: [
      'https://github.com/sunilguntupalli',
      'https://www.linkedin.com/in/sunilguntupalli',
    ],
    knowsAbout: ['Java', 'Spring Boot', 'React', 'Azure', 'Kafka', 'Kubernetes'],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
