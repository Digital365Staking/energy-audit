/* script.js - robust tab + carousel + i18n handler (use with index.html) */
document.addEventListener("DOMContentLoaded", () => {
  const DEBUG = false; // set true to see console logs

  /* -------------------------
     TRANSLATIONS (FR / EN / ES)
     ------------------------- */
  const translations = {
    en: {
      menuAbout: "About Us", menuHome: "Home", menuContact: "Contact", menuBlogs : "Blogs", headESP32: "What is the ESP32 ?", descESP32: "The <b>ESP32</b> is a highly popular microcontroller used to create smart and connected electronic devices. Developed by Espressif Systems, it stands out for its built-in Wi-Fi and Bluetooth, allowing easy communication with the Internet or other devices without additional modules. Compact, powerful, and affordable, the <b>ESP32</b> is widely used in Internet of <b>Things (IoT) projects, home automation, robotics, and rapid prototyping</b>. It can read sensors, control actuators, and execute programs in real time, making it an ideal solution for both beginners and experienced engineers.",
      headerCECB: "Preparation for the official building energy assessment certification (Swiss CECB or equivalent to the French DPE).",
      headerFree: "✔ Free section • ✔ No access fees • ✔ Ideal for beginners", linkStartCECB: "https://digitalenergyaudit.com/cecb/physic-building/en",
      headerBases: "📘 Fundamentals", srcBas:"basEN.png", headerKnowledge1: "Objective :", headerKnowledge2: "Understand up to 80% of the core fundamentals of the profession",
      headerMidnight: "Do we really need to break free from centralized systems ? Midnight’s challenge", linkStartMidnight: "https://digitalenergyaudit.com/cardano/beginner/en",
      realisations: "🎬 Our Achievements", titleAdrien: "Adrien, AI Engineer & Energy Auditor ( Geneva, Luxembourg and Madrid )",
      urlYTB1: "https://www.youtube.com/embed/9He76uCylVQ", urlYTB2: "https://www.youtube.com/embed/g2Fs5dMTKCw", urlYTB3: "https://www.youtube.com/embed/blwY1Coui_s",
      widget: "We offer a web widget that allows you to visualize a chart displaying your device’s real-time consumption. This component can, of course, be integrated into your web and/or mobile platforms.",
      titleJohn: "John, CEO & Data Analyst (Dublin and Madrid)", launchTrain: "Start the training program", launchESP32: "💳 PAID COURSES",
      office: "( Representative Office )", linkStartESP32: "https://digitalenergyaudit.com/esp32/paid-en",
      titleDona: "Dona, Marketing Director (Geneva)",
      titleDiana: "Diana, Marketing Assistant (Geneva)",
      titleNidia: "Nidia, Marketing Assistant (Madrid)",
      titlePaola: "Paola, Marketing Assistant (Madrid)",
      titleAmelia: "Amelia, Marketing Assistant (Madrid)",
      beforeOferta: "Do you like the style of the web site https://digitalenergyaudit.com/ ? Get your own website based on the same model from just ", priceMin: "€ 5 per month !",
      adTitle: "📊 Optimize your systems for maximum energy efficiency.", adFree: "Track your devices’ energy usage with precision and get a free summary report !", 
      adPaid: "Boost your performance ! Get our full report with actionable optimization tips (paid service).📋",
      aboutTitle: "Who We Are", aboutText: "We are a company specialized in measuring and optimizing electrical energy consumption.",
      about1: "Real-time consumption monitoring", about2: "Detailed energy audit reports",
      about3: "Integration with IoT sensors", about4: "Energy efficiency recommendations",
      sensorTitle: "Sensors & Measurement", sensorText: "We use advanced sensors to monitor energy consumption.",
      itTitle: "IoT Data Management and Analysis", itText: "Our team has strong IT expertise that enables us to efficiently manage, analyze, and leverage data collected from IoT sensors. Using advanced technologies such as the <b>ESPHome and Home Assistant</b> platforms ( see demonstrations below ), we are able to centralize, visualize, and automate data collection processes. We also use programming languages like <b>Python</b>, in a <b>Linux Ubuntu</b> environment, to produce customized and automated audit reports, directly integrated into the final deliverables.<br /><br />In addition, our expertise extends to Microsoft environments, with a solid knowledge of <b>C# .NET, React, Power Automate, PowerApps, and SharePoint Online (Microsoft 365)</b>, ensuring seamless integration within existing ecosystems. Finally, we place great emphasis on clear and impactful reporting, using <b>PowerPoint, Word, and Excel</b> professionally to deliver concise, engaging, and fully tailored results.",
      teamTitle: "Our Team", videosTitle: "Discover Our Projects",
      nif: "NIF12345678A", address: "Address", rights: "All rights reserved.",
      msgLegal: "This website uses necessary cookies and, with your consent, audience measurement cookies.", moreInfo: "View details", allOK: "Accept all", allNOK: "Reject all", custom: "Customize",
      esp321: "The ESP32 WROOM-32 DevKit V1 is a microcontroller board for IoT prototyping with ESPHome and Home Assistant.",
      esp322: "It features the ESP32 chip and multiple GPIO, ADC, I2C, SPI, and UART pins for connecting sensors and actuators."
    },
    fr: {
      menuAbout: "À propos", menuHome: "Accueil", menuContact: "Contact", menuBlogs : "Blogs", headESP32: "Qu’est-ce que l’ESP32 ?", descESP32: "L’<b>ESP32</b> est un microcontrôleur très populaire utilisé pour créer des objets électroniques intelligents et connectés. Développé par l’entreprise Espressif Systems, il se distingue par l’intégration native du Wi-Fi et du Bluetooth, ce qui permet de communiquer facilement avec Internet ou d’autres appareils sans modules supplémentaires. Compact, puissant et peu coûteux, l’<b>ESP32</b> est largement utilisé dans les projets d’<b>Internet des objets (IoT), la domotique, la robotique et le prototypage rapide</b>. Il peut lire des capteurs, contrôler des actionneurs et exécuter des programmes en temps réel, ce qui en fait une solution idéale aussi bien pour les débutants que pour les ingénieurs expérimentés.",
      headerCECB: "Préparation à la certification officielle d’évaluation énergétique des bâtiments (CECB Suisse ou équivalent du DPE français).",
      headerFree: "✔ Partie gratuite • ✔ Aucun frais d’accès • ✔ Idéal pour débutants", linkStartCECB: "https://digitalenergyaudit.com/cecb/physic-building/fr",
      headerBases: "📘 Bases fondamentales", srcBas:"basFR.png", headerKnowledge1: "Objectif :", headerKnowledge2: "Comprendre jusqu’à 80% des fondamentaux du métier",
      headerMidnight: "Faut-il vraiment s’affranchir des systèmes centralisés ? Le pari de Midnight", linkStartMidnight: "https://digitalenergyaudit.com/cardano/beginner/fr",
      realisations: "🎬 Nos réalisations", titleAdrien: "Adrien, Ingénieur en intelligence artificielle et Auditeur énergétique ( Genève, Luxembourg et Madrid )",
      urlYTB1: "https://www.youtube.com/embed/YOtMUHGRBE0", urlYTB2: "https://www.youtube.com/embed/FolPWASMSmY", urlYTB3: "https://www.youtube.com/embed/J3OWF06gfxU",
      widget: "Nous proposons un widget web permettant de visualiser un graphique représentant la consommation en temps réel de votre appareil. Ce composant peut bien sûr être intégré à vos plateformes web et/ou mobiles.",
      titleJohn: "John, PDG & Analyste de Données (Dublin et Madrid)", launchTrain: "Commencer la formation", launchESP32: "💳 COURS PAYANTS",     
      office: "( Bureau de Représentation )", linkStartESP32: "https://digitalenergyaudit.com/esp32/paid-fr",
      titleDona: "Dona, Directrice marketing (Genève)",
      titleDiana: "Diana, Assistante marketing (Genève)",
      titleNidia: "Nidia, Assistante marketing (Madrid)",
      titlePaola: "Paola, Assistante marketing (Madrid)", 
      titleAmelia: "Amelia, Assistante marketing (Madrid)", 
      beforeOferta: "Vous aimez le style du site web https://digitalenergyaudit.com/ ? Obtenez votre propre site web sur le même modèle dès ", priceMin: "5 € par mois !",
      adTitle: "📊 Améliorez la performance énergétique de vos équipements.", adFree: "Obtenez, pour chaque appareil, une mesure précise de sa consommation et un rapport synthétique gratuit.", 
      adPaid: "Besoin d’une analyse approfondie ? Accédez à notre rapport détaillé avec conseils d’optimisation (service payant).📋",
      aboutTitle: "Qui sommes-nous ?", aboutText: "Nous sommes spécialisés dans la mesure et l’optimisation de la consommation électrique.",
      about1: "Suivi de la consommation en temps réel", about2: "Rapports d’audit détaillés",
      about3: "Intégration avec capteurs IoT", about4: "Recommandations pour l'efficacité énergétique",
      sensorTitle: "Capteurs & Mesures", sensorText: "Nous utilisons des capteurs avancés pour surveiller la consommation énergétique.",
      itTitle: "Gestion et analyse des données IoT", itText: "Notre équipe dispose d’une solide expertise informatique lui permettant de gérer, analyser et valoriser efficacement les données issues des capteurs IoT. Grâce à des technologies avancées telles que les plateformes <b>ESPHome et Home Assistant</b> ( voir démonstrations ci-dessous ), nous sommes en mesure de centraliser, visualiser et automatiser la collecte d’informations. Nous exploitons également des langages de programmation comme <b>Python</b>, sous environnement <b>Linux Ubuntu</b>, pour produire des reportings d’audit personnalisés et automatisés, intégrés directement dans les comptes rendus finaux.<br /><br />Par ailleurs, notre savoir-faire s’étend aux environnements Microsoft, avec une parfaite maîtrise de <b>C# .NET, React, Power Automate, PowerApps et SharePoint Online (Microsoft 365)</b>, garantissant une intégration fluide dans les écosystèmes existants. Enfin, nous mettons un soin particulier à la présentation et la communication des résultats, en utilisant de manière professionnelle les outils <b>PowerPoint, Word et Excel</b> pour des reportings clairs, impactants et adaptés à vos besoins.",
      teamTitle: "Notre Équipe", videosTitle: "Découvrez Nos Projets",
      nif: "NIF12345678A", address: "Adresse", rights: "Tous droits réservés.",
      msgLegal: "Ce site utilise des cookies nécessaires et, avec votre accord, des cookies de mesure d’audience.", moreInfo: "En savoir plus", allOK: "Tout accepter", allNOK: "Tout refuser", custom: "Personnaliser",
      esp321: "L’ESP32 WROOM-32 DevKit V1 est 1 carte microcontrôleur pour le prototypage IoT avec ESPHome et Home Assistant.",
      esp322: "Il intègre la puce ESP32 et plusieurs broches GPIO, ADC, I2C, SPI et UART pour connecter des capteurs et des actionneurs."
    },
    es: {
      menuAbout: "Sobre nosotros", menuHome: "Inicio", menuContact: "Contacto", menuBlogs : "Blogs", headESP32: "¿ Qué es el ESP32 ?", descESP32: "El <b>ESP32</b> es un microcontrolador muy popular utilizado para crear dispositivos electrónicos inteligentes y conectados. Desarrollado por la empresa Espressif Systems, se distingue por la integración nativa de Wi-Fi y Bluetooth, lo que permite comunicarse fácilmente con Internet u otros dispositivos sin necesidad de módulos adicionales. Compacto, potente y económico, el <b>ESP32</b> se utiliza ampliamente en proyectos de <b>Internet de las cosas (IoT), domótica, robótica y prototipado rápido</b>. Puede leer sensores, controlar actuadores y ejecutar programas en tiempo real, lo que lo convierte en una solución ideal tanto para principiantes como para ingenieros experimentados.",
      headerCECB: "Preparación para la certificación oficial de evaluación energética de edificios (CECB suizo o equivalente al DPE francés).",
      headerFree: "✔ Sección gratuita • ✔ Sin costes de acceso • ✔ Ideal para principiantes", linkStartCECB: "https://digitalenergyaudit.com/cecb/physic-building/es",
      headerBases: "📘 Bases fundamentales", srcBas:"basES.png", headerKnowledge1: "Objetivo :", headerKnowledge2: "Comprender hasta el 80% de los fundamentos del oficio",
      headerMidnight: "¿ Es realmente necesario liberarse de los sistemas centralizados ? La apuesta de Midnight", linkStartMidnight: "https://digitalenergyaudit.com/cardano/beginner/es",
      realisations: "🎬 Nuestros Logros", titleAdrien: "Adrien, Ingeniero en inteligencia artificial y Auditor energético ( Ginebra, Luxemburgo y Madrid )",
      urlYTB1: "https://www.youtube.com/embed/qLSXEuEyUH4", urlYTB2: "https://www.youtube.com/embed/PMwAN2vTdwI", urlYTB3: "https://www.youtube.com/embed/AHtkPiBwkt4",
      widget: "Ofrecemos un widget web que permite visualizar un gráfico que muestra el consumo en tiempo real de su dispositivo. Este componente puede, por supuesto, integrarse en sus plataformas web y/o móviles.",
      titleJohn: "John, Director Ejecutivo & Analista de Datos (Dublín y Madrid)", launchTrain: "Iniciar la formación", launchESP32: "💳 CURSOS DE PAGO",      
      office: "( Oficina de Representación )", linkStartESP32: "https://digitalenergyaudit.com/esp32/paid-es",
      titleDona: "Dona, Directora de marketing (Ginebra)",
      titleDiana: "Diana, Asistente de marketing (Ginebra)",
      titleNidia: "Nidia, Asistente de marketing (Madrid)",
      titlePaola: "Paola, Asistente de marketing (Madrid)",
      titleAmelia: "Amelia, Asistente de marketing (Madrid)",
      beforeOferta: "¿Te gusta el estilo del sitio web https://digitalenergyaudit.com/ ? ¡Obtén tu propio sitio web con el mismo modelo desde solo ", priceMin: "5 € al mes !",
      adTitle: "📊 Convierta la eficiencia energética en rendimiento.", adFree: "¡ Conozca el consumo exacto de sus dispositivos con un resumen gratuito y sencillo !", 
      adPaid: "¡ Potencia tu rendimiento ! Obtén nuestro informe completo con consejos prácticos de optimización (servicio de pago).📋",
      aboutTitle: "Quiénes somos", aboutText: "Estamos especializados en medición y optimización del consumo eléctrico.",
      about1: "Monitorización en tiempo real", about2: "Informes de auditoría detallados",
      about3: "Integración con sensores IoT", about4: "Recomendaciones de eficiencia energética",
      sensorTitle: "Sensores y Medición", sensorText: "Utilizamos sensores avanzados para supervisar el consumo energético.",
      itTitle: "Gestión y análisis de datos IoT", itText: "Nuestro equipo cuenta con una sólida experiencia informática que nos permite gestionar, analizar y aprovechar eficazmente los datos procedentes de los sensores IoT. Gracias a tecnologías avanzadas como las plataformas <b>ESPHome y Home Assistant</b> ( ver demostraciónes más abajo ), somos capaces de centralizar, visualizar y automatizar la recopilación de información. También utilizamos lenguajes de programación como <b>Python</b>, en un entorno <b>Linux Ubuntu</b>, para generar informes de auditoría personalizados y automatizados, integrados directamente en los informes finales.<br /><br />Además, nuestra experiencia se extiende a los entornos de Microsoft, con un dominio total de <b>C# .NET, React, Power Automate, PowerApps y SharePoint Online (Microsoft 365)</b>, lo que garantiza una integración fluida en los ecosistemas existentes. Finalmente, prestamos especial atención a la presentación y comunicación de los resultados, utilizando de manera profesional herramientas como <b>PowerPoint, Word y Excel</b> para ofrecer informes claros, impactantes y adaptados a sus necesidades.",
      teamTitle: "Nuestro Equipo", videosTitle: "Descubre Nuestros Proyectos",
      nif: "NIF12345678A", address: "Dirección", rights: "Todos los derechos reservados.",
      msgLegal: "Este sitio utiliza cookies necesarias y, con su consentimiento, cookies de medición de audiencia.", moreInfo: "Más información", allOK: "Aceptar todo", allNOK: "Rechazar todo", custom: "Personalizar",
      esp321: "El ESP32 WROOM-32 DevKit V1 es una placa microcontroladora para prototipos IoT con ESPHome y Home Assistant.",
      esp322: "Integra el chip ESP32 y múltiples pines GPIO, ADC, I2C, SPI y UART para conectar sensores y actuadores."
    },
    de: {
      menuAbout: "Über uns", menuHome: "Startseite", menuContact: "Kontakt", menuBlogs: "Blogs",
      headESP32: "Was ist der ESP32?",
      descESP32: "Der <b>ESP32</b> ist ein sehr beliebter Mikrocontroller zur Erstellung intelligenter und vernetzter elektronischer Geräte. Er wurde von Espressif Systems entwickelt und zeichnet sich durch integriertes Wi-Fi und Bluetooth aus, was eine einfache Kommunikation mit dem Internet oder anderen Geräten ohne zusätzliche Module ermöglicht. Kompakt, leistungsstark und erschwinglich, wird der <b>ESP32</b> häufig in Projekten des <b>Internets der Dinge (IoT), der Hausautomation, Robotik und Schnellprototypen</b> eingesetzt. Er kann Sensoren auslesen, Aktoren steuern und Programme in Echtzeit ausführen – eine ideale Lösung für Anfänger und erfahrene Ingenieure gleichermaßen.",
      headerCECB: "Vorbereitung auf die offizielle Gebäudeenergiezertifizierung (Schweizer CECB oder gleichwertig zum französischen DPE).",
      headerFree: "✔ Kostenloser Bereich • ✔ Keine Zugangsgebühren • ✔ Ideal für Einsteiger",
      linkStartCECB: "https://digitalenergyaudit.com/cecb/physic-building/en",
      headerBases: "📘 Grundlagen", srcBas: "basEN.png",
      headerKnowledge1: "Ziel:", headerKnowledge2: "Bis zu 80 % der Grundlagen des Berufs verstehen",
      headerMidnight: "Müssen wir wirklich von zentralisierten Systemen losbrechen? Die Wette von Midnight",
      linkStartMidnight: "https://digitalenergyaudit.com/cardano/beginner/en",
      realisations: "🎬 Unsere Projekte",
      titleAdrien: "Adrien, KI-Ingenieur & Energieauditor (Genf, Luxemburg und Madrid)",
      urlYTB1: "https://www.youtube.com/embed/9He76uCylVQ",
      urlYTB2: "https://www.youtube.com/embed/g2Fs5dMTKCw",
      urlYTB3: "https://www.youtube.com/embed/blwY1Coui_s",
      widget: "Wir bieten ein Web-Widget an, das ein Diagramm mit dem Echtzeitverbrauch Ihres Geräts anzeigt. Diese Komponente kann natürlich in Ihre Web- und/oder Mobilplattformen integriert werden.",
      titleJohn: "John, CEO & Datenanalyst (Dublin und Madrid)",
      launchTrain: "Schulungsprogramm starten", launchESP32: "💳 KOSTENPFLICHTIGE KURSE",
      office: "( Repräsentationsbüro )", linkStartESP32: "https://digitalenergyaudit.com/esp32/paid-en",
      titleDona: "Dona, Marketingleiterin (Genf)",
      titleDiana: "Diana, Marketingassistentin (Genf)",
      titleNidia: "Nidia, Marketingassistentin (Madrid)",
      titlePaola: "Paola, Marketingassistentin (Madrid)",
      titleAmelia: "Amelia, Marketingassistentin (Madrid)",
      beforeOferta: "Gefällt Ihnen der Stil der Website https://digitalenergyaudit.com/? Erhalten Sie Ihre eigene Website nach demselben Modell ab nur ", priceMin: "5 € pro Monat!",
      adTitle: "📊 Optimieren Sie Ihre Systeme für maximale Energieeffizienz.",
      adFree: "Verfolgen Sie den Energieverbrauch Ihrer Geräte präzise und erhalten Sie einen kostenlosen Zusammenfassungsbericht!",
      adPaid: "Steigern Sie Ihre Leistung! Holen Sie sich unseren vollständigen Bericht mit umsetzbaren Optimierungstipps (kostenpflichtiger Dienst).📋",
      aboutTitle: "Wer wir sind", aboutText: "Wir sind spezialisiert auf die Messung und Optimierung des Stromverbrauchs.",
      about1: "Echtzeitüberwachung des Verbrauchs", about2: "Detaillierte Energieauditberichte",
      about3: "Integration mit IoT-Sensoren", about4: "Empfehlungen zur Energieeffizienz",
      sensorTitle: "Sensoren & Messung", sensorText: "Wir verwenden fortschrittliche Sensoren zur Überwachung des Energieverbrauchs.",
      itTitle: "IoT-Datenverwaltung und -analyse",
      itText: "Unser Team verfügt über fundierte IT-Kenntnisse, um Daten aus IoT-Sensoren effizient zu verwalten, zu analysieren und nutzbar zu machen. Mit fortschrittlichen Technologien wie den Plattformen <b>ESPHome und Home Assistant</b> (siehe Demonstrationen unten) zentralisieren, visualisieren und automatisieren wir die Datenerfassung. Wir setzen auch Programmiersprachen wie <b>Python</b> in einer <b>Linux Ubuntu</b>-Umgebung ein, um maßgeschneiderte Auditberichte zu erstellen.<br /><br />Darüber hinaus erstreckt sich unser Know-how auf Microsoft-Umgebungen mit fundiertem Wissen in <b>C# .NET, React, Power Automate, PowerApps und SharePoint Online (Microsoft 365)</b>. Abschließend legen wir großen Wert auf klare und wirkungsvolle Berichterstattung mit <b>PowerPoint, Word und Excel</b>.",
      teamTitle: "Unser Team", videosTitle: "Entdecken Sie unsere Projekte",
      nif: "NIF12345678A", address: "Adresse", rights: "Alle Rechte vorbehalten.",
      msgLegal: "Diese Website verwendet notwendige Cookies und, mit Ihrer Zustimmung, Cookies zur Reichweitenmessung.",
      moreInfo: "Mehr erfahren", allOK: "Alle akzeptieren", allNOK: "Alle ablehnen", custom: "Anpassen",
      esp321: "Das ESP32 WROOM-32 DevKit V1 ist ein Mikrocontroller-Board für IoT-Prototyping mit ESPHome und Home Assistant.",
      esp322: "Es enthält den ESP32-Chip und mehrere GPIO-, ADC-, I2C-, SPI- und UART-Pins zum Anschluss von Sensoren und Aktoren."
    },
    pt: {
      menuAbout: "Sobre nós", menuHome: "Início", menuContact: "Contato", menuBlogs: "Blogs",
      headESP32: "O que é o ESP32?",
      descESP32: "O <b>ESP32</b> é um microcontrolador muito popular usado para criar dispositivos eletrônicos inteligentes e conectados. Desenvolvido pela Espressif Systems, ele se destaca pelo Wi-Fi e Bluetooth integrados, permitindo comunicação fácil com a Internet ou outros dispositivos sem módulos adicionais. Compacto, poderoso e acessível, o <b>ESP32</b> é amplamente utilizado em projetos de <b>Internet das Coisas (IoT), automação residencial, robótica e prototipagem rápida</b>. Ele pode ler sensores, controlar atuadores e executar programas em tempo real, tornando-se uma solução ideal tanto para iniciantes quanto para engenheiros experientes.",
      headerCECB: "Preparação para a certificação oficial de avaliação energética de edifícios (CECB suíço ou equivalente ao DPE francês).",
      headerFree: "✔ Seção gratuita • ✔ Sem taxas de acesso • ✔ Ideal para iniciantes",
      linkStartCECB: "https://digitalenergyaudit.com/cecb/physic-building/en",
      headerBases: "📘 Fundamentos", srcBas: "basEN.png",
      headerKnowledge1: "Objetivo:", headerKnowledge2: "Compreender até 80% dos fundamentos da profissão",
      headerMidnight: "Precisamos mesmo nos libertar dos sistemas centralizados? O desafio do Midnight",
      linkStartMidnight: "https://digitalenergyaudit.com/cardano/beginner/en",
      realisations: "🎬 Nossas Realizações",
      titleAdrien: "Adrien, Engenheiro de IA & Auditor Energético (Genebra, Luxemburgo e Madri)",
      urlYTB1: "https://www.youtube.com/embed/9He76uCylVQ",
      urlYTB2: "https://www.youtube.com/embed/g2Fs5dMTKCw",
      urlYTB3: "https://www.youtube.com/embed/blwY1Coui_s",
      widget: "Oferecemos um widget web que permite visualizar um gráfico com o consumo em tempo real do seu dispositivo. Este componente pode ser integrado às suas plataformas web e/ou móveis.",
      titleJohn: "John, CEO & Analista de Dados (Dublin e Madri)",
      launchTrain: "Iniciar o programa de treinamento", launchESP32: "💳 CURSOS PAGOS",
      office: "( Escritório de Representação )", linkStartESP32: "https://digitalenergyaudit.com/esp32/paid-en",
      titleDona: "Dona, Diretora de Marketing (Genebra)",
      titleDiana: "Diana, Assistente de Marketing (Genebra)",
      titleNidia: "Nidia, Assistente de Marketing (Madri)",
      titlePaola: "Paola, Assistente de Marketing (Madri)",
      titleAmelia: "Amelia, Assistente de Marketing (Madri)",
      beforeOferta: "Gostou do estilo do site https://digitalenergyaudit.com/? Tenha seu próprio site no mesmo modelo a partir de apenas ", priceMin: "€ 5 por mês!",
      adTitle: "📊 Otimize seus sistemas para máxima eficiência energética.",
      adFree: "Acompanhe com precisão o consumo de energia dos seus dispositivos e receba um relatório resumido gratuito!",
      adPaid: "Impulsione seu desempenho! Obtenha nosso relatório completo com dicas práticas de otimização (serviço pago).📋",
      aboutTitle: "Quem somos", aboutText: "Somos especializados em medição e otimização do consumo de energia elétrica.",
      about1: "Monitoramento em tempo real", about2: "Relatórios detalhados de auditoria energética",
      about3: "Integração com sensores IoT", about4: "Recomendações de eficiência energética",
      sensorTitle: "Sensores & Medição", sensorText: "Usamos sensores avançados para monitorar o consumo de energia.",
      itTitle: "Gestão e análise de dados IoT",
      itText: "Nossa equipe possui sólida expertise em TI para gerenciar, analisar e aproveitar os dados coletados pelos sensores IoT. Com tecnologias avançadas como as plataformas <b>ESPHome e Home Assistant</b> (veja as demonstrações abaixo), centralizamos, visualizamos e automatizamos a coleta de dados. Também utilizamos linguagens de programação como <b>Python</b> em ambiente <b>Linux Ubuntu</b> para produzir relatórios de auditoria personalizados.<br /><br />Além disso, nossa expertise se estende aos ambientes Microsoft, com domínio de <b>C# .NET, React, Power Automate, PowerApps e SharePoint Online (Microsoft 365)</b>. Por fim, valorizamos relatórios claros e impactantes, usando <b>PowerPoint, Word e Excel</b> profissionalmente.",
      teamTitle: "Nossa Equipe", videosTitle: "Descubra Nossos Projetos",
      nif: "NIF12345678A", address: "Endereço", rights: "Todos os direitos reservados.",
      msgLegal: "Este site usa cookies necessários e, com seu consentimento, cookies de medição de audiência.",
      moreInfo: "Saiba mais", allOK: "Aceitar tudo", allNOK: "Rejeitar tudo", custom: "Personalizar",
      esp321: "O ESP32 WROOM-32 DevKit V1 é uma placa microcontroladora para prototipagem IoT com ESPHome e Home Assistant.",
      esp322: "Ele integra o chip ESP32 e múltiplos pinos GPIO, ADC, I2C, SPI e UART para conectar sensores e atuadores."
    },
    nl: {
      menuAbout: "Over ons",
      menuHome: "Home",
      menuContact: "Contact",
      menuBlogs: "Blogs",
      headESP32: "Wat is de ESP32?",
      descESP32: "De ESP32 is een zeer populaire microcontroller die wordt gebruikt om slimme en verbonden elektronische apparaten te maken. Ontwikkeld door Espressif Systems, onderscheidt hij zich door ingebouwde Wi‑Fi en Bluetooth, waardoor eenvoudige communicatie met internet of andere apparaten mogelijk is zonder extra modules. Compact, krachtig en betaalbaar, wordt de ESP32 veel gebruikt in Internet of Things‑projecten, huisautomatisering, robotica en snelle prototyping. Hij kan sensoren uitlezen, actuatoren aansturen en programma’s in realtime uitvoeren, wat hem ideaal maakt voor zowel beginners als ervaren ingenieurs.",
      headerCECB: "Voorbereiding op de officiële energiecertificering van gebouwen, de Zwitserse CECB of het Franse DPE-equivalent.",
      headerFree: "Gratis gedeelte",
      linkStartCECB: "https://digitalenergyaudit.com/cecbphysic-buildingnl",
      headerBases: "Basisbeginselen",
      srcBas: "basbasEN.png",
      headerKnowledge1: "Doel",
      headerKnowledge2: "Begrijp tot 80% van de kern van het vak",
      headerMidnight: "Moeten we ons echt losmaken van gecentraliseerde systemen? De uitdaging van Midnight",
      linkStartMidnight: "https://digitalenergyaudit.com/cardanobeginneren",
      realisations: "Onze realisaties",
      titleAdrien: "Adrien, AI-ingenieur en energie-auditor, Genève, Luxemburg en Madrid",
      urlYTB1: "https://www.youtube.com/embed/9He76uCylVQ",
      urlYTB2: "https://www.youtube.com/embed/g2Fs5dMTKCw",
      urlYTB3: "https://www.youtube.com/embed/blwY1Couis",
      widget: "Wij bieden een webwidget waarmee u een grafiek kunt bekijken die het realtimeverbruik van uw apparaat weergeeft. Deze component kan uiteraard worden geïntegreerd in uw web- en/of mobiele platforms.",
      titleJohn: "John, CEO en data-analist, Dublin en Madrid",
      launchTrain: "Start het trainingsprogramma",
      launchESP32: "BETAALDE CURSUSSEN",
      office: "Vertegenwoordiging",
      linkStartESP32: "https://digitalenergyaudit.com/esp32paid-en",
      titleDona: "Dona, marketingdirecteur, Genève",
      titleDiana: "Diana, marketingassistent, Genève",
      titleNidia: "Nidia, marketingassistent, Madrid",
      titlePaola: "Paola, marketingassistent, Madrid",
      titleAmelia: "Amelia, marketingassistent, Madrid",
      beforeOferta: "Vind je de stijl van de website https://digitalenergyaudit.com leuk? Krijg je eigen website gebaseerd op hetzelfde model vanaf slechts",
      priceMin: "5 per maand!",
      adTitle: "Optimaliseer uw systemen voor maximale energie-efficiëntie.",
      adFree: "Volg het energieverbruik van uw apparaten nauwkeurig en ontvang een gratis samenvattend rapport!",
      adPaid: "Boost uw prestaties! Ontvang ons volledige rapport met bruikbare optimalisatietips. Betaalde service.",
      aboutTitle: "Wie we zijn",
      aboutText: "Wij zijn gespecialiseerd in het meten en optimaliseren van het elektriciteitsverbruik.",
      about1: "Realtime verbruiksmonitoring",
      about2: "Gedetailleerde energie-auditrapporten",
      about3: "Integratie met IoT-sensoren",
      about4: "Aanbevelingen voor energie-efficiëntie",
      sensorTitle: "Sensoren en metingen",
      sensorText: "Wij gebruiken geavanceerde sensoren om het energieverbruik te monitoren.",
      itTitle: "IoT-gegevensbeheer en analyse",
      itText: "Ons team heeft sterke IT-expertise waarmee we gegevens van IoT-sensoren efficiënt kunnen beheren, analyseren en benutten. Met geavanceerde technologieën zoals ESPHome en Home Assistant, en met programmeertalen zoals Python in een Linux Ubuntu-omgeving, leveren we gepersonaliseerde en geautomatiseerde auditrapporten. Bovendien hebben we uitgebreide kennis van Microsoft-omgevingen zoals C# .NET, React, Power Automate, PowerApps en SharePoint Online / Microsoft 365. Tot slot hechten we veel belang aan heldere en impactvolle rapportage met PowerPoint, Word en Excel.",
      teamTitle: "Ons team",
      videosTitle: "Ontdek onze projecten",
      nif: "NIF12345678A",
      address: "Adres",
      rights: "Alle rechten voorbehouden.",
      msgLegal: "Deze website gebruikt noodzakelijke cookies en, met uw toestemming, cookies voor publieksmeting.",
      moreInfo: "Meer informatie",
      allOK: "Alles accepteren",
      allNOK: "Alles weigeren",
      custom: "Aanpassen",
      esp321: "De ESP32 WROOM-32 DevKit V1 is een microcontrollerbord voor IoT-prototyping met ESPHome en Home Assistant.",
      esp322: "Het bevat de ESP32-chip en meerdere GPIO-, ADC-, I2C-, SPI- en UART-pinnen voor het aansluiten van sensoren en actuatoren."
    },
    da: {
      menuAbout: "Om os",
      menuHome: "Hjem",
      menuContact: "Kontakt",
      menuBlogs: "Blogs",
      headESP32: "Hvad er ESP32?",
      descESP32: "ESP32 er en meget populær mikrocontroller, der bruges til at skabe smarte og forbundne elektroniske enheder. Den er udviklet af Espressif Systems og skiller sig ud med indbygget Wi‑Fi og Bluetooth, som gør det let at kommunikere med internettet eller andre enheder uden ekstra moduler. Den er kompakt, kraftfuld og prisvenlig og bruges bredt i Internet of Things-projekter, hjemautomatisering, robotteknik og hurtig prototyping. Den kan aflæse sensorer, styre aktuatorer og køre programmer i realtid, hvilket gør den ideel både for begyndere og erfarne ingeniører.",
      headerCECB: "Forberedelse til den officielle bygningsenergi-certificering, schweiziske CECB eller et fransk DPE-ækvivalent.",
      headerFree: "Gratis sektion",
      linkStartCECB: "https://digitalenergyaudit.com/cecbphysic-buildingda",
      headerBases: "Grundlæggende",
      srcBas: "basbasEN.png",
      headerKnowledge1: "Mål",
      headerKnowledge2: "Forstå op til 80% af fagets kernefundamenter",
      headerMidnight: "Skal vi virkelig bryde fri fra centraliserede systemer? Midnights udfordring",
      linkStartMidnight: "https://digitalenergyaudit.com/cardanobeginneren",
      realisations: "Vores resultater",
      titleAdrien: "Adrien, AI-ingeniør og energi-revisor, Genève, Luxembourg og Madrid",
      urlYTB1: "https://www.youtube.com/embed/9He76uCylVQ",
      urlYTB2: "https://www.youtube.com/embed/g2Fs5dMTKCw",
      urlYTB3: "https://www.youtube.com/embed/blwY1Couis",
      widget: "Vi tilbyder en webwidget, der gør det muligt at vise et diagram over enhedens forbrug i realtid. Denne komponent kan naturligvis integreres i dine web- og/eller mobilplatforme.",
      titleJohn: "John, CEO og dataanalytiker, Dublin og Madrid",
      launchTrain: "Start træningsprogrammet",
      launchESP32: "BETALTE KURSER",
      office: "Repræsentationskontor",
      linkStartESP32: "https://digitalenergyaudit.com/esp32paid-en",
      titleDona: "Dona, marketingdirektør, Genève",
      titleDiana: "Diana, marketingassistent, Genève",
      titleNidia: "Nidia, marketingassistent, Madrid",
      titlePaola: "Paola, marketingassistent, Madrid",
      titleAmelia: "Amelia, marketingassistent, Madrid",
      beforeOferta: "Kan du lide stilen på webstedet https://digitalenergyaudit.com? Få dit eget websted baseret på samme model fra kun",
      priceMin: "5 pr. måned!",
      adTitle: "Optimer dine systemer for maksimal energieffektivitet.",
      adFree: "Følg dine enheders energiforbrug præcist og få en gratis opsummeringsrapport!",
      adPaid: "Boost din ydeevne! Få vores fulde rapport med konkrete optimeringstips. Betalt tjeneste.",
      aboutTitle: "Hvem vi er",
      aboutText: "Vi er specialiserede i måling og optimering af elforbrug.",
      about1: "Overvågning af forbrug i realtid",
      about2: "Detaljerede energi-auditrapporter",
      about3: "Integration med IoT-sensorer",
      about4: "Anbefalinger til energieffektivitet",
      sensorTitle: "Sensorer og måling",
      sensorText: "Vi bruger avancerede sensorer til at overvåge energiforbruget.",
      itTitle: "IoT-datahåndtering og analyse",
      itText: "Vores team har stærk IT-ekspertise, som gør os i stand til effektivt at administrere, analysere og udnytte data fra IoT-sensorer. Med avancerede teknologier som ESPHome og Home Assistant samt programmeringssprog som Python i et Linux Ubuntu-miljø leverer vi skræddersyede og automatiserede auditrapporter. Derudover har vi solid erfaring med Microsoft-miljøer som C# .NET, React, Power Automate, PowerApps og SharePoint Online / Microsoft 365. Endelig lægger vi stor vægt på klar og virkningsfuld rapportering med PowerPoint, Word og Excel.",
      teamTitle: "Vores team",
      videosTitle: "Se vores projekter",
      nif: "NIF12345678A",
      address: "Adresse",
      rights: "Alle rettigheder forbeholdes.",
      msgLegal: "Dette websted bruger nødvendige cookies og, med dit samtykke, cookies til publikumsmåling.",
      moreInfo: "Se detaljer",
      allOK: "Accepter alle",
      allNOK: "Afvis alle",
      custom: "Tilpas",
      esp321: "ESP32 WROOM-32 DevKit V1 er et mikrocontrollerkort til IoT-prototyping med ESPHome og Home Assistant.",
      esp322: "Det har ESP32-chippen og flere GPIO-, ADC-, I2C-, SPI- og UART-ben til tilslutning af sensorer og aktuatorer."
    },
    sv: {
      menuAbout: "Om oss",
      menuHome: "Hem",
      menuContact: "Kontakt",
      menuBlogs: "Bloggar",
      headESP32: "Vad är ESP32?",
      descESP32: "ESP32 är en mycket populär mikrokontroller som används för att skapa smarta och uppkopplade elektroniska enheter. Den utvecklades av Espressif Systems och utmärker sig med inbyggd Wi‑Fi och Bluetooth, vilket gör det enkelt att kommunicera med internet eller andra enheter utan extra moduler. Den är kompakt, kraftfull och prisvärd och används ofta i Internet of Things-projekt, hemautomation, robotik och snabb prototypframtagning. Den kan läsa sensorer, styra aktuatorer och köra program i realtid, vilket gör den idealisk för både nybörjare och erfarna ingenjörer.",
      headerCECB: "Förberedelse för den officiella energideklarationen för byggnader, schweiziska CECB eller motsvarande franska DPE.",
      headerFree: "Gratis avsnitt",
      linkStartCECB: "https://digitalenergyaudit.com/cecbphysic-buildingsv",
      headerBases: "Grundläggande",
      srcBas: "basbasEN.png",
      headerKnowledge1: "Mål",
      headerKnowledge2: "Förstå upp till 80% av yrkets kärnfundament",
      headerMidnight: "Behöver vi verkligen bryta oss loss från centraliserade system? Midnights utmaning",
      linkStartMidnight: "https://digitalenergyaudit.com/cardanobeginneren",
      realisations: "Våra resultat",
      titleAdrien: "Adrien, AI-ingenjör och energiutvärderare, Genève, Luxemburg och Madrid",
      urlYTB1: "https://www.youtube.com/embed/9He76uCylVQ",
      urlYTB2: "https://www.youtube.com/embed/g2Fs5dMTKCw",
      urlYTB3: "https://www.youtube.com/embed/blwY1Couis",
      widget: "Vi erbjuder en webbwidget som låter dig visa ett diagram över enhetens förbrukning i realtid. Denna komponent kan naturligtvis integreras i dina webb- och/eller mobilplattformar.",
      titleJohn: "John, VD och dataanalytiker, Dublin och Madrid",
      launchTrain: "Starta utbildningsprogrammet",
      launchESP32: "BETALDA KURSER",
      office: "Representationskontor",
      linkStartESP32: "https://digitalenergyaudit.com/esp32paid-en",
      titleDona: "Dona, marknadschef, Genève",
      titleDiana: "Diana, marknadsassistent, Genève",
      titleNidia: "Nidia, marknadsassistent, Madrid",
      titlePaola: "Paola, marknadsassistent, Madrid",
      titleAmelia: "Amelia, marknadsassistent, Madrid",
      beforeOferta: "Gillar du stilen på webbplatsen https://digitalenergyaudit.com? Få din egen webbplats baserad på samma modell från bara",
      priceMin: "5 per månad!",
      adTitle: "Optimera dina system för maximal energieffektivitet.",
      adFree: "Följ dina enheters energiförbrukning noggrant och få en gratis sammanfattningsrapport!",
      adPaid: "Öka din prestanda! Få vår fullständiga rapport med praktiska optimeringstips. Betald tjänst.",
      aboutTitle: "Vem vi är",
      aboutText: "Vi är specialiserade på mätning och optimering av elförbrukning.",
      about1: "Övervakning av förbrukning i realtid",
      about2: "Detaljerade energiutredningsrapporter",
      about3: "Integration med IoT-sensorer",
      about4: "Rekommendationer för energieffektivitet",
      sensorTitle: "Sensorer och mätning",
      sensorText: "Vi använder avancerade sensorer för att övervaka energiförbrukningen.",
      itTitle: "IoT-datahantering och analys",
      itText: "Vårt team har stark IT-expertis som gör att vi effektivt kan hantera, analysera och använda data från IoT-sensorer. Med avancerade tekniker som ESPHome och Home Assistant samt programmeringsspråk som Python i en Linux Ubuntu-miljö producerar vi skräddarsydda och automatiserade rapporter. Dessutom har vi gedigen erfarenhet av Microsoft-miljöer som C# .NET, React, Power Automate, PowerApps och SharePoint Online / Microsoft 365. Slutligen lägger vi stor vikt vid tydlig och slagkraftig rapportering med PowerPoint, Word och Excel.",
      teamTitle: "Vårt team",
      videosTitle: "Upptäck våra projekt",
      nif: "NIF12345678A",
      address: "Adress",
      rights: "Alla rättigheter förbehållna.",
      msgLegal: "Denna webbplats använder nödvändiga cookies och, med ditt samtycke, cookies för publikmätning.",
      moreInfo: "Mer information",
      allOK: "Acceptera alla",
      allNOK: "Neka alla",
      custom: "Anpassa",
      esp321: "ESP32 WROOM-32 DevKit V1 är ett mikrocontrollerkort för IoT-prototypning med ESPHome och Home Assistant.",
      esp322: "Det har ESP32-chippet och flera GPIO-, ADC-, I2C-, SPI- och UART-pinnar för att ansluta sensorer och aktuatorer."
    },
    no: {
      menuAbout: "Om oss",
      menuHome: "Hjem",
      menuContact: "Kontakt",
      menuBlogs: "Blogger",
      headESP32: "Hva er ESP32?",
      descESP32: "ESP32 er en svært populær mikrokontroller som brukes til å lage smarte og tilkoblede elektroniske enheter. Den er utviklet av Espressif Systems og skiller seg ut med innebygd Wi‑Fi og Bluetooth, som gjør det enkelt å kommunisere med internett eller andre enheter uten ekstra moduler. Den er kompakt, kraftig og rimelig, og brukes mye i Internet of Things-prosjekter, hjemmeautomasjon, robotikk og rask prototyping. Den kan lese sensorer, styre aktuatorer og kjøre programmer i sanntid, noe som gjør den ideell for både nybegynnere og erfarne ingeniører.",
      headerCECB: "Forberedelse til den offisielle bygningsenergi-sertifiseringen, sveitsiske CECB eller tilsvarende franske DPE.",
      headerFree: "Gratis seksjon",
      linkStartCECB: "https://digitalenergyaudit.com/cecbphysic-buildingno",
      headerBases: "Grunnleggende",
      srcBas: "basbasEN.png",
      headerKnowledge1: "Mål",
      headerKnowledge2: "Forstå opptil 80% av kjernene i faget",
      headerMidnight: "Må vi virkelig bryte oss løs fra sentraliserte systemer? Midnights utfordring",
      linkStartMidnight: "https://digitalenergyaudit.com/cardanobeginneren",
      realisations: "Våre resultater",
      titleAdrien: "Adrien, AI-ingeniør og energiutreder, Genève, Luxembourg og Madrid",
      urlYTB1: "https://www.youtube.com/embed/9He76uCylVQ",
      urlYTB2: "https://www.youtube.com/embed/g2Fs5dMTKCw",
      urlYTB3: "https://www.youtube.com/embed/blwY1Couis",
      widget: "Vi tilbyr en nettwidget som lar deg vise et diagram over enhetens sanntidsforbruk. Denne komponenten kan selvsagt integreres i dine web- og/eller mobilplattformer.",
      titleJohn: "John, administrerende direktør og dataanalytiker, Dublin og Madrid",
      launchTrain: "Start opplæringsprogrammet",
      launchESP32: "BETALTE KURS",
      office: "Representasjonskontor",
      linkStartESP32: "https://digitalenergyaudit.com/esp32paid-en",
      titleDona: "Dona, markedsdirektør, Genève",
      titleDiana: "Diana, markedsassistent, Genève",
      titleNidia: "Nidia, markedsassistent, Madrid",
      titlePaola: "Paola, markedsassistent, Madrid",
      titleAmelia: "Amelia, markedsassistent, Madrid",
      beforeOferta: "Liker du stilen på nettstedet https://digitalenergyaudit.com? Få ditt eget nettsted basert på samme modell fra bare",
      priceMin: "5 per måned!",
      adTitle: "Optimaliser systemene dine for maksimal energieffektivitet.",
      adFree: "Følg enhetenes energiforbruk nøyaktig og få en gratis oppsummeringsrapport!",
      adPaid: "Øk ytelsen din! Få vår fullstendige rapport med konkrete optimaliseringstips. Betalt tjeneste.",
      aboutTitle: "Hvem vi er",
      aboutText: "Vi er spesialisert på måling og optimalisering av strømforbruk.",
      about1: "Overvåking av forbruk i sanntid",
      about2: "Detaljerte energi-auditrapporter",
      about3: "Integrasjon med IoT-sensorer",
      about4: "Anbefalinger for energieffektivitet",
      sensorTitle: "Sensorer og måling",
      sensorText: "Vi bruker avanserte sensorer for å overvåke energiforbruket.",
      itTitle: "IoT-datahåndtering og analyse",
      itText: "Teamet vårt har sterk IT-kompetanse som gjør oss i stand til å administrere, analysere og utnytte data fra IoT-sensorer effektivt. Med avanserte teknologier som ESPHome og Home Assistant, samt programmeringsspråk som Python i et Linux Ubuntu-miljø, produserer vi skreddersydde og automatiserte rapporter. I tillegg har vi solid erfaring med Microsoft-miljøer som C# .NET, React, Power Automate, PowerApps og SharePoint Online / Microsoft 365. Til slutt legger vi stor vekt på tydelig og virkningsfull rapportering med PowerPoint, Word og Excel.",
      teamTitle: "Vårt team",
      videosTitle: "Oppdag prosjektene våre",
      nif: "NIF12345678A",
      address: "Adresse",
      rights: "Alle rettigheter forbeholdt.",
      msgLegal: "Dette nettstedet bruker nødvendige informasjonskapsler og, med ditt samtykke, informasjonskapsler for publikumsmåling.",
      moreInfo: "Mer informasjon",
      allOK: "Godta alle",
      allNOK: "Avslå alle",
      custom: "Tilpass",
      esp321: "ESP32 WROOM-32 DevKit V1 er et mikrokontrollerkort for IoT-prototyping med ESPHome og Home Assistant.",
      esp322: "Det har ESP32-brikken og flere GPIO-, ADC-, I2C-, SPI- og UART-pinner for tilkobling av sensorer og aktuatorer."
    },
    fi: {
      menuAbout: "Tietoa meistä",
      menuHome: "Koti",
      menuContact: "Yhteystiedot",
      menuBlogs: "Blogit",
      headESP32: "Mikä on ESP32?",
      descESP32: "ESP32 on erittäin suosittu mikrokontrolleri, jota käytetään älykkäiden ja verkottuneiden elektronisten laitteiden luomiseen. Espressif Systemsin kehittämä laite erottuu sisäänrakennetulla Wi‑Fi- ja Bluetooth-tuella, mikä mahdollistaa helpon viestinnän internetin tai muiden laitteiden kanssa ilman lisämoduuleja. Se on kompakti, tehokas ja edullinen, ja sitä käytetään laajalti Internet of Things -projekteissa, kodin automaatiossa, robotiikassa ja nopeassa prototypoinnissa. Se voi lukea antureita, ohjata toimilaitteita ja suorittaa ohjelmia reaaliajassa, mikä tekee siitä ihanteellisen ratkaisun sekä aloittelijoille että kokeneille insinööreille.",
      headerCECB: "Valmistautuminen viralliseen rakennusten energiatodistukseen, sveitsiläiseen CECB-sertifiointiin tai vastaavaan ranskalaiseen DPE:hen.",
      headerFree: "Ilmainen osio",
      linkStartCECB: "https://digitalenergyaudit.com/cecbphysic-buildingfi",
      headerBases: "Perusteet",
      srcBas: "basbasEN.png",
      headerKnowledge1: "Tavoite",
      headerKnowledge2: "Ymmärrä jopa 80% ammatin ydinasioista",
      headerMidnight: "Tarvitsemmeko todella irtautua keskitetystä järjestelmästä? Midnightin haaste",
      linkStartMidnight: "https://digitalenergyaudit.com/cardanobeginneren",
      realisations: "Saavutuksemme",
      titleAdrien: "Adrien, tekoälyinsinööri ja energia-auditoija, Geneve, Luxemburg ja Madrid",
      urlYTB1: "https://www.youtube.com/embed/9He76uCylVQ",
      urlYTB2: "https://www.youtube.com/embed/g2Fs5dMTKCw",
      urlYTB3: "https://www.youtube.com/embed/blwY1Couis",
      widget: "Tarjoamme verkkovidgetin, jonka avulla voit näyttää kaavion laitteesi reaaliaikaisesta kulutuksesta. Tämä komponentti voidaan luonnollisesti integroida verkko- ja/tai mobiilialustoihisi.",
      titleJohn: "John, toimitusjohtaja ja data-analyytikko, Dublin ja Madrid",
      launchTrain: "Aloita koulutusohjelma",
      launchESP32: "MAKSULLISET KURSSIT",
      office: "Edustusto",
      linkStartESP32: "https://digitalenergyaudit.com/esp32paid-en",
      titleDona: "Dona, markkinointijohtaja, Geneve",
      titleDiana: "Diana, markkinointiassistentti, Geneve",
      titleNidia: "Nidia, markkinointiassistentti, Madrid",
      titlePaola: "Paola, markkinointiassistentti, Madrid",
      titleAmelia: "Amelia, markkinointiassistentti, Madrid",
      beforeOferta: "Pidätkö verkkosivuston https://digitalenergyaudit.com tyylistä? Saat oman saman mallin mukaisen verkkosivuston alkaen vain",
      priceMin: "5 kuukaudessa!",
      adTitle: "Optimoi järjestelmäsi maksimaaliseen energiatehokkuuteen.",
      adFree: "Seuraa laitteidesi energiankulutusta tarkasti ja saa ilmainen yhteenvetoraportti!",
      adPaid: "Tehosta suorituskykyäsi! Hanki täydellinen raporttimme käytännön optimointivinkeillä. Maksullinen palvelu.",
      aboutTitle: "Keitä olemme",
      aboutText: "Olemme erikoistuneet sähkönkulutuksen mittaamiseen ja optimointiin.",
      about1: "Reaaliaikainen kulutuksen seuranta",
      about2: "Yksityiskohtaiset energia-auditointiraportit",
      about3: "Integraatio IoT-antureihin",
      about4: "Suositukset energiatehokkuuteen",
      sensorTitle: "Sensorit ja mittaus",
      sensorText: "Käytämme edistyneitä antureita energian kulutuksen seuraamiseen.",
      itTitle: "IoT-datan hallinta ja analyysi",
      itText: "Tiimillämme on vahva IT-osaaminen, jonka avulla hallitsemme, analysoimme ja hyödynnämme IoT-antureista kerättyä dataa tehokkaasti. Hyödynnämme kehittyneitä teknologioita, kuten ESPHomea ja Home Assistanta, sekä ohjelmointikieliä kuten Python Linux Ubuntu -ympäristössä, tuottaaksemme räätälöityjä ja automatisoituja auditointiraportteja. Lisäksi hallitsemme Microsoft-ympäristöt kuten C# .NET, React, Power Automate, PowerApps ja SharePoint Online / Microsoft 365. Panostamme myös selkeään ja vaikuttavaan raportointiin PowerPointilla, Wordilla ja Excelillä.",
      teamTitle: "Tiimimme",
      videosTitle: "Tutustu projekteihimme",
      nif: "NIF12345678A",
      address: "Osoite",
      rights: "Kaikki oikeudet pidätetään.",
      msgLegal: "Tämä sivusto käyttää välttämättömiä evästeitä ja suostumuksellasi yleisömittauksen evästeitä.",
      moreInfo: "Lisätietoja",
      allOK: "Hyväksy kaikki",
      allNOK: "Hylkää kaikki",
      custom: "Mukauta",
      esp321: "ESP32 WROOM-32 DevKit V1 on mikrokontrollerikortti IoT-prototyyppaukseen ESPHome- ja Home Assistant -käyttöön.",
      esp322: "Siinä on ESP32-siru sekä useita GPIO-, ADC-, I2C-, SPI- ja UART-nastoja antureiden ja toimilaitteiden liittämiseen."
    }
  };

  /* -------------------------
     LANGUAGE: detect / init
     ------------------------- */
  const supported = ['en','fr','es','de','pt','nl','da','sv','no','fi'];
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

    // console.log("msgLegal",translations[lang]["msgLegal"]);
    if (!translations[lang]){ 
      console.log("Translation not found !!!");
      return;    
    }
    
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.dataset.key;
      const val = translations[lang]?.[key];
    
      if (val == null) {
        console.warn(`Missing translation: lang="${lang}" key="${key}"`);
        return;
      }
    
      // FIX: check tag name explicitly instead of "src" in el —
      // every element inherits src from the prototype, making
      // the original check always true
      const tag = el.tagName.toLowerCase();
      if (key.startsWith("urlYTB") || key === "srcBas") {
        if (tag === "iframe" || tag === "img" || tag === "video" || tag === "audio") {
          el.src = val;
        }
        return;
      }

      
    
      // FIX: tighten the HTML detection regex to require a proper closing
      // bracket immediately after the tag name/attributes, reducing false
      // positives on strings with stray < or > characters
      const isHTML = /<[a-z][^>]*>/i.test(val);
      if (isHTML) {
        el.innerHTML = val;
      } else {
        const tag = el.tagName.toLowerCase();
        // -----------------------------
        // 2. LINK SUPPORT (NEW)
        // -----------------------------
        if (tag === "a" && (key.startsWith("link") || key.startsWith("url") || el.dataset.href === "true")) {
          el.href = val;
          return;
        }else{
          el.textContent = val;
        }        
      }
    });

    setTimeout(() => {
      const el = document.querySelector("span[data-key='msgLegal']");
      if (el) {
        el.textContent = translations[currentLang].msgLegal;
      }
    }, 200);
    
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
