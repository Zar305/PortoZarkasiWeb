import Link from 'next/link';
import ProjectSection from '../components/ProjectSection';

export default function HomePage() {
  return (
    <main id="main">
      {/* Hero Section */}
      <section className="hero container" id="home">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span className="status-dot"></span> PORTOFOLIO PROFESIONAL{' '}
            <span className="eyebrow-year">2025 — 2026</span>
          </p>
          <h1>
            Ide yang baik<br />
            layak jadi <span className="highlight">nyata.</span>
          </h1>
          <p className="hero-description">
            Halo, saya <strong>Zarkasi</strong> — Digital Product Designer & Frontend Developer. Saya merancang pengalaman pengguna yang intuitif dan merekayasa website berkinerja tinggi yang siap mendukung pertumbuhan bisnis Anda.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">
              Jelajahi Karya <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/about">
              Tentang & Pengalaman <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hero-meta">
            <span className="meta-badge">📍 Berbasis di Indonesia (WIB)</span>
            <span className="meta-line"></span>
            <span className="meta-badge">⚡ Terbuka untuk Kontrak & Freelance</span>
          </div>
        </div>

        <div className="hero-art reveal" aria-label="Ilustrasi antarmuka desain digital" role="img">
          <div className="art-orbit orbit-one"></div>
          <div className="art-orbit orbit-two"></div>
          <div className="art-spark spark-one">✳</div>
          <div className="art-spark spark-two">✳</div>
          <div className="art-card">
            <div className="art-card-top">
              <span className="mini-brand">
                <i></i> studio notes
              </span>
              <span className="mini-menu">•••</span>
            </div>
            <div className="art-card-body">
              <span className="art-label">PHILOSOPHY // 014</span>
              <strong>
                Make it<br />meaningful.
              </strong>
              <span className="art-underline"></span>
            </div>
            <div className="art-card-bottom">
              <span>DESIGN WITH INTENTION</span>
              <span>↗</span>
            </div>
          </div>
          <div className="floating-note note-top">
            <span className="note-icon">✦</span>
            <span>
              Desain berorientasi<br />tujuan bisnis
            </span>
          </div>
          <div className="floating-note note-bottom">
            <span className="note-check">✓</span>
            <span>
              Arsitektur web<br />cepat & aksesibel
            </span>
          </div>
          <span className="art-caption">DESIGN · BUILD · REFINE</span>
        </div>

        <a className="scroll-cue" href="#featured" aria-label="Gulir ke bagian karya unggulan">
          <span></span> GULIR UNTUK MENJELAJAH
        </a>
      </section>

      {/* Featured Projects Preview (2 Karya Pilihan Utama) */}
      <div id="featured">
        <ProjectSection limit={2} />
      </div>

      {/* Nilai & Ringkasan Tentang Saya */}
      <section className="about-strip section" id="about-summary">
        <div className="container about-strip-inner reveal">
          <div className="about-symbol" aria-hidden="true">
            <span>z.</span>
            <i>✳</i>
          </div>
          <div className="about-strip-copy">
            <p className="eyebrow">02 / NILAI & FILOSOFI KERJA</p>
            <h2>
              Desain yang terasa tepat.<br />
              <span className="muted-heading">Teknologi yang terasa mudah.</span>
            </h2>
            <p>
              Saya menjembatani kesenjangan antara estetika desain antarmuka dan implementasi teknis kode modern. Dari riset perilaku pengguna, perancangan wireframe hingga deployment aplikasi Next.js yang kilat dan ramah SEO — setiap tahapan dikerjakan dengan standar profesional terbaik.
            </p>
            <div className="about-strip-actions">
              <Link className="button button-outline" href="/about">
                Pelajari Riwayat & Keahlian Saya <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="about-stats-column">
            <div className="stat-card">
              <strong>03+</strong>
              <span>Tahun Eksplorasi & Praktik Digital</span>
            </div>
            <div className="stat-card">
              <strong>25+</strong>
              <span>Antarmuka & Komponen Siap Pakai</span>
            </div>
            <div className="stat-card">
              <strong>100%</strong>
              <span>Komitmen Aksesibilitas & Kecepatan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ajakan Kolaborasi & Navigasi ke Halaman Kontak */}
      <section className="section contact-teaser-section">
        <div className="container contact-teaser-inner reveal">
          <p className="eyebrow">03 / PUNYA PROYEK ATAU IDE?</p>
          <h2>
            Mari buat sesuatu<br />
            <span className="highlight">yang berarti bersama.</span>
          </h2>
          <p>
            Punya proyek baru, ide digital yang ingin diwujudkan, atau sekadar ingin berkonsultasi? Saya selalu siap mendengarkan.
          </p>
          <div className="teaser-actions">
            <Link className="button button-primary" href="/contact">
              Buka Halaman Kontak <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/projects">
              Lihat Semua Portofolio <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
