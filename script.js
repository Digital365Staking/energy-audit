document.addEventListener("DOMContentLoaded", () => {
  /* ----------------------------
     MULTILINGUAL SYSTEM
  ----------------------------- */
  const translations = {
    en: {
      menuAbout: "About Us",
      menuVideos: "Videos",
      menuContact: "Contact",
      aboutTitle: "Who We Are",
      aboutText: "We are a company specialized in measuring and optimizing electrical energy consumption.",
      about1: "Real-time consumption monitoring",
      about2: "Detailed energy audit reports",
      about3: "Integration with IoT sensors",
      about4: "Energy efficiency recommendations",
      sensorTitle: "Sensors & Measurement",
      sensorText: "We deploy advanced sensors to monitor electrical consumption precisely and securely.",
      itTitle: "IT & Data",
      itText: "Our AI systems analyze patterns to identify anomalies and reduce energy costs.",
      teamTitle: "Our Team",
      videosTitle: "Discover Our Projects",
      nif: "NIF12345678A",
      address: "Address"
    },
    fr: {
      menuAbout: "À propos",
      menuVideos: "Vidéos",
      menuContact: "Contact",
      aboutTitle: "Qui sommes-nous ?",
      aboutText: "Nous sommes une entreprise spécialisée dans la mesure et l’optimisation de la consommation électrique.",
      about1: "Suivi de la consommation en temps réel",
      about2: "Rapports d’audit énergétique détaillés",
      about3: "Intégration avec des capteurs IoT",
      about4: "Recommandations pour l’efficacité énergétique",
      sensorTitle: "Capteurs & Mesures",
      sensorText: "Nous installons des capteurs intelligents pour surveiller la consommation électrique avec précision.",
      itTitle: "Informatique & Données",
      itText: "Nos systèmes d’IA analysent les données pour identifier les anomalies et réduire les coûts.",
      teamTitle: "Notre Équipe",
      videosTitle: "Découvrez Nos Projets",
      nif: "NIF12345678A",
      address: "Adresse"
    },
    es: {
      menuAbout: "Sobre nosotros",
      menuVideos: "Vídeos",
      menuContact: "Contacto",
      aboutTitle: "Quiénes somos",
      aboutText: "Somos una empresa especializada en la medición y optimización del consumo eléctrico.",
      about1: "Supervisión del consumo en tiempo real",
      about2: "Informes detallados de auditoría energética",
      about3: "Integración con sensores IoT",
      about4: "Recomendaciones de eficiencia energética",
      sensorTitle: "Sensores y Medición",
      sensorText: "Instalamos sensores inteligentes para controlar con precisión el consumo eléctrico.",
      itTitle: "Informática y Datos",
      itText: "Nuestros sistemas de IA analizan patrones para detectar anomalías y reducir costes.",
      teamTitle: "Nuestro Equipo",
      videosTitle: "Descubre Nuestros Proyectos",
      nif: "NIF12345678A",
      address: "Dirección"
    }
  };

  // Detect browser language or fallback to English
  const userLang = (navigator.language || navigator.userLanguage).substring(0, 2);
  const supportedLangs = ["en", "fr", "es"];
  const defaultLang = supportedLangs.includes(userLang) ? userLang : "en";

  const langSelect = document.getElementById("languageSelect");

  // Set default language
  langSelect.value = defaultLang;
  updateLanguage(defaultLang);

  langSelect.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
  });

  function updateLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  /* ----------------------------
     TAB NAVIGATION
  ----------------------------- */
  const tabs = document.querySelectorAll(".tab-link");
  const sections = document.querySelectorAll("section");

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      sections.forEach(section => {
        if (section.id === target) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  /* ----------------------------
     CAROUSEL FUNCTIONALITY
  ----------------------------- */
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".carousel .prev");
  const nextBtn = document.querySelector(".carousel .next");
  const items = document.querySelectorAll(".carousel-item");
  let index = 0;

  function updateCarousel() {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % items.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
  });

  // Swipe support for mobile
  let startX = 0;
  track.addEventListener("touchstart", e => startX = e.touches[0].clientX);
  track.addEventListener("touchend", e => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 50) prevBtn.click();
    if (diff < -50) nextBtn.click();
  });
});
