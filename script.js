const root = document.documentElement;
const themeButtons = document.querySelectorAll(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light" || savedTheme === "dark") {
  root.dataset.theme = savedTheme;
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.dataset.theme = "dark";
}

function updateThemeButtons() {
  const isDark = root.dataset.theme === "dark";
  themeButtons.forEach((button) => {
    button.setAttribute("aria-label", isDark ? "Aktifkan tema terang" : "Aktifkan tema gelap");
  });
}

updateThemeButtons();
themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", root.dataset.theme);
    updateThemeButtons();
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Buka menu" : "Tutup menu");
    navMenu.classList.toggle("is-open", !isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
      navMenu.classList.remove("is-open");
    });
  });
}

// Nav link immediate click animation
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    projectCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

const projectDetails = {
  finance: {
    category: "KONSEP UI / UX · FINTECH",
    title: "Finora — Keuangan lebih tenang",
    description: "Eksplorasi dashboard finansial yang merangkum saldo, aktivitas, dan tren pengeluaran dalam tampilan yang mudah dipindai. Fokus konsep: hierarki informasi, keterbacaan, dan rasa percaya.",
    tags: ["Dashboard", "Visualisasi data", "UI Design"]
  },
  nusa: {
    category: "KONSEP WEB DESIGN · LIFESTYLE",
    title: "Nusa Studio — Ruang untuk tumbuh",
    description: "Eksplorasi website editorial untuk brand lifestyle. Arah visual yang hangat, tipografi ekspresif, dan tata letak yang memberi ruang pada cerita produk.",
    tags: ["Art direction", "Responsive web", "Typography"]
  },
  grow: {
    category: "KONSEP PRODUK · WELLNESS",
    title: "Grow Together — Bertumbuh pelan-pelan",
    description: "Konsep halaman pengenalan produk wellness yang mendukung kebiasaan sehat dengan bahasa visual yang ramah, ringan, dan mudah dijelajahi.",
    tags: ["Landing page", "Product design", "UI Design"]
  },
  alur: {
    category: "KONSEP WEB APP · PRODUCTIVITY",
    title: "Alur Kerja — Kolaborasi tanpa hambatan",
    description: "Platform produktivitas dan sistem kerja tim terdistribusi yang menyederhanakan pelacakan tugas dengan metrik real-time dan transisi antarmuka yang cepat.",
    tags: ["SaaS", "Web App", "UI Design"]
  }
};

const projectDialog = document.querySelector(".project-dialog");
if (projectDialog) {
  document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const detail = projectDetails[button.dataset.project];
      if (!detail) return;
      document.querySelector("#dialog-category").textContent = detail.category;
      document.querySelector("#dialog-title").textContent = detail.title;
      document.querySelector("#dialog-description").textContent = detail.description;
      const tags = document.querySelector("#dialog-tags");
      tags.replaceChildren(...detail.tags.map((tag) => {
        const element = document.createElement("span");
        element.textContent = tag;
        return element;
      }));
      projectDialog.showModal();
    });
  });
}

// Copy email button
const copyEmailBtn = document.querySelector("#copy-email-btn");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    const email = copyEmailBtn.dataset.email || "zarkasi.work@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      const originalText = copyEmailBtn.textContent;
      copyEmailBtn.textContent = "✓ Tersalin!";
      copyEmailBtn.style.background = "var(--accent)";
      copyEmailBtn.style.color = "#1c211d";
      setTimeout(() => {
        copyEmailBtn.textContent = originalText;
        copyEmailBtn.style.background = "";
        copyEmailBtn.style.color = "";
      }, 2000);
    }).catch(() => {
      copyEmailBtn.textContent = "✓ Tersalin!";
      setTimeout(() => { copyEmailBtn.textContent = "Salin Email"; }, 2000);
    });
  });
}

// Contact form submission
const contactForm = document.querySelector("#contact-form");
const contactAlert = document.querySelector("#contact-alert");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (contactAlert) {
      contactAlert.classList.add("is-success");
      contactAlert.textContent = "Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda melalui email.";
      contactForm.reset();
      setTimeout(() => {
        contactAlert.classList.remove("is-success");
      }, 7000);
    }
  });
}
