/**
 * CIBILI - Consultoría e Innovación Bibliotecológica
 * Pure Vanilla JavaScript Engine (100% JS)
 */
import './style.css';

// Base de Datos Institucional de Soluciones y Servicios CIBILI
const SERVICES_DATA = {
  repositorios: {
    id: 'repositorios',
    title: 'Repositorios Institucionales y Metadatos',
    subtitle: 'Preservación Digital, DSpace, Dublin Core y Cosecha OAI-PMH',
    badge: 'Solución 01',
    description: 'Implementación, migración, parametrización y soporte de repositorios institucionales de acceso abierto bajo estándares mundiales y directrices de la Red Nacional de Repositorios (ALICIA / CONCYTEC / OpenAIRE).',
    deliverables: [
      'Instalación, actualización y migración de DSpace 7.x / 8.x (Angular UI & REST API).',
      'Definición y estandarización de esquemas de metadatos calificados (Dublin Core, Qualified DC).',
      'Configuración de interoperabilidad institucional mediante protocolo OAI-PMH 2.0.',
      'Políticas de autoarchivo, licencias Creative Commons y flujo de validación documental.',
      'Preservación digital a largo plazo y estadísticas de descarga por comunidad académica.'
    ],
    techStack: ['DSpace 8', 'Dublin Core', 'OAI-PMH', 'ALICIA CONCYTEC', 'OpenAIRE', 'PostgreSQL / Solr'],
    targetAudience: 'Bibliotecas universitarias, institutos de investigación, colegios profesionales y organismos públicos.',
    typicalDuration: 'Desde auditorías puntuales (3 semanas) hasta implementaciones completas (2 a 4 meses).'
  },
  organizacion: {
    id: 'organizacion',
    title: 'Organización de la Información y Procesamiento Técnico',
    subtitle: 'Catalogación RDA, Formato MARC21, Tesauros y Control de Autoridades',
    badge: 'Solución 02',
    description: 'Estructuración técnica de colecciones físicas y digitales con las normas bibliográficas internacionales más rigurosas para asegurar la recuperación exacta y rápida de la información.',
    deliverables: [
      'Catalogación y descripción bibliográfica bajo estándar internacional RDA (Resource Description and Access).',
      'Codificación completa en formato MARC21 bibliográfico y de autoridades.',
      'Clasificación temática mediante Sistema Decimal de Dewey (CDD) y Library of Congress (LCC).',
      'Normalización y control de autoridades de autores, instituciones y materias especializadas.',
      'Elaboración de tesauros documentales y vocabularios controlados sectoriales.'
    ],
    techStack: ['RDA Toolkit', 'MARC21', 'MarcEdit', 'LCSH / CDD', 'VocBench / SKOS', 'Dublin Core'],
    targetAudience: 'Archivos históricos, fondos patrimoniales, bibliotecas académicas, escolares y especializadas.',
    typicalDuration: 'Planes por volumen de registros (lotes de 500 a 10,000+ ítems documentales).'
  },
  consultoria: {
    id: 'consultoria',
    title: 'Consultoría para Bibliotecas y Servicios de Información',
    subtitle: 'Diagnósticos Integrales, Automatización Koha ILS y Modernización',
    badge: 'Solución 03',
    description: 'Acompañamos a directores y coordinadores de unidades de información en el rediseño de servicios, optimización presupuestal y transición tecnológica hacia software libre de clase mundial.',
    deliverables: [
      'Diagnóstico situacional integral de bibliotecas y auditoría de servicios al usuario.',
      'Implementación y migración de datos al Sistema Integrado de Gestión Bibliotecaria Koha ILS.',
      'Diseño y parametrización de catálogos en línea de acceso público (OPAC responsivo).',
      'Elaboración de planes estratégicos, manuales de procedimientos y políticas de desarrollo de colecciones.',
      'Capacitación técnica in-situ al personal en módulos de circulación, adquisiciones y seriadas.'
    ],
    techStack: ['Koha ILS', 'Z39.50 / SRU', 'SIP2', 'Linux Debian/Ubuntu', 'MySQL/MariaDB', 'OPAC Custom CSS'],
    targetAudience: 'Redes de bibliotecas universitarias, bibliotecas municipales, institutos superiores y centros de documentación.',
    typicalDuration: 'Planes de consultoría modular de 1 a 6 meses con acompañamiento continuo.'
  },
  editorial: {
    id: 'editorial',
    title: 'Edición de Publicaciones Científicas y OJS',
    subtitle: 'Gestión Integral en OJS, Marcación XML JATS e Indexación Internacional',
    badge: 'Solución 04',
    description: 'Servicio editorial de punta a punta para revistas científicas e institucionales. Maximizamos el impacto académico, la visibilidad internacional y el rigor del arbitraje por pares.',
    deliverables: [
      'Parametrización y actualización de Open Journal Systems (OJS 3.3 y 3.4).',
      'Marcación XML JATS de artículos completos (metadatos, cuerpo, fórmulas, tablas y referencias).',
      'Auditoría y postulación a índices: SciELO, Scopus, Web of Science, Redalyc, Latindex Catálogo 2.0 y DOAJ.',
      'Asignación y depósito automatizado de identificadores persistentes DOI (Crossref) y ORCID.',
      'Diagramación multiformato profesional: PDF de alta resolución, HTML interactivo y ePub.'
    ],
    techStack: ['OJS 3.4', 'XML JATS / SciELO', 'Crossref DOI API', 'ORCID v3', 'PKP Preservation', 'LaTeX'],
    targetAudience: 'Comités editoriales, vicerrectorados de investigación, decanatos y sociedades científicas.',
    typicalDuration: 'Gestión por número editorial (fascículo) o acompañamiento anual continuo.'
  },
  ojs: {
    id: 'ojs',
    title: 'Edición de Publicaciones Científicas y OJS',
    subtitle: 'Gestión Integral en OJS, Marcación XML JATS e Indexación Internacional',
    badge: 'Solución 04',
    description: 'Servicio editorial de punta a punta para revistas científicas e institucionales. Maximizamos el impacto académico, la visibilidad internacional y el rigor del arbitraje por pares.',
    deliverables: [
      'Parametrización y actualización de Open Journal Systems (OJS 3.3 y 3.4).',
      'Marcación XML JATS de artículos completos (metadatos, cuerpo, fórmulas, tablas y referencias).',
      'Auditoría y postulación a índices: SciELO, Scopus, Web of Science, Redalyc, Latindex Catálogo 2.0 y DOAJ.',
      'Asignación y depósito automatizado de identificadores persistentes DOI (Crossref) y ORCID.',
      'Diagramación multiformato profesional: PDF de alta resolución, HTML interactivo y ePub.'
    ],
    techStack: ['OJS 3.4', 'XML JATS / SciELO', 'Crossref DOI API', 'ORCID v3', 'PKP Preservation', 'LaTeX'],
    targetAudience: 'Comités editoriales, vicerrectorados de investigación, decanatos y sociedades científicas.',
    typicalDuration: 'Gestión por número editorial (fascículo) o acompañamiento anual continuo.'
  },
  comunicacion: {
    id: 'comunicacion',
    title: 'Comunicación Digital y Difusión Científica',
    subtitle: 'Visibilidad de Unidades de Información y Fidelización de Comunidades',
    badge: 'Solución 05',
    description: 'Estrategias de comunicación digital pensadas exclusivamente para instituciones académicas, divulgación del conocimiento, portales web de bibliotecas y fidelización de investigadores.',
    deliverables: [
      'Estrategia y plan de contenidos de divulgación científica y servicios bibliotecarios.',
      'Diseño y redacción de boletines de alerta informativa bibliográfica y novedades editoriales.',
      'Campañas de posicionamiento en redes sociales académicas (LinkedIn, ResearchGate, Twitter/X).',
      'Guías visuales e infografías sobre alfabetización informacional para la comunidad universitaria.',
      'Métricas de engagement, alcance e impacto comunicacional de la biblioteca.'
    ],
    techStack: ['Email Marketing', 'Google Analytics 4', 'Altmetric', 'PlumX', 'Canva / Adobe Suite'],
    targetAudience: 'Oficinas de imagen institucional, bibliotecas centrales, fondos editoriales y centros culturales.',
    typicalDuration: 'Abonos mensuales de difusión o campañas institucionales semestrales.'
  },
  mentorias: {
    id: 'mentorias',
    title: 'Mentorías y Asesorías Personalizadas',
    subtitle: 'Acompañamiento 1 a 1 para Profesionales, Directores y Tesistas',
    badge: 'Solución 06',
    description: 'Sesiones personalizadas de asesoría técnica y metodológica con expertos de trayectoria para resolver dudas concretas, destrabar proyectos de investigación o liderar transformaciones.',
    deliverables: [
      'Sesiones 1 a 1 para estructuración de tesis y proyectos en bibliotecología y ciencias de la información.',
      'Mentoría estratégica para directores recién asumidos en bibliotecas universitarias o archivos.',
      'Resolución de incidencias técnicas en software libre (DSpace, Koha, OJS).',
      'Revisión y dictamen metodológico previo de artículos para someter a revistas indexadas.',
      'Elaboración de planes de desarrollo profesional continuo para bibliotecarios.'
    ],
    techStack: ['Google Meet / Zoom', 'Informes Ejecutivos', 'Checklists Técnicos', 'Acceso a Red de Contactos'],
    targetAudience: 'Tesistas de pregrado/posgrado, bibliotecarios jefes, investigadores independientes y docentes.',
    typicalDuration: 'Packs de sesiones individuales de 1, 3 o 5 horas con entregables de feedback.'
  },
  capacitacion: {
    id: 'capacitacion',
    title: 'Capacitación y Formación Especializada',
    subtitle: 'Workshops Prácticos, IA Aplicada y Alfabetización Informacional',
    badge: 'Formación',
    description: 'Programas de alto nivel dirigidos a bibliotecarios, editores, investigadores y documentalistas. Enfocados en la adopción de herramientas emergentes y análisis riguroso de información.',
    deliverables: [
      'Curso-Taller: Inteligencia Artificial Generativa aplicada a la Bibliotecología y Curaduría de Datos.',
      'Entrenamiento avanzado en Gestión y Flujo Editorial con OJS 3.4.',
      'Taller práctico de Cienciometría y Mapeo Científico con R (Bibliometrix) y VOSviewer.',
      'Capacitación en catalogación RDA y gestión de autoridades de materias.',
      'Certificación académica emitida con código de verificación y horas lectivas.'
    ],
    techStack: ['Bibliometrix', 'VOSviewer', 'Python / R', 'Zotero', 'OJS Studio', 'Claude / GPT'],
    targetAudience: 'Profesionales de la información, docentes, investigadores y tesistas.',
    typicalDuration: 'Modalidades sincrónicas y asincrónicas de 12 a 40 horas académicas.'
  }
};

// Configuración de títulos por sección SPA
const SECTION_TITLES = {
  'view-home': 'CIBILI | Consultoría e Innovación Bibliotecológica',
  'view-about': 'Quiénes somos | CIBILI Consultoría',
  'view-solutions': 'Soluciones Especializadas | CIBILI',
  'view-training': 'Formación y Capacitaciones | CIBILI',
  'view-contact': 'Contacto & Solicitud de Reunión | CIBILI'
};

// Mapeo entre hashes URL y vistas SPA
const HASH_TO_VIEW = {
  '': 'view-home',
  '#inicio': 'view-home',
  '#quienes-somos': 'view-about',
  '#soluciones': 'view-solutions',
  '#formacion': 'view-training',
  '#contacto': 'view-contact'
};

const VIEW_TO_HASH = {
  'view-home': '#inicio',
  'view-about': '#quienes-somos',
  'view-solutions': '#soluciones',
  'view-training': '#formacion',
  'view-contact': '#contacto'
};

// Document Ready Initialization (Pure JS)
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initServiceModals();
  initContactForm();
  initWhatsAppWidget();
  initHeaderScroll();
});

/**
 * 1. Navegación SPA con Hash y Transiciones en JS Puro
 */
function initNavigation() {
  const navLinks = document.querySelectorAll('[data-nav-target]');
  const pageViews = document.querySelectorAll('.page-view');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');

  function switchPage(targetId, updateHash = true) {
    if (!targetId) return;

    // Activar vista seleccionada
    pageViews.forEach(view => {
      if (view.id === targetId) {
        view.classList.add('active');
      } else {
        view.classList.remove('active');
      }
    });

    // Actualizar botones de navegación activos
    navLinks.forEach(link => {
      if (link.getAttribute('data-nav-target') === targetId) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    // Cerrar menú móvil si está desplegado
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
    }

    // Actualizar título de pestaña
    if (SECTION_TITLES[targetId]) {
      document.title = SECTION_TITLES[targetId];
    }

    // Actualizar Hash en la URL para navegación del navegador
    if (updateHash && VIEW_TO_HASH[targetId]) {
      history.pushState(null, '', VIEW_TO_HASH[targetId]);
    }

    // Desplazar suavemente a la parte superior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Event Listeners para clics en enlaces de navegación
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-nav-target');
      if (targetId) {
        switchPage(targetId, true);
      }
    });
  });

  // Alternador de Menú Móvil
  if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  // Soporte para botón atrás/adelante del navegador (popstate)
  window.addEventListener('popstate', () => {
    const currentHash = window.location.hash || '#inicio';
    const targetView = HASH_TO_VIEW[currentHash] || 'view-home';
    switchPage(targetView, false);
  });

  // Lectura inicial del hash URL al cargar la página
  const initialHash = window.location.hash;
  if (initialHash && HASH_TO_VIEW[initialHash]) {
    switchPage(HASH_TO_VIEW[initialHash], false);
  }
}

/**
 * 2. Ventana Modal de Ficha Técnica (Pure Vanilla JS)
 */
function initServiceModals() {
  const modalBackdrop = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalDeliverables = document.getElementById('modalDeliverables');
  const modalTechStack = document.getElementById('modalTechStack');
  const modalTarget = document.getElementById('modalTarget');
  const modalDuration = document.getElementById('modalDuration');
  const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
  const modalCloseBtns = document.querySelectorAll('[data-close-modal]');

  function openModal(serviceKey) {
    const data = SERVICES_DATA[serviceKey];
    if (!data || !modalBackdrop) return;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalBadge) modalBadge.textContent = data.badge;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalDesc) modalDesc.textContent = data.description;
    if (modalTarget) modalTarget.textContent = data.targetAudience;
    if (modalDuration) modalDuration.textContent = data.typicalDuration;

    // Lista de entregables y alcance
    if (modalDeliverables) {
      modalDeliverables.innerHTML = '';
      data.deliverables.forEach(item => {
        const li = document.createElement('li');
        li.className = 'flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed';
        li.innerHTML = `
          <svg class="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
          <span>${item}</span>
        `;
        modalDeliverables.appendChild(li);
      });
    }

    // Pila tecnológica (tags)
    if (modalTechStack) {
      modalTechStack.innerHTML = '';
      data.techStack.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200';
        span.textContent = tag;
        modalTechStack.appendChild(span);
      });
    }

    // Enlace directo a WhatsApp con mensaje personalizado
    if (modalWhatsAppBtn) {
      const message = `Hola CIBILI, deseo consultar sobre la propuesta para "${data.title}" (${data.subtitle}). ¿Podrían brindarme información técnica y disponibilidad?`;
      modalWhatsAppBtn.href = `https://wa.me/51982571234?text=${encodeURIComponent(message)}`;
    }

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // Delegación de eventos para botones con data-open-modal
  document.addEventListener('click', (e) => {
    const targetBtn = e.target.closest('[data-open-modal]');
    if (targetBtn) {
      e.preventDefault();
      const serviceKey = targetBtn.getAttribute('data-open-modal');
      openModal(serviceKey);
    }
  });

  // Botones de cerrar
  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Cerrar al hacer clic fuera del diálogo
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

/**
 * 3. Formulario de Contacto y Validación en JS Puro
 */
function initContactForm() {
  // Manejador genérico para formularios de contacto
  function setupForm(formId, config) {
    const form = document.getElementById(formId);
    if (!form) return;
    const feedback = document.getElementById(config.feedbackId);

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById(config.nameId);
      const institutionInput = document.getElementById(config.institutionId);
      const emailInput = document.getElementById(config.emailId);
      const phoneInput = document.getElementById(config.phoneId);
      const cityInput = config.cityId ? document.getElementById(config.cityId) : null;
      const serviceInput = document.getElementById(config.serviceId);
      const messageInput = document.getElementById(config.messageId);

      const name = nameInput ? nameInput.value.trim() : '';
      const institution = institutionInput ? institutionInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const city = cityInput ? cityInput.value.trim() : '';
      const service = serviceInput ? serviceInput.value : 'General';
      const message = messageInput ? messageInput.value.trim() : '';

      // Validación de campos requeridos
      if (!name || !email || !message) {
        if (feedback) {
          feedback.innerHTML = '<span class="text-xs sm:text-sm font-semibold text-rose-600">Por favor, completa los campos requeridos marcados con (*).</span>';
        }
        return;
      }

      // Validación de formato de correo
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (feedback) {
          feedback.innerHTML = '<span class="text-xs sm:text-sm font-semibold text-rose-600">Por favor ingresa un correo electrónico válido.</span>';
        }
        if (emailInput) emailInput.focus();
        return;
      }

      // Estructuración del mensaje para WhatsApp Oficial
      const waText = `*NUEVA CONSULTA - CIBILI WEB*\n` +
        `----------------------------------------\n` +
        `👤 *Nombre:* ${name}\n` +
        `🏛️ *Institución:* ${institution || 'No especificada'}\n` +
        `📧 *Email:* ${email}\n` +
        `📱 *WhatsApp:* ${phone || 'No indicado'}\n` +
        `📍 *Ciudad / Región:* ${city || 'Perú'}\n` +
        `📌 *Servicio de interés:* ${service}\n` +
        `----------------------------------------\n` +
        `💬 *Requerimiento:* ${message}\n` +
        `----------------------------------------\n` +
        `_Enviado desde el portal oficial de CIBILI (Consultoría e Innovación Bibliotecológica)_`;

      if (feedback) {
        feedback.innerHTML = '<span class="text-xs sm:text-sm font-semibold text-emerald-600">✓ Consulta validada. Abriendo WhatsApp oficial de CIBILI...</span>';
      }

      const whatsappUrl = `https://wa.me/51982571234?text=${encodeURIComponent(waText)}`;

      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        form.reset();
        if (feedback) {
          setTimeout(() => {
            feedback.innerHTML = '';
          }, 4000);
        }
      }, 400);
    });
  }

  // 1. Formulario principal de la vista Contacto
  setupForm('contactForm', {
    nameId: 'contactName',
    institutionId: 'contactInstitution',
    emailId: 'contactEmail',
    phoneId: 'contactPhone',
    cityId: 'contactCity',
    serviceId: 'contactService',
    messageId: 'contactMessage',
    feedbackId: 'formFeedback'
  });

  // 2. Formulario integrado en la sección de inicio "¿Listo para iniciar tu proyecto?"
  setupForm('homeContactForm', {
    nameId: 'homeContactName',
    institutionId: 'homeContactInstitution',
    emailId: 'homeContactEmail',
    phoneId: 'homeContactPhone',
    cityId: null,
    serviceId: 'homeContactService',
    messageId: 'homeContactMessage',
    feedbackId: 'homeFormFeedback'
  });
}

/**
 * 5. Floating WhatsApp Widget y Quick Chips (Pure JS)
 */
function initWhatsAppWidget() {
  const toggleBtn = document.getElementById('floatingWhatsAppBtn');
  const popup = document.getElementById('whatsappPopup');
  const closeBtn = document.getElementById('whatsappPopupClose');
  const form = document.getElementById('whatsappChatForm');
  const input = document.getElementById('whatsappChatInput');
  const chips = document.querySelectorAll('.whatsapp-chip');

  if (!toggleBtn || !popup) return;

  toggleBtn.addEventListener('click', () => {
    popup.classList.toggle('open');
    if (popup.classList.contains('open') && input) {
      input.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('open');
    });
  }

  // Quick Chips para consultas rápidas
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.getAttribute('data-msg');
      if (text) {
        window.open(`https://wa.me/51982571234?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
        popup.classList.remove('open');
      }
    });
  });

  // Envío del chat rápido
  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (val) {
        window.open(`https://wa.me/51982571234?text=${encodeURIComponent(val)}`, '_blank', 'noopener,noreferrer');
        input.value = '';
        popup.classList.remove('open');
      }
    });
  }
}

/**
 * 6. Sticky Navbar y Detección de Scroll (Pure JS)
 */
function initHeaderScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 24) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}
