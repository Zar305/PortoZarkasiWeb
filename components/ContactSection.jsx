'use client';

import { useState } from 'react';

export default function ContactSection({ isStandalonePage = false }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'web',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const emailAddress = 'zarkasi.dev@example.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      const subject = encodeURIComponent(
        `Kolaborasi Proyek: ${formState.service.toUpperCase()} - ${formState.name}`
      );
      const body = encodeURIComponent(
        `Halo Zarkasi,\n\nNama: ${formState.name}\nEmail: ${formState.email}\nLayanan: ${formState.service}\n\nPesan:\n${formState.message}`
      );
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <section className={`section contact-section ${isStandalonePage ? 'contact-standalone' : ''}`} id="contact">
      <div className={isStandalonePage ? '' : 'container'}>
        {!isStandalonePage && (
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">03 / PUNYA PROYEK ATAU IDE?</p>
              <h2>
                Mari bangun sesuatu<br />
                <span className="highlight">yang luar biasa.</span>
              </h2>
            </div>
            <p className="section-intro">
              Saya selalu terbuka untuk mendiskusikan peluang proyek baru, konsultasi desain UI/UX, maupun pengembangan web berkinerja tinggi.
            </p>
          </div>
        )}

        <div className="contact-grid reveal">
          {/* Kolom Informasi & Kredensial */}
          <div className="contact-info-panel">
            <div className="availability-card">
              <span className="status-indicator">
                <span className="ping-dot"></span>
                <span className="solid-dot"></span>
              </span>
              <div>
                <strong>Status Saat Ini</strong>
                <p>Tersedia untuk proyek freelance & kolaborasi tim</p>
              </div>
            </div>

            <div className="contact-channels">
              <div className="contact-card">
                <span className="contact-card-icon">✉</span>
                <div className="contact-card-text">
                  <span className="contact-label">EMAIL LANGSUNG</span>
                  <a href={`mailto:${emailAddress}`} className="contact-val">
                    {emailAddress}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-button"
                  onClick={handleCopyEmail}
                  title="Salin alamat email"
                  aria-label="Salin alamat email"
                >
                  {copied ? '✓ Tersalin' : 'Salin'}
                </button>
              </div>

              <div className="contact-card">
                <span className="contact-card-icon">📍</span>
                <div className="contact-card-text">
                  <span className="contact-label">LOKASI & ZONA WAKTU</span>
                  <span className="contact-val">Indonesia · WIB (UTC+7)</span>
                </div>
              </div>

              <div className="contact-card">
                <span className="contact-card-icon">⚡</span>
                <div className="contact-card-text">
                  <span className="contact-label">WAKTU RESPON</span>
                  <span className="contact-val">Biasanya dalam &lt; 24 jam kerja</span>
                </div>
              </div>
            </div>

            <div className="social-links-wrap">
              <span className="social-heading">TERHUBUNG DI MEDIA SOSIAL:</span>
              <div className="social-pills">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-pill"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-pill"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-pill"
                >
                  Dribbble ↗
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-pill"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>

          {/* Kolom Formulir Interaktif */}
          <div className="contact-form-panel">
            {status === 'success' ? (
              <div className="form-success-box">
                <span className="success-icon">✓</span>
                <h3>Pesan Anda Siap Dikirim!</h3>
                <p>
                  Aplikasi email Anda sedang dibuka untuk mengirimkan pesan ini langsung ke{' '}
                  <strong>{emailAddress}</strong>. Terima kasih telah menghubungi!
                </p>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => {
                    setStatus('idle');
                    setFormState({ name: '', email: '', service: 'web', message: '' });
                  }}
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nama Lengkap <span className="req">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Budi Santoso"
                      className="form-input"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Bisnis / Pribadi <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. budi@company.com"
                      className="form-input"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Kebutuhan Layanan
                  </label>
                  <select
                    id="service"
                    className="form-select"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  >
                    <option value="web">Pengembangan Web (Next.js / Frontend)</option>
                    <option value="uiux">Desain UI/UX & Prototyping</option>
                    <option value="redesign">Redesain & Optimalisasi Website</option>
                    <option value="consultation">Konsultasi Desain & Produk Digital</option>
                    <option value="other">Kolaborasi Lainnya</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Detail Proyek / Pesan <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    placeholder="Ceritakan gambaran proyek, target waktu, atau kebutuhan Anda..."
                    className="form-textarea"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="button button-primary submit-btn"
                >
                  {status === 'submitting' ? (
                    'Memproses...'
                  ) : (
                    <>
                      Kirim Pesan Langsung <span aria-hidden="true">↗</span>
                    </>
                  )}
                </button>
                <span className="form-note">
                  🔒 Data Anda bersifat privat dan hanya digunakan untuk keperluan komunikasi proyek.
                </span>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
