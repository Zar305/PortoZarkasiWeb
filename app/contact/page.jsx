import ContactSection from '../../components/ContactSection';

export const metadata = {
  title: 'Kontak & Kolaborasi Proyek',
  description:
    'Hubungi Zarkasi untuk mendiskusikan peluang proyek baru, konsultasi desain UI/UX, atau rekayasa website Next.js modern.',
};

export default function ContactPage() {
  const faqs = [
    {
      q: 'Bagaimana tahapan awal memulai kerja sama proyek?',
      a: 'Kita mulai dengan sesi diskusi singkat mengenai tujuan bisnis, target pengguna, dan fitur utama yang dibutuhkan. Setelah itu, saya akan menyusun rencana kerja, estimasi waktu, dan proposal biaya transparan.',
    },
    {
      q: 'Berapa lama estimasi pengerjaan suatu website?',
      a: 'Tergantung pada skala proyek. Website profil/landing page biasanya selesai dalam 1 — 2 minggu, sedangkan sistem antarmuka dashboard atau aplikasi web dinamis membutuhkan waktu 3 — 5 minggu.',
    },
    {
      q: 'Apakah bisa hanya memesan desain UI/UX tanpa kode (atau sebaliknya)?',
      a: 'Tentu saja. Anda bisa memesan perancangan desain antarmuka lengkap di Figma, atau memesan implementasi kode Next.js dari desain yang sudah Anda miliki.',
    },
    {
      q: 'Bagaimana mekanisme komunikasi selama proyek berjalan?',
      a: 'Komunikasi rutin dapat dilakukan melalui Email, WhatsApp, Google Meet, atau platform manajemen proyek seperti Notion/Trello dengan pembaruan berkala setiap minggu.',
    },
  ];

  return (
    <main id="main" className="page-wrapper container">
      {/* Header Halaman Kontak */}
      <section className="page-header reveal">
        <p className="eyebrow">
          <span className="status-dot"></span> 03 / MULAI PERCAKAPAN
        </p>
        <h1>
          Punya ide atau proyek?<br />
          Mari buat jadi <span className="highlight">kenyataan.</span>
        </h1>
        <p className="page-intro">
          Baik Anda ingin membangun produk baru dari awal, meredesain website lama agar lebih cepat dan modern, atau sekadar ingin berkonsultasi seputar UX — pintu saya selalu terbuka.
        </p>
      </section>

      {/* Komponen Kontak Utama (Info Kredensial & Formulir) */}
      <ContactSection isStandalonePage={true} />

      {/* Pertanyaan yang Sering Diajukan (FAQ) */}
      <section className="section faq-section reveal">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PERTANYAAN UMUM</p>
            <h2>Hal yang sering ditanyakan<br /><span className="muted-heading">seputar kerja sama.</span></h2>
          </div>
          <p className="section-intro">
            Beberapa informasi penting untuk membantu Anda memahami alur kerja dan komitmen profesional saya.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-card">
              <span className="faq-number">0{idx + 1}</span>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
