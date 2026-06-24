import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sunil Guntupalli | Java Full Stack Engineer',
  description: 'Java full stack engineer building Spring Boot, React, Azure, and event-driven cloud applications.',
  keywords: ['Java', 'Spring Boot', 'React', 'Azure', 'Kafka', 'Kubernetes', 'Full Stack Engineer'],
  openGraph: { title: 'Sunil Guntupalli | Java Full Stack Engineer', description: 'Spring Boot, React, Azure, and event-driven cloud applications.' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
