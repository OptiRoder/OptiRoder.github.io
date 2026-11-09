// =============================================================================
//  OptiToolkit Pro — Multi-Language Support (i18n: ES, EN, PT)
// =============================================================================

const I18N_DATA = {
    es: {
        meta_title: "OptiToolkit Pro — Suite de Rendimiento, Mantenimiento y Taller para Windows",
        meta_desc: "OptiToolkit Pro v3.0.0 — Software nativo de optimización, instalador inteligente de programas, monitor en vivo y suite técnica para Windows 10 y 11. Sin suscripciones ni telemetría.",
        
        // Navbar
        nav_features: "Características",
        nav_interface: "Interfaz",
        nav_downloads: "Descargas",
        nav_pricing: "Precios",
        nav_faq: "Preguntas",
        nav_download_btn: "Descargar",

        // Hero
        hero_badge: "OptiToolkit Pro v3.0.0 Oficial",
        hero_title_html: "La Suite Definitiva de <span class=\"gradient-text\">Rendimiento, Mantenimiento</span> y Taller para Windows",
        hero_sub: "Software nativo en C# (.NET 10) que optimiza la latencia del sistema, instala aplicaciones sin publicidad, diagnostica hardware en tiempo real y genera informes técnicos en PDF. Cero telemetría. Sin suscripciones mensuales.",
        hero_btn_installer: "Descargar Instalador (.exe)",
        hero_btn_portable: "Versión Portable (Sin instalación)",
        hero_cmd_label: "O inicia al instante desde PowerShell (Administrador):",
        hero_copy_btn: "Copiar",
        hero_copied: "¡Copiado!",

        // Trust
        trust_windows: "Windows 10 y 11 (x64)",
        trust_binary: "Binario C# Nativo Autocontenido",
        trust_telemetry: "Cero Telemetría / 100% Privado",
        trust_license: "Licencia de Pago Único (Lifetime)",

        // Showcase
        showcase_tag: "Explora la Interfaz",
        showcase_title: "Diseñado para Máximo Control y Claridad",
        showcase_sub: "Una estética moderna en modo oscuro desarrollada para gamers exigentes y técnicos profesionales de taller.",
        tab_opt: "⚡ Optimización",
        tab_apps: "📦 Catálogo de Software",
        tab_monitor: "📊 Monitor en Vivo",
        tab_tech: "🛠️ Taller Técnico (T3)",
        tab_system: "💻 Sistema y Specs",
        
        slide_0_title: "OptiToolkit Pro — Módulo de Optimización de Sistema",
        slide_0_caption: "Perfiles calibrados de latencia: Minimal, Safe, Recomendada, Gaming (FPS Boost) y Extrema con Rollback en 1-Clic.",
        slide_1_title: "OptiToolkit Installer Pro — Gestor Multihilo de Aplicaciones",
        slide_1_caption: "Instala navegadores, launchers de juegos y herramientas esenciales sin instaladores basura y con barra de descarga en vivo.",
        slide_2_title: "OptiToolkit Pro — Monitor de Rendimiento y Recursos",
        slide_2_caption: "Métricas en vivo actualizadas cada 2 segundos: temperatura CPU en tiempo real, consumo de RAM y almacenamiento.",
        slide_3_title: "OptiToolkit Pro — Taller Técnico y Reportes PDF (Tier 3)",
        slide_3_caption: "Herramientas profesionales de rescate: reparación de Spooler/Windows Update y generador de informes técnicos en PDF.",
        slide_4_title: "OptiToolkit Pro — Especificaciones y Gestión del Sistema",
        slide_4_caption: "Detección profunda de componentes (CPU Xeon/Core/Ryzen, GPU, RAM, Disco) y administración rápida de cuentas de usuario.",

        // Features
        feat_tag: "Capacidades Clave",
        feat_title: "Ingeniería de Precisión para Windows",
        feat_sub: "Todo lo que necesitas en una sola aplicación compacta y de arranque instantáneo.",

        feat_1_title: "Optimización de Latencia y BCD",
        feat_1_desc: "Reduce tiempos de respuesta en juegos y aplicaciones pesadas. Ajusta el registro MMCSS, prioridades de CPU, paginación de memoria RAM y aceleración de arranque en Windows.",
        feat_2_title: "Instalador de Software Inteligente",
        feat_2_desc: "Descarga directa de los navegadores, plataformas de juegos y herramientas más populares. Sin paquetes de telemetría adicionales, con cola multihilo y barra de progreso real.",
        feat_3_title: "Snapshots y Reversibilidad Total",
        feat_3_desc: "Crea copias de seguridad del registro, puntos de restauración del sistema y snapshots de configuración antes de cualquier cambio. Reviértelo todo en 1 clic ante cualquier imprevisto.",
        feat_4_title: "Informes Técnicos en PDF",
        feat_4_desc: "Ideal para talleres y técnicos: genera reportes vectoriales certificados en PDF con especificaciones del equipo, diagnóstico S.M.A.R.T. de discos y estado de mantenimiento para tus clientes.",
        feat_5_title: "Modo USB Portable Técnico",
        feat_5_desc: "Lleva la suite completa en tu pendrive USB. Ejecútala en tantas computadoras de clientes como necesites sin necesidad de instalar o dejar residuos en el sistema.",
        feat_6_title: "Cero Telemetría y Criptografía Ed25519",
        feat_6_desc: "Tu privacidad es sagrada. La aplicación no recopila datos de navegación, contraseñas ni archivos. El sistema de licencias funciona offline mediante firmas asimétricas de alta seguridad.",

        // Downloads
        dl_tag: "Descargas Oficiales",
        dl_title: "Elige Cómo Deseas Ejecutarlo",
        dl_sub: "Descarga directa sin enlaces acortados ni publicidad invasiva.",

        dl_c1_badge: "Recomendado",
        dl_c1_title: "Instalador Oficial",
        dl_c1_sub: "Setup Asistido · .EXE (~60 MB)",
        dl_c1_desc: "Instalación estándar guiada para Windows. Integra accesos directos en el Escritorio, menú Inicio y desinstalador completo en el Panel de Control.",
        dl_c1_f1_html: "Instalación en <code>Archivos de Programa</code>",
        dl_c1_f2: "Acceso directo en Menú Inicio y Escritorio",
        dl_c1_f3: "Desinstalador limpio integrado",
        dl_c1_f4: "Actualización automática asistida",
        dl_c1_btn: "Descargar Instalador (v3.0.0)",

        dl_c2_title: "Edición Portable",
        dl_c2_sub: "Sin Instalación · Standalone / ZIP (~60 MB)",
        dl_c2_desc: "Ideal para técnicos, soporte a domicilio o uso rápido. Extrae y ejecuta directamente en cualquier PC o pendrive USB sin alterar el registro.",
        dl_c2_f1: "No requiere instalación en el sistema",
        dl_c2_f2: "100% Autocontenido (.NET 10 integrado)",
        dl_c2_f3: "Ejecución directa desde memorias USB",
        dl_c2_f4: "Cero residuos al retirar el ejecutable",
        dl_c2_btn: "Descargar Versión Portable",

        // Pricing
        price_tag: "Planes y Licencias",
        price_title: "Elige tu Nivel de Acceso",
        price_sub_html: "Modelo honesto de <strong>pago único (Licencia Vitalicia)</strong>. Sin pagos mensuales ni sorpresas.",

        p1_tag: "Nivel 1 · Personal",
        p1_title: "Personal / Gamer",
        p1_desc: "Aceleración para un equipo personal, gaming competitivo y optimización básica de RAM y disco.",
        price_period: "USD / pago único",
        p1_f1_html: "Licencia para <strong>1 PC personal</strong> (HWID)",
        p1_f2_html: "Optimizaciones <strong>Minimal y Safe</strong>",
        p1_f3: "Limpiador de archivos basura y RAM",
        p1_f4: "Catálogo estándar de programas",
        p1_f5: "Monitor de hardware en tiempo real",
        p1_btn: "Adquirir Nivel 1",

        p2_badge: "Más Popular",
        p2_tag: "Nivel 2 · Avanzado",
        p2_title: "Power User",
        p2_desc: "El balance definitivo de rendimiento extremo, desbloqueo de red y control total del sistema.",
        p2_f1_html: "Licencia para <strong>hasta 3 PCs</strong> del hogar",
        p2_f2_html: "<strong>Todo lo de Nivel 1</strong> incluido",
        p2_f3_html: "Perfiles <strong>Gaming (FPS Boost)</strong> y Extremo",
        p2_f4: "Control Defender, Windows Update y BCD",
        p2_f5: "Desinstalador de Bloatware Windows 10/11",
        p2_f6: "Optimizador de Red, Winsock y DNS Jumper",
        p2_btn: "Adquirir Nivel 2",

        p3_tag: "Nivel 3 · Taller Pro",
        p3_title: "Técnico / Taller",
        p3_desc: "Para técnicos de soporte, talleres de ensamblaje y mantenimiento comercial en clientes.",
        p3_f1_html: "<strong>PCs ILIMITADAS</strong> de clientes",
        p3_f2_html: "<strong>Modo Pendrive USB Portable</strong> de taller",
        p3_f3_html: "<strong>Informes Técnicos en PDF</strong> certificados",
        p3_f4: "Reparación de Spooler, WinUpdate y WSReset",
        p3_f5: "Suite de Rescate Live USB (Ventoy & Hiren's)",
        p3_f6: "Cifrador de archivos AES-256 & generador seguro",
        p3_btn: "Adquirir Nivel 3",

        price_guarantee: "Sin suscripciones recurrentes. Pagas una sola vez y la clave te pertenece de por vida. Incluye modo de prueba gratuita de 15 minutos dentro de la aplicación.",

        // FAQ
        faq_tag: "Dudas Habituales",
        faq_title: "Preguntas Frecuentes",
        faq_q1: "¿Es seguro aplicar estas optimizaciones en mi sistema?",
        faq_a1: "Sí. A diferencia de scripts masivos de internet que rompen servicios críticos, OptiToolkit Pro fue diseñado con filtros de seguridad y categorías progresivas (Minimal, Safe, Gaming). Además, antes de aplicar cambios profundos, el software cuenta con un sistema automático de Puntos de Restauración y Snapshots de registro para revertir todo en 1 clic.",
        faq_q2: "¿Cuál es la diferencia entre la versión Portable y el Instalador?",
        faq_a2: "Ambas contienen exactamente las mismas funciones y rendimiento. La versión Portable no requiere instalación y puede ejecutarse directamente desde una memoria USB o cualquier carpeta. El Instalador (.exe) agrega accesos directos en el menú Inicio, escritorio y soporte de desinstalación limpia desde el Panel de Control.",
        faq_q3: "¿Cómo funciona el Nivel 3 para Técnicos y Talleres?",
        faq_a3: "El Nivel 3 incluye autorización expresa para que técnicos de soporte lleven su clave en modo pendrive USB y realicen tareas de formateo, optimización, post-instalación de programas y diagnóstico en computadoras ilimitadas de sus clientes, además de poder generar el informe técnico en PDF con el logotipo y datos del taller.",
        faq_q4: "¿Funciona en Windows 10 y Windows 11?",
        faq_a4: "Sí, es compatible tanto con Windows 10 como con Windows 11 en sus arquitecturas de 64 bits (x64), incluyendo ediciones Home, Pro, Enterprise y LTSC.",
        faq_q5: "¿Qué pasa si formateo mi ordenador o cambio componentes?",
        faq_a5: "El identificador de hardware (HWID) utiliza un algoritmo tolerante de huella digital de placa base y procesador. Formatear el disco duro o reinstalar Windows mantendrá tu activación intacta automáticamente.",

        // Footer
        footer_desc_html: "<strong style=\"color:#fff;\">OptiToolkit Pro</strong> — Suite Profesional de Optimización by <strong>RODER</strong>",
        footer_rights: "© 2026 RODER. Todos los derechos reservados. Desarrollado con C# y .NET 10."
    },

    en: {
        meta_title: "OptiToolkit Pro — Windows Performance, Maintenance & Workshop Suite",
        meta_desc: "OptiToolkit Pro v3.0.0 — Native optimization software, intelligent app installer, real-time hardware monitor, and IT workshop suite for Windows 10 & 11. No subscriptions, zero telemetry.",
        
        // Navbar
        nav_features: "Features",
        nav_interface: "Interface",
        nav_downloads: "Downloads",
        nav_pricing: "Pricing",
        nav_faq: "FAQ",
        nav_download_btn: "Download",

        // Hero
        hero_badge: "OptiToolkit Pro v3.0.0 Official",
        hero_title_html: "The Ultimate <span class=\"gradient-text\">Performance, Maintenance</span> & Workshop Suite for Windows",
        hero_sub: "Native C# (.NET 10) application that optimizes system latency, installs software clean and ad-free, diagnoses hardware in real time, and generates certified technical PDF reports. Zero telemetry. No monthly subscriptions.",
        hero_btn_installer: "Download Installer (.exe)",
        hero_btn_portable: "Portable Edition (No install)",
        hero_cmd_label: "Or launch instantly via PowerShell (Administrator):",
        hero_copy_btn: "Copy",
        hero_copied: "Copied!",

        // Trust
        trust_windows: "Windows 10 & 11 (x64)",
        trust_binary: "Self-Contained Native C# Binary",
        trust_telemetry: "Zero Telemetry / 100% Private",
        trust_license: "One-Time Lifetime License",

        // Showcase
        showcase_tag: "Explore the Interface",
        showcase_title: "Engineered for Ultimate Control & Clarity",
        showcase_sub: "A sleek modern dark aesthetic crafted for demanding gamers and professional IT technicians.",
        tab_opt: "⚡ Optimization",
        tab_apps: "📦 Software Catalog",
        tab_monitor: "📊 Live Monitor",
        tab_tech: "🛠️ IT Workshop (T3)",
        tab_system: "💻 System & Specs",
        
        slide_0_title: "OptiToolkit Pro — System Optimization Module",
        slide_0_caption: "Fine-calibrated latency profiles: Minimal, Safe, Recommended, Gaming (FPS Boost), and Extreme with 1-Click Rollback.",
        slide_1_title: "OptiToolkit Installer Pro — Multithreaded App Manager",
        slide_1_caption: "Install top browsers, game launchers, and essential utilities ad-free with real-time download progress bars.",
        slide_2_title: "OptiToolkit Pro — Performance & Resource Monitor",
        slide_2_caption: "Live metrics refreshed every 2 seconds: real-time CPU temp, RAM utilization, and storage capacity.",
        slide_3_title: "OptiToolkit Pro — Technical Workshop & PDF Reports (Tier 3)",
        slide_3_caption: "Professional rescue toolkit: Windows Update & Spooler repairs, plus certified vector PDF technical report generation.",
        slide_4_title: "OptiToolkit Pro — Hardware Specifications & System Management",
        slide_4_caption: "Deep hardware audit (CPU Xeon/Core/Ryzen, GPU, RAM, Disks) and instant user account management.",

        // Features
        feat_tag: "Key Capabilities",
        feat_title: "Precision Engineering for Windows",
        feat_sub: "Everything you need in a single compact, instant-launching application.",

        feat_1_title: "Latency & BCD Optimization",
        feat_1_desc: "Lowers response times in competitive gaming and intensive workloads. Fine-tunes MMCSS, CPU priorities, RAM paging, and Windows boot acceleration.",
        feat_2_title: "Smart Software Installer",
        feat_2_desc: "Clean direct downloads of top browsers, gaming platforms, and utilities. Free of adware or unwanted bundles, featuring multithreaded queues and live progress bars.",
        feat_3_title: "Snapshots & Full Reversibility",
        feat_3_desc: "Back up registry keys, create system restore points, and capture configuration snapshots before making tweaks. Restore everything with 1 click.",
        feat_4_title: "Certified PDF Diagnostic Reports",
        feat_4_desc: "Built for IT repair shops: generate certified vector PDF reports featuring hardware specs, S.M.A.R.T. disk diagnostics, and maintenance summaries for clients.",
        feat_5_title: "Portable USB Technician Mode",
        feat_5_desc: "Carry the entire suite on your USB flash drive. Run it on unlimited client workstations with zero installation and no leftover traces on the system.",
        feat_6_title: "Zero Telemetry & Ed25519 Crypto",
        feat_6_desc: "Your privacy is paramount. The app collects no telemetry, browsing history, or personal files. Offline licensing operates via high-security asymmetric signatures.",

        // Downloads
        dl_tag: "Official Downloads",
        dl_title: "Choose How You Want to Run It",
        dl_sub: "Direct download links without link shorteners or intrusive advertising.",

        dl_c1_badge: "Recommended",
        dl_c1_title: "Official Installer",
        dl_c1_sub: "Guided Setup · .EXE (~60 MB)",
        dl_c1_desc: "Standard guided installation for Windows. Creates Desktop and Start Menu shortcuts with a clean Control Panel uninstaller.",
        dl_c1_f1_html: "Installs to <code>Program Files</code>",
        dl_c1_f2: "Start Menu & Desktop shortcuts",
        dl_c1_f3: "Clean uninstaller included",
        dl_c1_f4: "Assisted auto-update system",
        dl_c1_btn: "Download Installer (v3.0.0)",

        dl_c2_title: "Portable Edition",
        dl_c2_sub: "No Installation · Standalone / ZIP (~60 MB)",
        dl_c2_desc: "Ideal for technicians, on-site support, or quick portable use. Extract and run directly on any PC or USB flash drive without altering the registry.",
        dl_c2_f1: "No system installation required",
        dl_c2_f2: "100% Self-Contained (.NET 10 embedded)",
        dl_c2_f3: "Runs directly from USB drives",
        dl_c2_f4: "Zero leftover traces upon removal",
        dl_c2_btn: "Download Portable Edition",

        // Pricing
        price_tag: "Plans & Licenses",
        price_title: "Choose Your Access Tier",
        price_sub_html: "Honest <strong>one-time payment (Lifetime License)</strong> model. No monthly subscriptions, no surprises.",

        p1_tag: "Tier 1 · Personal",
        p1_title: "Personal / Gamer",
        p1_desc: "Acceleration for 1 personal computer, competitive gaming tweaks, and basic RAM & disk optimization.",
        price_period: "USD / one-time",
        p1_f1_html: "License for <strong>1 personal PC</strong> (HWID)",
        p1_f2_html: "<strong>Minimal & Safe</strong> optimizations",
        p1_f3: "Junk files & RAM memory cleaner",
        p1_f4: "Standard software catalog",
        p1_f5: "Real-time hardware monitor",
        p1_btn: "Get Tier 1",

        p2_badge: "Most Popular",
        p2_tag: "Tier 2 · Advanced",
        p2_title: "Power User",
        p2_desc: "The ultimate balance of extreme gaming responsiveness, network unlock, and total system control.",
        p2_f1_html: "License for <strong>up to 3 home PCs</strong>",
        p2_f2_html: "<strong>Everything in Tier 1</strong> included",
        p2_f3_html: "<strong>Gaming (FPS Boost)</strong> & Extreme profiles",
        p2_f4: "Windows Defender, Windows Update & BCD control",
        p2_f5: "Windows 10/11 Bloatware uninstaller",
        p2_f6: "Network Optimizer, Winsock & DNS Jumper",
        p2_btn: "Get Tier 2",

        p3_tag: "Tier 3 · Workshop Pro",
        p3_title: "Technician / Workshop",
        p3_desc: "For IT technicians, computer repair shops, and commercial multi-client servicing.",
        p3_f1_html: "<strong>UNLIMITED client PCs</strong>",
        p3_f2_html: "<strong>Portable USB Technician Mode</strong>",
        p3_f3_html: "Certified <strong>PDF Technical Reports</strong>",
        p3_f4: "Spooler, Windows Update & WSReset repairs",
        p3_f5: "Live USB Rescue Suite (Ventoy & Hiren's)",
        p3_f6: "AES-256 file encrypter & secure generator",
        p3_btn: "Get Tier 3",

        price_guarantee: "No recurring subscriptions. Pay once and your license key is yours for life. Includes 15-minute free trial mode inside the app.",

        // FAQ
        faq_tag: "Common Questions",
        faq_title: "Frequently Asked Questions",
        faq_q1: "Is it safe to apply these optimizations to my system?",
        faq_a1: "Yes. Unlike random internet scripts that break critical services, OptiToolkit Pro is built with strict safety boundaries and tiered profiles (Minimal, Safe, Gaming). In addition, before applying deep changes, the app automatically creates System Restore Points and registry snapshots so you can revert everything with 1 click.",
        faq_q2: "What is the difference between the Portable edition and the Installer?",
        faq_a2: "Both provide identical features and performance. The Portable edition requires no installation and can be run straight from a USB stick or any folder. The Installer (.exe) creates desktop and Start Menu shortcuts and supports clean uninstallation via Windows Control Panel.",
        faq_q3: "How does Tier 3 work for IT Technicians and Repair Shops?",
        faq_a3: "Tier 3 grants explicit commercial permission for technicians to carry their license on a portable USB stick to format, optimize, bulk-install software, and troubleshoot unlimited client PCs, as well as generate customized PDF diagnostic reports with shop branding.",
        faq_q4: "Does it work on both Windows 10 and Windows 11?",
        faq_a4: "Yes, it is fully compatible with both Windows 10 and Windows 11 in their 64-bit (x64) architectures, including Home, Pro, Enterprise, and LTSC editions.",
        faq_q5: "What happens if I format my PC or upgrade hardware?",
        faq_a5: "The hardware identifier (HWID) uses a fault-tolerant fingerprint based on the motherboard and processor. Formatting disks or reinstalling Windows preserves your activation automatically.",

        // Footer
        footer_desc_html: "<strong style=\"color:#fff;\">OptiToolkit Pro</strong> — Professional Optimization Suite by <strong>RODER</strong>",
        footer_rights: "© 2026 RODER. All rights reserved. Built with C# & .NET 10."
    },

    pt: {
        meta_title: "OptiToolkit Pro — Suite de Desempenho, Manutenção e Oficina para Windows",
        meta_desc: "OptiToolkit Pro v3.0.0 — Software nativo de otimização, instalador inteligente de aplicativos, monitor em tempo real e suite técnica para Windows 10 e 11. Sem assinaturas nem telemetria.",
        
        // Navbar
        nav_features: "Recursos",
        nav_interface: "Interface",
        nav_downloads: "Downloads",
        nav_pricing: "Preços",
        nav_faq: "Perguntas",
        nav_download_btn: "Baixar",

        // Hero
        hero_badge: "OptiToolkit Pro v3.0.0 Oficial",
        hero_title_html: "A Suite Definitiva de <span class=\"gradient-text\">Desempenho, Manutenção</span> e Oficina para Windows",
        hero_sub: "Software nativo em C# (.NET 10) que otimiza a latência do sistema, instala aplicativos sem anúncios, diagnostica hardware em tempo real e gera relatórios técnicos em PDF. Zero telemetria. Sem assinaturas mensais.",
        hero_btn_installer: "Baixar Instalador (.exe)",
        hero_btn_portable: "Versão Portátil (Sem instalação)",
        hero_cmd_label: "Ou inicie instantaneamente pelo PowerShell (Administrador):",
        hero_copy_btn: "Copiar",
        hero_copied: "Copiado!",

        // Trust
        trust_windows: "Windows 10 e 11 (x64)",
        trust_binary: "Binário C# Nativo Autocontido",
        trust_telemetry: "Zero Telemetria / 100% Privado",
        trust_license: "Licença de Pagamento Único (Vitalícia)",

        // Showcase
        showcase_tag: "Explore a Interface",
        showcase_title: "Projetado para Máximo Controle e Clareza",
        showcase_sub: "Estética moderna em modo escuro desenvolvida para gamers exigentes e técnicos profissionais de suporte.",
        tab_opt: "⚡ Otimização",
        tab_apps: "📦 Catálogo de Softwares",
        tab_monitor: "📊 Monitor em Tempo Real",
        tab_tech: "🛠️ Oficina Técnica (T3)",
        tab_system: "💻 Sistema e Specs",
        
        slide_0_title: "OptiToolkit Pro — Módulo de Otimização do Sistema",
        slide_0_caption: "Perfis calibrados de latência: Minimal, Safe, Recomendada, Gaming (FPS Boost) e Extrema com Rollback em 1 Clique.",
        slide_1_title: "OptiToolkit Installer Pro — Gerenciador Multithread de Aplicativos",
        slide_1_caption: "Instale navegadores, inicializadores de jogos e utilitários sem programas indesejados e com barra de download em tempo real.",
        slide_2_title: "OptiToolkit Pro — Monitor de Desempenho e Recursos",
        slide_2_caption: "Métricas em tempo real atualizadas a cada 2s: temperatura da CPU, uso de memória RAM e capacidade do disco.",
        slide_3_title: "OptiToolkit Pro — Oficina Técnica e Relatórios PDF (Nível 3)",
        slide_3_caption: "Ferramentas profissionais de resgate: reparo de Spooler/Windows Update e gerador de relatórios técnicos em PDF.",
        slide_4_title: "OptiToolkit Pro — Especificações e Gerenciamento do Sistema",
        slide_4_caption: "Auditoria detalhada de hardware (CPU Xeon/Core/Ryzen, GPU, RAM, Discos) e gerenciamento rápido de contas de usuário.",

        // Features
        feat_tag: "Principais Recursos",
        feat_title: "Engenharia de Precisão para Windows",
        feat_sub: "Tudo o que você precisa em um único aplicativo leve e de inicialização instantânea.",

        feat_1_title: "Otimização de Latência e BCD",
        feat_1_desc: "Reduz o tempo de resposta em jogos competitivos e programas pesados. Ajusta o registro MMCSS, prioridades de CPU, memória RAM e aceleração de boot do Windows.",
        feat_2_title: "Instalador Inteligente de Softwares",
        feat_2_desc: "Download direto dos melhores navegadores, launchers de jogos e ferramentas essenciais. Sem programas indesejados, com fila multithread e barra de progresso.",
        feat_3_title: "Snapshots e Reversibilidade Total",
        feat_3_desc: "Crie cópias de segurança do registro, pontos de restauração do sistema e snapshots antes de qualquer alteração. Reverta tudo em 1 clique com segurança.",
        feat_4_title: "Relatórios Técnicos em PDF Certificados",
        feat_4_desc: "Ideal para oficinas e assistência técnica: gere relatórios vetoriais certificados em PDF com especificações, diagnóstico S.M.A.R.T. de disco e resumo para clientes.",
        feat_5_title: "Modo USB Portátil Técnico",
        feat_5_desc: "Leve a suite completa no seu pendrive USB. Execute em computadores ilimitados de clientes sem necessidade de instalação e sem deixar rastros no sistema.",
        feat_6_title: "Zero Telemetria e Criptografia Ed25519",
        feat_6_desc: "Sua privacidade é inegociável. O aplicativo não coleta telemetria, dados de navegação ou arquivos pessoais. Licenciamento offline com chaves assimétricas seguras.",

        // Downloads
        dl_tag: "Downloads Oficiais",
        dl_title: "Escolha Como Deseja Executar",
        dl_sub: "Download direto sem links encurtados ou anúncios invasivos.",

        dl_c1_badge: "Recomendado",
        dl_c1_title: "Instalador Oficial",
        dl_c1_sub: "Instalação Guiada · .EXE (~60 MB)",
        dl_c1_desc: "Instalação padrão guiada para Windows. Cria atalhos na Área de Trabalho e Menu Iniciar, com suporte a desinstalação limpa no Painel de Controle.",
        dl_c1_f1_html: "Instalação em <code>Arquivos de Programas</code>",
        dl_c1_f2: "Atalhos no Menu Iniciar e Área de Trabalho",
        dl_c1_f3: "Desinstalador limpo integrado",
        dl_c1_f4: "Atualização automática assistida",
        dl_c1_btn: "Baixar Instalador (v3.0.0)",

        dl_c2_title: "Edição Portátil",
        dl_c2_sub: "Sem Instalação · Standalone / ZIP (~60 MB)",
        dl_c2_desc: "Ideal para técnicos, atendimento a domicílio ou uso rápido. Extraia e execute direto em qualquer PC ou pendrive USB sem alterar o registro.",
        dl_c2_f1: "Não requer instalação no sistema",
        dl_c2_f2: "100% Autocontido (.NET 10 integrado)",
        dl_c2_f3: "Execução direta a partir de pendrives USB",
        dl_c2_f4: "Zero resíduos ao remover o executável",
        dl_c2_btn: "Baixar Versão Portátil",

        // Pricing
        price_tag: "Planos e Licenças",
        price_title: "Escolha Seu Nível de Acesso",
        price_sub_html: "Modelo transparente de <strong>pagamento único (Licença Vitalícia)</strong>. Sem mensalidades nem surpresas.",

        p1_tag: "Nível 1 · Pessoal",
        p1_title: "Pessoal / Gamer",
        p1_desc: "Aceleração para 1 computador pessoal, gaming competitivo e otimização básica de RAM e disco.",
        price_period: "USD / pagamento único",
        p1_f1_html: "Licença para <strong>1 PC pessoal</strong> (HWID)",
        p1_f2_html: "Otimizações <strong>Minimal e Safe</strong>",
        p1_f3: "Limpador de arquivos inúteis e memória RAM",
        p1_f4: "Catálogo padrão de programas",
        p1_f5: "Monitor de hardware em tempo real",
        p1_btn: "Adquirir Nível 1",

        p2_badge: "Mais Popular",
        p2_tag: "Nível 2 · Avançado",
        p2_title: "Power User",
        p2_desc: "O equilíbrio perfeito de alto desempenho para jogos, desbloqueio de rede e controle total do sistema.",
        p2_f1_html: "Licença para <strong>até 3 PCs</strong> domésticos",
        p2_f2_html: "<strong>Tudo do Nível 1</strong> incluído",
        p2_f3_html: "Perfis <strong>Gaming (FPS Boost)</strong> e Extremo",
        p2_f4: "Controle Defender, Windows Update e BCD",
        p2_f5: "Desinstalador de Bloatware Windows 10/11",
        p2_f6: "Otimizador de Rede, Winsock e DNS Jumper",
        p2_btn: "Adquirir Nível 2",

        p3_tag: "Nível 3 · Oficina Pro",
        p3_title: "Técnico / Oficina",
        p3_desc: "Para técnicos de suporte, oficinas de manutenção e atendimento comercial a clientes.",
        p3_f1_html: "<strong>PCs ILIMITADOS</strong> de clientes",
        p3_f2_html: "<strong>Modo Pendrive USB Portátil</strong> para técnicos",
        p3_f3_html: "<strong>Relatórios Técnicos certificados em PDF</strong>",
        p3_f4: "Reparo de Spooler, WinUpdate e WSReset",
        p3_f5: "Suite de Resgate Live USB (Ventoy e Hiren's)",
        p3_f6: "Criptografia de arquivos AES-256 e gerador seguro",
        p3_btn: "Adquirir Nível 3",

        price_guarantee: "Sem assinaturas recorrentes. Pague uma única vez e a chave será sua para sempre. Inclui modo de teste gratuito de 15 minutos no aplicativo.",

        // FAQ
        faq_tag: "Dúvidas Frequentes",
        faq_title: "Perguntas Frequentes",
        faq_q1: "É seguro aplicar essas otimizações no meu sistema?",
        faq_a1: "Sim. Ao contrário de scripts genéricos da internet que corrompem serviços essenciais, o OptiToolkit Pro foi projetado com filtros de segurança e categorias progressivas (Minimal, Safe, Gaming). Além disso, antes de alterações profundas, o sistema cria Pontos de Restauração e Snapshots do registro para reverter tudo em 1 clique.",
        faq_q2: "Qual a diferença entre a versão Portátil e o Instalador?",
        faq_a2: "Ambas possuem exatamente os mesmos recursos e desempenho. A versão Portátil não requer instalação e pode ser executada direto de um pen drive USB ou pasta. O Instalador (.exe) adiciona atalhos no Menu Iniciar e Desktop, além de permitir desinstalação limpa pelo Painel de Controle.",
        faq_q3: "Como funciona o Nível 3 para Técnicos e Oficinas?",
        faq_a3: "O Nível 3 autoriza expressamente técnicos de suporte a levarem sua chave em um pen drive USB portátil para formatar, otimizar, instalar programas e diagnosticar PCs ilimitados de clientes, além de gerar relatórios técnicos em PDF com logotipo da oficina.",
        faq_q4: "Funciona no Windows 10 e no Windows 11?",
        faq_a4: "Sim, é totalmente compatível tanto com o Windows 10 quanto com o Windows 11 em suas arquiteturas de 64 bits (x64), incluindo edições Home, Pro, Enterprise e LTSC.",
        faq_q5: "O que acontece se eu formatar meu PC ou trocar peças?",
        faq_a5: "O identificador de hardware (HWID) utiliza um algoritmo tolerante baseado na impressão digital da placa-mãe e processador. Formatar o disco rígido ou reinstalar o Windows preserva sua ativação automaticamente.",

        // Footer
        footer_desc_html: "<strong style=\"color:#fff;\">OptiToolkit Pro</strong> — Suite Profissional de Otimização by <strong>RODER</strong>",
        footer_rights: "© 2026 RODER. Todos os direitos reservados. Desenvolvido com C# e .NET 10."
    }
};

const LANG_CONFIG = {
    es: { flag: "🇪🇸", label: "ES" },
    en: { flag: "🇺🇸", label: "EN" },
    pt: { flag: "🇧🇷", label: "PT" }
};

let currentLang = 'es';

function setLanguage(lang) {
    if (!I18N_DATA[lang]) lang = 'es';
    currentLang = lang;
    const t = I18N_DATA[lang];

    // HTML Lang & Document Title
    document.documentElement.lang = lang;
    if (t.meta_title) document.title = t.meta_title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && t.meta_desc) descMeta.setAttribute('content', t.meta_desc);

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Update HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update active slide dataset & current captions
    const slideDatasets = [
        { title: t.slide_0_title, caption: t.slide_0_caption },
        { title: t.slide_1_title, caption: t.slide_1_caption },
        { title: t.slide_2_title, caption: t.slide_2_caption },
        { title: t.slide_3_title, caption: t.slide_3_caption },
        { title: t.slide_4_title, caption: t.slide_4_caption }
    ];

    const slides = document.querySelectorAll('.mockup-slide');
    slides.forEach((slide, idx) => {
        if (slideDatasets[idx]) {
            slide.dataset.title = slideDatasets[idx].title;
            slide.dataset.caption = slideDatasets[idx].caption;
            if (slide.classList.contains('active')) {
                const titleEl = document.getElementById('mockup-header-title');
                const captionEl = document.getElementById('mockup-caption-text');
                if (titleEl) titleEl.textContent = slideDatasets[idx].title;
                if (captionEl) captionEl.textContent = slideDatasets[idx].caption;
            }
        }
    });

    // Update Language UI Selector
    const flagEl = document.getElementById('lang-current-flag');
    const labelEl = document.getElementById('lang-current-label');
    if (flagEl && labelEl && LANG_CONFIG[lang]) {
        flagEl.textContent = LANG_CONFIG[lang].flag;
        labelEl.textContent = LANG_CONFIG[lang].label;
    }

    document.querySelectorAll('.lang-option').forEach(opt => {
        if (opt.getAttribute('data-lang') === lang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });

    // Save to localStorage
    try {
        localStorage.setItem('optitoolkit_lang', lang);
    } catch (e) {
        // Ignore privacy/quota errors
    }
}

function toggleLangMenu(event) {
    if (event) event.stopPropagation();
    const wrapper = document.querySelector('.lang-selector-wrapper');
    if (wrapper) {
        wrapper.classList.toggle('open');
    }
}

function changeLanguage(lang) {
    setLanguage(lang);
    const wrapper = document.querySelector('.lang-selector-wrapper');
    if (wrapper) wrapper.classList.remove('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const wrapper = document.querySelector('.lang-selector-wrapper');
    if (wrapper && !wrapper.contains(e.target)) {
        wrapper.classList.remove('open');
    }
});

// Auto-detect or restore preferred language on page load
document.addEventListener('DOMContentLoaded', () => {
    let savedLang = null;
    try {
        savedLang = localStorage.getItem('optitoolkit_lang');
    } catch (e) {}

    if (!savedLang) {
        const browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
        if (browserLang.startsWith('pt')) {
            savedLang = 'pt';
        } else if (browserLang.startsWith('en')) {
            savedLang = 'en';
        } else {
            savedLang = 'es';
        }
    }

    setLanguage(savedLang);
});
