import Link from 'next/link';
import ProjectSection from '../../components/ProjectSection';

export const metadata = {
  title: 'Karya & Proyek Pilihan',
  description:
    'Eksplorasi desain antarmuka, studi kasus UI/UX, dan aplikasi web performa tinggi yang dirancang dan dikembangkan oleh Zarkasi.',
};

export default function ProjectsPage() {
  return (
    <main id="main" className="page-wrapper container">
      {/* Header Halaman Proyek */}
      <section className="page-header reveal">
        <p className="eyebrow">
          <span className="status-dot"></span> 01 / ARSIP KARYA & STUDI KASUS
        </p>
        <h1>
          Karya yang dirancang<br />
          dengan <span className="highlight">presisi & cerita.</span>
        </h1>
        <p className="page-intro">
          Eksplorasi komprehensif mulai dari konsep produk digital, desain sistem, hingga rekayasa website modern berbasis Next.js. Setiap proyek didorong oleh satu tujuan utama: membuat interaksi rumit menjadi pengalaman yang sederhana dan memuaskan bagi pengguna.
        </p>
      </section>

      {/* Bagian Galeri & Filter Proyek */}
      <ProjectSection isStandalonePage={true} />

      {/* Banner Call-to-Action Proyek */}
      <section className="page-cta-banner reveal">
        <div className="cta-banner-card">
          <p className="eyebrow">BUTUH SOLUSI SERUPA?</p>
          <h2>Punya visi produk yang ingin diwujudkan?</h2>
          <p>
            Saya siap membantu Anda mulai dari tahap riset antarmuka, penyusunan prototipe di Figma, hingga implementasi kode web yang cepat dan siap pakai.
          </p>
          <div className="cta-actions">
            <Link className="button button-primary" href="/contact">
              Mulai Diskusi Proyek <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-outline" href="/about">
              Kenali Cara Kerja Saya <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
