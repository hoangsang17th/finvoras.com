// Temporary direct import until workspace resolution is fixed
import type {
  I18nContextType,
  I18nProviderProps,
  LanguageOption,
  LanguageSwitcherProps
} from '../../../packages/i18n/src/types';

interface FinvorasTranslations {
  // Navigation
  nav: {
    home: string;
    pricing: string;
    blog: string;
    about: string;
    features: string;
    contact: string;
    getStarted: string;
    login: string;
    register: string;
    dashboard: string;
  };

  // Hero section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    watchDemo: string;
    trustedBy: string;
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
      description: string;
      features: string[];
      cta: string;
      popular: string;
    };
    enterprise: {
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
    };
  };

  // UI elements
  ui: {
    loading: string;
    error: string;
    success: string;
    learnMore: string;
    getStarted: string;
    tryFree: string;
    comingSoon: string;
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
}

export const finvorasTranslations: Record<string, FinvorasTranslations> = {
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

    // Hero section
    hero: {
      title: "Take Control of Your Financial Future",
      subtitle: "Smart Personal Finance Management",
      description:
        "Transform your financial life with Finvoras. Track expenses, manage budgets, and build wealth with personalized insights and education.",
      primaryCta: "Start Your Journey",
      secondaryCta: "Explore Features",
      watchDemo: "See How It Works",
      trustedBy: "Trusted by thousands of users worldwide",
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
      savePercent: "Save 20%",
      free: {
        name: "Starter",
        price: "Free",
        description: "Perfect for getting started with personal finance management",
        features: [
          "Expense tracking",
          "Basic budgeting",
          "Monthly reports",
          "Mobile app access",
          "Email support",
        ],
        cta: "Get Started Free",
      },
      pro: {
        name: "Pro",
        price: "$9.99",
        priceYearly: "$7.99",
        description: "Advanced features for serious financial planning",
        features: [
          "Everything in Starter",
          "Investment tracking",
          "Advanced analytics",
          "Goal planning",
          "Priority support",
          "Custom categories",
          "Data export",
        ],
        cta: "Start Pro Trial",
        popular: "Most Popular",
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom",
        description: "For teams and organizations with advanced needs",
        features: [
          "Everything in Pro",
          "Team management",
          "Advanced reporting",
          "API access",
          "Dedicated support",
          "Custom integrations",
          "SSO integration",
        ],
        cta: "Contact Sales",
      },
    },

    // UI elements
    ui: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      learnMore: "Learn More",
      getStarted: "Get Started",
      tryFree: "Try Free",
      comingSoon: "Coming Soon",
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
      primaryCta: "Bắt Đầu Hành Trình",
      secondaryCta: "Khám Phá Tính Năng",
      watchDemo: "Xem Cách Hoạt Động",
      trustedBy: "Được tin tưởng bởi hàng nghìn người dùng trên toàn thế giới",
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
      savePercent: "Tiết kiệm 20%",
      free: {
        name: "Khởi đầu",
        price: "Miễn phí",
        description: "Hoàn hảo để bắt đầu với quản lý tài chính cá nhân",
        features: [
          "Theo dõi chi tiêu",
          "Lập ngân sách cơ bản",
          "Báo cáo hàng tháng",
          "Truy cập ứng dụng di động",
          "Hỗ trợ email",
        ],
        cta: "Bắt Đầu Miễn Phí",
      },
      pro: {
        name: "Chuyên nghiệp",
        price: "9.99$",
        priceYearly: "7.99$",
        description: "Tính năng nâng cao cho việc lập kế hoạch tài chính nghiêm túc",
        features: [
          "Mọi thứ trong gói Khởi đầu",
          "Theo dõi đầu tư",
          "Phân tích nâng cao",
          "Lập kế hoạch mục tiêu",
          "Hỗ trợ ưu tiên",
          "Danh mục tùy chỉnh",
          "Xuất dữ liệu",
        ],
        cta: "Dùng Thử Pro",
        popular: "Phổ Biến Nhất",
      },
      enterprise: {
        name: "Doanh nghiệp",
        price: "Tùy chỉnh",
        description: "Cho các nhóm và tổ chức có nhu cầu nâng cao",
        features: [
          "Mọi thứ trong gói Pro",
          "Quản lý nhóm",
          "Báo cáo nâng cao",
          "Truy cập API",
          "Hỗ trợ chuyên dụng",
          "Tích hợp tùy chỉnh",
          "Tích hợp SSO",
        ],
        cta: "Liên Hệ Bán Hàng",
      },
    },

    // UI elements
    ui: {
      loading: "Đang tải...",
      error: "Lỗi",
      success: "Thành công",
      learnMore: "Tìm Hiểu Thêm",
      getStarted: "Bắt Đầu",
      tryFree: "Dùng Thử Miễn Phí",
      comingSoon: "Sắp Ra Mắt",
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

export type { FinvorasTranslations };