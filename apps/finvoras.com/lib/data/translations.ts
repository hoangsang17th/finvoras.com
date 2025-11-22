import type { Translations } from "../types/translations";

export const translations: Record<"en" | "vi", Translations> = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      pricing: "Pricing",
      blog: "Blog",
      about: "About",
      features: "Features",
      contact: "Contact",
      getStarted: "Get Started",
      login: "Login",
      register: "Sign Up",
      dashboard: "Dashboard",
    },

    hero: {
      title: "Take Control of Your Financial Future",
      subtitle: "Smart Personal Finance Management",
      description:
        "Transform your financial life with Finvoras. Track expenses, manage budgets, and build wealth with personalized insights and education.",
      subtext: "Join 10,000+ users saving an average of 3M VNĐ per month with our AI-powered financial ecosystem",
      primaryCta: "Start Your Journey",
      secondaryCta: "Explore Features",
      watchDemo: "See How It Works",
      trustedBy: "Trusted by thousands of users worldwide",
    },

    // HowItWorks section
    howItWorks: {
      title: "How It Works",
      description: "A simple 3-step process to get started with Finvoras.",
      steps: [
        {
          title: "Sign Up",
          description: "Create your free account in seconds.",
          cta: "Get Started",
          href: "/register",
        },
        {
          title: "Connect Your Accounts",
          description: "Link your bank accounts securely.",
          cta: "Connect",
          href: "/settings",
        },
        {
          title: "Track & Grow",
          description: "Monitor spending and achieve goals.",
          cta: "Start Tracking",
          href: "/dashboard",
        },
      ],
    },

    // Trust Signals
    trustSignals: {
      title: "Trusted by Thousands",
      security: {
        title: "Bank-Level Security",
        description: "Your data protected with AES-256 encryption and GDPR compliance",
      },
      users: {
        label: "Active Users",
        count: "10,000+",
      },
      savings: {
        label: "Average Monthly Savings",
        amount: "3M VNĐ",
      },
      retention: {
        label: "User Satisfaction",
        rate: "95%",
      },
      badges: {
        gdpr: "GDPR Compliant",
        encryption: "AES-256 Encrypted",
        madeForVietnam: "Made for Vietnam",
      },
    },

    // Persona Highlights
    personaHighlights: {
      title: "Built for Your Financial Journey",
      subtitle: "Whether you're starting out, planning together, or building your career—Finvoras has you covered",
      minh: {
        name: "For Young Professionals",
        role: "Like Minh, 26, Marketing Manager",
        painPoint: "Lost track of spending across multiple bank accounts and wallets",
        solution: "FinNote + Budget + AI Coach helps you track every đồng, optimize spending, and build wealth",
        outcome: "Save 3M+ VNĐ/month, reduce unclear spending from 30% to <10%",
        cta: "Start Tracking Smart",
      },
      linhDuc: {
        name: "For Couples & Families",
        role: "Like Linh & Đức, planning their future",
        painPoint: "Struggled with transparent finances and joint goals",
        solution: "MoneyLove + Shared Goals helps couples manage money together with trust and clarity",
        outcome: "Saved 100M VNĐ for home deposit in 12 months, zero money arguments",
        cta: "Plan Together",
      },
      an: {
        name: "For Ambitious Students",
        role: "Like An, 21, University Student",
        painPoint: "Limited budget, no financial knowledge, apps too complicated",
        solution: "Student Mode + Micro-courses makes budgeting simple and builds financial literacy",
        outcome: "Complete 30-day financial challenge, save 200k/week consistently",
        cta: "Learn & Grow",
      },
    },

    // Features section
    features: {
      title: "Everything You Need for Financial Success",
      subtitle: "Powerful tools designed to help you achieve your financial goals",
      expense: {
        title: "Smart Expense Tracking",
        description: "Automatically categorize and track your expenses with AI-powered insights.",
      },
      budget: {
        title: "Intelligent Budgeting",
        description: "Create and manage budgets that adapt to your spending patterns.",
      },
      insights: {
        title: "Financial Insights",
        description: "Get personalized recommendations to optimize your financial health.",
      },
      goals: {
        title: "Goal Setting",
        description: "Set and track financial goals with milestone celebrations.",
      },
      education: {
        title: "Financial Education",
        description: "Learn with curated content and interactive courses.",
      },
      security: {
        title: "Bank-Level Security",
        description: "Your data is protected with enterprise-grade security measures.",
      },
    },

    // Pricing section
    pricing: {
      title: "Choose Your Plan",
      subtitle: "Simple pricing for everyone. Start free, upgrade as you grow.",
      monthly: "Monthly",
      yearly: "Yearly",
      savePercent: "Save 15%",
      free: {
        name: "Free",
        price: "Free",
        description: "Perfect for getting started with personal finance management",
        features: [
          "FinNote basic expense tracking",
          "Manual transaction entry",
          "Weekly reports",
          "1 savings goal",
          "Community access",
          "Mobile app access",
        ],
        cta: "Get Started Free",
      },
      pro: {
        name: "Pro",
        price: "99,000 VNĐ",
        priceYearly: "84,150 VNĐ",
        pricePerMonth: "/month",
        description: "For young professionals who want control and growth",
        features: [
          "Everything in Free",
          "Multi-source transaction sync",
          "Budget blueprint (50/30/20)",
          "AI coach personalized insights",
          "5 financial goals",
          "Micro-course: 30-Day Budget Mastery",
          "Advanced analytics",
          "Priority support",
        ],
        cta: "Start Pro Trial",
        popular: "Most Popular",
      },
      family: {
        name: "Family",
        price: "179,000 VNĐ",
        priceYearly: "152,150 VNĐ",
        pricePerMonth: "/month",
        description: "Perfect for couples and families to manage finances together",
        features: [
          "Everything in Pro",
          "MoneyLove shared wallet",
          "Joint goal tracking",
          "Up to 3 additional accounts",
          "Spending permissions",
          "Recurring reminders",
          "Monthly coaching group session",
          "Family financial reports",
        ],
        cta: "Start Family Trial",
      },
      coaching: {
        name: "1:1 Coaching",
        price: "499,000 VNĐ",
        pricePerSession: "/session",
        description: "Deep-dive financial consulting with certified experts",
        features: [
          "60-minute personalized session",
          "Certified Financial Planner (CFP)",
          "Custom action plan",
          "Investment roadmap guidance",
          "Follow-up resources",
          "Priority booking for Pro/Family users",
        ],
        cta: "Book a Session",
        note: "Available for Pro and Family members",
      },
      bundles: {
        title: "Special Bundles",
        subtitle: "Get more value with our curated bundles",
        student: {
          name: "Student Bundle",
          price: "199,000 VNĐ",
          duration: "3 months",
          description: "Perfect for ambitious students building financial habits",
          features: [
            "Full Pro access for 3 months",
            "Financial literacy micro-courses",
            "Finvoras Student certificate",
            "Online workshop access",
            "Campus community challenges",
          ],
          cta: "Get Student Bundle",
          badge: "Best for Students",
        },
        couple: {
          name: "Couple Kickstart",
          price: "499,000 VNĐ",
          duration: "3 months",
          description: "Jumpstart your financial journey together",
          features: [
            "Family tier for 3 months",
            "2 coaching group sessions",
            "Pre-baby financial template",
            "Home deposit planning worksheet",
            "Couples finance guide",
          ],
          cta: "Start Together",
          badge: "Perfect for Couples",
        },
      },
      featureComparison: {
        title: "Compare All Features",
        subtitle: "See what's included in each plan",
        categories: {
          core: "Core Features",
          budget: "Budgeting & Goals",
          insights: "AI & Insights",
          collaboration: "Collaboration",
          learning: "Learning & Support",
        },
        features: [
          {
            name: "Manual expense tracking",
            category: "core",
            free: true,
            pro: true,
            family: true,
          },
          {
            name: "Multi-source transaction sync",
            category: "core",
            free: false,
            pro: true,
            family: true,
          },
          {
            name: "Financial goals",
            category: "budget",
            free: "1 goal",
            pro: "5 goals",
            family: "Unlimited",
          },
          {
            name: "Budget blueprint (50/30/20)",
            category: "budget",
            free: false,
            pro: true,
            family: true,
          },
          {
            name: "AI coach insights",
            category: "insights",
            free: false,
            pro: "Personalized",
            family: "Personalized + Family",
          },
          {
            name: "Reports frequency",
            category: "insights",
            free: "Weekly",
            pro: "Daily",
            family: "Real-time",
          },
          {
            name: "Shared wallet (MoneyLove)",
            category: "collaboration",
            free: false,
            pro: false,
            family: true,
          },
          {
            name: "Additional accounts",
            category: "collaboration",
            free: false,
            pro: false,
            family: "Up to 3",
          },
          {
            name: "Micro-courses",
            category: "learning",
            free: "Community only",
            pro: "30-Day Budget Mastery",
            family: "All courses + Couple finance",
          },
          {
            name: "Support",
            category: "learning",
            free: "Community",
            pro: "Priority email",
            family: "Priority + Monthly group coaching",
          },
        ],
      },
      valueProps: {
        roi: {
          title: "Smart Investment",
          subtitle: "See your potential returns",
          proSavings: "Average Pro users save 3M+ VNĐ per month",
          proRoi: "That's 30× return on your 99k investment",
          familySavings: "Couples on Family plan save 100M VNĐ in 12 months",
          familyRoi: "Reach your home deposit goal faster",
        },
        pilot: {
          title: "Join Our Beta Program",
          subtitle: "Limited spots available",
          features: [
            "2 months free Pro/Family after pilot",
            "Personalized onboarding via video call",
            "Money-back guarantee if goals not met",
            "Early access to new features",
          ],
          cta: "Apply for Beta",
        },
        loyalty: {
          title: "Loyalty Rewards",
          subtitle: "The longer you stay, the more you save",
          tiers: {
            silver: {
              name: "Silver",
              requirement: "6 months",
              benefit: "10% discount from month 7",
            },
            gold: {
              name: "Gold",
              requirement: "12 months",
              benefit: "1 free coaching session + Champion badge",
            },
            ambassador: {
              name: "Ambassador",
              requirement: "Refer 5 paid users",
              benefit: "1 month free + early beta access",
            },
          },
        },
      },
    },

    // Testimonials
    testimonials: {
      title: "What Our Users Say",
      subtitle: "Join thousands of satisfied users who've transformed their financial lives",
      items: [
        {
          name: "Minh Nguyen",
          role: "Marketing Manager, Ho Chi Minh City",
          content: "Finvoras helped me finally understand where my money goes. The AI coach gives personalized tips that actually work for Vietnamese lifestyle.",
          outcome: "Saved 60M VNĐ in first year",
        },
        {
          name: "Linh & Đức",
          role: "Young Couple, Hanoi",
          content: "MoneyLove transformed how we handle money as a couple. We can see our shared goals and track progress together without any awkward conversations.",
          outcome: "Reached 100M VNĐ home deposit goal",
        },
        {
          name: "An Tran",
          role: "University Student, Da Nang",
          content: "As a student with limited income, Finvoras taught me budgeting basics. The gamification keeps me motivated and I love the campus challenges!",
          outcome: "Built emergency fund of 5M VNĐ",
        },
      ],
    },

    // CTA Banner
    cta: {
      title: "Ready to Transform Your Financial Life?",
      subtitle: "Join thousands of users who are already taking control of their finances with Finvoras.",
      urgency: "Limited time offer: Save 20% on annual plans!",
      riskReversal: "30-day money-back guarantee. No questions asked.",
      primaryButton: "Start Free Today",
      secondaryButton: "Schedule Demo",
    },

    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about Finvoras",
      questions: [
        {
          question: "Is Finvoras free to use?",
          answer: "Yes! Finvoras offers a free tier with essential features including expense tracking, basic budgeting, and monthly reports. You can upgrade to Pro (99,000 VNĐ/month) or Family (179,000 VNĐ/month) for advanced features like AI insights, goal planning, and family budgeting.",
          icon: "BadgeDollarSign",
        },
        {
          question: "Is my financial data secure?",
          answer: "Absolutely. We use bank-level encryption (AES-256) to protect your data. Your information is encrypted both in transit and at rest. We never sell your data to third parties and comply with international security standards including GDPR.",
          icon: "ShieldCheck",
        },
        {
          question: "Does Finvoras support Vietnamese language?",
          answer: "Yes! Finvoras is fully localized for Vietnamese users with native language support, culturally-adapted financial advice, and AI coaching designed specifically for the Vietnamese market. You can switch between English and Vietnamese anytime.",
          icon: "Languages",
        },
        {
          question: "Which banks can I connect to Finvoras?",
          answer: "We're currently developing integrations with major Vietnamese banks including Vietcombank, BIDV, VietinBank, and Techcombank. Manual transaction entry is available now, with automatic bank sync coming in our beta release.",
          icon: "Building2",
        },
        {
          question: "How do I upgrade from Free to Pro?",
          answer: "You can upgrade anytime from your account settings. Simply choose your preferred plan (Pro or Family), select your payment method, and you'll get instant access to all premium features. We offer monthly and yearly billing with 15% savings on annual plans.",
          icon: "TrendingUp",
        },
        {
          question: "Is Finvoras suitable for couples and families?",
          answer: "Yes! Our Family tier (179,000 VNĐ/month) is designed specifically for couples and families. It includes shared budgets, joint goal tracking, spending permissions, and up to 3 additional accounts. Perfect for managing household finances together.",
          icon: "Users",
        },
      ],
    },

    // Footer
    footer: {
      description: "Empowering individuals to achieve financial wellness through smart tools and education.",
      product: "Product",
      company: "Company",
      support: "Support",
      legal: "Legal",
      followUs: "Follow Us",
      allRightsReserved: "All rights reserved.",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
        contact: "Contact Us",
        about: "About Us",
        careers: "Careers",
        help: "Help Center",
        documentation: "Documentation",
      },
    },

    // Auth
    auth: {
      login: {
        title: "Welcome Back",
        subtitle: "Sign in to your Finvoras account",
        email: "Email Address",
        password: "Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password?",
        loginButton: "Sign In",
        noAccount: "Don't have an account?",
        signUp: "Sign up",
        orContinueWith: "Or continue with",
      },
      register: {
        title: "Create Your Account",
        subtitle: "Start your financial journey with Finvoras",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        password: "Password",
        confirmPassword: "Confirm Password",
        agreeToTerms: "I agree to the Terms of Service and Privacy Policy",
        registerButton: "Create Account",
        haveAccount: "Already have an account?",
        signIn: "Sign in",
        orContinueWith: "Or continue with",
      },
    },

    // Contact
    contact: {
      title: "Get in Touch",
      subtitle: "We're here to help you succeed on your financial journey",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Thank you for your message. We'll get back to you soon!",
      error: "Something went wrong. Please try again or email us directly.",
      info: {
        address: "123 Finance Street, Money City, MC 12345",
        phone: "+1 (555) 123-4567",
        email: "hello@finvoras.com",
        hours: "Monday - Friday: 9AM - 6PM EST",
      },
    },

    // Common UI elements
    ui: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      view: "View",
      download: "Download",
      upload: "Upload",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      next: "Next",
      previous: "Previous",
      close: "Close",
      open: "Open",
      yes: "Yes",
      no: "No",
      ok: "OK",
      learnMore: "Learn More",
      getStarted: "Get Started",
      tryFree: "Try Free",
      comingSoon: "Coming Soon",
    },

    // About page
    about: {
      title: "About Finvoras",
      subtitle: "Empowering financial wellness through technology and education",
      mission: {
        title: "Our Mission",
        description: "To democratize financial wellness by providing accessible, intelligent tools that help everyone make better financial decisions.",
      },
      vision: {
        title: "Our Vision",
        description: "A world where everyone has the knowledge and tools to achieve financial freedom and security.",
      },
      values: {
        title: "Our Values",
        transparency: {
          title: "Transparency",
          description: "We believe in clear, honest communication about your finances and our services.",
        },
        security: {
          title: "Security",
          description: "Your financial data is protected with the highest security standards.",
        },
        simplicity: {
          title: "Simplicity",
          description: "Complex financial concepts made simple and actionable for everyone.",
        },
        education: {
          title: "Education",
          description: "Empowering users with knowledge to make informed financial decisions.",
        },
      },
      team: {
        title: "Our Team",
        subtitle: "Meet the people behind Finvoras",
      },
    },

    // Blog
    blog: {
      title: "Financial Insights & Tips",
      subtitle: "Stay informed with the latest in personal finance and wealth building",
      readMore: "Read More",
      shareArticle: "Share Article",
      relatedPosts: "Related Posts",
      categories: "Categories",
      tags: "Tags",
      author: "Author",
      publishedOn: "Published on",
      readTime: "min read",
      noResults: "No articles found",
      searchPlaceholder: "Search articles...",
    },

    // Language and theme
    language: {
      english: "English",
      vietnamese: "Tiếng Việt",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      system: "System",
    },
  },

  vi: {
    // Navigation
    nav: {
      home: "Trang chủ",
      pricing: "Giá cả",
      blog: "Blog",
      about: "Về chúng tôi",
      features: "Tính năng",
      contact: "Liên hệ",
      getStarted: "Bắt đầu",
      login: "Đăng nhập",
      register: "Đăng ký",
      dashboard: "Bảng điều khiển",
    },

    // Hero section
    hero: {
      title: "Kiểm Soát Tương Lai Tài Chính Của Bạn",
      subtitle: "Quản Lý Tài Chính Cá Nhân Thông Minh",
      description:
        "Thay đổi cuộc sống tài chính với Finvoras. Theo dõi chi tiêu, quản lý ngân sách và xây dựng tài sản với những hiểu biết và giáo dục cá nhân hóa.",
      subtext: "Tham gia cùng 10.000+ người dùng tiết kiệm trung bình 3 triệu VNĐ/tháng với hệ sinh thái tài chính AI của chúng tôi",
      primaryCta: "Bắt Đầu Hành Trình",
      secondaryCta: "Khám Phá Tính Năng",
      watchDemo: "Xem Cách Hoạt Động",
      trustedBy: "Được tin tưởng bởi hàng nghìn người dùng trên toàn thế giới",
    },

    // HowItWorks section
    howItWorks: {
      title: "Cách Thức Hoạt Động",
      description: "Quy trình 3 bước đơn giản để bắt đầu với Finvoras.",
      steps: [
        {
          title: "Đăng Ký",
          description: "Tạo tài khoản miễn phí trong vài giây.",
          cta: "Bắt Đầu",
          href: "/register",
        },
        {
          title: "Kết Nối Tài Khoản",
          description: "Liên kết tài khoản ngân hàng một cách an toàn.",
          cta: "Kết Nối",
          href: "/settings",
        },
        {
          title: "Theo Dõi & Phát Triển",
          description: "Giám sát chi tiêu và đạt mục tiêu.",
          cta: "Bắt Đầu Theo Dõi",
          href: "/dashboard",
        },
      ],
    },

    // Trust Signals
    trustSignals: {
      title: "Được Hàng Nghìn Người Tin Tưởng",
      security: {
        title: "Bảo Mật Cấp Ngân Hàng",
        description: "Dữ liệu của bạn được bảo vệ với mã hóa AES-256 và tuân thủ GDPR",
      },
      users: {
        label: "Người Dùng Hoạt Động",
        count: "10.000+",
      },
      savings: {
        label: "Tiết Kiệm Trung Bình/Tháng",
        amount: "3 triệu VNĐ",
      },
      retention: {
        label: "Độ Hài Lòng Người Dùng",
        rate: "95%",
      },
      badges: {
        gdpr: "Tuân Thủ GDPR",
        encryption: "Mã Hóa AES-256",
        madeForVietnam: "Được Tạo Cho Việt Nam",
      },
    },

    // Persona Highlights
    personaHighlights: {
      title: "Được Xây Dựng Cho Hành Trình Tài Chính Của Bạn",
      subtitle: "Dù bạn đang khởi đầu, lập kế hoạch cùng nhau, hay xây dựng sự nghiệp—Finvoras đều hỗ trợ bạn",
      minh: {
        name: "Cho Chuyên Gia Trẻ",
        role: "Như Minh, 26 tuổi, Quản Lý Marketing",
        painPoint: "Mất kiểm soát chi tiêu qua nhiều tài khoản ngân hàng và ví điện tử",
        solution: "FinNote + Budget + AI Coach giúp bạn theo dõi từng đồng, tối ưu chi tiêu và xây dựng tài sản",
        outcome: "Tiết kiệm 3 triệu+ VNĐ/tháng, giảm chi tiêu không rõ từ 30% xuống <10%",
        cta: "Bắt Đầu Theo Dõi Thông Minh",
      },
      linhDuc: {
        name: "Cho Cặp Đôi & Gia Đình",
        role: "Như Linh & Đức, đang lập kế hoạch tương lai",
        painPoint: "Khó khăn với minh bạch tài chính và mục tiêu chung",
        solution: "MoneyLove + Mục Tiêu Chung giúp cặp đôi quản lý tiền bạc cùng nhau với niềm tin và rõ ràng",
        outcome: "Tiết kiệm 100 triệu VNĐ cho đặt cọc nhà trong 12 tháng, không tranh cãi về tiền",
        cta: "Lập Kế Hoạch Cùng Nhau",
      },
      an: {
        name: "Cho Sinh Viên Năng Động",
        role: "Như An, 21 tuổi, Sinh Viên Đại Học",
        painPoint: "Ngân sách hạn chế, thiếu kiến thức tài chính, app quá phức tạp",
        solution: "Chế Độ Sinh Viên + Khóa Học Nhỏ giúp lập ngân sách đơn giản và xây dựng kiến thức tài chính",
        outcome: "Hoàn thành thử thách tài chính 30 ngày, tiết kiệm 200k/tuần ổn định",
        cta: "Học Hỏi & Phát Triển",
      },
    },

    // Features section
    features: {
      title: "Mọi Thứ Bạn Cần Cho Thành Công Tài Chính",
      subtitle: "Công cụ mạnh mẽ được thiết kế để giúp bạn đạt được mục tiêu tài chính",
      expense: {
        title: "Theo Dõi Chi Tiêu Thông Minh",
        description: "Tự động phân loại và theo dõi chi tiêu với những hiểu biết được hỗ trợ bởi AI.",
      },
      budget: {
        title: "Lập Ngân Sách Thông Minh",
        description: "Tạo và quản lý ngân sách thích ứng với thói quen chi tiêu của bạn.",
      },
      insights: {
        title: "Hiểu Biết Tài Chính",
        description: "Nhận những khuyến nghị cá nhân hóa để tối ưu hóa sức khỏe tài chính.",
      },
      goals: {
        title: "Đặt Mục Tiêu",
        description: "Đặt và theo dõi các mục tiêu tài chính với những cột mốc đáng nhớ.",
      },
      education: {
        title: "Giáo Dục Tài Chính",
        description: "Học hỏi với nội dung được tuyển chọn và các khóa học tương tác.",
      },
      security: {
        title: "Bảo Mật Cấp Ngân Hàng",
        description: "Dữ liệu của bạn được bảo vệ với các biện pháp bảo mật cấp doanh nghiệp.",
      },
    },

    // Pricing section
    pricing: {
      title: "Chọn Gói Của Bạn",
      subtitle: "Giá cả đơn giản cho mọi người. Bắt đầu miễn phí, nâng cấp khi phát triển.",
      monthly: "Hàng tháng",
      yearly: "Hàng năm",
      savePercent: "Tiết kiệm 15%",
      free: {
        name: "Miễn phí",
        price: "Miễn phí",
        description: "Hoàn hảo để bắt đầu với quản lý tài chính cá nhân",
        features: [
          "Theo dõi chi tiêu FinNote cơ bản",
          "Nhập giao dịch thủ công",
          "Báo cáo hàng tuần",
          "1 mục tiêu tiết kiệm",
          "Truy cập cộng đồng",
          "Ứng dụng di động",
        ],
        cta: "Bắt Đầu Miễn Phí",
      },
      pro: {
        name: "Pro",
        price: "99.000 VNĐ",
        priceYearly: "84.150 VNĐ",
        pricePerMonth: "/tháng",
        description: "Dành cho chuyên gia trẻ muốn kiểm soát và phát triển",
        features: [
          "Mọi thứ trong gói Miễn phí",
          "Đồng bộ giao dịch đa nguồn",
          "Blueprint ngân sách (50/30/20)",
          "AI coach cá nhân hóa",
          "5 mục tiêu tài chính",
          "Khóa học: Làm Chủ Ngân Sách 30 Ngày",
          "Phân tích nâng cao",
          "Hỗ trợ ưu tiên",
        ],
        cta: "Dùng Thử Pro",
        popular: "Phổ Biến Nhất",
      },
      family: {
        name: "Gia đình",
        price: "179.000 VNĐ",
        priceYearly: "152.150 VNĐ",
        pricePerMonth: "/tháng",
        description: "Hoàn hảo cho cặp đôi và gia đình quản lý tài chính cùng nhau",
        features: [
          "Mọi thứ trong gói Pro",
          "Ví chung MoneyLove",
          "Theo dõi mục tiêu chung",
          "Tối đa 3 tài khoản phụ",
          "Phân quyền chi tiêu",
          "Nhắc nhở định kỳ",
          "Coaching group hàng tháng",
          "Báo cáo tài chính gia đình",
        ],
        cta: "Dùng Thử Gói Gia Đình",
      },
      coaching: {
        name: "Coaching 1:1",
        price: "499.000 VNĐ",
        pricePerSession: "/buổi",
        description: "Tư vấn tài chính chuyên sâu với chuyên gia được chứng nhận",
        features: [
          "Buổi tư vấn 60 phút",
          "Chuyên gia CFP được chứng nhận",
          "Kế hoạch hành động cá nhân hóa",
          "Lộ trình đầu tư hướng dẫn",
          "Tài liệu theo dõi",
          "Ưu tiên đặt lịch cho Pro/Family",
        ],
        cta: "Đặt Buổi Tư Vấn",
        note: "Dành cho thành viên Pro và Family",
      },
      bundles: {
        title: "Gói Đặc Biệt",
        subtitle: "Nhận thêm giá trị với các gói được tuyển chọn",
        student: {
          name: "Gói Sinh Viên",
          price: "199.000 VNĐ",
          duration: "3 tháng",
          description: "Hoàn hảo cho sinh viên năng động xây dựng thói quen tài chính",
          features: [
            "Truy cập đầy đủ Pro trong 3 tháng",
            "Khóa học kiến thức tài chính",
            "Chứng chỉ Finvoras Student",
            "Workshop trực tuyến",
            "Thử thách cộng đồng campus",
          ],
          cta: "Nhận Gói Sinh Viên",
          badge: "Tốt Nhất Cho Sinh Viên",
        },
        couple: {
          name: "Khởi Đầu Cặp Đôi",
          price: "499.000 VNĐ",
          duration: "3 tháng",
          description: "Bắt đầu hành trình tài chính cùng nhau",
          features: [
            "Gói Family trong 3 tháng",
            "2 buổi coaching nhóm",
            "Template tài chính chuẩn bị sinh con",
            "Bảng kế hoạch đặt cọc nhà",
            "Hướng dẫn tài chính cặp đôi",
          ],
          cta: "Bắt Đầu Cùng Nhau",
          badge: "Hoàn Hảo Cho Cặp Đôi",
        },
      },
      featureComparison: {
        title: "So Sánh Tất Cả Tính Năng",
        subtitle: "Xem những gì có trong mỗi gói",
        categories: {
          core: "Tính Năng Cốt Lõi",
          budget: "Ngân Sách & Mục Tiêu",
          insights: "AI & Phân Tích",
          collaboration: "Cộng Tác",
          learning: "Học Tập & Hỗ Trợ",
        },
        features: [
          {
            name: "Theo dõi chi tiêu thủ công",
            category: "core",
            free: true,
            pro: true,
            family: true,
          },
          {
            name: "Đồng bộ giao dịch đa nguồn",
            category: "core",
            free: false,
            pro: true,
            family: true,
          },
          {
            name: "Mục tiêu tài chính",
            category: "budget",
            free: "1 mục tiêu",
            pro: "5 mục tiêu",
            family: "Không giới hạn",
          },
          {
            name: "Blueprint ngân sách (50/30/20)",
            category: "budget",
            free: false,
            pro: true,
            family: true,
          },
          {
            name: "AI coach",
            category: "insights",
            free: false,
            pro: "Cá nhân hóa",
            family: "Cá nhân hóa + Gia đình",
          },
          {
            name: "Tần suất báo cáo",
            category: "insights",
            free: "Hàng tuần",
            pro: "Hàng ngày",
            family: "Thời gian thực",
          },
          {
            name: "Ví chung (MoneyLove)",
            category: "collaboration",
            free: false,
            pro: false,
            family: true,
          },
          {
            name: "Tài khoản phụ",
            category: "collaboration",
            free: false,
            pro: false,
            family: "Tối đa 3",
          },
          {
            name: "Khóa học nhỏ",
            category: "learning",
            free: "Chỉ cộng đồng",
            pro: "Làm Chủ Ngân Sách 30 Ngày",
            family: "Tất cả khóa học + Tài chính cặp đôi",
          },
          {
            name: "Hỗ trợ",
            category: "learning",
            free: "Cộng đồng",
            pro: "Email ưu tiên",
            family: "Ưu tiên + Coaching nhóm hàng tháng",
          },
        ],
      },
      valueProps: {
        roi: {
          title: "Đầu Tư Thông Minh",
          subtitle: "Xem lợi nhuận tiềm năng của bạn",
          proSavings: "Người dùng Pro tiết kiệm trung bình 3 triệu+ VNĐ/tháng",
          proRoi: "Đó là lợi nhuận gấp 30 lần so với khoản đầu tư 99k",
          familySavings: "Cặp đôi dùng Family tiết kiệm 100 triệu VNĐ trong 12 tháng",
          familyRoi: "Đạt mục tiêu đặt cọc nhà nhanh hơn",
        },
        pilot: {
          title: "Tham Gia Chương Trình Beta",
          subtitle: "Số lượng có hạn",
          features: [
            "Miễn phí 2 tháng Pro/Family sau pilot",
            "Onboarding cá nhân qua video call",
            "Hoàn tiền nếu không đạt mục tiêu",
            "Truy cập sớm tính năng mới",
          ],
          cta: "Đăng Ký Beta",
        },
        loyalty: {
          title: "Phần Thưởng Trung Thành",
          subtitle: "Càng ở lâu, càng tiết kiệm nhiều",
          tiers: {
            silver: {
              name: "Bạc",
              requirement: "6 tháng",
              benefit: "Giảm 10% từ tháng thứ 7",
            },
            gold: {
              name: "Vàng",
              requirement: "12 tháng",
              benefit: "1 buổi coaching miễn phí + Huy hiệu Champion",
            },
            ambassador: {
              name: "Đại Sứ",
              requirement: "Giới thiệu 5 người dùng trả phí",
              benefit: "1 tháng miễn phí + Beta sớm",
            },
          },
        },
      },
    },

    // Testimonials
    testimonials: {
      title: "Người Dùng Nói Gì",
      subtitle: "Tham gia cùng hàng nghìn người dùng hài lòng đã thay đổi cuộc sống tài chính",
      items: [
        {
          name: "Minh Nguyễn",
          role: "Quản Lý Marketing, TP Hồ Chí Minh",
          content: "Finvoras giúp mình cuối cùng cũng hiểu tiền của mình đi đâu. AI coach đưa ra những lời khuyên cá nhân hóa thực sự phù hợp với lối sống người Việt.",
          outcome: "Tiết kiệm được 60 triệu VNĐ trong năm đầu",
        },
        {
          name: "Linh & Đức",
          role: "Cặp Đôi Trẻ, Hà Nội",
          content: "MoneyLove thay đổi hoàn toàn cách chúng mình quản lý tiền bạc. Chúng mình có thể thấy mục tiêu chung và theo dõi tiến độ mà không cần trò chuyện khó xử nào.",
          outcome: "Đạt mục tiêu 100 triệu VNĐ đặt cọc nhà",
        },
        {
          name: "An Trần",
          role: "Sinh Viên Đại Học, Đà Nẵng",
          content: "Là sinh viên với thu nhập hạn chế, Finvoras dạy mình những kiến thức cơ bản về lập ngân sách. Gamification giữ cho mình có động lực và mình rất thích các thử thách campus!",
          outcome: "Xây dựng quỹ khẩn cấp 5 triệu VNĐ",
        },
      ],
    },

    // CTA Banner
    cta: {
      title: "Sẵn Sàng Thay Đổi Cuộc Sống Tài Chính?",
      subtitle: "Tham gia cùng hàng nghìn người dùng đang kiểm soát tài chính với Finvoras.",
      urgency: "Ưu đãi có hạn: Tiết kiệm 20% cho gói năm!",
      riskReversal: "Hoàn tiền trong 30 ngày. Không cần lý do.",
      primaryButton: "Bắt Đầu Miễn Phí",
      secondaryButton: "Đặt Lịch Demo",
    },

    // FAQ
    faq: {
      title: "Câu Hỏi Thường Gặp",
      subtitle: "Tìm câu trả lời cho những câu hỏi phổ biến về Finvoras",
      questions: [
        {
          question: "Finvoras có miễn phí không?",
          answer: "Có! Finvoras cung cấp gói miễn phí với các tính năng thiết yếu bao gồm theo dõi chi tiêu, lập ngân sách cơ bản và báo cáo hàng tháng. Bạn có thể nâng cấp lên Pro (99.000 VNĐ/tháng) hoặc Family (179.000 VNĐ/tháng) để có thêm tính năng nâng cao như AI insights, lập kế hoạch mục tiêu và ngân sách gia đình.",
          icon: "BadgeDollarSign",
        },
        {
          question: "Dữ liệu tài chính của tôi có an toàn không?",
          answer: "Hoàn toàn an toàn. Chúng tôi sử dụng mã hóa cấp ngân hàng (AES-256) để bảo vệ dữ liệu của bạn. Thông tin được mã hóa cả khi truyền tải và lưu trữ. Chúng tôi không bao giờ bán dữ liệu của bạn cho bên thứ ba và tuân thủ các tiêu chuẩn bảo mật quốc tế bao gồm GDPR.",
          icon: "ShieldCheck",
        },
        {
          question: "Finvoras có hỗ trợ tiếng Việt không?",
          answer: "Có! Finvoras được bản địa hóa hoàn toàn cho người dùng Việt Nam với hỗ trợ ngôn ngữ bản địa, lời khuyên tài chính phù hợp văn hóa và AI coaching được thiết kế riêng cho thị trường Việt Nam. Bạn có thể chuyển đổi giữa tiếng Anh và tiếng Việt bất cứ lúc nào.",
          icon: "Languages",
        },
        {
          question: "Tôi có thể kết nối ngân hàng nào với Finvoras?",
          answer: "Chúng tôi đang phát triển tích hợp với các ngân hàng lớn tại Việt Nam bao gồm Vietcombank, BIDV, VietinBank và Techcombank. Hiện tại bạn có thể nhập giao dịch thủ công, tính năng đồng bộ ngân hàng tự động sẽ có trong bản beta.",
          icon: "Building2",
        },
        {
          question: "Làm sao để nâng cấp từ Free lên Pro?",
          answer: "Bạn có thể nâng cấp bất cứ lúc nào từ cài đặt tài khoản. Chỉ cần chọn gói bạn muốn (Pro hoặc Family), chọn phương thức thanh toán và bạn sẽ có quyền truy cập ngay vào tất cả tính năng cao cấp. Chúng tôi cung cấp thanh toán theo tháng và năm với ưu đãi tiết kiệm 15% cho gói năm.",
          icon: "TrendingUp",
        },
        {
          question: "Finvoras có phù hợp cho cặp đôi và gia đình không?",
          answer: "Có! Gói Family (179.000 VNĐ/tháng) được thiết kế đặc biệt cho cặp đôi và gia đình. Bao gồm ngân sách chung, theo dõi mục tiêu chung, phân quyền chi tiêu và tối đa 3 tài khoản phụ. Hoàn hảo để quản lý tài chính gia đình cùng nhau.",
          icon: "Users",
        },
      ],
    },

    // Footer
    footer: {
      description: "Trao quyền cho cá nhân đạt được sức khỏe tài chính thông qua công cụ thông minh và giáo dục.",
      product: "Sản phẩm",
      company: "Công ty",
      support: "Hỗ trợ",
      legal: "Pháp lý",
      followUs: "Theo dõi",
      allRightsReserved: "Đã đăng ký bản quyền.",
      links: {
        privacy: "Chính Sách Bảo Mật",
        terms: "Điều Khoản Dịch Vụ",
        cookies: "Chính Sách Cookie",
        contact: "Liên Hệ",
        about: "Về Chúng Tôi",
        careers: "Tuyển Dụng",
        help: "Trung Tâm Trợ Giúp",
        documentation: "Tài Liệu",
      },
    },

    // Auth
    auth: {
      login: {
        title: "Chào Mừng Trở Lại",
        subtitle: "Đăng nhập vào tài khoản Finvoras của bạn",
        email: "Địa Chỉ Email",
        password: "Mật Khẩu",
        rememberMe: "Ghi nhớ đăng nhập",
        forgotPassword: "Quên mật khẩu?",
        loginButton: "Đăng Nhập",
        noAccount: "Chưa có tài khoản?",
        signUp: "Đăng ký",
        orContinueWith: "Hoặc tiếp tục với",
      },
      register: {
        title: "Tạo Tài Khoản",
        subtitle: "Bắt đầu hành trình tài chính với Finvoras",
        firstName: "Họ",
        lastName: "Tên",
        email: "Địa Chỉ Email",
        password: "Mật Khẩu",
        confirmPassword: "Xác Nhận Mật Khẩu",
        agreeToTerms: "Tôi đồng ý với Điều Khoản Dịch Vụ và Chính Sách Bảo Mật",
        registerButton: "Tạo Tài Khoản",
        haveAccount: "Đã có tài khoản?",
        signIn: "Đăng nhập",
        orContinueWith: "Hoặc tiếp tục với",
      },
    },

    // Contact
    contact: {
      title: "Liên Hệ",
      subtitle: "Chúng tôi ở đây để giúp bạn thành công trong hành trình tài chính",
      name: "Họ Tên",
      email: "Email",
      subject: "Chủ Đề",
      message: "Tin Nhắn",
      send: "Gửi Tin Nhắn",
      sending: "Đang gửi...",
      success: "Cảm ơn tin nhắn của bạn. Chúng tôi sẽ phản hồi sớm!",
      error: "Có lỗi xảy ra. Vui lòng thử lại hoặc email trực tiếp cho chúng tôi.",
      info: {
        address: "123 Đường Tài Chính, Thành Phố Tiền, TC 12345",
        phone: "+84 (123) 456-7890",
        email: "hello@finvoras.com",
        hours: "Thứ Hai - Thứ Sáu: 9AM - 6PM ICT",
      },
    },

    // Common UI elements
    ui: {
      loading: "Đang tải...",
      error: "Lỗi",
      success: "Thành công",
      cancel: "Hủy",
      save: "Lưu",
      delete: "Xóa",
      edit: "Chỉnh sửa",
      view: "Xem",
      download: "Tải xuống",
      upload: "Tải lên",
      search: "Tìm kiếm",
      filter: "Lọc",
      sort: "Sắp xếp",
      next: "Tiếp theo",
      previous: "Trước",
      close: "Đóng",
      open: "Mở",
      yes: "Có",
      no: "Không",
      ok: "OK",
      learnMore: "Tìm Hiểu Thêm",
      getStarted: "Bắt Đầu",
      tryFree: "Dùng Thử Miễn Phí",
      comingSoon: "Sắp Ra Mắt",
    },

    // About page
    about: {
      title: "Về Finvoras",
      subtitle: "Trao quyền sức khỏe tài chính thông qua công nghệ và giáo dục",
      mission: {
        title: "Sứ Mệnh",
        description: "Dân chủ hóa sức khỏe tài chính bằng cách cung cấp các công cụ thông minh, dễ tiếp cận giúp mọi người đưa ra quyết định tài chính tốt hơn.",
      },
      vision: {
        title: "Tầm Nhìn",
        description: "Một thế giới nơi mọi người đều có kiến thức và công cụ để đạt được tự do và an ninh tài chính.",
      },
      values: {
        title: "Giá Trị",
        transparency: {
          title: "Minh Bạch",
          description: "Chúng tôi tin vào việc giao tiếp rõ ràng, trung thực về tài chính và dịch vụ của bạn.",
        },
        security: {
          title: "Bảo Mật",
          description: "Dữ liệu tài chính của bạn được bảo vệ với tiêu chuẩn bảo mật cao nhất.",
        },
        simplicity: {
          title: "Đơn Giản",
          description: "Các khái niệm tài chính phức tạp được làm đơn giản và có thể thực hiện cho mọi người.",
        },
        education: {
          title: "Giáo Dục",
          description: "Trao quyền cho người dùng với kiến thức để đưa ra quyết định tài chính sáng suốt.",
        },
      },
      team: {
        title: "Đội Ngũ",
        subtitle: "Gặp gỡ những người đằng sau Finvoras",
      },
    },

    // Blog
    blog: {
      title: "Hiểu Biết & Mẹo Tài Chính",
      subtitle: "Cập nhật thông tin mới nhất về tài chính cá nhân và xây dựng tài sản",
      readMore: "Đọc Thêm",
      shareArticle: "Chia Sẻ Bài Viết",
      relatedPosts: "Bài Viết Liên Quan",
      categories: "Danh Mục",
      tags: "Thẻ",
      author: "Tác Giả",
      publishedOn: "Xuất bản vào",
      readTime: "phút đọc",
      noResults: "Không tìm thấy bài viết",
      searchPlaceholder: "Tìm kiếm bài viết...",
    },

    // Language and theme
    language: {
      english: "English",
      vietnamese: "Tiếng Việt",
    },
    theme: {
      light: "Sáng",
      dark: "Tối",
      system: "Hệ Thống",
    },
  },
};