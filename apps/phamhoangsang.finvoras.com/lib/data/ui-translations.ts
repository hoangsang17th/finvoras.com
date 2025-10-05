import type { UITranslations } from "../types/resume";

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

// Human-first / Warm tone
export const uiTranslations: Record<"en" | "vi", UITranslations> = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            downloadCv: "Download CV",
        },

        // Section headers
        sections: {
            about: {
                title: "About Me",
                subtitle:
                    "I build things that people actually use — simple, steady, and cared for.",
            },
            experience: {
                title: "Experience",
                subtitle:
                    "From shipping features to keeping them healthy in the long run.",
            },
            skills: {
                title: "Skills",
                subtitle:
                    "Tools I know well — and the curiosity to learn what’s next.",
            },
            projects: {
                title: "Projects",
                subtitle:
                    "A few favorites — small wins, hard lessons, real impact.",
            },
            contact: {
                title: "Let’s talk",
                subtitle:
                    "Got an idea, a role, or a problem to untangle? I’m listening.",
            },
        },

        // UI actions and labels
        ui: {
            getInTouch: "Contact me",
            viewProject: "View project",
            viewCode: "View source",
            liveDemo: "Live demo",
            send: "Send",
            sending: "Sending…",
            success: "Thanks for your message — I’ll get back soon.",
            error:
                "Couldn’t send that. Please try again or reach me by email.",
            downloadCv: "Download CV",
            viewWork: "See my work",

            // Form fields
            name: "Name",
            email: "Email",
            message: "Message",
            subject: "Subject",

            // Form placeholders
            namePlaceholder: "Your full name",
            emailPlaceholder: "you@domain.com",
            messagePlaceholder: "What brought you here?",
            subjectPlaceholder: "A short headline",

            // Contact page specific
            letsConnect: "Let’s connect",
            connectDescription:
                "Tell me what you’re building and where you’re stuck — we’ll figure it out.",
            sectionDescription:
                "I enjoy clear goals, honest feedback, and calm delivery.",
            sendAMessage: "Send a message",
            followMe: "Follow me",
            messageSent: "Message sent",
            messageSentDescription:
                "Appreciate it. I usually reply within a day.",
            sendAnotherMessage: "Send another message",
            contactRequired: "*",
            messagePlaceholderLong:
                "Share a bit of context, links if any, and what success looks like.",
            errorMessage:
                "Something went wrong. Try again or email me directly.",
            responseTime:
                "Typical response: within 24 hours.",

            // Contact info labels
            phone: "Phone",
            location: "Location",

            // Experience types
            present: "Present",
            fullTime: "Full-time",
            partTime: "Part-time",
            freelance: "Freelance",
            contract: "Contract",
        },

        // Statistics labels
        statistics: {
            yearsExperience: `${yearsExperience} years building products`,
            projectsCompleted: "Projects shipped",
            technologiesUsed: "Technologies used",
            commitment: "Consistency",
            professionalDevelopment: "Professional software development",
            successfulDeliveries: "On-time deliveries",
            modernTechStack: "Modern stack",
            dedicationToQuality: "Care for quality",
        },

        // Footer text
        footer: {
            builtWith: "Built with",
            by: "by",
            allRightsReserved: "All rights reserved",
        },

        // Theme and language
        theme: { light: "Light", dark: "Dark", system: "System" },
        language: { english: "English", vietnamese: "Tiếng Việt" },
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
            downloadCv: "Tải CV",
        },

        // Section headers
        sections: {
            about: {
                title: "Giới thiệu",
                subtitle:
                    "Mình làm những thứ người dùng thật sự dùng — gọn, bền, chăm chút.",
            },
            experience: {
                title: "Kinh nghiệm",
                subtitle:
                    "Từ lúc ship tính năng đến khi giữ nó chạy ổn định lâu dài.",
            },
            skills: {
                title: "Kỹ năng",
                subtitle:
                    "Công cụ mình quen tay — và luôn sẵn sàng học điều mới.",
            },
            projects: {
                title: "Dự án",
                subtitle:
                    "Vài sản phẩm mình thích — thắng nhỏ, bài học lớn, tác động thật.",
            },
            contact: {
                title: "Cùng trò chuyện",
                subtitle:
                    "Có ý tưởng, vị trí phù hợp, hay vấn đề cần gỡ? Cứ nói nhé.",
            },
        },

        // UI actions and labels
        ui: {
            getInTouch: "Liên hệ mình",
            viewProject: "Xem dự án",
            viewCode: "Xem mã nguồn",
            liveDemo: "Xem demo",
            send: "Gửi",
            sending: "Đang gửi…",
            success: "Cảm ơn vì tin nhắn — mình sẽ phản hồi sớm.",
            error:
                "Gửi chưa thành công. Thử lại hoặc email trực tiếp nhé.",
            downloadCv: "Tải CV",
            viewWork: "Xem sản phẩm",

            // Form fields
            name: "Họ tên",
            email: "Email",
            message: "Tin nhắn",
            subject: "Chủ đề",

            // Form placeholders
            namePlaceholder: "Họ và tên của bạn",
            emailPlaceholder: "ban@mien.com",
            messagePlaceholder: "Điều gì đưa bạn tới đây?",
            subjectPlaceholder: "Một tiêu đề ngắn",

            // Contact page specific
            letsConnect: "Kết nối nhé",
            connectDescription:
                "Kể mình nghe bạn đang xây gì và đang kẹt ở đâu — rồi cùng tìm hướng.",
            sectionDescription:
                "Mình thích mục tiêu rõ, phản hồi thẳng, và nhịp giao hàng bình tĩnh.",
            sendAMessage: "Gửi tin nhắn",
            followMe: "Theo dõi",
            messageSent: "Đã gửi",
            messageSentDescription:
                "Cảm ơn đã liên hệ. Thường mình trả lời trong một ngày.",
            sendAnotherMessage: "Gửi tin khác",
            contactRequired: "*",
            messagePlaceholderLong:
                "Chia sẻ bối cảnh, link (nếu có) và bức tranh thành công bạn mong muốn.",
            errorMessage:
                "Có lỗi xảy ra. Thử lại hoặc liên hệ qua email.",
            responseTime:
                "Thường phản hồi trong 24 giờ.",

            // Contact info labels
            phone: "Điện thoại",
            location: "Địa điểm",

            // Experience types
            present: "Hiện tại",
            fullTime: "Toàn thời gian",
            partTime: "Bán thời gian",
            freelance: "Freelance",
            contract: "Hợp đồng",
        },

        // Statistics labels
        statistics: {
            yearsExperience: `${yearsExperience} năm xây sản phẩm`,
            projectsCompleted: "Dự án đã ship",
            technologiesUsed: "Công nghệ sử dụng",
            commitment: "Ổn định",
            professionalDevelopment: "Phát triển phần mềm chuyên nghiệp",
            successfulDeliveries: "Bàn giao đúng hẹn",
            modernTechStack: "Stack hiện đại",
            dedicationToQuality: "Chú trọng chất lượng",
        },

        // Footer text
        footer: {
            builtWith: "Xây dựng với",
            by: "bởi",
            allRightsReserved: "Đã đăng ký bản quyền",
        },

        // Theme and language
        theme: { light: "Sáng", dark: "Tối", system: "Hệ thống" },
        language: { english: "English", vietnamese: "Tiếng Việt" },
    },
};
