import { ResumeData, SkillCategory, Experience, Project } from "../types/resume";

/** ---- Single Source of Truth for years of experience ----
 *  Set START_YEAR to when you started professional Flutter dev.
 *  We clamp to minimum 3+ so UI always shows "3+" or more.
 */
// single source of truth
const START_DATE = new Date(2021, 11, 15); // December 15, 2021

// Calculate years of experience more accurately
const calculateYearsExperience = () => {
    const now = new Date();
    const diffInMs = now.getTime() - START_DATE.getTime();
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    return Math.max(0, Math.floor(diffInYears));
};

export const yearsExperience = `${calculateYearsExperience()}+`;


/** ---- Localized content (EN/VI) ---- */
const localizedContent = {
    en: {
        personal: {
            name: "Sang Pham",
            summary:
                "Flutter-focused Software Engineer building production mobile applications with a strong emphasis on system reliability, performance, and long-term maintainability.",
            bio: `I am a Flutter-focused Software Engineer with over four years of hands-on experience building and maintaining production mobile applications. While Flutter is my core specialization, my work consistently extends into system design, performance optimization, debugging complex edge cases, and making pragmatic technical trade-offs under real-world constraints.

I am currently building Finvoras, a personal finance application, where I take end-to-end responsibility for feature development, system stability, and long-term maintainability. Many of the challenges I solve are uncovered in real user scenarios—such as memory issues during large file uploads, state inconsistencies across accounts, editor performance bottlenecks, and platform-specific behaviors on iOS and Android.

I treat these problems as part of the engineering process—analyzing root causes, documenting lessons learned, and improving the system incrementally. My long-term goal is to grow as a product-oriented engineer who can bridge mobile development, system thinking, and business needs to build software that is reliable, scalable, and built to last.`,
            statuses: {
                open_to_work: "Looking for new opportunities",
                building: "Building new products"
            }
        },
        quickInfo: [
            { label: "Years Experience", value: yearsExperience, description: "Flutter in production environments" },
            { label: "FinTech Product", value: "1", description: "End-to-end product ownership" },
            { label: "Edge Cases", value: "30+", description: "Handled in real-world scenarios" },
            { label: "Functional Scope", value: "Cross", description: "Mobile, backend integration, architecture" },
        ],
        experiences: [
            {
                id: "exp-enlab",
                title: "Cleeksy - Digital Operations Platform",
                company: "Enlab Software",
                location: "Da Nang",
                period: "12/2021 - 10/2025",
                type: "fullTime",
                contributions: [
                    "Started as Flutter Intern at Enlab and transitioned to full-time Engineer.",
                    "Continued developing the same core product through company restructuring into Cleeksy (2023).",
                    "Applied Clean Architecture to improve maintainability and scalability; reduced onboarding time for new developers.",
                    "Contributed to the transition into a Low-code Platform (2024 - present), designing reusable UI components and dynamic configuration tools for end-users.",
                    "Collaborated with UI/ UX designers to deliver consistent, pixel-perfect experiences and improve usability.",
                    "Built and maintained 10+ modules, deeply integrated third-party libraries (e.g., Quill editor, data charts) with business logic and performance optimization.",
                    "Created detailed documentation for complex legacy modules, cutting knowledge silos and maintenance cost."
                ],
                description: "Lead Flutter development for core ERP modules and low-code platform transition, maintain 10+ modules.",
                technologies: ["Flutter", "Dart", "Clean Architecture", "Low-code", "ERP"],
                role: "Mobile Engineer",
                teamSize: "3-7 members",
            },
            {
                id: "early-exp",
                title: "Early Technical Experience",
                location: "Remote",
                period: "7/2021 - 9/2021",
                type: "partTime",
                contributions: [
                    "Participated in system analysis and basic architecture design based on customer requirements",
                    "Built responsive user interfaces and integrated RESTful APIs",
                    "Deployed the product to Netlify and documented the development lifecycle, including system flow and diagrams"
                ],
                description: "Frontend development with ReactJS, system analysis, and deployment.",
                technologies: ["ReactJS", "JavaScript", "Figma", "Netlify"],
                role: "Frontend Intern",
                teamSize: "3 members",
            },
        ],
        skillCategories: [
            {
                title: "Frameworks & Languages",
                icon: "💻",
                skills: [
                    { name: "Flutter", level: "Expert" },
                    { name: "Dart", level: "Expert" },
                    { name: "NestJS (Backend)", level: "Familiar" },
                    { name: "NextJs (Frontend)", level: "Familiar" },
                    { name: "Angular", level: "Familiar" },
                    { name: "Typescript", level: "Familiar" },
                ]
            },
            {
                title: "Architecture & State Mgmt",
                icon: "🏗️",
                skills: [
                    { name: "Clean Architecture", level: "Expert" },
                    { name: "MVVM", level: "Familiar" },
                    { name: "SOLID/DRY/KISS", level: "Expert" },
                    { name: "GetX", level: "Expert" },
                ]
            },
            {
                title: "API & Database",
                icon: "🗄️",
                skills: [
                    { name: "RESTful API", level: "Proficient" },
                    { name: "Firebase", level: "Proficient" },
                    { name: "Hive", level: "Proficient" },
                    { name: "Prisma ORM", level: "Familiar" },
                ]
            },
            {
                title: "Tools & Collaboration",
                icon: "🛠️",
                skills: [
                    { name: "Git (GitHub, GitLab)", level: "Proficient" },
                    { name: "Figma", level: "Proficient" },
                    { name: "Agile/Scrum", level: "Proficient" },
                    { name: "Documentation", level: "Proficient" },
                ]
            }
        ],
        additionalSkills: [
            "English (VSTEP B1 - Intermediate)",
        ],
        projects: [
            {
                title: "Finvoras | Personal Finance Product & Engineering Foundation",
                description:
                    "An end-to-end personal finance product evolving from an earlier production release (FinFree). Finvoras is designed with a strong focus on system reliability, modular architecture, and long-term maintainability, serving both real users and sustainable product growth.",
                image: "/projects/finvoras.jpg",
                technologies: ["Flutter", "Dart", "Firebase", "Supabase", "CI/CD"],
                contributions: [
                    "Designed and maintained a modular Flutter monorepo to enable code reuse and scalable development",
                    "Built internal developer tools (custom CLI, custom_lint) to improve DX and enforce consistency",
                    "Implemented a local-first architecture to ensure data reliability and offline resilience",
                    "Integrated backend services and managed cross-layer data flow between mobile and APIs",
                    "Established automated CI/CD pipelines to support continuous integration and delivery"
                ],
                urls: ["https://finvoras.com"],
                status: "in_development",
                date: new Date("2024-01-01"),
                featured: true,
                category: "Product",
            },
        ],

        education: [
            {
                id: "edu-vku",
                institution: "Vietnam - Korea University of Information and Communication Technology",
                institutionUrl: "https://vku.udn.vn",
                degree: "Engineer's Degree",
                location: "Da Nang, Vietnam",
                locationUrl: "https://maps.app.goo.gl/yUVw1NktX6SwtS367",
                period: "8/2019 - 3/2024",
                gpa: "3.25/4.0",
                achievements: [
                    "Best Web Design Award at SICT 2020 (Top 20 overall).",
                    "Active Member of VKU Open Source Club (2021) and Karate Club (2020-2022).",
                ]
            }
        ],
        workValues: [
            "Proactive collaboration & clear communication.",
            "Passion for learning & code quality improvement.",
            "Strong problem-solving & documentation habits."
        ]
    },
    vi: {
        personal: {
            name: "Phạm Hoàng Sang",
            summary:
                "Software Engineer tập trung vào Flutter, xây dựng ứng dụng mobile chạy thực tế với trọng tâm là độ ổn định hệ thống, hiệu năng và khả năng duy trì lâu dài.",
            bio: `Tôi là một Software Engineer tập trung vào Flutter, với hơn bốn năm kinh nghiệm thực tế trong việc xây dựng và duy trì các ứng dụng mobile chạy trong môi trường production. Flutter là chuyên môn cốt lõi của tôi, tuy nhiên phạm vi công việc thường xuyên mở rộng sang thiết kế hệ thống, tối ưu hiệu năng, xử lý các edge case phức tạp và đưa ra những đánh đổi kỹ thuật phù hợp với bối cảnh thực tế.

Hiện tại, tôi đang xây dựng Finvoras — một ứng dụng quản lý tài chính cá nhân, nơi tôi chịu trách nhiệm end-to-end cho phát triển tính năng, độ ổn định hệ thống và khả năng bảo trì dài hạn. Phần lớn các vấn đề tôi giải quyết đến từ hành vi sử dụng thực tế của người dùng, chẳng hạn như lỗi bộ nhớ khi upload dữ liệu lớn, sai lệch state giữa các tài khoản, nghẽn hiệu năng trong editor, hay sự khác biệt hành vi giữa iOS và Android.

Tôi xem những vấn đề này là một phần tự nhiên của quá trình kỹ thuật: phân tích nguyên nhân gốc rễ, ghi lại bài học rút ra và cải tiến hệ thống một cách tuần tự. Mục tiêu dài hạn của tôi là phát triển theo hướng product-oriented engineer — người có thể kết nối giữa mobile development, tư duy hệ thống và nhu cầu kinh doanh để xây dựng phần mềm ổn định, mở rộng được và bền vững theo thời gian.`,
            statuses: {
                open_to_work: "Đang tìm kiếm cơ hội mới",
                building: "Đang xây dựng sản phẩm"
            }
        },
        quickInfo: [
            { label: "Năm Kinh Nghiệm", value: yearsExperience, description: "Flutter trong môi trường production" },
            { label: "Dự Án Đã Phát Hành", value: "10+", description: "Từ module ERP đến app tiêu dùng" },
            { label: "Công Nghệ Sử Dụng", value: "15+", description: "Flutter, Firebase, CI/CD, Clean Arch" },
            { label: "Cam Kết", value: "100%", description: "Hợp tác chủ động" },
        ],
        experiences: [
            {
                id: "exp-enlab-cleeksy",
                title: "Flutter Engineer | ERP → Nền tảng Low-code (Eldesk → Cleeksy)",
                company: "ENLAB SOFTWARE/ CLEEKSY",
                location: "Đà Nẵng",
                period: "Tháng 12/2021 - Tháng 10/2025",
                type: "fullTime",
                contributions: [
                    "Bắt đầu với vị trí Flutter Intern tại Enlab và trở thành Engineer chính thức.",
                    "Tiếp tục phát triển sản phẩm cốt lõi thông qua quá trình tái cấu trúc công ty thành Cleeksy (2023).",
                    "Xây dựng và bảo trì hơn 10 module ERP, tích hợp sâu các thư viện bên thứ ba (như Quill editor, biểu đồ dữ liệu) với logic nghiệp vụ và tối ưu hóa hiệu năng.",
                    "Đóng góp vào quá trình chuyển đổi sang nền tảng Low-code (2024 - nay), thiết kế các component UI có khả năng tái sử dụng và công cụ cấu hình động cho người dùng cuối.",
                    "Áp dụng Clean Architecture để cải thiện khả năng bảo trì và mở rộng; giảm thời gian làm quen (onboarding) cho các developer mới.",
                    "Phối hợp với UI/UX designer để mang lại trải nghiệm nhất quán, chuẩn chỉnh đến từng pixel và cải thiện khả năng sử dụng.",
                    "Tạo tài liệu chi tiết cho các module cũ phức tạp, giúp giảm thiểu rào cản kiến thức và chi phí bảo trì."
                ],
                description: "Phát triển và bảo trì các module ERP cốt lõi, chuyển đổi sang nền tảng Low-code.",
                technologies: ["Flutter", "Dart", "Clean Architecture", "Low-code", "ERP"],
                role: "Senior Flutter Engineer",
                teamSize: "Hơn 15 thành viên",
            },
            {
                id: "exp-finvora",
                title: "Finvora | Ứng dụng Tài chính & Nền tảng (Đang phát triển)",
                company: "Các dự án chọn lọc",
                location: "Remote",
                period: "Tháng 2/2021 - Hiện tại",
                type: "freelance",
                contributions: [
                    "Xây dựng ứng dụng Flutter full-stack tập trung vào khả năng mở rộng và trải nghiệm người dùng.",
                    "Kiến trúc modular monorepo với hơn 6 package cho các tiện ích dùng chung và chủ đề (theming).",
                    "Phát triển công cụ nội bộ: CLI tùy chỉnh để tạo asset và custom_lint để đảm bảo tính nhất quán.",
                    "Thiết kế kiến trúc local-first với hệ thống design system được token hóa.",
                    "Thiết lập quy trình CI/CD tự động cho việc build và phát hành (release)."
                ],
                description: "Xây dựng ứng dụng và kiến trúc nền tảng, tập trung vào UX và khả năng mở rộng.",
                technologies: ["Flutter", "Melos", "Monorepo", "CI/CD", "Local-first"],
                role: "Nhà phát triển chính / Kiến trúc sư",
                teamSize: "Cá nhân / Đóng góp chính",
            },
        ],
        skillCategories: [
            {
                title: "Framework & Ngôn ngữ",
                icon: "💻",
                skills: [
                    { name: "Flutter", level: "Expert" },
                    { name: "Dart", level: "Expert" },
                    { name: "Typescript (Cơ bản)", level: "Familiar" },
                    { name: "NestJS (Cơ bản)", level: "Familiar" },
                    { name: "Angular (Cơ bản)", level: "Familiar" },
                ]
            },
            {
                title: "Kiến trúc & Quản lý trạng thái",
                icon: "🏗️",
                skills: [
                    { name: "Clean Architecture", level: "Expert" },
                    { name: "GetX", level: "Expert" },
                    { name: "MVVM", level: "Expert" },
                    { name: "SOLID/DRY/KISS", level: "Expert" },
                ]
            },
            {
                title: "API & Cơ sở dữ liệu",
                icon: "🗄️",
                skills: [
                    { name: "RESTful API", level: "Proficient" },
                    { name: "Firebase", level: "Proficient" },
                    { name: "Hive", level: "Proficient" },
                    { name: "Prisma ORM", level: "Familiar" },
                ]
            },
            {
                title: "Công cụ & Hợp tác",
                icon: "🛠️",
                skills: [
                    { name: "Git (GitHub, GitLab)", level: "Proficient" },
                    { name: "Figma", level: "Proficient" },
                    { name: "Agile/Scrum", level: "Proficient" },
                    { name: "Lập tài liệu", level: "Proficient" },
                ]
            }
        ],
        projects: [
            {
                title: "Finvoras - Tài chính cá nhân",
                description:
                    "Ứng dụng Flutter full-stack với kiến trúc modular monorepo, local-first và các công cụ hỗ trợ phát triển nội bộ.",
                image: "/projects/finvoras.jpg",
                technologies: ["Flutter", "Dart", "Firebase", "Supabase", "CI/CD"],
                contributions: [
                    "Kiến trúc modular monorepo",
                    "Công cụ phát triển nội bộ (CLI, custom_lint)",
                    "Kiến trúc local-first",
                    "Quy trình CI/CD tự động"
                ],
                urls: ["https://finvoras.com", "https://github.com/hoangsang17th"],
                status: "in_development",
                date: new Date("2024-01-01"),
                featured: true,
                category: "Sản phẩm"
            },
            {
                title: "Cleeksy - Nền tảng Low-code",
                description:
                    "Đóng góp vào quá trình chuyển đổi sang nền tảng Low-code, thiết kế các component tái sử dụng và công cụ cấu hình động.",
                image: "/projects/erp.jpg",
                technologies: ["Flutter", "Low-code", "Clean Architecture"],
                contributions: [
                    "Component UI có khả năng tái sử dụng",
                    "Công cụ cấu hình động",
                    "Tích hợp sâu thư viện bên thứ ba",
                    "Tối ưu hóa hiệu năng"
                ],
                urls: [],
                status: "live",
                date: new Date("2023-01-01"),
                featured: true,
                category: "Doanh nghiệp"
            }
        ],
        education: [
            {
                id: "edu-vku",
                institution: "Trường Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (VKU)",
                institutionUrl: "https://vku.udn.vn",
                degree: "Bằng Kỹ sư Kỹ thuật Phần mềm",
                location: "Đà Nẵng, Việt Nam",
                locationUrl: "https://maps.app.goo.gl/w6f3XvYnNqZJ8Y3Yp",
                period: "Tháng 8/2019 - Tháng 3/2024",
                gpa: "3.25 / 4.0",
                achievements: [
                    "Giải thưởng Thiết kế Web xuất sắc nhất SICT 2020 (Top 20).",
                    "Thành viên tích cực Câu lạc bộ Karate (2020-2022) và VKU Open Source Club (2021).",
                    "Xây dựng các dự án thực tiễn tập trung vào kiến trúc web và mobile hiện đại."
                ]
            }
        ],
        workValues: [
            "Hợp tác chủ động và giao tiếp rõ ràng.",
            "Đam mê học hỏi và cải thiện chất lượng mã nguồn.",
            "Khả năng giải quyết vấn đề tốt và thói quen lập tài liệu."
        ],
        additionalSkills: [
            "Tiếng Anh (VSTEP B1 - Trung cấp)",
        ]
    }
};

/** ---- Static data (Shared fields) ---- */
export const staticResumeData = {
    personalInfo: {
        name: "Phạm Hoàng Sang",
        location: "Hòa Xuân, Đà Nẵng",
        email: "phsang49@gmail.com",
        phone: "0332148505",
        website: "https://phamhoangsang.finvoras.com",
        avatarUrl: "/avatar.jpg",
        statusKey: "building" as const,
        resumeUrl: "/resume.pdf"
    },

    socialLinks: {
        github: "https://github.com/hoangsang17th",
        linkedin: "https://linkedin.com/in/phsang49",
        twitter: "https://twitter.com/hoangsang",
        email: "phsang49@gmail.com",
        resume: "/resume.pdf",
    },
};

/** ---- Getter giữ nguyên chữ ký ---- */
export const getLocalizedResumeData = (locale: 'en' | 'vi'): ResumeData => {
    const content = localizedContent[locale];

    return {
        personalInfo: {
            ...staticResumeData.personalInfo,
            name: content.personal.name,
            summary: content.personal.summary,
            bio: content.personal.bio,
        },
        socialLinks: staticResumeData.socialLinks,
        quickInfo: content.quickInfo,
        experiences: content.experiences as Experience[],
        skillCategories: content.skillCategories as SkillCategory[],
        projects: content.projects as Project[],
        education: content.education,
        workValues: content.workValues,
        additionalSkills: content.additionalSkills,
    };
};

// Export default cho backward compatibility
export const resumeData = getLocalizedResumeData('en');
