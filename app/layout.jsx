import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const viewport = {
  themeColor: '#f5f6f2',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'Zarkasi — Digital Designer & Web Developer',
    template: '%s — Zarkasi',
  },
  description:
    'Portofolio Zarkasi — desain digital dan pengembangan web yang mengutamakan pengalaman pengguna.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.dataset.theme = 'dark';
                  } else {
                    document.documentElement.dataset.theme = 'light';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Lewati ke konten
        </a>
        <Navbar />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
