import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { personalInfo } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: personalInfo.domain ? new URL(personalInfo.domain) : undefined,
  title: {
    default: `${personalInfo.name} | ${personalInfo.title} Portfolio`,
    template: `%s | ${personalInfo.name}`
  },
  description: personalInfo.description,
  keywords: personalInfo.keywords,
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.domain,
    title: `${personalInfo.name} | ${personalInfo.title} Portfolio`,
    description: personalInfo.description,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.title} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title} Portfolio`,
    description: personalInfo.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
