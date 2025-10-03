import type { UITranslations } from "../types/resume";

// Cấu trúc UI translations - consolidation từ JSON files
export const uiTranslations: Record<'en' | 'vi', UITranslations> = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            downloadCv: "Download CV"
        },

        // Section headers - static UI text
        sections: {
            about: {
                title: "About Me",
                subtitle: "Get to know me better"
            },
            experience: {
                title: "Experience",
                subtitle: "My professional journey"
            },
            skills: {
                title: "Skills",
                subtitle: "Technologies I work with"
            },
            projects: {
                title: "Projects",
                subtitle: "Things I've built"
            },
            contact: {
                title: "Get in Touch",
                subtitle: "Let's work together"
            }
        },

        // UI actions and labels
        ui: {
            getInTouch: "Get in Touch",
            viewProject: "View Project",
            viewCode: "View Code",
            liveDemo: "Live Demo",
            send: "Send Message",
            sending: "Sending...",
            success: "Message sent successfully!",
            error: "Failed to send message. Please try again.",
            downloadCv: "Download CV",
            viewWork: "View My Work",

            // Form fields
            name: "Name",
            email: "Email",
            message: "Message",
            subject: "Subject",

            // Form placeholders
            namePlaceholder: "Your name",
            emailPlaceholder: "your.email@example.com",
            messagePlaceholder: "Your message here...",
            subjectPlaceholder: "What's this about?",

            // Experience types
            present: "Present",
            fullTime: "Full-time",
            partTime: "Part-time",
            freelance: "Freelance",
            contract: "Contract"
        },

        // Statistics labels
        statistics: {
            yearsExperience: "Years Experience",
            projectsCompleted: "Projects Completed",
            technologiesUsed: "Technologies Used",
            commitment: "Commitment",
            professionalDevelopment: "Professional software development",
            successfulDeliveries: "Successful project deliveries",
            modernTechStack: "Modern tech stack",
            dedicationToQuality: "Dedication to quality"
        },

        // Footer text
        footer: {
            builtWith: "Built with",
            by: "by",
            allRightsReserved: "All rights reserved"
        },

        // Theme and language
        theme: {
            light: "Light",
            dark: "Dark",
            system: "System"
        },

        language: {
            english: "English",
            vietnamese: "Tiếng Việt"
        }
    },

    vi: {
        // Navigation
        nav: {
            home: "Trang chủ",
            about: "Giới thiệu",
            experience: "Kinh nghiệm",
            skills: "Kỹ năng",
            projects: "Dự án",
            contact: "Liên hệ",
            downloadCv: "Tải CV"
        },

        // Section headers - static UI text
        sections: {
            about: {
                title: "Giới Thiệu",
                subtitle: "Tìm hiểu về tôi"
            },
            experience: {
                title: "Kinh Nghiệm",
                subtitle: "Hành trình nghề nghiệp của tôi"
            },
            skills: {
                title: "Kỹ Năng",
                subtitle: "Công nghệ tôi làm việc với"
            },
            projects: {
                title: "Dự Án",
                subtitle: "Những gì tôi đã xây dựng"
            },
            contact: {
                title: "Liên Hệ",
                subtitle: "Hãy cùng làm việc"
            }
        },

        // UI actions and labels
        ui: {
            getInTouch: "Liên Hệ",
            viewProject: "Xem Dự Án",
            viewCode: "Xem Mã",
            liveDemo: "Demo Trực Tiếp",
            send: "Gửi Tin Nhắn",
            sending: "Đang gửi...",
            success: "Tin nhắn đã được gửi thành công!",
            error: "Gửi tin nhắn thất bại. Vui lòng thử lại.",
            downloadCv: "Tải CV",
            viewWork: "Xem Công Việc",

            // Form fields
            name: "Tên",
            email: "Email",
            message: "Tin nhắn",
            subject: "Chủ đề",

            // Form placeholders
            namePlaceholder: "Tên của bạn",
            emailPlaceholder: "email.cua.ban@example.com",
            messagePlaceholder: "Tin nhắn của bạn...",
            subjectPlaceholder: "Về điều gì?",

            // Experience types
            present: "Hiện tại",
            fullTime: "Toàn thời gian",
            partTime: "Bán thời gian",
            freelance: "Freelance",
            contract: "Hợp đồng"
        },

        // Statistics labels
        statistics: {
            yearsExperience: "Năm Kinh Nghiệm",
            projectsCompleted: "Dự Án Hoàn Thành",
            technologiesUsed: "Công Nghệ Sử Dụng",
            commitment: "Cam Kết",
            professionalDevelopment: "Phát triển phần mềm chuyên nghiệp",
            successfulDeliveries: "Giao hàng dự án thành công",
            modernTechStack: "Stack công nghệ hiện đại",
            dedicationToQuality: "Cống hiến cho chất lượng"
        },

        // Footer text
        footer: {
            builtWith: "Được xây dựng với",
            by: "bởi",
            allRightsReserved: "Tất cả quyền được bảo lưu"
        },

        // Theme and language
        theme: {
            light: "Sáng",
            dark: "Tối",
            system: "Hệ thống"
        },

        language: {
            english: "English",
            vietnamese: "Tiếng Việt"
        }
    }
};