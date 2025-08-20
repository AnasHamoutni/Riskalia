<script>
/* Dictionnaire partagé (FR/EN/AR) pour toutes les pages */
const I18N = {
  fr:{
    nav:{home:"Accueil",solutions:"Solutions",re:"Réassurance",esg:"ESG",contact:"Contact"},
    cta:{quote:"Obtenir un devis",advisor:"Contacter un conseiller"},
    footer:{desc:"Cabinet de courtage & réassurance agréé ACAPS<br/>Siège : [adresse complète]<br/>N° agrément : [à compléter]",contact:"Contact",links:"Liens"},

    home:{
      title:"L’expertise qui rassure",
      sub:"Courtage toutes branches · Réassurance · Assurance ESG. Nous transformons vos aléas opérationnels en croissance durable.",
      why:[
        {t:"Agrément ACAPS toutes branches",d:"Courtage, réassurance & Takaful. Conformité & protection des assurés."},
        {t:"Méthode « Scoring & Placement »",d:"Notation des assureurs/réassureurs → meilleures conditions."},
        {t:"Transparence contractuelle",d:"Commissions & honoraires communiqués avant signature."}
      ]
    },

    solutions:{
      title:"Solutions d’assurance",
      choose:"Choisissez votre profil",
      pill:{enterprise:"Entreprises",individual:"Particuliers"},
      enterprise:[
        {icon:"🏢",title:"Multirisques Entreprises",desc:"Locaux, équipements, pertes d’exploitation et RC."},
        {icon:"🚚",title:"Transport & Logistique",desc:"Ad valorem, CMR, chaîne du froid et retards."},
        {icon:"🚗",title:"Automobile & Flotte",desc:"Gestion de flotte, sinistres et tarification dédiée."},
        {icon:"⚖️",title:"Responsabilité Civile",desc:"Générale, professionnelle, produits, environnement."},
        {icon:"🏗️",title:"Construction (TRC/RC déc.)",desc:"Tous risques chantier, montage/essai, décennale."},
        {icon:"👥",title:"Santé Collective & Prévoyance",desc:"Couvertures collectives, absentéisme, assistance."}
      ],
      individual:[
        {icon:"🩺",title:"Santé",desc:"Réseaux de soins, remboursements clairs, hospitalisation."},
        {icon:"🛡️",title:"Accidents de la vie",desc:"Indemnisation invalidité, frais et assistance."},
        {icon:"⏳",title:"Retraite & Épargne",desc:"Capital ou rente, fiscalité optimisée."},
        {icon:"🏠",title:"Biens (habitation/auto)",desc:"MRH, auto, objets de valeur — garanties essentielles."},
        {icon:"💠",title:"Assurance-vie & Placements",desc:"Supports dirham/euro, profils de risque, transmission."},
        {icon:"🛫",title:"Voyage Schengen",desc:"Attestation conforme, rapatriement et frais médicaux."}
      ]
    },

    re:{
      title:"Réassurance : expertise & accompagnement stratégique",
      tabs:{intro:"Présentation",treaty:"Traités",fac:"Facultatives",product:"Conception produit"},
      intro:[
        "Accompagnement des assureurs, captives et grands risques : analyse de portefeuille, stratégie de cession, placement et sinistres complexes.",
        "Accès direct à un marché noté A/A+/AA, benchmark de clauses et délais d’indemnisation.",
        "Pilotage de bout en bout : structuration, wording, pricing indicatif et négociation."
      ],
      treaty:[
        "Structuration : Quota Share, Surplus, XoL, Stop-Loss, Agrégat — alignés IFRS 17.",
        "Paramétrage des priorités, limites et corridors de commission.",
        "Documentation LMA/IUA et mapping comptable."
      ],
      fac:[
        "Placements rapides : Property, Engineering, Energy, Casualty, Lines financières.",
        "Solutions pour projets spécifiques (construction, énergie) et pics d’exposition.",
        "Gestion des sinistres : quantum review, loss adjusters, arbitrages internationaux."
      ],
      product:[
        "Design de produits (y compris paramétriques) : triggers et base d’indemnisation.",
        "Wording & exclusions : rédaction, benchmark marché, simplification client.",
        "Soutien pricing/actuariat et data qualité pour le suivi de rentabilité."
      ]
    },

    esg:{
      title:"Assurances durables & accompagnement ESG",
      kicker:"Mesurer, décider, financer — pour une résilience durable",
      blocks:[
        {icon:"📐",title:"Mesurer & diagnostiquer",desc:"Expositions, stress tests & scénarios NGFS, cartographie climat/ESG."},
        {icon:"🧭",title:"Décider & aligner",desc:"Alignement TCFD, Taxonomie UE, SFDR ; feuille de route ESG."},
        {icon:"💼",title:"Financer & mettre en œuvre",desc:"Paramétriques, pertes d’exploitation vertes, accès bailleurs."}
      ]
    },

    contact:{
      title:"Contact & Espace client",
      lead:"Un conseiller vous répond sous 24 h",
      form:{name:"Nom & Prénom",email:"Adresse e-mail",phone:"Téléphone",type:"Type d’assurance",msg:"Message",
        opt:{broker:"Courtage",re:"Réassurance",esg:"ESG & Financement climatique"},submit:"Envoyer"},
      ok:"Merci ! Votre demande a bien été transmise."
    }
  },

  en:{
    nav:{home:"Home",solutions:"Solutions",re:"Reinsurance",esg:"ESG",contact:"Contact"},
    cta:{quote:"Get a quote",advisor:"Talk to an advisor"},
    footer:{desc:"ACAPS-licensed brokerage & reinsurance<br/>Head office: [full address]<br/>Licence no.: [to be completed]",contact:"Contact",links:"Links"},

    home:{
      title:"Expertise that assures",
      sub:"All-lines brokerage · Reinsurance · ESG insurance. We turn operational uncertainty into sustainable growth.",
      why:[
        {t:"ACAPS licence – all lines",d:"Brokerage, reinsurance & Takaful. Compliance and policyholder protection."},
        {t:"“Scoring & Placement” method",d:"Carrier scoring → best terms."},
        {t:"Contract transparency",d:"Fees & commissions disclosed pre-signature."}
      ]
    },

    solutions:{
      title:"Insurance solutions",
      choose:"Choose your profile",
      pill:{enterprise:"Enterprises",individual:"Individuals"},
      enterprise:[
        {icon:"🏢",title:"Commercial All-risks",desc:"Premises, equipment, BI and liability."},
        {icon:"🚚",title:"Transport & Logistics",desc:"Ad valorem, CMR, cold-chain and delay."},
        {icon:"🚗",title:"Motor & Fleet",desc:"Fleet management, claims and tailored pricing."},
        {icon:"⚖️",title:"Liability",desc:"General, professional & product liability, environmental."},
        {icon:"🏗️",title:"Construction (CAR/Decennial)",desc:"CAR, erection/commissioning, decennial."},
        {icon:"👥",title:"Group Health & Benefits",desc:"Collective covers, absenteeism, assistance."}
      ],
      individual:[
        {icon:"🩺",title:"Health",desc:"Care networks, clear reimbursements, hospitalization options."},
        {icon:"🛡️",title:"Personal Accident",desc:"Compensation for disability, expenses and assistance."},
        {icon:"⏳",title:"Retirement & Savings",desc:"Lump sum or annuity, tax-efficient."},
        {icon:"🏠",title:"Property (home/auto)",desc:"Home MRH, motor, valuables — essentials covered."},
        {icon:"💠",title:"Life & Investments",desc:"Dirham/euro funds, risk profiles, estate planning."},
        {icon:"🛫",title:"Schengen Travel",desc:"Compliant certificate, medical expenses and repatriation."}
      ]
    },

    re:{
      title:"Reinsurance: expertise & strategic support",
      tabs:{intro:"Overview",treaty:"Treaty",fac:"Facultative",product:"Product design"},
      intro:[
        "Support to insurers, captives and large risks: portfolio analysis, cession strategy, placement and complex claims.",
        "Direct access to A/A+/AA markets with clause and settlement-time benchmarking.",
        "End-to-end steering: structuring, wording, indicative pricing and negotiation."
      ],
      treaty:[
        "Design: Quota Share, Surplus, XoL, Stop-Loss, Aggregate — aligned with IFRS 17.",
        "Optimising retentions, limits and commission corridors.",
        "LMA/IUA documentation and accounting mapping."
      ],
      fac:[
        "Fast placements for Property, Engineering, Energy, Casualty and Financial lines.",
        "Options for specific projects (construction, energy, special risks) and peak exposures.",
        "Claims handling: quantum review, loss adjusters, international arbitration."
      ],
      product:[
        "Product & guarantee design (incl. parametrics): triggers and basis of indemnity.",
        "Wording & exclusions: drafting, market benchmark, client simplification.",
        "Pricing/actuarial support and data quality for profitability monitoring."
      ]
    },

    esg:{
      title:"Sustainable insurance & ESG advisory",
      kicker:"Measure, decide, finance — for lasting resilience",
      blocks:[
        {icon:"📐",title:"Measure & diagnose",desc:"Exposure analysis, NGFS stress tests, climate/ESG mapping."},
        {icon:"🧭",title:"Decide & align",desc:"TCFD, EU Taxonomy, SFDR; mitigation/adaptation roadmap."},
        {icon:"💼",title:"Finance & implement",desc:"Parametrics, green BI, access to lenders and renegotiation."}
      ]
    },

    contact:{
      title:"Contact & Client space",
      lead:"We reply within 24 hours",
      form:{name:"Full name",email:"Email address",phone:"Phone",type:"Insurance type",msg:"Message",
        opt:{broker:"Brokerage",re:"Reinsurance",esg:"ESG & Climate finance"},submit:"Send"},
      ok:"Thanks! Your request has been sent."
    }
  },

  ar:{
    nav:{home:"الرئيسية",solutions:"الحلول",re:"إعادة التأمين",esg:"الاستدامة",contact:"اتصل بنا"},
    cta:{quote:"احصل على عرض سعر",advisor:"تواصل مع مستشار"},
    footer:{desc:"وساطة وإعادة تأمين بترخيص ACAPS<br/>المقر: [العنوان الكامل]<br/>رقم الترخيص: [لاحقاً]",contact:"اتصال",links:"روابط"},

    home:{
      title:"خبرة تمنح الطمأنينة",
      sub:"وساطة لجميع الفروع · إعادة التأمين · تأمينات ESG. نحو نمو مستدام.",
      why:[
        {t:"ترخيص ACAPS لجميع الفروع",d:"وساطة، إعادة تأمين وتكافل. امتثال وحماية للمؤمن لهم."},
        {t:"منهجية «التنقيط والوساطة»",d:"تنقيط الشركات → أفضل الشروط."},
        {t:"شفافية تعاقدية",d:"الإفصاح عن الأتعاب والعمولات قبل التوقيع."}
      ]
    },

    solutions:{
      title:"حلول التأمين",
      choose:"اختر نوع العميل",
      pill:{enterprise:"شركات",individual:"أفراد"},
      enterprise:[
        {icon:"🏢",title:"متعدد المخاطر للشركات",desc:"المقرات والمعدات وخسائر الاستغلال والمسؤولية."},
        {icon:"🚚",title:"النقل واللوجستيك",desc:"قيمة مضافة، CMR، سلسلة التبريد والتأخيرات."},
        {icon:"🚗",title:"السيارات والأسطول",desc:"إدارة الأسطول والمطالبات وتسعير مخصص."},
        {icon:"⚖️",title:"المسؤولية المدنية",desc:"العامة والمهنية والمنتجات والبيئية."},
        {icon:"🏗️",title:"البناء (أخطار الورش/العشرية)",desc:"جميع أخطار المقاولين والتركيب والتجارب والعشرية."},
        {icon:"👥",title:"الصحة الجماعية والاحتياط",desc:"تغطيات جماعية والغياب والمساعدة."}
      ],
      individual:[
        {icon:"🩺",title:"الصحة",desc:"شبكات علاج وتعويضات واضحة وخيارات الاستشفاء."},
        {icon:"🛡️",title:"حوادث الحياة",desc:"تعويض عند العجز ومصاريف ومساعدة."},
        {icon:"⏳",title:"التقاعد والادخار",desc:"رأس مال أو معاش بكفاءة ضريبية."},
        {icon:"🏠",title:"الممتلكات (السكن/السيارة)",desc:"سكن متعدد الأخطار وسيارة ومقتنيات."},
        {icon:"💠",title:"التأمين على الحياة والاستثمار",desc:"صناديق بالدرهم/اليورو وملفات مخاطر."},
        {icon:"🛫",title:"سفر شنغن",desc:"شهادة مطابقة وتغطية طبية وإعادة للوطن."}
      ]
    },

    re:{
      title:"إعادة التأمين: خبرة ودعم استراتيجي",
      tabs:{intro:"عرض عام",treaty:"اتفاقيات",fac:"اختيارية",product:"تصميم المنتجات"},
      intro:[
        "مرافقة الشركات والكابتيف والمخاطر الكبرى: تحليل المحافظ، إستراتيجية التنازل، الوساطة وإدارة المطالبات المعقدة.",
        "ولوج مباشر إلى أسواق مصنفة A/A+/AA مع مقارنة الشروط وأزمنة التسوية.",
        "إدارة شاملة: الهيكلة، الصياغة، التسعير الإشاري والتفاوض."
      ],
      treaty:[
        "تصميم: حصة نسبية، فائض، فوق الخسارة، إيقاف الخسارة، مجمّع — متوافق مع IFRS 17.",
        "تحسين حدود التحمل والحدود العليا وممرات العمولات.",
        "وثائق LMA/IUA وربط محاسبي."
      ],
      fac:[
        "وساطات سريعة في الممتلكات والهندسة والطاقة والمسؤولية والخطوط المالية.",
        "خيارات للمشاريع الخاصة وذرى التعرض.",
        "إدارة المطالبات: مراجعة التعويض وخبراء الخسائر وتحكيم دولي."
      ],
      product:[
        "تصميم المنتجات والضمانات (بما فيها البارامترية): المشغلات وأسس التعويض.",
        "الصياغات والاستثناءات: كتابة ومقارنة سوقية وتبسيط.",
        "دعم اكتواري/تسعيري وضبط جودة البيانات."
      ]
    },

    esg:{
      title:"تأمينات مستدامة وخدمات ESG",
      kicker:"قياس، قرار، تمويل — لمرونة دائمة",
      blocks:[
        {icon:"📐",title:"القياس والتشخيص",desc:"التعرضات، اختبارات ضغط NGFS، خرائط مناخ/ESG."},
        {icon:"🧭",title:"القرار والمواءمة",desc:"TCFD وتصنيف الاتحاد الأوروبي وSFDR؛ خارطة طريق."},
        {icon:"💼",title:"التمويل والتنفيذ",desc:"حلول بارامترية وخسائر تشغيل خضراء وجهات تمويل."}
      ]
    },

    contact:{
      title:"اتصل بنا ومساحة الزبون",
      lead:"نجيبكم خلال 24 ساعة",
      form:{name:"الاسم الكامل",email:"البريد الإلكتروني",phone:"الهاتف",type:"نوع التأمين",msg:"الرسالة",
        opt:{broker:"وساطة",re:"إعادة التأمين",esg:"ESG وتمويل المناخ"},submit:"إرسال"},
      ok:"شكراً! تم إرسال طلبكم."
    }
  }
};
</script>
