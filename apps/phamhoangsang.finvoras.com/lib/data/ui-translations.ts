import type { UITranslations } from "../types/resume";
import { yearsExperience } from "./resume";


// Human-first / Warm tone
export const uiTranslations: Record<"en" | "vi", UITranslations> = {
    en: {
        // Navigation
        nav: {
            about: "About",
            projects: "Projects",
            experience: "Experience",
            skills: "Skills",
            contact: "Contact",
            downloadCv: "Download CV",
        },

        // Section headers
        sections: {
            about: {
                title: "About Me",
                subtitle:
                    "From mobile development to system thinking and real-world problem solving",
            },
            projects: {
                title: "Projects",
                subtitle:
                    "Selected work that reflects real-world constraints, long-term ownership, and technical depth.",
            },
            experience: {
                title: "Experience",
                subtitle:
                    "Working across teams to turn evolving requirements into reliable software.",
            },
            skills: {
                title: "Skills",
                subtitle:
                    "Technologies I work with, and the thinking behind them.",
            },
            contact: {
                title: "Let’s talk",
                subtitle:
                    "Interested in working together, discussing a role, or exploring an idea?",
            },
            workValues: "Core Values",
            education: "Education",
            additionalSkills: "Additional Skills",
        },

        // UI actions and labels
        ui: {
            actions: {
                viewCode: "Source code",
                liveDemo: "View demo",
                send: "Send Message",
                sending: "Sending...",
                success: "Message received. I'll get back to you soon.",
                error:
                    "Unable to send message. Please try again or email me directly.",
                sendAnotherMessage: "Send another message",
                errorMessage:
                    "Something went wrong. Please try again or email me directly.",
                readBlog: "Read Blog",
            },

            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                namePlaceholder: "Your full name",
                emailPlaceholder: "name@example.com",
                messagePlaceholder: "How can I help you?",
                messagePlaceholderLong:
                    "Please provide some context about your project, timeline, and goals.",
                contactRequired: "*",
            },

            contact: {
                letsConnect: "Let's Connect",
                connectDescription:
                    "Share your project details or challenges - I'm happy to discuss how I can help.",
                messageSent: "Message Sent",
                messageSentDescription:
                    "Thanks for reaching out. I typically respond within 24 hours.",
                responseTime:
                    "Response time: usually within 24 hours.",
                phone: "Phone",
                location: "Location",
            },

            experience: {
                present: "Present",
                fullTime: "Full-time",
                partTime: "Part-time",
                freelance: "Freelance",
                contract: "Contract",
            },

            status: {
                openToWork: "Looking for new opportunities",
                building: "Building new products",
            },

            skillLevels: {
                expert: "Expert",
                proficient: "Proficient",
                familiar: "Familiar",
            },
        },


        // Footer text
        footer: {
            builtWith: "Built with",
            by: "by",
            allRightsReserved: "All rights reserved.",
        },

        // Theme and language
        theme: { light: "Light Mode", dark: "Dark Mode", system: "System Default" },
        language: { english: "English", vietnamese: "Vietnamese" },
    },

    vi: {
        // Navigation
        nav: {
            about: "Về tôi",
            projects: "Dự án",
            experience: "Kinh nghiệm",
            skills: "Kỹ năng",
            contact: "Liên hệ",
            downloadCv: "Tải CV",
        },

        // Section headers
        sections: {
            about: {
                title: "Giới thiệu",
                subtitle:
                    "Từ phát triển mobile đến tư duy hệ thống và giải quyết vấn đề thực tế",
            },
            projects: {
                title: "Dự án",
                subtitle:
                    "Vài sản phẩm mình thích - thắng nhỏ, bài học lớn, tác động thật.",
            },
            experience: {
                title: "Kinh nghiệm",
                subtitle:
                    "Từ lúc ship tính năng đến khi giữ nó chạy ổn định lâu dài.",
            },
            skills: {
                title: "Kỹ năng",
                subtitle:
                    "Công cụ mình quen tay - và luôn sẵn sàng học điều mới.",
            },
            contact: {
                title: "Cùng trò chuyện",
                subtitle:
                    "Có ý tưởng, vị trí phù hợp, hay vấn đề cần gỡ? Cứ nói nhé.",
            },
            workValues: "Giá trị cốt lõi",
            education: "Học vấn",
            additionalSkills: "Kỹ năng khác",
        },

        // UI actions and labels
        ui: {
            actions: {
                viewCode: "Xem mã nguồn",
                liveDemo: "Xem demo",
                send: "Gửi tin nhắn",
                sending: "Đang gửi...",
                success: "Đã nhận tin nhắn. Mình sẽ phản hồi sớm.",
                error:
                    "Không thể gửi tin nhắn. Vui lòng thử lại hoặc gửi email trực tiếp.",
                sendAnotherMessage: "Gửi tin khác",
                errorMessage:
                    "Đã xảy ra lỗi. Vui lòng thử lại hoặc gửi email trực tiếp.",
                readBlog: "Đọc bài viết",
            },

            form: {
                name: "Họ tên",
                email: "Email",
                message: "Tin nhắn",
                namePlaceholder: "Họ và tên của bạn",
                emailPlaceholder: "name@example.com",
                messagePlaceholder: "Mình có thể giúp gì cho bạn?",
                messagePlaceholderLong:
                    "Vui lòng chia sẻ bối cảnh dự án, thời gian và mục tiêu của bạn.",
                contactRequired: "*",
            },

            contact: {
                letsConnect: "Kết nối nhé",
                connectDescription:
                    "Chia sẻ chi tiết dự án hoặc khó khăn của bạn - mình rất vui được thảo luận cách hỗ trợ.",
                messageSent: "Tin nhắn đã gửi",
                messageSentDescription:
                    "Cảm ơn bạn đã liên hệ. Mình thường phản hồi trong vòng 24 giờ.",
                responseTime:
                    "Thời gian phản hồi: thường trong vòng 24 giờ.",
                phone: "Điện thoại",
                location: "Địa điểm",
            },

            experience: {
                present: "Hiện tại",
                fullTime: "Toàn thời gian",
                partTime: "Bán thời gian",
                freelance: "Freelance",
                contract: "Hợp đồng",
            },

            status: {
                openToWork: "Đang tìm kiếm cơ hội mới",
                building: "Đang xây dựng sản phẩm mới",
            },

            skillLevels: {
                expert: "Chuyên gia",
                proficient: "Thành thạo",
                familiar: "Quen thuộc",
            },
        },


        // Footer text
        footer: {
            builtWith: "Xây dựng với",
            by: "bởi",
            allRightsReserved: "Đã đăng ký bản quyền.",
        },

        // Theme and language
        theme: { light: "Chế độ sáng", dark: "Chế độ tối", system: "Mặc định hệ thống" },
        language: { english: "English", vietnamese: "Tiếng Việt" },
    },
};
