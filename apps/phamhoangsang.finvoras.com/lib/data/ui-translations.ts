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
                subtitle: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology."
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

            // Contact page specific
            letsConnect: "Let's Connect",
            connectDescription: "Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the channels below.",
            sectionDescription: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.",
            sendAMessage: "Send a Message",
            followMe: "Follow Me",
            messageSent: "Message Sent!",
            messageSentDescription: "Thank you for reaching out. I'll get back to you as soon as possible.",
            sendAnotherMessage: "Send Another Message",
            contactRequired: "*",
            messagePlaceholderLong: "Tell me about your project or just say hello!",
            errorMessage: "There was an issue sending your message. Please try again or contact me directly via email.",
            responseTime: "I typically respond within 24 hours. Looking forward to hearing from you!",

            // Contact info labels
            phone: "Phone",
            location: "Location",

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
                subtitle: "Tôi luôn sẵn sàng thảo luận về những cơ hội mới, dự án thú vị, hoặc chỉ là trò chuyện về công nghệ."
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
            namePlaceholder: "Họ và tên",
            emailPlaceholder: "yourmail@example.com",
            messagePlaceholder: "Tin nhắn của bạn...",
            subjectPlaceholder: "Về điều gì?",

            // Contact page specific
            letsConnect: "Hãy Kết Nối",
            connectDescription: "Cho dù bạn có ý tưởng dự án, muốn hợp tác, hay chỉ muốn chào hỏi, tôi rất mong được nghe từ bạn. Hãy liên hệ qua bất kỳ kênh nào dưới đây.",
            sectionDescription: "Tôi luôn sẵn sàng thảo luận về những cơ hội mới, dự án thú vị, hoặc chỉ là trò chuyện về công nghệ.",
            sendAMessage: "Gửi Tin Nhắn",
            followMe: "Theo Dõi Tôi",
            messageSent: "Tin Nhắn Đã Gửi!",
            messageSentDescription: "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi trong thời gian sớm nhất.",
            sendAnotherMessage: "Gửi Tin Nhắn Khác",
            contactRequired: "*",
            messagePlaceholderLong: "Hãy kể cho tôi về dự án của bạn hoặc chỉ chào hỏi!",
            errorMessage: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.",
            responseTime: "Tôi thường phản hồi trong vòng 24 giờ. Mong được nghe từ bạn!",

            // Contact info labels
            phone: "Điện thoại",
            location: "Địa điểm",

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