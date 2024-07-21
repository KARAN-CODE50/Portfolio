import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const nohemi = localFont({
  src: './fonts/Nohemi-VF.ttf',
  display: 'swap',
  variable: '--font-nohemi'
})

const timesnew = localFont({
  src: './fonts/TIMESI.ttf',
  display: 'swap',
  variable: '--font-times'
})

export const metadata: Metadata = {
  title: "Karan Sarawagi",
  description: "Welcome to my portfolio showcasing patents, research papers, journal articles, conference papers, book chapters, projects, internships, volunteer work, and entrepreneurial ventures in Computer Science. Explore my achievements and download my CV.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nohemi.variable} ${timesnew.variable}`}>
      <body className={` bg-bg-color ${nohemi.variable}`}>{children}</body>
    </html>
  );
}
