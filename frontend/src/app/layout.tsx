import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/lib/auth-context';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'SQL Quest — SQL Masterclass',
  description: 'A focused, distraction-free engineering workspace to master essential SQL database & query fundamentals for technical job interviews.',
  keywords: ['SQL', 'SQLite', 'Database', 'Queries', 'Technical Interview', 'Coding Workspace', 'Coding Interview', 'VS Code', 'Data Structures', 'Algorithms'],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#090909]">
      <body className="min-h-screen bg-[#090909] text-[#F5F5F5] selection:bg-[#FF6B00]/30 selection:text-white antialiased">
        <AuthProvider>
          <Navbar />
          <main className="w-full">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
