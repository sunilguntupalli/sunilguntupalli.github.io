import type { Metadata } from 'next';
import './globals.css';
import Analytics from './components/analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://sunilguntupalli.github.io'),
  title: 'Sunil Guntupalli | Java Software Engineer',
  description: 'Java Software Engineer building Spring Boot microservices, REST APIs, cloud-ready deployments, IAM workflows, and event-driven backend systems.',
  keywords: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'IAM', 'SailPoint', 'Kafka', 'Kubernetes', 'Backend Engineer'],
  authors: [{ name: 'Sunil Guntupalli', url: 'https://github.com/sunilguntupalli' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Sunil Guntupalli | Java Software Engineer',
    description: 'Spring Boot microservices, REST APIs, IAM workflows, cloud deployments, and event-driven backend systems.',
    url: '/',
    siteName: 'Sunil Guntupalli',
    type: 'website',
    images: [{ url: '/images/cinematic-hero.png', alt: 'Sunil Guntupalli portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunil Guntupalli | Java Software Engineer',
    description: 'Spring Boot microservices, REST APIs, IAM workflows, cloud deployments, and event-driven backend systems.',
    images: ['/images/cinematic-hero.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sunil Guntupalli',
    url: 'https://sunilguntupalli.github.io/',
    jobTitle: 'Java Software Engineer',
    sameAs: [
      'https://github.com/sunilguntupalli',
      'https://www.linkedin.com/in/sunilguntupalli',
    ],
    knowsAbout: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'IAM', 'SailPoint', 'Kafka', 'Kubernetes'],
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
