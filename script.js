/* script.js - robust tab + carousel + i18n handler (use with index.html) */
document.addEventListener("DOMContentLoaded", () => {
  const DEBUG = false; // set true to see console logs

  /* -------------------------
     TRANSLATIONS (FR / EN / ES)
     ------------------------- */
  const translations = {
    en: {
      menuAbout: "About Us", menuVideos: "Videos", menuContact: "Contact",
      realisations: "Our Achievements", titleAdrien: "Adrien, AI Engineer & Energy Auditor (Madrid, Geneva, and Luxembourg)",
      urlYTB1: "https://www.youtube.com/embed/9He76uCylVQ", urlYTB2: "https://www.youtube.com/embed/g2Fs5dMTKCw", 
      titleJohn: "John, CEO & Data Analyst (Dublin and Madrid)",
      beforeOferta: "Do you like the style of energy-audit.com? Get your own website based on the same model from just ", priceMin: "€ 5 per month !",
      adTitle: "Optimize your systems for maximum energy efficiency.", adFree: "Track your devices’ energy usage with precision and get a free summary report !", 
      adPaid: "Boost your performance ! Get our full report with actionable optimization tips (paid service).",
      aboutTitle: "Who We Are", aboutText: "We are a company specialized in measuring and optimizing electrical energy consumption.",
      about1: "Real-time consumption monitoring", about2: "Detailed energy audit reports",
      about3: "Integration with IoT sensors", about4: "Energy efficiency recommendations",
      sensorTitle: "Sensors & Measurement", sensorText: "We use advanced sensors to monitor energy consumption.",
      itTitle: "IT & Data", itText: "AI systems to detect anomalies and reduce costs.",
      teamTitle: "Our Team", videosTitle: "Discover Our Projects",
      nif: "NIF12345678A", address: "Address", rights: "All rights reserved."
    },
    fr: {
      menuAbout: "À propos", menuVideos: "Vidéos", menuContact: "Contact",
      realisations: "Nos réalisations", titleAdrien: "Adrien, Ingénieur en intelligence artificielle et Auditeur énergétique (Madrid, Genève et Luxembourg)",
      urlYTB1: "https://www.youtube.com/embed/YOtMUHGRBE0", urlYTB2: "https://www.youtube.com/embed/FolPWASMSmY", 
      titleJohn: "John, PDG & Analyste de Données (Dublin et Madrid)",
      beforeOferta: "Vous aimez le style de energy-audit.com ? Obtenez votre propre site web sur le même modèle dès ", priceMin: "5 € par mois !",
      adTitle: "Améliorez la performance énergétique de vos équipements.", adFree: "Obtenez, pour chaque appareil, une mesure précise de sa consommation et un rapport synthétique gratuit.", 
      adPaid: "Besoin d’une analyse approfondie ? Accédez à notre rapport détaillé avec conseils d’optimisation (service payant).",
      aboutTitle: "Qui sommes-nous ?", aboutText: "Nous sommes spécialisés dans la mesure et l’optimisation de la consommation électrique.",
      about1: "Suivi de la consommation en temps réel", about2: "Rapports d’audit détaillés",
      about3: "Intégration avec capteurs IoT", about4: "Recommandations pour l'efficacité énergétique",
      sensorTitle: "Capteurs & Mesures", sensorText: "Nous utilisons des capteurs avancés pour surveiller la consommation énergétique.",
      itTitle: "Informatique & Données", itText: "Systèmes IA pour détecter anomalies et réduire coûts.",
      teamTitle: "Notre Équipe", videosTitle: "Découvrez Nos Projets",
      nif: "NIF12345678A", address: "Adresse", rights: "Tous droits réservés."
    },
    es: {
      menuAbout: "Sobre nosotros", menuVideos: "Vídeos", menuContact: "Contacto",
      realisations: "Nuestros Logros", titleAdrien: "Adrien, Ingeniero en inteligencia artificial y Auditor energético (Madrid, Ginebra y Luxemburgo)",
      urlYTB1: "https://www.youtube.com/embed/qLSXEuEyUH4", urlYTB2: "https://www.youtube.com/embed/PMwAN2vTdwI", 
      titleJohn: "John, Director Ejecutivo & Analista de Datos (Dublín y Madrid)",
      beforeOferta: "¿Te gusta el estilo de energy-audit.com? ¡Obtén tu propio sitio web con el mismo modelo desde solo ", priceMin: "5 € al mes !",
      adTitle: "Convierta la eficiencia energética en rendimiento.", adFree: "¡ Conozca el consumo exacto de sus dispositivos con un resumen gratuito y sencillo !", 
      adPaid: "¡ Potencia tu rendimiento ! Obtén nuestro informe completo con consejos prácticos de optimización (servicio de pago).",
      aboutTitle: "Quiénes somos", aboutText: "Especializados en medición y optimización del consumo eléctrico.",
      about1: "Monitorización en tiempo real", about2: "Informes de auditoría detallados",
      about3: "Integración con sensores IoT", about4: "Recomendaciones de eficiencia energética",
      sensorTitle: "Sensores y Medición", sensorText: "Utilizamos sensores avanzados para supervisar el consumo energético.",
      itTitle: "Informática y Datos", itText: "IA para detectar anomalías y reducir costes.",
      teamTitle: "Nuestro Equipo", videosTitle: "Descubre Nuestros Proyectos",
      nif: "NIF12345678A", address: "Dirección", rights: "Todos los derechos reservados."
    }
  };

  /* -------------------------
     LANGUAGE: detect / init
     ------------------------- */
  const supported = ["en","fr","es"];
  const browserLang = (navigator.language || "en").substring(0,2);
  const stored = localStorage.getItem("dga-lang");
  const defaultLang = stored && supported.includes(stored)
    ? stored
    : (supported.includes(browserLang) ? browserLang : "en");

  const langSelector = document.querySelector(
    '#languageSelect, #language-select, .lang-selector select, .lang-switcher select, select.lang-select, select[name="language"]'
  );

  setLanguage(defaultLang);
  if (langSelector) {
    langSelector.value = defaultLang;
    langSelector.addEventListener("change", (e) => {
      const v = e.target.value;
      setLanguage(v);
      localStorage.setItem("dga-lang", v);
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.dataset.key;
      const val = translations[lang][key];
      // Find the iframe by its data-key
      if (key.startsWith("urlYTB")) {        
        el.src = val;
        return;
      }      
      if (val !== undefined) el.textContent = val;
    });
    if (DEBUG) console.log("Language set:", lang);
  }

  /* -------------------------
     TAB NAVIGATION HANDLER
     ------------------------- */
  document.addEventListener("click", (ev) => {
    const tab = ev.target.closest(".tab-link");
    if (tab) {
      if (tab.tagName.toLowerCase() === "a") ev.preventDefault();
      const targetId = tab.dataset.tab;
      if (!targetId) return;

      document.querySelectorAll(".tab-link").forEach(t => t.classList.toggle("active", t === tab));
      document.querySelectorAll("main section, section").forEach(sec => {
        sec.classList.toggle("active", sec.id === targetId);
      });
    
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (DEBUG) console.log("Switched to tab:", targetId);
      return;
    }

    /* -------------------------
       CAROUSEL BUTTON HANDLER
       ------------------------- */
    const btn = ev.target.closest(".carousel .prev, .carousel .next");
    if (btn) {
      const carousel = btn.closest(".carousel");
      if (!carousel) return;
      const track = carousel.querySelector(".carousel-track");
      const items = carousel.querySelectorAll(".carousel-item");
      let currentIndex = parseInt(carousel.dataset.index || "0", 10);

      if (btn.classList.contains("prev") && currentIndex > 0) currentIndex--;
      else if (btn.classList.contains("next") && currentIndex < items.length - 1) currentIndex++;

      carousel.dataset.index = currentIndex;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      const prevBtn = carousel.querySelector(".prev");
      const nextBtn = carousel.querySelector(".next");
      if (prevBtn) prevBtn.disabled = currentIndex === 0;
      if (nextBtn) nextBtn.disabled = currentIndex === items.length - 1;

      if (DEBUG) console.log("Carousel moved to", currentIndex);
      return;
    }

    const btnOferta = ev.target.closest(".offer-button");
    if (btnOferta) {
      const targetId = "contact";
      document.querySelectorAll(".tab-link").forEach(t => t.classList.toggle("active", t.dataset.tab === targetId));
      document.querySelectorAll("main section, section").forEach(sec => {
        sec.classList.toggle("active", sec.id === targetId);
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (DEBUG) console.log("Switched to tab:", targetId);
      return;
    }
  }, { passive: true });

  /* -------------------------
     CAROUSEL INITIALIZATION + SWIPE SUPPORT
     ------------------------- */
  document.querySelectorAll(".carousel").forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const items = carousel.querySelectorAll(".carousel-item");
    if (!track || items.length === 0) return;

    carousel.dataset.index = carousel.dataset.index || "0";
    let currentIndex = parseInt(carousel.dataset.index, 10);
    track.style.transition = "transform 0.4s ease-in-out";
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === items.length - 1;

    // Swipe detection
    let startX = 0, endX = 0;
    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchmove", (e) => {
      endX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchend", () => {
      const dx = startX - endX;
      if (Math.abs(dx) > 50) {
        if (dx > 0 && currentIndex < items.length - 1) currentIndex++; // swipe left
        else if (dx < 0 && currentIndex > 0) currentIndex--; // swipe right
        carousel.dataset.index = currentIndex;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
      if (prevBtn) prevBtn.disabled = currentIndex === 0;
      if (nextBtn) nextBtn.disabled = currentIndex === items.length - 1;
      if (DEBUG) console.log("Swipe →", currentIndex);
    }, { passive: true });
  });

  /* -------------------------
     DEBUG HELPERS
     ------------------------- */
  if (DEBUG) {
    console.log("script initialized");
    console.log("Lang selector:", !!langSelector);
    console.log("Tabs:", document.querySelectorAll(".tab-link").length);
    console.log("Carousels:", document.querySelectorAll(".carousel").length);
  }
});
