export interface Translations {
  // Navigation
  nav: {
    home: string;
    products: string;
    pricing: string;
    blog: string;
    about: string;
    login: string;
  };

  // Hero section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    watchDemo: string;
    trustedBy: string;
  };

  // About section
  about: {
    title: string;
    subtitle: string;
    mission: string;
    description: string;
    team: {
      title: string;
      subtitle: string;
    };
    values: {
      title: string;
      transparency: { title: string; description: string; };
      security: { title: string; description: string; };
      simplicity: { title: string; description: string; };
      education: { title: string; description: string; };
    };
    vision: {
      title: string;
      description: string;
    };
    education: {
      title: string;
      subtitle: string;
      description: string;
    };
  };

  // Problems section
  problems: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };

  // Solutions section
  solutions: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };

  // HowItWorks section
  howItWorks: {
    title: string;
    description: string;
    steps: {
      title: string;
      description: string;
      cta?: string;
      href?: string;
    }[];
  };

  // Features section
  features: {
    title: string;
    subtitle: string;
    expense: {
      title: string;
      description: string;
    };
    budget: {
      title: string;
      description: string;
    };
    insights: {
      title: string;
      description: string;
    };
    goals: {
      title: string;
      description: string;
    };
    education: {
      title: string;
      description: string;
    };
    security: {
      title: string;
      description: string;
    };
  };

  // Pricing section
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    yearly: string;
    savePercent: string;
    free: {
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
    };
    pro: {
      name: string;
      price: string;
      priceYearly: string;
      pricePerMonth: string;
      description: string;
      features: string[];
      cta: string;
      popular: string;
    };
    family: {
      name: string;
      price: string;
      priceYearly: string;
      pricePerMonth: string;
      description: string;
      features: string[];
      cta: string;
    };
    coaching: {
      name: string;
      price: string;
      pricePerSession: string;
      description: string;
      features: string[];
      cta: string;
      note: string;
    };
    bundles: {
      title: string;
      subtitle: string;
      student: {
        name: string;
        price: string;
        duration: string;
        description: string;
        features: string[];
        cta: string;
        badge: string;
      };
      couple: {
        name: string;
        price: string;
        duration: string;
        description: string;
        features: string[];
        cta: string;
        badge: string;
      };
    };
    featureComparison: {
      title: string;
      subtitle: string;
      categories: {
        core: string;
        budget: string;
        insights: string;
        collaboration: string;
        learning: string;
      };
      features: Array<{
        name: string;
        category: string;
        free: boolean | string;
        pro: boolean | string;
        family: boolean | string;
      }>;
    };
    valueProps: {
      roi: {
        title: string;
        subtitle: string;
        proSavings: string;
        proRoi: string;
        familySavings: string;
        familyRoi: string;
      };
      pilot: {
        title: string;
        subtitle: string;
        features: string[];
        cta: string;
      };
      loyalty: {
        title: string;
        subtitle: string;
        tiers: {
          silver: {
            name: string;
            requirement: string;
            benefit: string;
          };
          gold: {
            name: string;
            requirement: string;
            benefit: string;
          };
          ambassador: {
            name: string;
            requirement: string;
            benefit: string;
          };
        };
      };
    };
  };

  // Trust Signals
  trustSignals: {
    title: string;
    security: {
      title: string;
      description: string;
    };
    users: {
      label: string;
      count: string;
    };
    savings: {
      label: string;
      amount: string;
    };
    retention: {
      label: string;
      rate: string;
    };
    badges: {
      gdpr: string;
      encryption: string;
      madeForVietnam: string;
    };
  };

  // Persona Highlights
  personaHighlights: {
    title: string;
    subtitle: string;
    minh: {
      name: string;
      role: string;
      painPoint: string;
      solution: string;
      outcome: string;
      cta: string;
    };
    linhDuc: {
      name: string;
      role: string;
      painPoint: string;
      solution: string;
      outcome: string;
      cta: string;
    };
    an: {
      name: string;
      role: string;
      painPoint: string;
      solution: string;
      outcome: string;
      cta: string;
    };
  };

  // Testimonials
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      role: string;
      content: string;
      outcome: string;
    }>;
  };

  // CTA Banner
  cta: {
    title: string;
    subtitle: string;
    urgency: string;
    riskReversal: string;
    primaryButton: string;
    secondaryButton: string;
  };

  // FAQ
  faq: {
    title: string;
    subtitle: string;
    questions: Array<{
      question: string;
      answer: string;
      icon: string;
    }>;
  };

  // Footer
  footer: {
    description: string;
    product: string;
    company: string;
    support: string;
    legal: string;
    followUs: string;
    allRightsReserved: string;
    links: {
      privacy: string;
      terms: string;
      cookies: string;
      contact: string;
      about: string;
      careers: string;
      help: string;
      documentation: string;
    };
  };

  // UI elements
  ui: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    save: string;
    delete: string;
    edit: string;
    view: string;
    download: string;
    upload: string;
    search: string;
    filter: string;
    sort: string;
    next: string;
    previous: string;
    close: string;
    open: string;
    yes: string;
    no: string;
    ok: string;
    learnMore: string;
    getStarted: string;
    tryFree: string;
    comingSoon: string;
    legalErrorTitle: string;
    legalErrorMessage: string;
    legalErrorAction: string;
    legalContactInfo: string;
  };

  // Blog
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    shareArticle: string;
    relatedPosts: string;
    categories: string;
    tags: string;
    author: string;
    publishedOn: string;
    readTime: string;
    noResults: string;
    searchPlaceholder: string;
  };

  // Language and theme
  language: {
    english: string;
    vietnamese: string;
  };
  theme: {
    light: string;
    dark: string;
    system: string;
  };

  // Coming Soon
  comingSoon: {
    hero: {
      title: string;
      subtitle: string;
      badge: string;
    };
    waitlist: {
      namePlaceholder: string;
      placeholder: string;
      button: string;
      successTitle: string;
      successMessage: string;
      joinCount: string;
      modalTitle: string;
      modalSubtitle: string;
    };
    features: {
      budget: {
        title: string;
        description: string;
      };
      goals: {
        title: string;
        description: string;
      };
      education: {
        title: string;
        description: string;
      };
    };
    countdown: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    footer: {
      rightsReserved: string;
      privacy: string;
      terms: string;
    };
  };

  // Legal
  legal: {
    label: string;
    summary: string;
    snapshotNotice: string;
    menu: string;
    inThisDocument: string;
    contents: string;
    onThisPage: string;
    published: string;
    effective: string;
    updated: string;
    languageLabel: string;
    privacyPolicy: string;
    termsOfService: string;
  };
}
