'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [year, setYear] = useState('2025');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="brand" href="/" aria-label="Zarkasi, halaman utama">
          <span className="brand-mark">z.</span>
          <span>
            zarkasi<span className="brand-dot">.</span>
          </span>
        </Link>
        <nav className="footer-nav" aria-label="Navigasi footer">
          <Link href="/">Beranda</Link>
          <Link href="/projects">Proyek</Link>
          <Link href="/about">Tentang</Link>
          <Link href="/contact">Kontak</Link>
        </nav>
        <span>
          Dirancang dengan rasa ingin tahu. © <span>{year}</span> Zarkasi
        </span>
        <a className="back-top" href="#main">
          Kembali ke atas ↑
        </a>
      </div>
    </footer>
  );
}
