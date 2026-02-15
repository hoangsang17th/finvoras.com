"use client";

import { useI18n } from "@/lib/i18n";
import { User, Briefcase, Award, FolderOpen, Mail } from "lucide-react";
import type { NavMenuItem } from "@repo/ui";

export function useNavigation() {
    const { ui, locale } = useI18n();
    const basePath = `/${locale}`;

    const menuItems: NavMenuItem[] = [
        { label: ui.nav.about, href: `${basePath}/about`, fragmentId: "about", icon: <User size={16} />, scroll: false },
        { label: ui.nav.projects, href: `${basePath}/projects`, fragmentId: "projects", icon: <FolderOpen size={16} />, scroll: false },
        { label: ui.nav.experience, href: `${basePath}/experience`, fragmentId: "experience", icon: <Briefcase size={16} />, scroll: false },
        { label: ui.nav.skills, href: `${basePath}/skills`, fragmentId: "skills", icon: <Award size={16} />, scroll: false },
        { label: ui.nav.contact, href: `${basePath}/contact`, fragmentId: "contact", icon: <Mail size={16} />, scroll: false },
    ];

    return { menuItems };
}
