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

    // Testimonials
    testimonials: {
      title: "What Our Users Say",
      subtitle: "Join thousands of satisfied users who've transformed their financial lives",
    },

    // CTA Banner
    cta: {
      title: "Ready to Transform Your Financial Life?",
      subtitle: "Join thousands of users who are already taking control of their finances with Finvoras.",
      primaryButton: "Start Free Today",
      secondaryButton: "Schedule Demo",
    },

    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about Finvoras",
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

    // Testimonials
    testimonials: {
      title: "Người Dùng Nói Gì",
      subtitle: "Tham gia cùng hàng nghìn người dùng hài lòng đã thay đổi cuộc sống tài chính",
    },

    // CTA Banner
    cta: {
      title: "Sẵn Sàng Thay Đổi Cuộc Sống Tài Chính?",
      subtitle: "Tham gia cùng hàng nghìn người dùng đang kiểm soát tài chính với Finvoras.",
      primaryButton: "Bắt Đầu Miễn Phí",
      secondaryButton: "Đặt Lịch Demo",
    },

    // FAQ
    faq: {
      title: "Câu Hỏi Thường Gặp",
      subtitle: "Tìm câu trả lời cho những câu hỏi phổ biến về Finvoras",
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