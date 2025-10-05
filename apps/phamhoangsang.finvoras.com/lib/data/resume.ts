import { ResumeData } from "../types/resume";
import { yearsExperience } from "./ui-translations";

/** ---- Single Source of Truth for years of experience ----
 *  Set START_YEAR to when you started professional Flutter dev.
 *  We clamp to minimum 3+ so UI always shows "3+" or more.
 */
const START_YEAR = 2021;
const years = Math.max(3, new Date().getFullYear() - START_YEAR);


/** ---- Personal content (EN/VI) tuned to Flutter/ERP/Finvoras ---- */
const personalContent = {
    en: {
        title: "Flutter Engineer • Mobile & Product Delivery",
        bio:
            `Flutter engineer with ${yearsExperience} years building long-lived mobile products. ` +
            "I care about clean architecture, steady delivery, and features that users come back for.",
        status: "Open to collaboration"
    },
    vi: {
        title: "Flutter Engineer • Mobile & Product Delivery",
        bio:
            `Flutter engineer với ${yearsExperience} năm kinh nghiệm phát triển sản phẩm di động bền vững. ` +
            "Ưu tiên kiến trúc sạch, nhịp giao hàng ổn định và trải nghiệm người dùng quay lại.",
        status: "Sẵn sàng hợp tác"
    }
};

/** ---- Statistics (EN/VI) aligned with SSOT years ---- */
const statisticsContent = {
    en: [
        { label: "Years Experience", value: yearsExperience, description: "Professional mobile development" },
        { label: "Projects Shipped", value: "10+", description: "From ERP modules to consumer apps" },
        { label: "Technologies Used", value: "15+", description: "Flutter, Firebase, CI/CD, Clean Arch" },
        { label: "Reliability", value: "99.9%", description: "Calm, repeatable delivery" },
    ],
    vi: [
        { label: "Năm Kinh Nghiệm", value: yearsExperience, description: "Phát triển mobile chuyên nghiệp" },
        { label: "Dự Án Đã Ship", value: "10+", description: "Từ module ERP đến app tiêu dùng" },
        { label: "Công Nghệ Sử Dụng", value: "15+", description: "Flutter, Firebase, CI/CD, Clean Arch" },
        { label: "Độ Tin Cậy", value: "99,9%", description: "Giao hàng ổn định, bình tĩnh" },
    ]
};

/** ---- Static data, updated to reflect your real profile ---- */
export const staticResumeData = {
    personalInfo: {
        name: "Phạm Hoàng Sang",
        location: "Đà Nẵng, Việt Nam",
        email: "phsang49@gmail.com",
        phone: "+84 332 148 505",
        website: "https://phamhoangsang.finvoras.com",
        avatar: "/avatar.jpg",
        availability: true,
        resumeUrl: "/resume.pdf"
    },

    socialLinks: {
        github: "https://github.com/hoangsang17th",
        linkedin: "https://linkedin.com/in/phsang49",
        twitter: "https://twitter.com/hoangsang",
        email: "phsang49@gmail.com",
        resume: "/resume.pdf",
    },

    /** 
     * Experiences — gắn với hành trình thật:
     * - 2021–2025: EnC → tách thành Cleeksy (ERP) (Full-time)
     * - 2024–Now: Finvoras (Side project/Product)
     * - Tùy chọn: Freelance nhỏ
     */
    experiences: [
        {
            id: "exp-cleeksy",
            title: "Flutter Developer (ERP)",
            company: "EnC → Cleeksy",
            location: "Đà Nẵng / Remote",
            period: "2021 - 2025",
            type: "Full-time" as const,
            description: [
                "Phát triển và bảo trì ứng dụng ERP di động phục vụ >500 người dùng nội bộ.",
                "Thiết kế kiến trúc sạch (Clean Architecture), module hóa, chuẩn hóa coding conventions.",
                "Tích hợp Firebase (Auth, FCM), tối ưu hiệu năng rendering & offline-first.",
                "Thiết lập CI/CD cho build & delivery ổn định; giảm lỗi release và rút ngắn vòng đời phát hành.",
                "Phối hợp BA/PM để làm rõ yêu cầu, đo đếm tác động bằng chỉ số sử dụng thực tế."
            ],
            technologies: ["Flutter", "Dart", "Firebase", "GetX/MVVM", "SQLite", "REST", "CI/CD", "Clean Architecture"],
            featured: true,
        },
        {
            id: "exp-finvoras",
            title: "Founder / Flutter Engineer",
            company: "Finvoras",
            location: "Đà Nẵng / Remote",
            period: "2024 - Present",
            type: "Freelance" as const,
            description: [
                "Xây dựng nền tảng quản lý tài chính cá nhân: theo dõi chi tiêu, ngân sách, insight giáo dục tài chính.",
                "Thiết kế UX tối giản, ưu tiên retention: luồng nhập nhanh, nhắc nhở thông minh.",
                "Thiết lập monorepo tooling, quản lý version & changelog; tự động hóa test/build.",
                "Phát triển trang giới thiệu/marketing và nội dung SEO cơ bản."
            ],
            technologies: ["Flutter", "Dart", "Firebase", "Riverpod/GetX", "Supabase/PostgreSQL", "CI/CD"],
            featured: true,
        },
        // (Tùy chọn) thay thế nếu bạn có freelance thật:
        // {
        //   id: "exp-freelance",
        //   title: "Mobile Developer (Freelance)",
        //   company: "Self-employed",
        //   location: "Remote",
        //   period: "2023 - 2024",
        //   type: "Freelance" as const,
        //   description: [
        //     "Xây MVP cho khách hàng SMEs: xác thực, đồng bộ dữ liệu và thông báo đẩy.",
        //     "Tối ưu time-to-first-value, đo lường qua event tracking cơ bản."
        //   ],
        //   technologies: ["Flutter", "Firebase", "Stripe", "REST/GraphQL"],
        // },
    ],

    /** Skills — ưu tiên Mobile/Flutter; vẫn giữ độ phủ toolchain */
    skillCategories: [
        {
            title: "Mobile (Flutter)",
            icon: "📱",
            skills: [
                { name: "Flutter/Dart", level: 90 },
                { name: "Clean Architecture", level: 88 },
                { name: "State Mgmt (Riverpod/GetX)", level: 85 },
                { name: "Offline-first/SQLite", level: 82 },
                { name: "Animations/Custom UI", level: 80 },
                { name: "Deeplink & Routing", level: 80 },
            ]
        },
        {
            title: "Backend & Cloud",
            icon: "⚙️",
            skills: [
                { name: "Firebase (Auth/FCM/Firestore)", level: 85 },
                { name: "REST/GraphQL APIs", level: 80 },
                { name: "Supabase/PostgreSQL", level: 78 },
                { name: "Node.js (basic services)", level: 70 },
            ]
        },
        {
            title: "DevOps & Quality",
            icon: "🚀",
            skills: [
                { name: "CI/CD (Fastlane/GitHub Actions)", level: 82 },
                { name: "Testing (Unit/Widget/Golden)", level: 80 },
                { name: "Crash/Perf Monitoring", level: 78 },
                { name: "Code Review & Docs", level: 80 },
            ]
        },
        {
            title: "Design & Web (supporting)",
            icon: "🎨",
            skills: [
                { name: "Design Systems & UX Writing", level: 78 },
                { name: "Figma", level: 78 },
                { name: "Next.js/React (landing)", level: 70 },
                { name: "Tailwind CSS", level: 72 },
            ]
        }
    ],

    /** Projects — nhấn mạnh Finvoras + ERP (private) */
    projects: [
        {
            id: "proj-finvoras",
            title: "Finvoras — Personal Finance",
            description:
                "Nền tảng quản lý tài chính cá nhân: ghi chép chi tiêu, ngân sách, và insight giúp hình thành thói quen tốt.",
            image: "/projects/finvoras.jpg",
            technologies: ["Flutter", "Dart", "Firebase", "Supabase", "CI/CD"],
            features: [
                "Ghi chép siêu nhanh, phân loại & ngân sách",
                "Đồng bộ đa thiết bị, offline-first",
                "Nhắc nhở thông minh & dashboard thói quen",
                "Trang giới thiệu & nội dung giáo dục tài chính"
            ],
            liveUrl: "https://finvoras.com",
            githubUrl: "https://github.com/hoangsang17th", // có thể trỏ repo cụ thể khi public
            status: "Live" as const,
            year: "2024",
            featured: true,
            category: "Mobile / Product"
        },
        {
            id: "proj-erp",
            title: "ERP Mobile Suite (Internal)",
            description:
                "Ứng dụng ERP nội bộ: quy trình phê duyệt, quản lý kho/đơn, thông báo đẩy; tối ưu cho người dùng hiện trường.",
            image: "/projects/erp.jpg",
            technologies: ["Flutter", "Dart", "Firebase", "SQLite", "REST"],
            features: [
                "Quy trình phê duyệt và tác vụ ngoại tuyến",
                "Đồng bộ nền & thông báo đẩy (FCM)",
                "Theo dõi hiệu năng & crash, tối ưu TTI",
                "Kiến trúc sạch, module hoá"
            ],
            status: "Live" as const,
            year: "2022-2025",
            featured: true,
            category: "Enterprise"
        }
    ],

    additionalSkills: [
        "Problem Solving",
        "Technical Writing",
        "Mentoring",
        "Agile/Scrum",
        "Product Thinking",
        "Stakeholder Communication"
    ]
};

/** ---- Getter giữ nguyên chữ ký ---- */
export const getLocalizedResumeData = (locale: 'en' | 'vi'): ResumeData => {
    return {
        personalInfo: {
            ...staticResumeData.personalInfo,
            title: personalContent[locale].title,
            bio: personalContent[locale].bio,
            status: personalContent[locale].status
        },
        socialLinks: staticResumeData.socialLinks,
        statistics: statisticsContent[locale],
        experiences: staticResumeData.experiences,
        skillCategories: staticResumeData.skillCategories,
        projects: staticResumeData.projects,
        additionalSkills: staticResumeData.additionalSkills
    };
};

// Export default cho backward compatibility
export const resumeData = getLocalizedResumeData('en');
