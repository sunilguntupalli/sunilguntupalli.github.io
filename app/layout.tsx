import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sunil Guntupalli | Java Full Stack Engineer',
  description: 'Senior Java Full Stack Engineer building scalable cloud-native applications and distributed systems.',
  keywords: ['Java', 'Spring Boot', 'Cloud Native', 'Kubernetes', 'Full Stack Engineer'],
  openGraph: { title: 'Sunil Guntupalli | Java Full Stack Engineer', description: 'Cloud-native applications and distributed systems.' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
