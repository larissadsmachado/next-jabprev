import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import ScrollToTop from './components/ScrollToTop/index';
import Footer from './components/Footer/index';
import Vlibras from './components/Vlibras/index'; 

export const metadata = {
  title: 'JABPREV',
  description: 'Desenvolvido por: Secretaria Executiva de Governo Digital | SEGD',
  icons: {
    icon: '/favicon.ico',
  },
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

        <Vlibras />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
