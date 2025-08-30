import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Navbar } from "../components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techanalyzen",
  description: "Maximize Your Growth with Techanalyzen Tech Services",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/android-icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-icon-144x144.png", type: "image/png", sizes: "144x144" },
      { url: "/android-icon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/android-icon-72x72.png", type: "image/png", sizes: "72x72" },
      { url: "/android-icon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/android-icon-36x36.png", type: "image/png", sizes: "36x36" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Google AdSense verification */}
        <meta name='google-adsense-account' content='ca-pub-5811365802634379' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col justify-between`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Navbar />

          <main className='w-full'>{children}</main>

          <Footer />
        </ThemeProvider>

        {/* Google AdSense Script */}
        <Script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5811365802634379'
          crossOrigin='anonymous'
          strategy='afterInteractive'
        />
      </body>
    </html>
  );
}
