
const SOLUTIONS_I18N = {
  fr: {
    hero: {
      kicker: 'Nos solutions',
      title: 'Riskalia — Courtage & Stratégies en Assurances Durables',
      subtitle: 'Parcours Entreprises et Particuliers, courtage toutes branches, assurance durable et conformité ESG.',
      badges: [
        'Diagnostic actuariel & ESG',
        'Mise en concurrence systématique',
        'Gestion des sinistres & transparence'
      ]
    },
    tabs: { corp: 'Entreprises', retail: 'Particuliers' },
    ui: {
      search: 'Rechercher…',
      clear: 'Effacer',
      nores: 'Aucun produit ne correspond à votre recherche.'
    },
    cta: { learn: 'Découvrir', quote: 'Obtenir un devis' },
    footer: {
      desc: 'Cabinet de courtage & réassurance agréé ACAPS — expertise actuariat, finance, juridique. Siège : [adresse complète] — N° agrément : [à compléter].',
      links: 'Liens utiles',
      contact: 'Contact'
    },
    filters: {
      corp: [
        { id: 'all', label: 'Tous' },
        { id: 'prop', label: 'Biens' },
        { id: 'trans', label: 'Transport' },
        { id: 'fleet', label: 'Flotte' },
        { id: 'liab', label: 'Responsabilité' },
        { id: 'const', label: 'Construction' },
        { id: 'health', label: 'Santé' }
      ],
      retail: [
        { id: 'all', label: 'Tous' },
        { id: 'health', label: 'Santé' },
        { id: 'acc', label: 'Accidents' },
        { id: 'home', label: 'Habitation' },
        { id: 'life', label: 'Vie & placements' },
        { id: 'travel', label: 'Voyage' },
        { id: 'ret', label: 'Retraite' }
      ]
    },
    products: {
      corp: [
        {
          id: 'multirisques',
          url: 'Produits/multirisques.html',
          image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=60',
          categories: ['prop'],
          title: 'Multirisques Entreprise',
          description: 'Biens et pertes d’exploitation pour locaux, stocks et machines.',
          bullets: [
            'Incendie, dégâts des eaux, bris de machines',
            'Pertes d’exploitation (PDB)',
            'Options CatNat & événements climatiques'
          ]
        },
        {
          id: 'transport',
          url: 'Produits/transport.html',
          image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=60',
          categories: ['trans'],
          title: 'Transport (marchandises)',
          description: 'Couvre vos expéditions import/export et la logistique.',
          bullets: [
            'Tous risques facultés',
            'RC transporteur / commissionnaire',
            'Paramétriques météo en option'
          ]
        },
        {
          id: 'flotte',
          url: 'Produits/flotte.html',
          image: 'https://images.unsplash.com/photo-1704488473677-ae044ef0d289?auto=format&fit=crop&w=1200&q=60',
          categories: ['fleet'],
          title: 'Automobile & Flotte',
          description: 'De 5 à 5 000 véhicules, gestion sinistres et télématique.',
          bullets: [
            'Tiers / Tous risques / Bris de glace',
            'Assistance & véhicules de remplacement',
            'Tableaux de bord sinistres'
          ]
        },
        {
          id: 'rc',
          url: 'Produits/rc.html',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=60',
          categories: ['liab'],
          title: 'Responsabilité Civile',
          description: 'RC Générale, Professionnelle, Pollution et Produits.',
          bullets: [
            'RC exploitation et après livraison',
            'RC professionnelle (PI)',
            'RC environnementale'
          ]
        },
        {
          id: 'construction',
          url: 'Produits/construction.html',
          image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60',
          categories: ['const'],
          title: 'Construction (CAR/EAR)',
          description: 'Tous risques chantier et garanties décennales.',
          bullets: [
            'Chantiers BTP, énergie, infrastructures',
            'Pertes d’exploitation chantier',
            'Couvertures par phase'
          ]
        },
        {
          id: 'santecollective',
          url: 'Produits/santecollective.html',
          image: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&w=1200&q=60',
          categories: ['health'],
          title: 'Santé collective & Prévoyance',
          description: 'Contrats salariés : frais médicaux et prévoyance.',
          bullets: [
            'Réseaux de soins & tiers payant',
            'Couvertures cadres / non-cadres',
            'Pilotage coûts & prévention'
          ]
        }
      ],
      retail: [
        {
          id: 'sante',
          url: 'Produits/sante.html',
          image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=60',
          categories: ['health'],
          title: 'Santé',
          description: 'Soins courants, hospitalisation, optique et dentaire.',
          bullets: [
            'Réseau partenaires & tiers payant',
            'Formules modulaires',
            'Assistance 24/7'
          ]
        },
        {
          id: 'alv',
          url: 'Produits/alv.html',
          image: 'https://images.unsplash.com/photo-1633158832532-f71e9c7ac6d6?auto=format&fit=crop&w=1200&q=60',
          categories: ['acc'],
          title: 'Accidents de la vie',
          description: 'Indemnisation des accidents domestiques et loisirs.',
          bullets: [
            'Incapacité & invalidité',
            'Rente éducation',
            'Assistance à domicile'
          ]
        },
        {
          id: 'habitation',
          url: 'Produits/habitation.html',
          image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=60',
          categories: ['home'],
          title: 'Biens (Habitation)',
          description: 'Incendie, vol, dégâts des eaux, RC vie privée.',
          bullets: [
            'Valeur à neuf selon options',
            'Protection juridique',
            'Objets de valeur'
          ]
        },
        {
          id: 'vie',
          url: 'Produits/vie.html',
          image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1200&q=60',
          categories: ['life'],
          title: 'Assurance-vie & placements',
          description: 'Épargne, transmission et capitalisation.',
          bullets: [
            'Fonds dirhams & unités de compte',
            'Arbitrages & fiscalité',
            'Options bénéficiaires'
          ]
        },
        {
          id: 'schengen',
          url: 'Produits/schengen.html',
          image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1200&q=60',
          categories: ['travel'],
          title: 'Voyage Schengen',
          description: 'Attestation visa, assistance et couverture santé.',
          bullets: [
            'Frais médicaux & rapatriement',
            'Bagages & retard',
            'Formules courte / longue durée'
          ]
        },
        {
          id: 'retraite',
          url: 'Produits/retraite.html',
          image: 'https://images.unsplash.com/photo-1562557082-7f2785d741e7?auto=format&fit=crop&w=1200&q=60',
          categories: ['ret'],
          title: 'Retraite',
          description: 'Constitution d’une rente et épargne long terme.',
          bullets: [
            'Versements programmés',
            'Avantages fiscaux (selon cadre)',
            'Options de réversion'
          ]
        }
      ]
    }
  },
  en: {
    hero: {
      kicker: 'Our solutions',
      title: 'Riskalia — Sustainable Insurance Brokerage & Strategies',
      subtitle: 'Corporate and individual journeys, all-lines brokerage and ESG compliance.',
      badges: [
        'Actuarial & ESG diagnostics',
        'Systematic market benchmarking',
        'Claims handling & transparency'
      ]
    },
    tabs: { corp: 'Businesses', retail: 'Individuals' },
    ui: {
      search: 'Search…',
      clear: 'Clear',
      nores: 'No product matches your search.'
    },
    cta: { learn: 'Discover', quote: 'Request a quote' },
    footer: {
      desc: 'ACAPS-licensed brokerage & reinsurance — actuarial, financial and legal expertise. Head office: [full address] — Licence no.: [to be completed].',
      links: 'Useful links',
      contact: 'Contact'
    },
    filters: {
      corp: [
        { id: 'all', label: 'All' },
        { id: 'prop', label: 'Property' },
        { id: 'trans', label: 'Cargo' },
        { id: 'fleet', label: 'Fleet' },
        { id: 'liab', label: 'Liability' },
        { id: 'const', label: 'Construction' },
        { id: 'health', label: 'Health' }
      ],
      retail: [
        { id: 'all', label: 'All' },
        { id: 'health', label: 'Health' },
        { id: 'acc', label: 'Accident' },
        { id: 'home', label: 'Home' },
        { id: 'life', label: 'Life & savings' },
        { id: 'travel', label: 'Travel' },
        { id: 'ret', label: 'Retirement' }
      ]
    },
    products: {
      corp: [
        {
          id: 'multirisques',
          url: 'Produits/multirisques.html',
          image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=60',
          categories: ['prop'],
          title: 'Commercial Property (All Risks)',
          description: 'Assets and business interruption for premises, stock and machinery.',
          bullets: [
            'Fire, water damage, machinery breakdown',
            'Business interruption cover',
            'NatCat and climate options'
          ]
        },
        {
          id: 'transport',
          url: 'Produits/transport.html',
          image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=60',
          categories: ['trans'],
          title: 'Cargo / Transport',
          description: 'Protects imports, exports and logistics chains.',
          bullets: [
            'All-risks cargo',
            'Carrier / freight forwarder liability',
            'Optional weather parametrics'
          ]
        },
        {
          id: 'flotte',
          url: 'Produits/flotte.html',
          image: 'https://images.unsplash.com/photo-1704488473677-ae044ef0d289?auto=format&fit=crop&w=1200&q=60',
          categories: ['fleet'],
          title: 'Motor & Fleet',
          description: 'From 5 to 5,000 vehicles with claims dashboards and telematics.',
          bullets: [
            'TPL / comprehensive / glass',
            'Roadside assistance and courtesy cars',
            'Loss-ratio monitoring'
          ]
        },
        {
          id: 'rc',
          url: 'Produits/rc.html',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=60',
          categories: ['liab'],
          title: 'General & Professional Liability',
          description: 'GL, PI, pollution and product liability programmes.',
          bullets: [
            'Operations and post-delivery',
            'Professional indemnity',
            'Environmental liability'
          ]
        },
        {
          id: 'construction',
          url: 'Produits/construction.html',
          image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60',
          categories: ['const'],
          title: 'Construction (CAR/EAR)',
          description: 'All-risks projects with decennial guarantees where required.',
          bullets: [
            'Civil engineering, energy and infrastructure',
            'Project delay / BI options',
            'Phase-by-phase covers'
          ]
        },
        {
          id: 'santecollective',
          url: 'Produits/santecollective.html',
          image: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&w=1200&q=60',
          categories: ['health'],
          title: 'Group Health & Benefits',
          description: 'Employee medical plans and risk benefits solutions.',
          bullets: [
            'Provider networks and cashless services',
            'Schemes by employee grade',
            'Cost-control and prevention support'
          ]
        }
      ],
      retail: [
        {
          id: 'sante',
          url: 'Produits/sante.html',
          image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=60',
          categories: ['health'],
          title: 'Health',
          description: 'Outpatient, hospital, optical and dental care.',
          bullets: [
            'Partner networks and cashless services',
            'Modular plans',
            '24/7 assistance'
          ]
        },
        {
          id: 'alv',
          url: 'Produits/alv.html',
          image: 'https://images.unsplash.com/photo-1633158832532-f71e9c7ac6d6?auto=format&fit=crop&w=1200&q=60',
          categories: ['acc'],
          title: 'Personal Accident',
          description: 'Benefits for domestic and leisure accidents.',
          bullets: [
            'Disability and incapacity benefits',
            'Education annuity',
            'Home assistance'
          ]
        },
        {
          id: 'habitation',
          url: 'Produits/habitation.html',
          image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=60',
          categories: ['home'],
          title: 'Home (Property)',
          description: 'Fire, theft, water damage and personal liability.',
          bullets: [
            'New-for-old options',
            'Legal protection',
            'Valuables cover'
          ]
        },
        {
          id: 'vie',
          url: 'Produits/vie.html',
          image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1200&q=60',
          categories: ['life'],
          title: 'Life Insurance & Savings',
          description: 'Wealth management, succession and capital growth.',
          bullets: [
            'Dirham funds and unit-linked options',
            'Arbitrage support and tax guidance',
            'Flexible beneficiary clauses'
          ]
        },
        {
          id: 'schengen',
          url: 'Produits/schengen.html',
          image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1200&q=60',
          categories: ['travel'],
          title: 'Schengen Travel',
          description: 'Visa-compliant certificates with assistance and medical cover.',
          bullets: [
            'Medical and repatriation costs',
            'Baggage and delay protection',
            'Short- and long-stay options'
          ]
        },
        {
          id: 'retraite',
          url: 'Produits/retraite.html',
          image: 'https://images.unsplash.com/photo-1562557082-7f2785d741e7?auto=format&fit=crop&w=1200&q=60',
          categories: ['ret'],
          title: 'Retirement',
          description: 'Build long-term income and savings with tailored plans.',
          bullets: [
            'Programmed contributions',
            'Tax efficiency (subject to regulations)',
            'Reversion options'
          ]
        }
      ]
    }
  },
  ar: {
    hero: {
      kicker: 'حلولنا',
      title: 'Riskalia — وساطة واستراتيجيات للتأمين المستدام',
      subtitle: 'مسارات الشركات والأفراد، وساطة شاملة لجميع الفروع وامتثال ESG.',
      badges: [
        'تشخيص اكتواري وESG',
        'مقارنة عروض السوق بشكل منهجي',
        'تدبير المطالبات والشفافية'
      ]
    },
    tabs: { corp: 'الشركات', retail: 'الأفراد' },
    ui: {
      search: 'ابحث…',
      clear: 'مسح',
      nores: 'لا توجد منتجات مطابقة لبحثك.'
    },
    cta: { learn: 'اكتشف', quote: 'اطلب عرضاً' },
    footer: {
      desc: 'وساطة وإعادة تأمين بترخيص ACAPS — خبرة اكتوارية ومالية وقانونية. المقر: [العنوان الكامل] — رقم الترخيص: [لاحقاً].',
      links: 'روابط مفيدة',
      contact: 'اتصل بنا'
    },
    filters: {
      corp: [
        { id: 'all', label: 'الكل' },
        { id: 'prop', label: 'ممتلكات' },
        { id: 'trans', label: 'نقل' },
        { id: 'fleet', label: 'أساطيل' },
        { id: 'liab', label: 'مسؤولية' },
        { id: 'const', label: 'إنشاءات' },
        { id: 'health', label: 'صحة' }
      ],
      retail: [
        { id: 'all', label: 'الكل' },
        { id: 'health', label: 'صحة' },
        { id: 'acc', label: 'حوادث' },
        { id: 'home', label: 'سكن' },
        { id: 'life', label: 'حياة وادخار' },
        { id: 'travel', label: 'سفر' },
        { id: 'ret', label: 'تقاعد' }
      ]
    },
    products: {
      corp: [
        {
          id: 'multirisques',
          url: 'Produits/multirisques.html',
          image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=60',
          categories: ['prop'],
          title: 'متعدد المخاطر للشركات',
          description: 'الممتلكات وخسارة الأرباح للمقار والمخازن والآلات.',
          bullets: [
            'حريق، تسرب مياه، عطل الآلات',
            'خسارة الأرباح',
            'خيارات الكوارث الطبيعية والمناخية'
          ]
        },
        {
          id: 'transport',
          url: 'Produits/transport.html',
          image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=60',
          categories: ['trans'],
          title: 'نقل البضائع',
          description: 'تغطية الاستيراد والتصدير وسلاسل الإمداد.',
          bullets: [
            'جميع أخطار البضائع',
            'مسؤولية الناقل أو المخلص',
            'حلول بارامترية للطقس (اختياري)'
          ]
        },
        {
          id: 'flotte',
          url: 'Produits/flotte.html',
          image: 'https://images.unsplash.com/photo-1704488473677-ae044ef0d289?auto=format&fit=crop&w=1200&q=60',
          categories: ['fleet'],
          title: 'السيارات والأساطيل',
          description: 'من 5 إلى 5000 مركبة مع إدارة المطالبات والتتبع.',
          bullets: [
            'مسؤولية مدنية / شامل / زجاج',
            'مساعدة على الطريق وسيارات بديلة',
            'لوحات مؤشرات للمطالبات'
          ]
        },
        {
          id: 'rc',
          url: 'Produits/rc.html',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=60',
          categories: ['liab'],
          title: 'المسؤولية العامة والمهنية',
          description: 'برامج المسؤولية العامة والمهنية والتلوث والمنتجات.',
          bullets: [
            'أثناء التشغيل وبعد التسليم',
            'المسؤولية المهنية',
            'المسؤولية البيئية'
          ]
        },
        {
          id: 'construction',
          url: 'Produits/construction.html',
          image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60',
          categories: ['const'],
          title: 'الإنشاءات (CAR/EAR)',
          description: 'جميع أخطار المشاريع وضمانات عشرية عند الحاجة.',
          bullets: [
            'أشغال البناء والطاقة والبنية التحتية',
            'خسارة الأرباح أثناء الورش',
            'تغطيات حسب مراحل المشروع'
          ]
        },
        {
          id: 'santecollective',
          url: 'Produits/santecollective.html',
          image: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&w=1200&q=60',
          categories: ['health'],
          title: 'الصحة الجماعية والمزايا',
          description: 'برامج طبية وتأمينية مخصصة للموظفين.',
          bullets: [
            'شبكات مقدمي الخدمة والدفع المباشر',
            'خطط حسب درجات الموظفين',
            'تحكم في التكاليف وإجراءات وقائية'
          ]
        }
      ],
      retail: [
        {
          id: 'sante',
          url: 'Produits/sante.html',
          image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=60',
          categories: ['health'],
          title: 'الصحة',
          description: 'رعاية طبية خارجية وداخلية، بصريات وطب أسنان.',
          bullets: [
            'شبكات شركاء ودفع مباشر',
            'خطط مرنة حسب الاحتياج',
            'مساعدة طارئة على مدار الساعة'
          ]
        },
        {
          id: 'alv',
          url: 'Produits/alv.html',
          image: 'https://images.unsplash.com/photo-1633158832532-f71e9c7ac6d6?auto=format&fit=crop&w=1200&q=60',
          categories: ['acc'],
          title: 'حوادث الحياة',
          description: 'تعويضات عن الحوادث المنزلية وحوادث الترفيه.',
          bullets: [
            'تعويضات العجز وعدم القدرة',
            'راتب للتعليم',
            'مساعدة منزلية'
          ]
        },
        {
          id: 'habitation',
          url: 'Produits/habitation.html',
          image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=60',
          categories: ['home'],
          title: 'السكن (الممتلكات)',
          description: 'حريق، سرقة، تسرب مياه ومسؤولية مدنية شخصية.',
          bullets: [
            'خيار القيمة الجديدة',
            'حماية قانونية',
            'تغطية المقتنيات الثمينة'
          ]
        },
        {
          id: 'vie',
          url: 'Produits/vie.html',
          image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1200&q=60',
          categories: ['life'],
          title: 'تأمين الحياة والادخار',
          description: 'ادخار، نقل للثروة وتنمية رأس المال.',
          bullets: [
            'صناديق بالدرهم ووحدات استثمارية',
            'دعم للتحويلات والضرائب',
            'خيارات مرنة للمستفيدين'
          ]
        },
        {
          id: 'schengen',
          url: 'Produits/schengen.html',
          image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1200&q=60',
          categories: ['travel'],
          title: 'سفر شنغن',
          description: 'شهادة مطابقة للتأشيرة مع مساعدة وتغطية طبية.',
          bullets: [
            'نفقات طبية وإعادة للوطن',
            'تغطية الأمتعة والتأخير',
            'خيارات إقامة قصيرة أو طويلة'
          ]
        },
        {
          id: 'retraite',
          url: 'Produits/retraite.html',
          image: 'https://images.unsplash.com/photo-1562557082-7f2785d741e7?auto=format&fit=crop&w=1200&q=60',
          categories: ['ret'],
          title: 'التقاعد',
          description: 'بناء دخل وادخار طويل الأجل بخطط مخصصة.',
          bullets: [
            'مساهمات مبرمجة',
            'نجاعة ضريبية (حسب الإطار)',
            'خيارات الاستحقاق أو العكس'
          ]
        }
      ]
    }
  }
};

const DEFAULT_PRODUCT_IMAGE = 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1200&q=60';
const solutionsState = { segment: 'corp', filter: 'all', query: '' };
let currentLang = (typeof Riskalia !== 'undefined' && Riskalia.lang) || 'fr';
let searchInput;
let clearButton;
let chipsWrap;
let gridWrap;
let tabs;

function getData(path){
  const parts = path.split('.');
  let node = SOLUTIONS_I18N[currentLang];
  for(const part of parts){
    if(node == null) return null;
    node = node[part];
  }
  return node;
}

function setText(selector, value){
  const el = document.querySelector(selector);
  if(el != null && value != null){
    el.innerHTML = value;
  }
}

function renderHero(){
  setText('[data-i18n="solutions.hero.kicker"]', getData('hero.kicker'));
  setText('[data-i18n="solutions.hero.title"]', getData('hero.title'));
  setText('[data-i18n="solutions.hero.subtitle"]', getData('hero.subtitle'));
  const badges = getData('hero.badges') || [];
  const wrap = document.querySelector('[data-role="solutions-hero-badges"]');
  if(wrap){
    wrap.innerHTML = badges.map(badge => `<span class="badge">${badge}</span>`).join('');
  }
}

function renderTabs(){
  if(!tabs) return;
  const labels = getData('tabs') || {};
  tabs.forEach(tab => {
    const seg = tab.dataset.seg;
    if(labels[seg]) tab.textContent = labels[seg];
    const active = solutionsState.segment === seg;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

function renderChips(){
  if(!chipsWrap) return;
  const filters = getData(`filters.${solutionsState.segment}`) || [];
  chipsWrap.innerHTML = filters.map(filter => `
    <button type="button" class="chip${solutionsState.filter === filter.id ? ' active' : ''}" data-id="${filter.id}">
      ${filter.label}
    </button>
  `).join('');
}

function renderGrid(){
  if(!gridWrap) return;
  const list = getData(`products.${solutionsState.segment}`) || [];
  const query = (solutionsState.query || '').trim().toLowerCase();
  const filtered = list.filter(item => {
    const byCategory = solutionsState.filter === 'all' || (item.categories || []).includes(solutionsState.filter);
    if(!byCategory) return false;
    if(!query) return true;
    const text = `${item.title || ''} ${item.description || ''} ${(item.bullets || []).join(' ')}`.toLowerCase();
    return text.includes(query);
  });
  if(!filtered.length){
    gridWrap.innerHTML = `<p class="muted">${getData('ui.nores') || ''}</p>`;
    return;
  }
  const learn = getData('cta.learn') || '';
  const quote = getData('cta.quote') || '';
  gridWrap.innerHTML = filtered.map(item => {
    const image = item.image || DEFAULT_PRODUCT_IMAGE;
    const url = item.url || '#';
    const bullets = (item.bullets || []).map(line => `<li>${line}</li>`).join('');
    return `
      <article class="card">
        <a href="${url}" aria-label="${item.title}">
          <img class="illus" src="${image}" alt=""/>
        </a>
        <h3>${item.title}</h3>
        <p class="muted">${item.description || ''}</p>
        ${bullets ? `<ul>${bullets}</ul>` : ''}
        <div class="actions">
          <a class="btn" href="${url}">${learn}</a>
          <a class="btn secondary" href="contact.html">${quote}</a>
        </div>
      </article>
    `;
  }).join('');
}

function renderFooter(){
  setText('[data-i18n="solutions.footer.desc"]', getData('footer.desc'));
  setText('[data-i18n="solutions.footer.links"]', getData('footer.links'));
  setText('[data-i18n="solutions.footer.contact"]', getData('footer.contact'));
}

function renderUI(){
  renderHero();
  renderTabs();
  renderChips();
  renderGrid();
  renderFooter();
  if(searchInput){
    searchInput.placeholder = getData('ui.search') || '';
    searchInput.value = solutionsState.query;
  }
  if(clearButton){
    clearButton.textContent = getData('ui.clear') || '';
  }
}

function updateHashForSegment(seg){
  const target = seg === 'retail' ? '#particuliers' : '#entreprises';
  if(window.location.hash !== target){
    history.replaceState(null, '', target);
  }
}

function applySegment(seg, options){
  const opts = options || {};
  if(seg !== 'corp' && seg !== 'retail') return;
  if(solutionsState.segment === seg && !opts.force) return;
  solutionsState.segment = seg;
  solutionsState.filter = 'all';
  solutionsState.query = '';
  if(searchInput){ searchInput.value = ''; }
  if(opts.updateHash !== false){
    updateHashForSegment(seg);
  }
  renderTabs();
  renderChips();
  renderGrid();
}

function handleHashChange(){
  const hash = window.location.hash.replace('#','');
  if(hash === 'particuliers'){
    applySegment('retail', { updateHash: false, force: true });
  }else if(hash === 'entreprises'){
    applySegment('corp', { updateHash: false, force: true });
  }
}

Riskalia.registerPage('solutions', {
  init(){
    searchInput = document.getElementById('solutionsSearch');
    clearButton = document.getElementById('solutionsClear');
    chipsWrap = document.getElementById('solutionsChips');
    gridWrap = document.getElementById('solutionsGrid');
    tabs = document.querySelectorAll('.tabs .tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const seg = tab.dataset.seg;
        if(seg){
          applySegment(seg);
        }
      });
    });

    if(chipsWrap){
      chipsWrap.addEventListener('click', evt => {
        const btn = evt.target.closest('button[data-id]');
        if(!btn) return;
        const id = btn.dataset.id;
        if(!id || solutionsState.filter === id) return;
        solutionsState.filter = id;
        renderChips();
        renderGrid();
      });
    }

    if(searchInput){
      searchInput.addEventListener('input', evt => {
        solutionsState.query = evt.target.value;
        renderGrid();
      });
    }

    if(clearButton){
      clearButton.addEventListener('click', () => {
        solutionsState.query = '';
        if(searchInput){ searchInput.value = ''; }
        renderGrid();
      });
    }

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
  },
  render(lang){
    if(!SOLUTIONS_I18N[lang]) return;
    currentLang = lang;
    renderUI();
  }
});
