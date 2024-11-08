import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fluorescent | Beautiful Landing Page Template",
  description: "A modern, animated landing page template for SaaS and digital products.",
  keywords: "landing page, template, SaaS, startup, business, modern, animated",
  twitter: {
    card: 'summary_large_image',
    title: "Fluorescent | Beautiful Landing Page Template",
    description: "A modern, animated landing page template for SaaS and digital products.",
  },
  openGraph: {
    title: "Fluorescent | Beautiful Landing Page Template",
    description: "A modern, animated landing page template for SaaS and digital products.",
    url: "https://example.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex flex-col min-h-screen bg-gradient-to-b from-black to-gray-900 text-white relative">
            <header className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center relative z-20">
              
              <div className="flex items-center mb-4 sm:mb-0">
                <Image
                  src="/icon.png"
                  alt="Fluorescent Logo"
                  width={32}
                  height={32}
                  className="rounded-md mr-2"
                />
                <h1 className="text-2xl font-bold">Fluorescent</h1>
              </div>
              
              <nav className="mb-4 sm:mb-0">
                <ul className="flex space-x-4 sm:space-x-6">
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                </ul>
              </nav>
              <Link href="#">
                <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900 transition-colors w-full sm:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Get Started
                </Button>
              </Link>
            </header>

            {children}

            <footer className="container mx-auto px-4 py-8 text-center text-gray-400 relative z-20">
              <p>
                Fluorescent. A landing page template by{' '}
                <Link href="https://tago.works" className="text-gray-300 hover:text-white transition-colors">tagoWorks</Link>.
              </p>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
