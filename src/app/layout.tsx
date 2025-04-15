"use client";

import './globals.css';
import Navbar from './components/Navbar/index';
import ScrollToTop from './components/ScrollToTop/index';
import Footer from './components/Footer/index';
import Vlibras from './components/Vlibras/index'; 
import AccessibilityButton from "./components/AccessibilityButton/index";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br"
    suppressHydrationWarning>
      <body 
        cz-shortcut-listen="true">
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
