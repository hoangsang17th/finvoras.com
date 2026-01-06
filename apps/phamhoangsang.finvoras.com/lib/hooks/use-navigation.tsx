"use client";

import { useI18n } from "@/lib/i18n";
import { User, Briefcase, Award, FolderOpen, Mail } from "lucide-react";
import type { NavMenuItem } from "@repo/ui";

export function useNavigation() {
    const { ui } = useI18n();

    const menuItems: NavMenuItem[] = [
        { label: ui.nav.about, href: "/", fragmentId: "about", icon: <User size={16} /> },
        { label: ui.nav.projects, href: "/", fragmentId: "projects", icon: <FolderOpen size={16} /> },
        { label: ui.nav.experience, href: "/", fragmentId: "experience", icon: <Briefcase size={16} /> },
        { label: ui.nav.skills, href: "/", fragmentId: "skills", icon: <Award size={16} /> },
        { label: ui.nav.contact, href: "/", fragmentId: "contact", icon: <Mail size={16} /> },
    ];

    return { menuItems };
}
