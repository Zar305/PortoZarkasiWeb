import Link from 'next/link';

export const metadata = {
  title: 'Tentang Saya & Riwayat Profesional',
  description:
    'Profil profesional Zarkasi: pengalaman digital product design, web engineering, alur kerja, dan keahlian teknis.',
};

export default function AboutPage() {
  const experiences = [
    {
      period: '2024 — Sekarang',
      role: 'Digital Product Designer & Frontend Developer',
      type: 'Freelance & Kontrak Proyek',
      description:
        'Merancang arsitektur antarmuka aplikasi web dan mobile, membangun website modern berbasis Next.js dan Tailwind CSS, serta membantu bisnis merumuskan identitas digital yang berorientasi konversi.',
      highlights: ['Pembangunan 10+ modul desain sistem kustom', 'Optimasi skor performa Core Web Vitals hingga 95+'],
    },
    {
      period: '2023 — 2024',
      role: 'UI/UX Designer & Web Developer',
      type: 'Kolaborasi Studio & Agensi',
      description:
        'Bertanggung jawab merancang prototipe interaktif high-fidelity di Figma, melakukan user testing, dan mengubah desain visual menjadi halaman web responsif yang kompatibel di seluruh browser.',
      highlights: ['Mendesain ulang 3 dashboard B2B SaaS', 'Menyusun komponen web modular reusable'],
    },
    {
      period: '2022 — 2023',
      role: 'Web Interface Developer (Eksplorasi & Proyek Riset)',
      type: 'Pengembangan Mandiri',
      description:
        'Fokus memperdalam standar web modern, arsitektur JavaScript, aksesibilitas antarmuka (a11y), dan tipografi digital terstruktur.',
      highlights: ['Penyelesaian puluhan proyek studi kasus web', 'Implementasi desain responsif mobile-first'],
    },
  ];

  const workSteps = [
    {
      number: '01',
      icon: '⌕',
      title: 'Riset & Pemahaman Masalah',
      desc: 'Mempelajari tujuan bisnis klien, mengidentifikasi target pengguna, dan menentukan metrik keberhasilan produk sebelum menulis sebaris kode pun.',
    },
    {
      number: '02',
      icon: '📐',
      title: 'Arsitektur Informasi & Wireframe',
      desc: 'Menata alur pengguna (user journey) yang logis, mengurangi hambatan navigasi, dan merancang wireframe struktural dengan hierarki yang jelas.',
    },
    {
      number: '03',
      icon: '✳',
      title: 'Desain Visual & Sistem Antarmuka',
      desc: 'Menciptakan prototipe interaktif di Figma menggunakan komponen desain sistem yang konsisten, palet warna berkarakter, dan tipografi ekspresif.',
    },
    {
      number: '04',
      icon: '⚡',
      title: 'Pengembangan Kode & Optimasi',
      desc: 'Menerjemahkan rancangan ke dalam Next.js / React dengan kode bersih, aksesibel, SEO-friendly, dan dioptimasi hingga kecepatan muat maksimal.',
    },
  ];

  return (
    <main id="main" className="page-wrapper container">
      {/* Hero Tentang Saya */}
      <section className="about-hero reveal">
        <div className="about-hero-tag">
          <span className="status-dot"></span> 02 / PROFIL PROFESIONAL & LATAR BELAKANG
        </div>
        <h1>
          Senang membuat hal rumit<br />
          terasa <span className="highlight">sederhana & terarah.</span>
        </h1>
        <p className="about-lead">
          Saya <strong>Zarkasi</strong> — kreator digital yang beroperasi di persimpangan antara desain produk visual (UI/UX) dan rekayasa web modern. Saya percaya bahwa produk terbaik lahir dari rasa ingin tahu yang mendalam, empati kepada pengguna, serta ketelitian tinggi pada detail implementasi kode.
        </p>
      </section>

      {/* Profil Visual & Narasi */}
      <section className="about-profile section">
        <div className="profile-card reveal" aria-label="Inisial Zarkasi dalam ilustrasi abstrak">
          <div className="profile-ring"></div>
          <div className="profile-initial">
            z<span>.</span>
          </div>
          <span className="profile-card-caption">DESIGNING WITH CURIOSITY & CODE</span>
          <span className="profile-spark">✳</span>
          <div className="profile-badge">PRODUK & WEB</div>
        </div>

        <div className="profile-copy reveal">
          <p className="eyebrow">FILOSOFI & CARA PANDANG</p>
          <h2>
            Bukan sekadar tampilan visual,<br />
            tapi bagaimana produk itu bekerja.
          </h2>
          <p>
            Bagi saya, desain bukan hanya ornamen visual atau warna yang cantik di layar. Desain adalah alat bantu untuk memudahkan orang menyelesaikan masalah mereka dengan usaha paling minimal.
          </p>
          <p>
            Karena memiliki keahlian di bidang pemrograman web (khususnya ekosistem React dan Next.js), saya dapat merancang antarmuka yang tidak hanya indah di Figma, namun juga realistis, efisien, dan mulus saat dieksekusi menjadi kode produksi nyata.
          </p>
          <div className="profile-action-links">
            <Link className="button button-primary" href="/projects">
              Jelajahi Proyek Pilihan <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/contact">
              Ajak Diskusi Proyek <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Pengalaman Profesional */}
      <section className="experience-section section">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">REKAM JEJAK & PERJALANAN</p>
            <h2>
              Pengalaman profesional<br />
              <span className="muted-heading">& kontribusi karya.</span>
            </h2>
          </div>
          <p className="section-intro">
            Perjalanan saya dalam terus mengasah kemampuan desain dan rekayasa teknologi web dari waktu ke waktu.
          </p>
        </div>

        <div className="experience-timeline reveal">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot"></span>
                <span className="timeline-line"></span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <span className="timeline-period">{exp.period}</span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-type">{exp.type}</span>
                  </div>
                </div>
                <p className="timeline-desc">{exp.description}</p>
                <div className="timeline-highlights">
                  {exp.highlights.map((h, i) => (
                    <span key={i} className="highlight-tag">
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alur Kerja & Proses */}
      <section className="section approach-section">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">METODOLOGI KERJA</p>
            <h2>
              Proses terstruktur.<br />
              <span className="muted-heading">Hasil yang terukur & konsisten.</span>
            </h2>
          </div>
          <p className="section-intro">
            Setiap proyek dikerjakan dengan pendekatan transparan dan berorientasi solusi, menjaga timeline tetap tepat sasaran.
          </p>
        </div>

        <div className="approach-grid">
          {workSteps.map((step, idx) => (
            <article key={idx} className="approach-card reveal">
              <span className="approach-number">{step.number}</span>
              <span className="approach-icon">{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Keahlian & Teknologi Stack */}
      <section className="skills-section section reveal">
        <div className="skills-header">
          <p className="eyebrow">ARSENAL TEKNOLOGI & SKILL</p>
          <h2>
            Alat bantu pilihan<br />
            <span className="muted-heading">untuk hasil terbaik.</span>
          </h2>
          <p className="skills-intro">
            Saya terus memperbarui toolset dan standar teknologi untuk memastikan setiap website yang dibangun modern, aman, dan mudah dirawat di masa depan.
          </p>
        </div>

        <div className="skill-groups">
          <div className="skill-group-box">
            <div className="skill-group-title">
              <span className="skill-badge-icon">🎨</span>
              <h3>Desain Produk & UI/UX</h3>
            </div>
            <div className="skill-list">
              <span>UI/UX Design</span>
              <span>Design System</span>
              <span>Figma & FigJam</span>
              <span>Wireframing</span>
              <span>Interactive Prototyping</span>
              <span>User Journey Mapping</span>
              <span>Information Architecture</span>
              <span>WCAG Accessibility</span>
            </div>
          </div>

          <div className="skill-group-box">
            <div className="skill-group-title">
              <span className="skill-badge-icon">💻</span>
              <h3>Frontend & Web Development</h3>
            </div>
            <div className="skill-list">
              <span>Next.js 14 (App Router)</span>
              <span>React.js</span>
              <span>JavaScript (ES6+)</span>
              <span>TypeScript Basics</span>
              <span>HTML5 Semantics</span>
              <span>CSS3 & Modern Flexbox/Grid</span>
              <span>Tailwind CSS</span>
              <span>Responsive Web Design</span>
            </div>
          </div>

          <div className="skill-group-box">
            <div className="skill-group-title">
              <span className="skill-badge-icon">🛠</span>
              <h3>Workflow, Tools & Performance</h3>
            </div>
            <div className="skill-list">
              <span>Git & GitHub</span>
              <span>Vercel Deployment</span>
              <span>Chrome DevTools</span>
              <span>Lighthouse Audits</span>
              <span>SEO On-Page</span>
              <span>Cross-Browser Compatibility</span>
              <span>VS Code</span>
              <span>Performance Optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Call-to-Action Halaman Tentang */}
      <section className="page-cta-banner reveal">
        <div className="cta-banner-card">
          <p className="eyebrow">LANJUTKAN KE TAHAP BERIKUTNYA</p>
          <h2>Ide Anda bisa jadi awal yang baik.</h2>
          <p>
            Punya proyek baru, tawaran kerja sama tim, atau ingin sekadar bertukar pikiran seputar desain antarmuka dan teknologi web?
          </p>
          <div className="cta-actions">
            <Link className="button button-primary" href="/contact">
              Buka Halaman Kontak <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-outline" href="/projects">
              Jelajahi Karya Pilihan <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
