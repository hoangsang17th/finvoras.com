"use client";

import {
    LayoutDashboard,
    Wallet,
    Receipt,
    Target,
    Settings,
    Search,
    PlusCircle,
    Bell,
    Menu,
    User as UserIcon
} from "lucide-react";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import { Button, Input } from "@repo/ui";
import Footer from "@/components/footer";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { t } = useI18n<Translations>();

    // Mock sidebar items for now
    const sidebarItems = [
        { label: t?.nav?.dashboard || "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={20} /> },
        { label: "Accounts", href: "/accounts", icon: <Wallet size={20} /> },
        { label: "Transactions", href: "/transactions", icon: <Receipt size={20} /> },
        { label: "Goals", href: "/goals", icon: <Target size={20} /> },
        { label: "Settings", href: "/settings", icon: <Settings size={20} /> },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Topbar */}
            <header className="h-16 border-b bg-card fixed top-0 w-full z-50 flex items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-4">
                    <Button variant="link" size="icon" className="md:hidden">
                        <Menu className="w-6 h-6" />
                    </Button>
                    <div className="font-bold text-xl hidden sm:block">Finvoras</div>
                </div>

                <div className="flex-1 max-w-md mx-4 hidden md:block">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input className="pl-10 h-9 bg-muted/50 border-none" placeholder="Search transactions..." />
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    <Button variant="link" size="icon" className="relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-brand-primary rounded-full border-2 border-background" />
                    </Button>
                    <div className="h-8 w-8 rounded-full bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
                        <UserIcon className="w-5 h-5 text-brand-primary" />
                    </div>
                </div>
            </header>

            <div className="flex pt-16">
                {/* Desktop Sidebar */}
                <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 pt-16 border-r bg-card">
                    <nav className="flex-1 px-4 py-8 space-y-1">
                        {sidebarItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-brand-primary/5 hover:text-brand-primary group"
                            >
                                <span className="text-muted-foreground group-hover:text-brand-primary transition-colors">
                                    {item.icon}
                                </span>
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="p-4 border-t mb-4">
                        <Button variant="primary" fullWidth className="gap-2">
                            <PlusCircle size={20} />
                            {t?.ui?.ok || "New Transaction"}
                        </Button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 md:ml-64 flex flex-col min-h-[calc(100vh-64px)] overflow-y-auto bg-muted/20">
                    <div className="flex-1 p-6 sm:p-10">
                        <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {children}
                        </div>
                    </div>
                    <Footer variant="minimal" />
                </main>
            </div>
        </div>
    );
}
