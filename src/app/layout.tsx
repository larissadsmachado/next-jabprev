import './globals.css';
import Navbar from './components/Navbar/index';
import ScrollToTop from './components/ScrollToTop/index';
import Footer from './components/Footer/index';
import Vlibras from './components/Vlibras/index'; 
import AccessibilityButton from "./components/AccessibilityButton/index";
import BotaoFlutuante from "./components/BotaoFlutuante/index"

export const metadata = {
  title: 'JABPREV',
  description: 'Desenvolvido por: Secretaria Executiva de Governo Digital | SEGD'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br"
    suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <AccessibilityButton />
        <Vlibras />
        <ScrollToTop />
        <BotaoFlutuante/>
        <Footer />
      </body>
    </html>
  );
}
