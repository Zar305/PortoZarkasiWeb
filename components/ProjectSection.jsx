'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 'finance',
    category: 'design',
    type: 'UI / UX DESIGN · FINTECH',
    modalCategory: 'STUDI KASUS UI / UX · FINTECH',
    year: '2025',
    role: 'Lead UI/UX Designer & Prototyper',
    client: 'Finora Inc.',
    metric: '✦ +42% Efisiensi Alur Transaksi',
    title: 'Finora — Dashboard Finansial Pintar & Intuitif',
    summary:
      'Platform analitik keuangan cerdas yang menyederhanakan data kas rumit menjadi visualisasi ringkas dan mudah dipahami dalam hitungan detik.',
    challenge:
      'Dashboard keuangan konvensional seringkali membingungkan pengguna awam karena dipenuhi angka statis tanpa konteks visual yang jelas.',
    solution:
      'Merancang sistem kartu hierarkis, visualisasi tren visual dinamis, serta navigasi pintas yang mengutamakan keamanan dan kemudahan pemantauan saldo.',
    impact:
      'Meningkatkan durasi retensi pengguna sebesar 35% dan menurunkan tingkat drop-off saat transaksi harian sebesar 28%.',
    tags: ['Figma', 'Next.js', 'Data Visualization', 'Design System'],
    indexLabel: '01 — KONSEP UI / UX',
    renderVisual: () => (
      <span className="finance-window">
        <span className="window-dots">● ● ●</span>
        <span className="finance-title">
          Good morning,<br />Alexandra <span>✦</span>
        </span>
        <span className="finance-balance-label">TOTAL PORTFOLIO BALANCE</span>
        <span className="finance-balance">
          $24,680<small>.50</small>
        </span>
        <span className="finance-chart">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </span>
        <span className="finance-bottom">
          <i>Overview</i><i>Transactions</i><i>Analytics</i>
        </span>
      </span>
    ),
  },
  {
    id: 'nusa',
    category: 'web',
    type: 'WEB DESIGN & DEVELOPMENT · LIFESTYLE',
    modalCategory: 'STUDI KASUS WEB · ARSITEKTUR & LIFESTYLE',
    year: '2024',
    role: 'Creative Web Developer & Art Director',
    client: 'Nusa Living Studio',
    metric: '✦ 100/100 Skor Lighthouse Web',
    title: 'Nusa Studio — Ruang Estetika Arsitektur Modern',
    summary:
      'Website editorial dan showcase produk gaya hidup berbasis arsitektur dengan tipografi anggun, tata letak bernapas, dan performa pemuatan kilat.',
    challenge:
      'Menciptakan representasi digital yang mampu menyampaikan tekstur dan nuansa kehangatan material fisik tanpa mengorbankan kecepatan loading.',
    solution:
      'Menerapkan optimasi aset citra modern, CSS layout berbasis grid asimetris yang dinamis, serta mikro-interaksi responsif yang halus.',
    impact:
      'Mendapatkan pengakuan kurasi desain editorial dan mencapai waktu pemuatan halaman pertama di bawah 0.8 detik secara global.',
    tags: ['Next.js', 'Responsive Web', 'Editorial Layout', 'SEO Optimized'],
    indexLabel: '02 — PENGEMBANGAN WEB',
    renderVisual: () => (
      <span className="nusa-window">
        <span className="nusa-nav">
          NUSA <span>STUDIO&nbsp;&nbsp;&nbsp; JOURNAL&nbsp;&nbsp;&nbsp; ARCHIVE</span>
        </span>
        <span className="nusa-copy">
          A slower<br />kind of <i>living.</i>
        </span>
        <span className="nusa-sub">Objects made to stay. Spaces crafted with intention.</span>
        <span className="nusa-link">DISCOVER ARCHIVE &nbsp;↗</span>
        <span className="nusa-shape"></span>
        <span className="nusa-stamp">
          CURATED<br />SUSTAINABLE<br />CRAFT
        </span>
      </span>
    ),
  },
  {
    id: 'grow',
    category: 'design',
    type: 'PRODUCT DESIGN · WELLNESS',
    modalCategory: 'STUDI KASUS PRODUK · DIGITAL WELLNESS',
    year: '2024',
    role: 'Product Designer & Design System Lead',
    client: 'Grow Together App',
    metric: '✦ 15.000+ Pengguna Aktif',
    title: 'Grow Together — Aplikasi Pembentuk Kebiasaan Positif',
    summary:
      'Aplikasi pelacak kebiasaan holistik yang menggunakan pendekatan psikologi positif tanpa menciptakan rasa bersalah pada pengguna.',
    challenge:
      'Banyak aplikasi habit tracking terasa seperti pekerjaan kantor yang menuntut dan membuat pengguna cepat merasa lelah (burnout).',
    solution:
      'Menghadirkan bahasa desain yang organik, warna-warna lembut penenang mata, serta visualisasi perkembangan tanaman yang tumbuh seiring konsistensi pengguna.',
    impact:
      'Meningkatkan skor NPS hingga 78 dan retensi pengguna selama 30 hari berturut-turut mencapai rekor 64%.',
    tags: ['Mobile UI', 'Design System', 'Accessibility WCAG', 'UX Research'],
    indexLabel: '03 — DESAIN PRODUK',
    renderVisual: () => (
      <span className="grow-window">
        <span className="grow-top">
          <span className="grow-logo">
            grow<span>.</span>
          </span>
          <span className="grow-menu">PROGRESS&nbsp; ☰</span>
        </span>
        <span className="grow-headline">
          Small steps.<br /><i>Big growth.</i>
        </span>
        <span className="grow-description">Your next journey begins with one mindful choice.</span>
        <span className="grow-cta">TRACK TODAY&nbsp; ↗</span>
        <span className="grow-plant">✳</span>
        <span className="grow-label">PROGRESS OVER PERFECTION</span>
      </span>
    ),
  },
  {
    id: 'cloud',
    category: 'web',
    type: 'FULLSTACK WEB · DEV PLATFORM',
    modalCategory: 'STUDI KASUS WEB · CLOUD INFRASTRUCTURE',
    year: '2025',
    role: 'Frontend Architect & UI Engineer',
    client: 'Kroma Cloud',
    metric: '✦ 99.99% Uptime SLA Dashboard',
    title: 'Kroma — Konsol Manajemen Cloud & API Terdistribusi',
    summary:
      'Dashboard manajemen infrastruktur cloud yang menyajikan metrik pemantauan server real-time dan manajemen container secara terpusat.',
    challenge:
      'Menampilkan aliran ribuan metrik per detik tanpa membuat browser pengguna mengalami lag atau memory leak.',
    solution:
      'Memanfaatkan Next.js Server Components, virtualized list rendering, serta antarmuka monokromatik kontras tinggi untuk pemantauan malam hari.',
    impact:
      'Mengurangi waktu diagnosa insiden server dari rata-rata 12 menit menjadi hanya 3 menit bagi tim engineer.',
    tags: ['Next.js 14', 'React Server Components', 'Tailwind', 'Real-time WebSockets'],
    indexLabel: '04 — PLATFORM WEB',
    renderVisual: () => (
      <span className="cloud-window">
        <span className="cloud-header">
          <span className="cloud-badge">KROMA // CORE v2.4</span>
          <span className="cloud-status">● SYSTEM HEALTHY</span>
        </span>
        <span className="cloud-metrics">
          <span>
            <small>LATENCY</small>
            <strong>12ms</strong>
          </span>
          <span>
            <small>CPU LOAD</small>
            <strong>18.4%</strong>
          </span>
          <span>
            <small>CONTAINERS</small>
            <strong>48/48</strong>
          </span>
        </span>
        <span className="cloud-terminal">
          <i>$ kroma deploy --region asia-east --opt</i>
          <i>✓ Cluster synced successfully (0.42s)</i>
        </span>
        <span className="cloud-footer">
          <span>DEPLOYED ON EDGE RUNTIME</span>
          <span>↗ MONITOR</span>
        </span>
      </span>
    ),
  },
];

export default function ProjectSection({ isStandalonePage = false, limit = null }) {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const dialogRef = useRef(null);

  const openProjectModal = (project) => {
    setActiveProject(project);
    if (dialogRef.current) {
      if (!dialogRef.current.open) {
        dialogRef.current.showModal();
      }
    }
  };

  const closeProjectModal = () => {
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
    setActiveProject(null);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleBackdropClick = (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        closeProjectModal();
      }
    };

    dialog.addEventListener('click', handleBackdropClick);
    return () => {
      dialog.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  let displayedProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  if (limit && typeof limit === 'number') {
    displayedProjects = displayedProjects.slice(0, limit);
  }

  const designCount = projects.filter((p) => p.category === 'design').length;
  const webCount = projects.filter((p) => p.category === 'web').length;

  return (
    <section className={`section projects-section ${isStandalonePage ? 'projects-standalone' : ''}`} id="projects">
      <div className="container">
        {!isStandalonePage && (
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">01 / KARYA UNGGULAN</p>
              <h2>
                Proyek yang dirancang<br />
                <span className="muted-heading">dengan presisi & tujuan.</span>
              </h2>
            </div>
            <p className="section-intro">
              Setiap karya menggabungkan estetika desain intuitif dengan kode berkinerja tinggi untuk menghadirkan dampak nyata bagi pengguna.
            </p>
          </div>
        )}

        {/* Toolbar Filter */}
        <div className="project-toolbar reveal" role="group" aria-label="Filter kategori proyek">
          <button
            className={`filter-button ${filter === 'all' ? 'is-active' : ''}`}
            type="button"
            data-filter="all"
            aria-pressed={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            Semua Karya <span>0{projects.length}</span>
          </button>
          <button
            className={`filter-button ${filter === 'design' ? 'is-active' : ''}`}
            type="button"
            data-filter="design"
            aria-pressed={filter === 'design'}
            onClick={() => setFilter('design')}
          >
            UI / UX & Produk <span>0{designCount}</span>
          </button>
          <button
            className={`filter-button ${filter === 'web' ? 'is-active' : ''}`}
            type="button"
            data-filter="web"
            aria-pressed={filter === 'web'}
            onClick={() => setFilter('web')}
          >
            Pengembangan Web <span>0{webCount}</span>
          </button>
        </div>

        {/* Grid Proyek */}
        <div className="project-grid">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              className="project-card reveal"
              data-category={project.category}
            >
              <div className="project-card-header">
                <span className="project-meta-year">{project.year}</span>
                <span className="project-meta-metric">{project.metric}</span>
              </div>

              <button
                className={`project-visual visual-${project.id}`}
                type="button"
                data-project={project.id}
                aria-label={`Buka studi kasus lengkap ${project.title}`}
                onClick={() => openProjectModal(project)}
              >
                <span className="visual-index">{project.indexLabel}</span>
                {project.renderVisual()}
                <span className="visual-open">Studi Kasus ↗</span>
              </button>

              <div className="project-info">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3
                    className="project-title-link"
                    onClick={() => openProjectModal(project)}
                    role="button"
                    tabIndex={0}
                  >
                    {project.title}
                  </h3>
                </div>
                <span
                  className="project-arrow"
                  aria-hidden="true"
                  onClick={() => openProjectModal(project)}
                >
                  ↗
                </span>
              </div>

              <p className="project-summary">{project.summary}</p>

              <div className="project-card-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="card-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="project-case-btn"
                onClick={() => openProjectModal(project)}
              >
                Pelajari Studi Kasus <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>

        {/* Tautan ke halaman proyek penuh jika di halaman beranda */}
        {!isStandalonePage && (
          <div className="view-all-projects-wrap reveal">
            <Link href="/projects" className="button button-outline">
              Lihat Seluruh Arsip Proyek (0{projects.length}) <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>

      {/* Dialog Modal Studi Kasus Profesional */}
      <dialog ref={dialogRef} className="project-dialog" aria-labelledby="dialog-title">
        <form
          method="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            closeProjectModal();
          }}
        >
          <button
            type="button"
            className="dialog-close"
            aria-label="Tutup jendela studi kasus"
            onClick={closeProjectModal}
          >
            ×
          </button>
        </form>
        {activeProject && (
          <div className="dialog-content">
            <div className="dialog-header-meta">
              <span className="dialog-category-badge">{activeProject.modalCategory}</span>
              <span className="dialog-year-badge">{activeProject.year}</span>
            </div>

            <h2 id="dialog-title">{activeProject.title}</h2>

            <div className="dialog-quick-specs">
              <div className="spec-item">
                <span className="spec-label">PERAN</span>
                <span className="spec-value">{activeProject.role}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">KLIEN / PROYEK</span>
                <span className="spec-value">{activeProject.client}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">SOROTAN HASIL</span>
                <span className="spec-value highlight-spec">{activeProject.metric}</span>
              </div>
            </div>

            <div className="dialog-body-section">
              <div className="case-block">
                <h4>🎯 Tantangan Proyek</h4>
                <p>{activeProject.challenge}</p>
              </div>

              <div className="case-block">
                <h4>💡 Solusi Desain & Teknis</h4>
                <p>{activeProject.solution}</p>
              </div>

              <div className="case-block">
                <h4>📈 Hasil & Dampak</h4>
                <p>{activeProject.impact}</p>
              </div>
            </div>

            <div className="dialog-tags-wrap">
              <span className="tags-label">TEKNOLOGI & SKILL:</span>
              <div className="dialog-tags">
                {activeProject.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="dialog-cta-bar">
              <Link
                href="/contact"
                className="button button-primary"
                onClick={closeProjectModal}
              >
                Diskusikan Proyek Serupa <span aria-hidden="true">↗</span>
              </Link>
              <button
                type="button"
                className="button button-outline"
                onClick={closeProjectModal}
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
