'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('portfolio-theme');
    let initialTheme = 'light';
    if (savedTheme === 'light' || savedTheme === 'dark') {
      initialTheme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      initialTheme = 'dark';
    }
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navigasi utama">
        <Link href="/" className="brand" aria-label="Zarkasi, halaman utama" onClick={closeMenu}>
          <span className="brand-mark">z.</span>
          <span>
            zarkasi<span className="brand-dot">.</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-menu"
          aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`} id="primary-menu">
          <Link
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            href="/"
            aria-current={pathname === '/' ? 'page' : undefined}
            onClick={closeMenu}
          >
            Beranda
          </Link>
          <Link
            className={`nav-link ${pathname === '/projects' ? 'active' : ''}`}
            href="/projects"
            aria-current={pathname === '/projects' ? 'page' : undefined}
            onClick={closeMenu}
          >
            Proyek
          </Link>
          <Link
            className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
            href="/about"
            aria-current={pathname === '/about' ? 'page' : undefined}
            onClick={closeMenu}
          >
            Tentang
          </Link>
          <Link
            className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
            href="/contact"
            aria-current={pathname === '/contact' ? 'page' : undefined}
            onClick={closeMenu}
          >
            Kontak
          </Link>
          <button
            className="theme-toggle"
            type="button"
            aria-label={mounted && theme === 'dark' ? 'Aktifkan tema terang' : 'Aktifkan tema gelap'}
            title="Ganti tema"
            onClick={toggleTheme}
          >
            <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path>
            </svg>
            <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
