const Riskalia = (() => {
  const SUPPORTED = ['fr', 'en', 'ar'];
  const pageId = document.body.dataset.page || 'home';
  const stored = localStorage.getItem('riskalia_lang');
  const browserLang = (navigator.language || 'fr').slice(0,2).toLowerCase();
  let lang = SUPPORTED.includes(stored) ? stored : (SUPPORTED.includes(browserLang) ? browserLang : 'fr');

  const COMMON = {
    fr: {
      topbar: {
        tagline: 'Nous sommes une expertise unique sur le marché Africain',
        contacts: [
          { type: 'phone', label: 'Pro', value: '+212-666-756991' },
          { type: 'phone', label: 'Perso', value: '+212-675-208909' },
          { type: 'mail', label: 'Nabil', value: 'nabil.cherkaoui@riskalia.ma' },
          { type: 'mail', label: 'Support', value: 'contact@riskalia.ma' }
        ]
      },
      nav: {
        home: 'Accueil',
        solutions: 'Solutions',
        assurance: 'Assurance',
        assuranceIndividuals: 'Particuliers',
        assuranceCorporate: 'Entreprises',
        reinsurance: 'Réassurance',
        climate: 'Risques Climatiques',
        consulting: 'Services de Conseil',
        esg: 'ESG',
        contact: 'Contact'
      },
      search: {
        title: 'Recherche',
        placeholder: 'Rechercher un service ou une page…',
        empty: 'Aucun résultat. Essayez un autre mot-clé.',
        close: 'Fermer la recherche'
      },
      chatbot: {
        title: 'Assistant Riskalia',
        lead: 'Besoin d’un raccourci ? Choisissez une action pour démarrer.',
        welcome: 'Bonjour ! Je suis votre guide Riskalia. Voici comment nous pouvons vous orienter immédiatement :',
        quick: [
          { key: 'solutions', label: 'Explorer nos solutions' },
          { key: 'reinsurance', label: 'Expertise réassurance' },
          { key: 'client', label: 'Espace client' },
          { key: 'contact', label: 'Contacter un associé' }
        ],
        answers: {
          solutions: '<strong>Assurances durables & courtage toutes branches :</strong> découvrez nos parcours Entreprises / Particuliers, nos offres ESG et nos modules sur-mesure.<br/><a href="solutions.html">Voir toutes les solutions</a>',
          reinsurance: '<strong>Réassurance :</strong> structuration de traités, placements facultatifs, ART et assistance sinistres 24/7.<br/><a href="reinsurance.html">Explorer notre expertise</a>',
          client: '<strong>Espace client sécurisé :</strong> contrats, quittances, déclarations et suivi en temps réel.<br/><a href="contact.html#client">Demander un accès</a>',
          contact: '<strong>Parler à un associé :</strong> contactez directement Nabil Cherkaoui ou Anasse Youssfi pour un dossier stratégique.<br/><a href="contact.html">Prenez rendez-vous</a>'
        }
      }
    },
    en: {
      topbar: {
        tagline: 'We deliver a unique level of expertise on the African market',
        contacts: [
          { type: 'phone', label: 'Work', value: '+212-666-756991' },
          { type: 'phone', label: 'Mobile', value: '+212-675-208909' },
          { type: 'mail', label: 'Nabil', value: 'nabil.cherkaoui@riskalia.ma' },
          { type: 'mail', label: 'Support', value: 'contact@riskalia.ma' }
        ]
      },
      nav: {
        home: 'Home',
        solutions: 'Solutions',
        assurance: 'Insurance',
        assuranceIndividuals: 'Individuals',
        assuranceCorporate: 'Corporates',
        reinsurance: 'Reinsurance',
        climate: 'Climate Risks',
        consulting: 'Advisory Services',
        esg: 'ESG',
        contact: 'Contact'
      },
      search: {
        title: 'Search',
        placeholder: 'Search for a service or page…',
        empty: 'No results. Try another keyword.',
        close: 'Close search'
      },
      chatbot: {
        title: 'Riskalia Assistant',
        lead: 'Need a shortcut? Pick an action to get started.',
        welcome: 'Hello! I am your Riskalia guide. Here is how we can help right away:',
        quick: [
          { key: 'solutions', label: 'Explore our solutions' },
          { key: 'reinsurance', label: 'Reinsurance expertise' },
          { key: 'client', label: 'Client portal' },
          { key: 'contact', label: 'Talk to a partner' }
        ],
        answers: {
          solutions: '<strong>Sustainable insurance & multi-line brokerage:</strong> discover our Corporate / Individual journeys, ESG offer and modular support.<br/><a href="solutions.html">Browse all solutions</a>',
          reinsurance: '<strong>Reinsurance:</strong> treaty structuring, facultative placement, ART and 24/7 complex-claims support.<br/><a href="reinsurance.html">See our capabilities</a>',
          client: '<strong>Secure client portal:</strong> policies, invoices, claims submission and real-time tracking.<br/><a href="contact.html#client">Request your access</a>',
          contact: '<strong>Speak with a partner:</strong> connect directly with Nabil Cherkaoui or Anasse Youssfi for strategic matters.<br/><a href="contact.html">Book a meeting</a>'
        }
      }
    },
    ar: {
      topbar: {
        tagline: 'نقدّم خبرة فريدة في السوق الإفريقي',
        contacts: [
          { type: 'phone', label: 'هاتف مهني', value: '+212-666-756991' },
          { type: 'phone', label: 'هاتف شخصي', value: '+212-675-208909' },
          { type: 'mail', label: 'نبيل', value: 'nabil.cherkaoui@riskalia.ma' },
          { type: 'mail', label: 'الدعم', value: 'contact@riskalia.ma' }
        ]
      },
      nav: {
        home: 'الرئيسية',
        solutions: 'الحلول',
        assurance: 'التأمين',
        assuranceIndividuals: 'الأفراد',
        assuranceCorporate: 'الشركات',
        reinsurance: 'إعادة التأمين',
        climate: 'مخاطر المناخ',
        consulting: 'الاستشارات',
        esg: 'الاستدامة (ESG)',
        contact: 'اتصل بنا'
      },
      search: {
        title: 'بحث',
        placeholder: 'ابحث عن خدمة أو صفحة…',
        empty: 'لا توجد نتائج. جرّب كلمة مفتاحية أخرى.',
        close: 'إغلاق البحث'
      },
      chatbot: {
        title: 'مساعد Riskalia',
        lead: 'تحتاج إلى مسار سريع؟ اختر الإجراء المناسب للبدء.',
        welcome: 'مرحباً! أنا دليلك من Riskalia. إليك كيف نساعدك فوراً:',
        quick: [
          { key: 'solutions', label: 'استكشاف حلولنا' },
          { key: 'reinsurance', label: 'خبرة إعادة التأمين' },
          { key: 'client', label: 'فضاء الزبناء' },
          { key: 'contact', label: 'التواصل مع شريك' }
        ],
        answers: {
          solutions: '<strong>التأمين المستدام والوساطة الشاملة:</strong> اكتشف مسارات الشركات والأفراد، عروض ESG والحلول حسب الطلب.<br/><a href="solutions.html">اكتشف كل الحلول</a>',
          reinsurance: '<strong>إعادة التأمين:</strong> تصميم المعاهدات، التغطيات الاختيارية، الحلول البديلة ودعم تسوية المطالبات 24/7.<br/><a href="reinsurance.html">تعرّف على خبرتنا</a>',
          client: '<strong>فضاء زبناء آمن:</strong> العقود، الإيصالات، التصريحات والمتابعة الفورية.<br/><a href="contact.html#client">اطلب الولوج</a>',
          contact: '<strong>التواصل مع شريك:</strong> ربط مباشر مع نبيل شركاوي أو أنس يوسف للملفات الاستراتيجية.<br/><a href="contact.html">احجز موعداً</a>'
        }
      }
    }
  };

  const SEARCH_DATA = [
    {
      url: 'index.html#hero',
      texts: {
        fr: { title: 'Accueil — RISKALIA Courtage & Stratégies', desc: 'Expertise, innovation & résilience pour transformer vos risques en croissance durable.' },
        en: { title: 'Home — Riskalia Brokerage & Strategies', desc: 'Expertise, innovation & resilience to turn risk into sustainable growth.' },
        ar: { title: 'الرئيسية — Riskalia للوساطة والاستراتيجيات', desc: 'خبرة وابتكار ومرونة لتحويل المخاطر إلى نمو مستدام.' }
      }
    },
    {
      url: 'index.html#acaps',
      texts: {
        fr: { title: 'Agrément ACAPS', desc: 'Courtage toutes branches, assurance durable et réassurance agréés.' },
        en: { title: 'ACAPS accreditation', desc: 'All-lines brokerage and reinsurance licensed by the Moroccan regulator.' },
        ar: { title: 'اعتماد ACAPS', desc: 'وساطة في جميع الفروع مع ترخيص رسمي وإعادة تأمين.' }
      }
    },
    {
      url: 'index.html#durable',
      texts: {
        fr: { title: 'Solutions durables', desc: 'Diagnostic, structuration des garanties, conformité ESG et financement climatique.' },
        en: { title: 'Sustainable solutions', desc: 'Assessment, tailored insurance, ESG compliance and climate finance support.' },
        ar: { title: 'حلول مستدامة', desc: 'تشخيص شامل، تغطيات مهيكلة، توافق ESG وتمويل مناخي.' }
      }
    },
    {
      url: 'index.html#brokerage',
      texts: {
        fr: { title: 'Courtage toutes branches', desc: 'Assurances de personnes et de dommages avec mise en concurrence systématique.' },
        en: { title: 'All-lines brokerage', desc: 'People and property covers with systematic carrier benchmarking.' },
        ar: { title: 'وساطة لجميع الفروع', desc: 'حلول للتأمين على الأشخاص والممتلكات مع مقارنة الشركات.' }
      }
    },
    {
      url: 'index.html#reinsurance',
      texts: {
        fr: { title: 'Réassurance — expertise technique', desc: 'Structuration de traités, solutions alternatives et gestion des sinistres complexes.' },
        en: { title: 'Reinsurance — technical expertise', desc: 'Treaty design, alternative solutions and complex claims management.' },
        ar: { title: 'إعادة التأمين — خبرة تقنية', desc: 'تصميم المعاهدات والحلول البديلة وتدبير المطالبات المعقدة.' }
      }
    },
    {
      url: 'solutions.html',
      texts: {
        fr: { title: 'Solutions d’assurance', desc: 'Parcours Entreprises et Particuliers, filtres par besoins et fiches détaillées.' },
        en: { title: 'Insurance solutions', desc: 'Corporate & Individual journeys with detailed product sheets.' },
        ar: { title: 'حلول التأمين', desc: 'مسارات الشركات والأفراد مع بطاقات تفصيلية للمنتجات.' }
      }
    },
    {
      url: 'reinsurance.html',
      texts: {
        fr: { title: 'Page Réassurance', desc: 'Méthodologie, onglets thématiques et ressources pour assureurs et bailleurs.' },
        en: { title: 'Reinsurance page', desc: 'Methodology, thematic tabs and resources for cedents and lenders.' },
        ar: { title: 'صفحة إعادة التأمين', desc: 'منهجية مفصلة، محاور موضوعاتية وموارد لشركات التأمين والبنوك.' }
      }
    },
    {
      url: 'climate.html',
      texts: {
        fr: { title: 'Risques climatiques', desc: 'Cartographie, scénarios NGFS, adaptation et financement résilient.' },
        en: { title: 'Climate risks', desc: 'Mapping, NGFS scenarios, adaptation and resilient financing.' },
        ar: { title: 'مخاطر المناخ', desc: 'خرائط المخاطر، سيناريوهات NGFS، التكيف والتمويل المرن.' }
      }
    },
    {
      url: 'consulting.html',
      texts: {
        fr: { title: 'Services de conseil', desc: 'Gouvernance des risques, conformité et programmes ERM sur mesure.' },
        en: { title: 'Advisory services', desc: 'Risk governance, compliance and bespoke ERM programmes.' },
        ar: { title: 'خدمات استشارية', desc: 'حوكمة المخاطر، الامتثال وبرامج إدارة المخاطر المؤسسية.' }
      }
    },
    {
      url: 'esg.html',
      texts: {
        fr: { title: 'Politique ESG', desc: 'Gouvernance, social, environnement et feuille de route durable.' },
        en: { title: 'ESG policy', desc: 'Governance, people, environment and sustainability roadmap.' },
        ar: { title: 'سياسة ESG', desc: 'الحوكمة، الموارد البشرية، البيئة وخارطة طريق الاستدامة.' }
      }
    },
    {
      url: 'contact.html',
      texts: {
        fr: { title: 'Contact & Espace client', desc: 'Coordonnées, formulaire sécurisé et informations réglementaires.' },
        en: { title: 'Contact & Client space', desc: 'Contact details, secure form and regulatory information.' },
        ar: { title: 'الاتصال وفضاء الزبناء', desc: 'بيانات التواصل، استمارة آمنة ومعلومات تنظيمية.' }
      }
    }
  ];

  const listeners = new Set();
  const pageRegistry = new Map();
  let ready = false;
  let searchOverlay, searchInput, searchResults;
  let chatbotToggle, chatbotPanel, chatbotMessages, chatbotQuick;
  let chatStarted = false;
  let currentSearchQuery = '';

  function translate(path){
    const parts = path.split('.');
    let cur = COMMON[lang];
    for(const part of parts){
      if(!cur || !(part in cur)) return path;
      cur = cur[part];
    }
    return cur;
  }
  function renderTopbar(){
    const contactsWrap = document.querySelector('[data-role="topbar-contacts"]');
    if(!contactsWrap) return;
    const items = COMMON[lang].topbar.contacts || [];
    contactsWrap.innerHTML = items.map(item => {
      const label = `<span>${item.label}</span>`;
      if(item.type === 'phone'){
        const clean = item.value.replace(/\s+/g,'');
        return `<div class="contact-item">${label}<a href="tel:${clean}">${item.value}</a></div>`;
      }
      return `<div class="contact-item">${label}<a href="mailto:${item.value}">${item.value}</a></div>`;
    }).join('');
    const tagline = document.querySelector('[data-common="topbar.tagline"]');
    if(tagline){ tagline.innerHTML = translate('topbar.tagline'); }
  }

  function renderNavText(){
    document.querySelectorAll('[data-common]').forEach(el => {
      const key = el.dataset.common;
      if(key.startsWith('topbar')) return;
      const val = translate(key);
      if(val) el.innerHTML = val;
    });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  }

  function setActiveNav(){
    const links = document.querySelectorAll('[data-nav]');
    links.forEach(link => {
      const targets = link.dataset.nav.split(',').map(x => x.trim());
      const isActive = targets.includes(pageId);
      link.classList.toggle('active', isActive);
      const parentLi = link.closest('li.dropdown');
      if(parentLi){
        parentLi.classList.toggle('current', isActive);
        const parentLink = parentLi.querySelector('a.has-caret');
        if(parentLink){ parentLink.classList.toggle('active', isActive); }
      }
    });
  }

  function renderSearchTexts(){
    const title = document.querySelector('[data-common="search.title"]');
    const close = document.querySelector('[data-role="search-close"]');
    if(title) title.innerHTML = translate('search.title');
    if(searchInput){ searchInput.placeholder = translate('search.placeholder'); }
    if(close) close.setAttribute('aria-label', translate('search.close'));
    renderSearchResults(currentSearchQuery);
  }

  function renderChatbotTexts(){
    if(!chatbotPanel) return;
    const headerTitle = chatbotPanel.querySelector('[data-common="chatbot.title"]');
    const headerLead = chatbotPanel.querySelector('[data-common="chatbot.lead"]');
    if(headerTitle) headerTitle.innerHTML = translate('chatbot.title');
    if(headerLead) headerLead.innerHTML = translate('chatbot.lead');
    if(chatbotMessages){ chatbotMessages.innerHTML = ''; chatStarted = false; }
    renderChatbotQuick();
  }

  function applyCommonTexts(){
    document.documentElement.lang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    renderTopbar();
    renderNavText();
    setActiveNav();
    renderSearchTexts();
    renderChatbotTexts();
  }

  function setLang(newLang){
    if(!SUPPORTED.includes(newLang) || newLang === lang) return;
    lang = newLang;
    localStorage.setItem('riskalia_lang', lang);
    applyCommonTexts();
    notifyLangChange();
  }

  function notifyLangChange(){
    listeners.forEach(fn => fn(lang));
    const entry = pageRegistry.get(pageId);
    if(entry){
      if(!entry.__init && typeof entry.init === 'function'){ entry.init(); entry.__init = true; }
      if(typeof entry.render === 'function'){ entry.render(lang); }
    }
    document.dispatchEvent(new CustomEvent('riskalia:langchange',{ detail:{ lang } }));
  }

  function onLangChange(fn){
    if(typeof fn !== 'function') return;
    listeners.add(fn);
    if(ready) fn(lang);
  }

  function registerPage(id, hooks){
    if(!id) return;
    pageRegistry.set(id, hooks || {});
    if(ready && id === pageId){
      if(hooks && typeof hooks.init === 'function' && !hooks.__init){ hooks.init(); hooks.__init = true; }
      if(hooks && typeof hooks.render === 'function'){ hooks.render(lang); }
    }
  }

  function initLangSwitch(){
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
  }

  function initNav(){
    const menu = document.getElementById('menu');
    const burger = document.querySelector('.menu-toggle');
    if(burger && menu){
      burger.addEventListener('click', () => menu.classList.toggle('show'));
    }
    document.querySelectorAll('#menu a.has-caret').forEach(link => {
      link.addEventListener('click', evt => {
        if(window.innerWidth > 900) return;
        evt.preventDefault();
        const li = link.parentElement;
        if(li) li.classList.toggle('open');
      });
    });
    window.addEventListener('resize', () => {
      if(window.innerWidth > 900){
        document.querySelectorAll('#menu li.open').forEach(li => li.classList.remove('open'));
        if(menu) menu.classList.remove('show');
      }
    });
  }

  function renderSearchResults(query){
    if(!searchResults) return;
    const q = (query || '').trim().toLowerCase();
    currentSearchQuery = q;
    const list = q
      ? SEARCH_DATA.filter(item => {
          const text = item.texts[lang];
          const target = `${text.title} ${text.desc}`.toLowerCase();
          return target.includes(q);
        })
      : SEARCH_DATA;
    if(!list.length){
      searchResults.innerHTML = `<p class="muted">${translate('search.empty')}</p>`;
      return;
    }
    searchResults.innerHTML = list.map(item => {
      const text = item.texts[lang];
      return `<a href="${item.url}" class="result"><strong>${text.title}</strong><span>${text.desc}</span></a>`;
    }).join('');
  }

  function openSearch(){
    if(!searchOverlay) return;
    searchOverlay.classList.add('open');
    searchOverlay.setAttribute('aria-hidden','false');
    requestAnimationFrame(() => {
      if(searchInput){ searchInput.focus(); }
    });
    renderSearchResults('');
  }

  function closeSearch(){
    if(!searchOverlay) return;
    searchOverlay.classList.remove('open');
    searchOverlay.setAttribute('aria-hidden','true');
  }

  function initSearch(){
    searchOverlay = document.getElementById('searchOverlay');
    searchInput = document.getElementById('searchInput');
    searchResults = document.getElementById('searchResults');
    const closeBtn = document.querySelector('[data-role="search-close"]');
    document.querySelectorAll('.search-trigger').forEach(btn => btn.addEventListener('click', openSearch));
    if(closeBtn) closeBtn.addEventListener('click', closeSearch);
    if(searchOverlay){
      searchOverlay.addEventListener('click', evt => { if(evt.target === searchOverlay) closeSearch(); });
    }
    document.addEventListener('keydown', evt => { if(evt.key === 'Escape') closeSearch(); });
    if(searchInput){ searchInput.addEventListener('input', evt => renderSearchResults(evt.target.value)); }
    renderSearchTexts();
  }

  function addChatMessage(text, type){
    if(!chatbotMessages) return;
    const div = document.createElement('div');
    div.className = `chatbot-message ${type === 'user' ? 'user' : 'bot'}`;
    div.innerHTML = text;
    chatbotMessages.appendChild(div);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function handleQuickAction(key, label){
    addChatMessage(label, 'user');
    const answers = COMMON[lang].chatbot.answers || {};
    const reply = answers[key] || '';
    setTimeout(() => addChatMessage(reply, 'bot'), 220);
  }

  function renderChatbotQuick(){
    if(!chatbotQuick) return;
    const quick = COMMON[lang].chatbot.quick || [];
    chatbotQuick.innerHTML = quick.map(item => `<button type="button" data-key="${item.key}">${item.label}</button>`).join('');
    chatbotQuick.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => handleQuickAction(btn.dataset.key, btn.textContent));
    });
  }

  function toggleChatbot(){
    if(!chatbotPanel) return;
    const isOpen = chatbotPanel.classList.toggle('open');
    chatbotToggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if(isOpen && !chatStarted){
      addChatMessage(COMMON[lang].chatbot.welcome, 'bot');
      chatStarted = true;
    }
  }

  function initChatbot(){
    chatbotToggle = document.getElementById('chatbotToggle');
    chatbotPanel = document.getElementById('chatbotPanel');
    chatbotMessages = document.getElementById('chatbotMessages');
    chatbotQuick = document.getElementById('chatbotQuick');
    if(chatbotToggle){ chatbotToggle.addEventListener('click', toggleChatbot); chatbotToggle.setAttribute('aria-expanded','false'); }
    renderChatbotQuick();
  }

  document.addEventListener('DOMContentLoaded', () => {
    searchOverlay = document.getElementById('searchOverlay');
    searchInput = document.getElementById('searchInput');
    searchResults = document.getElementById('searchResults');
    chatbotToggle = document.getElementById('chatbotToggle');
    chatbotPanel = document.getElementById('chatbotPanel');
    chatbotMessages = document.getElementById('chatbotMessages');
    chatbotQuick = document.getElementById('chatbotQuick');

    applyCommonTexts();
    initLangSwitch();
    initNav();
    initSearch();
    initChatbot();

    ready = true;
    notifyLangChange();
  });

  return {
    get lang(){ return lang; },
    setLang,
    t: translate,
    onLangChange,
    registerPage,
    pageId
  };
})();

