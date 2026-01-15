"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { marked } from "marked";
import { Globe, Clock, ChevronRight, Menu, X, AlertCircle, ArrowLeft, Mail, Languages, ChevronDown } from "lucide-react";
import { type LegalDocumentResponse, LANGUAGE_LABELS } from "@/lib/api/legal";
import { useI18n } from "@repo/i18n";
import { type Translations } from "@/lib/types/translations";
import { Button, Dropdown } from "@repo/ui";
import Link from "next/link";

interface LegalDocumentProps {
    initialDocument: LegalDocumentResponse | null;
    type: "PRIVACY_POLICY" | "TERMS_OF_SERVICE";
    onDocumentChange?: (language: string) => Promise<LegalDocumentResponse | null>;
    currentLanguage: string;
}

export function LegalDocument({ initialDocument, type, onDocumentChange, currentLanguage }: LegalDocumentProps) {
    const { t, locale: uiLocale } = useI18n<Translations>();
    const [document, setDocument] = useState<LegalDocumentResponse | null>(initialDocument);
    const [isLoading, setIsLoading] = useState(false);
    const [activeHeading, setActiveHeading] = useState<string>("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

    // Preprocess markdown to fix common formatting issues
    const preprocessMarkdown = (content: string) => {
        return content
        // Fix bold with spaces: ** text ** -> **text**
        // .replace(/\*\*\s+([^\n*]+?)\s+\*\*/g, "**$1**");
    };

    const cleanContent = useMemo(() => {
        return document?.content ? preprocessMarkdown(document.content) : "";
    }, [document]);

    // Generate TOC from markdown content
    const toc = useMemo(() => {
        if (!cleanContent) return [];
        const lines = cleanContent.split("\n");
        return lines
            .filter((line) => line.startsWith("# "))
            .map((line, index) => {
                const text = line.replace("# ", "").trim();
                const id = `section-${index}`;
                return { text, id };
            });
    }, [cleanContent]);

    // Handle document change (language)
    const handleDocumentChange = async (newLang: string) => {
        if (newLang === selectedLanguage) return;

        setIsLoading(true);
        setSelectedLanguage(newLang);

        try {
            if (onDocumentChange) {
                const newDoc = await onDocumentChange(newLang);
                setDocument(newDoc);
            }
        } catch (error) {
            console.error("Failed to load document:", error);
            setDocument(null);
        } finally {
            setIsLoading(false);
        }
    };

    // Build HTML with custom renderer to add IDs to headings
    const htmlContent = useMemo(() => {
        if (!document?.content) return "";
        const renderer = new marked.Renderer();
        let headingCount = 0;

        // Custom renderer to handle "accidental" code blocks (indented text)
        // Instead of rendering pre/code, we render it as a div with indentation
        renderer.code = (code) => {
            return `<div class="pl-4 my-2 text-foreground/90 whitespace-pre-wrap">${code}</div>`;
        };

        renderer.heading = ({ text, depth }) => {
            if (depth === 1) {
                const id = `section-${headingCount}`;
                headingCount++;
                return `<h1 id="${id}" class="text-2xl font-bold mt-8 mb-4">${text}</h1>`;
            }
            if (depth === 2) {
                return `<h2 class="text-xl font-semibold mt-6 mb-3">${text}</h2>`;
            }
            const Tag = `h${depth}`;
            return `<${Tag} class="font-semibold mt-4 mb-2">${text}</${Tag}>`;
        };

        renderer.link = ({ href, text }) => {
            const isExternal = href.startsWith("http") || href.startsWith("mailto:");

            return `<a href="${href}" 
                ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""} 
                class="text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1 font-medium decoration-primary/30 hover:decoration-primary underline underline-offset-4"
                >${text}</a>`;
        };

        // renderer.listitem = ({ text }) => {
        //     return `<li class="mb-2">${text}</li>`;
        // }

        return marked.parse(cleanContent, { renderer });
    }, [cleanContent]);

    // Scroll spy for TOC
    useEffect(() => {
        if (toc.length >= 0) setActiveHeading(toc[0]!.id);
        const handleScroll = () => {
            const headings = toc.map(item => window.document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = headings.length - 1; i >= 0; i--) {
                const heading = headings[i];
                if (heading && heading instanceof HTMLElement && heading.offsetTop <= scrollPosition) {
                    const item = toc[i];
                    if (item) setActiveHeading(item.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [toc, document]);


    const formatDate = (dateStr?: string | null) => {
        if (!dateStr) return "TBD";
        return new Date(dateStr).toLocaleDateString(selectedLanguage, {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    if (!document && !isLoading) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center px-4">
                <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
                    <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                        <div className="absolute inset-0 bg-red-500/10 dark:bg-red-400/10 rounded-full animate-ping duration-[3000ms]" />
                        <div className="relative bg-red-50 dark:bg-red-900/20 w-20 h-20 rounded-2xl flex items-center justify-center border border-red-100 dark:border-red-800/50">
                            <AlertCircle className="w-10 h-10 text-red-500 dark:text-red-400" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                            {t.ui.legalErrorTitle}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {t.ui.legalErrorMessage}
                        </p>
                    </div>

                    <div className="pt-4 space-y-4">
                        <div className="p-4 bg-muted/50 rounded-xl border border-border inline-flex items-center gap-3 text-sm text-foreground/80">
                            <Mail className="w-4 h-4 text-primary" />
                            <span>
                                {t.ui.legalContactInfo}{" "}
                                <a href="mailto:support@finvoras.com" className="text-primary font-medium hover:underline">
                                    support@finvoras.com
                                </a>
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button asChild variant="default" className="rounded-full">
                                <Link href="/" className="flex items-center gap-2">
                                    <ArrowLeft className="w-4 h-4" />
                                    {t.ui.legalErrorAction}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-background">

            {/* Main Layout */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-28 lg:pt-32 pb-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-24 space-y-8 max-h-[calc(100vh-120px)] flex flex-col">
                            {/* Language selection as Dropdown */}
                            <div className="pb-6 border-b border-border">
                                <Dropdown
                                    label="Language"
                                    value={selectedLanguage}
                                    onChange={handleDocumentChange}
                                    options={(document?.context?.supportedLanguages || []).map(code => ({
                                        value: code,
                                        label: LANGUAGE_LABELS[code] || code.toUpperCase(),
                                        icon: <Languages size={16} className="text-primary" />
                                    }))}
                                    leadingIcon={<Languages size={16} className="text-primary" />}
                                    disabled={isLoading}
                                    buttonClassName="bg-muted/50 hover:bg-muted"
                                />
                            </div>

                            <nav className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-50 sticky top-0 bg-background py-1">{t.legal.onThisPage}</p>
                                <ul className="space-y-3">
                                    {toc.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                className={`text-sm transition-colors hover:text-primary ${activeHeading === item.id ? "text-primary font-medium" : "text-muted-foreground"
                                                    }`}
                                            >
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <style jsx>{`
                            .custom-scrollbar::-webkit-scrollbar {
                                width: 4px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-track {
                                background: transparent;
                            }
                            .custom-scrollbar::-webkit-scrollbar-thumb {
                                background: #e2e8f0;
                                border-radius: 10px;
                            }
                            .dark .custom-scrollbar::-webkit-scrollbar-thumb {
                                background: #334155;
                            }
                        `}</style>
                    </aside>

                    {/* Content Area */}
                    <main className="flex-1 max-w-3xl">
                        {isLoading ? (
                            <div className="animate-pulse space-y-8">
                                <div className="h-4 bg-muted rounded w-1/4" />
                                <div className="h-12 bg-muted rounded w-3/4" />
                                <div className="h-4 bg-muted rounded w-1/2" />
                                <div className="space-y-4 pt-12">
                                    <div className="h-4 bg-muted rounded w-full" />
                                    <div className="h-4 bg-muted rounded w-full" />
                                    <div className="h-4 bg-muted rounded w-3/4" />
                                </div>
                            </div>
                        ) : document ? (
                            <>
                                <header className="mb-12 space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-primary font-medium">
                                        <span>{t.legal.label}</span>
                                        <ChevronRight size={14} className="text-muted-foreground" />
                                        <span className="text-muted-foreground">
                                            {document.type === "PRIVACY_POLICY" ? t.legal.privacyPolicy : t.legal.termsOfService}
                                        </span>
                                    </div>

                                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                                        {document.title}
                                    </h1>

                                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-border/50">
                                        {document.publishedAt && (
                                            <div className="flex items-center gap-3 text-sm text-muted-foreground group">
                                                <div className="p-2 rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                                                    <Clock size={16} className="group-hover:text-primary transition-colors" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-50">{t.legal.published}</span>
                                                    <span className="text-foreground font-medium">{formatDate(document.publishedAt)}</span>
                                                </div>
                                            </div>
                                        )}
                                        {document.effectiveDate && (
                                            <div className="flex items-center gap-3 text-sm text-muted-foreground group">
                                                <div className="p-2 rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                                                    <Clock size={16} className="group-hover:text-primary transition-colors" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-50">{t.legal.effective}</span>
                                                    <span className="text-foreground font-medium">{formatDate(document.effectiveDate)}</span>
                                                </div>
                                            </div>
                                        )}
                                        {document.updatedAt && (
                                            <div className="flex items-center gap-3 text-sm text-muted-foreground group">
                                                <div className="p-2 rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                                                    <Clock size={16} className="group-hover:text-primary transition-colors" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-50">{t.legal.updated}</span>
                                                    <span className="text-foreground font-medium">{formatDate(document.updatedAt)}</span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground group">
                                            <div className="p-2 rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                                                <Languages size={16} className="group-hover:text-primary transition-colors" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-50">{t.legal.languageLabel}</span>
                                                <span className="text-foreground font-medium">{LANGUAGE_LABELS[document.language] || document.language.toUpperCase()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {document.summary && (
                                        <div className="mt-8 p-6 bg-muted/30 rounded-2xl border border-border italic text-muted-foreground leading-relaxed">
                                            <span className="font-semibold text-foreground not-italic block mb-2">{t.legal.summary}</span>
                                            {document.summary}
                                        </div>
                                    )}

                                    {document.isFallback && (
                                        <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center gap-3 text-amber-600 dark:text-amber-400">
                                            <Clock size={18} className="shrink-0" />
                                            <p className="text-sm font-medium">
                                                {t.legal.snapshotNotice}
                                            </p>
                                        </div>
                                    )}
                                </header>

                                <article
                                    className="legal-prose prose prose-slate dark:prose-invert max-w-none 
                                 text-foreground/80 leading-relaxed space-y-6
                                 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2"
                                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                                />
                            </>
                        ) : null}
                    </main>
                </div>
            </div>

            {/* Mobile Drawer (TOC, Language & Region) */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-[10002] lg:hidden">
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
                    <div className="absolute left-0 top-0 bottom-0 w-80 bg-background border-r border-border shadow-2xl animate-in slide-in-from-left flex flex-col">
                        <div className="flex items-center justify-between p-6 pb-8">
                            <span className="font-bold text-foreground">{t.legal.menu}</span>
                            <button onClick={() => setIsSidebarOpen(false)} className="text-muted-foreground">
                                <X size={24} />
                            </button>
                        </div>

                        <nav className="flex-1 space-y-8 overflow-y-auto custom-scrollbar px-6 pb-24">
                            <div className="space-y-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-50 text-center">{t.legal.inThisDocument}</p>
                                <ul className="space-y-4">
                                    {toc.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                onClick={() => setIsSidebarOpen(false)}
                                                className={`text-base block transition-colors ${activeHeading === item.id ? "text-primary font-medium" : "text-muted-foreground"
                                                    }`}
                                            >
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8 border-t border-border">
                                <Dropdown
                                    label="Language"
                                    value={selectedLanguage}
                                    onChange={(val) => {
                                        handleDocumentChange(val);
                                        setIsSidebarOpen(false);
                                    }}
                                    options={(document?.context?.supportedLanguages || []).map(code => ({
                                        value: code,
                                        label: LANGUAGE_LABELS[code] || code.toUpperCase(),
                                        icon: <Languages size={20} className="text-primary" />
                                    }))}
                                    leadingIcon={<Languages size={20} className="text-primary" />}
                                    disabled={isLoading}
                                    buttonClassName="px-4 py-3 bg-muted/50 text-base"
                                    itemClassName="px-5 py-3.5 text-base"
                                    menuClassName="mt-2 bg-muted/30 border-border rounded-xl static shadow-none min-w-0"
                                    activeItemClassName="bg-primary/10"
                                />
                            </div>
                        </nav>
                    </div>
                </div>
            )}

            {/* Floating Mobile Toggle */}
            {!isSidebarOpen && (
                <div className="lg:hidden fixed bottom-24 left-6 z-[10001] animate-in slide-in-from-bottom duration-500">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="flex items-center gap-2.5 px-5 py-3.5 bg-background shadow-xl border border-border rounded-2xl group transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <div className="relative">
                            <Menu size={20} className="text-primary group-hover:rotate-12 transition-transform duration-300" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                        </div>
                        <span className="text-sm font-bold tracking-tight text-foreground uppercase tracking-widest text-[10px]">{t.legal.contents}</span>
                    </button>
                </div>
            )}
        </div>
    );
}
