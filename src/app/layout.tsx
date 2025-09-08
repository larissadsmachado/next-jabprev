"use client";

import './globals.css';
import Navbar from './components/Navbar/index';
import ScrollToTop from './components/ScrollToTop/index';
import Footer from './components/Footer/index';
import Vlibras from './components/Vlibras/index'; 
import AccessibilityButton from "./components/AccessibilityButton/index";
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5XX7RLTEGY"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5XX7RLTEGY');
          `}
        </Script>
      </head>
      <body cz-shortcut-listen="true">
        <Navbar />
        {children}
        <AccessibilityButton />
        <Vlibras />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
