"use client";

import React, { useState, useEffect, useMemo } from "react";
import { marked } from "marked";
import { Globe, Clock, ChevronRight, Menu, X } from "lucide-react";
import { type LegalDocumentResponse } from "@/lib/api/legal";

interface LegalDocumentProps {
    initialDocument: LegalDocumentResponse;
    type: "PRIVACY_POLICY" | "TERMS_OF_SERVICE";
    onRegionChange?: (region: string) => Promise<LegalDocumentResponse>;
}

const REGIONS = [
    { code: "GLOBAL", label: "Global" },
    { code: "EU", label: "Europe (GDPR)" },
    { code: "US", label: "United States" },
    { code: "UK", label: "United Kingdom" },
    { code: "APAC", label: "Asia Pacific" },
];

export function LegalDocument({ initialDocument, type, onRegionChange }: LegalDocumentProps) {
    const [document, setDocument] = useState<LegalDocumentResponse>(initialDocument);
    const [isLoading, setIsLoading] = useState(false);
    const [activeHeading, setActiveHeading] = useState<string>("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Generate TOC from markdown content
    const toc = useMemo(() => {
        const lines = document.content.split("\n");
        return lines
            .filter((line) => line.startsWith("## "))
            .map((line) => {
                const text = line.replace("## ", "").trim();
                const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
                return { text, id };
            });
    }, [document.content]);

    // Handle region change
    const handleRegionChange = async (region: string) => {
        if (region === document.region) return;
        setIsLoading(true);
        try {
            if (onRegionChange) {
                const newDoc = await onRegionChange(region);
                setDocument(newDoc);
            }
        } catch (error) {
            console.error("Failed to load region:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Build HTML with custom renderer to add IDs to headings
    const htmlContent = useMemo(() => {
        const renderer = new marked.Renderer();
        renderer.heading = ({ text, depth }: { text: string; depth: number }) => {
            const escapedText = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
            if (depth === 2) {
                return `<h2 id="${escapedText}" class="text-2xl font-semibold mt-12 mb-6 text-foreground border-b border-border pb-2">${text}</h2>`;
            }
            if (depth === 3) {
                return `<h3 class="text-xl font-medium mt-8 mb-4 text-foreground">${text}</h3>`;
            }
            return `<h${depth} class="text-lg font-medium mt-6 mb-3 text-foreground">${text}</h${depth}>`;
        };

        return marked.parse(document.content, { renderer });
    }, [document.content]);

    // Scroll spy for TOC
    useEffect(() => {
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
        return new Date(dateStr).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <div className="relative min-h-screen bg-background">
            {/* Mobile Sidebar Toggle */}
            <div className="sticky top-16 z-30 flex items-center justify-between lg:hidden px-4 py-3 bg-background/80 backdrop-blur-md border-b border-border">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
                >
                    <Menu size={18} />
                    Contents
                </button>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Globe size={14} />
                    {document.region}
                </div>
            </div>

            {/* Main Layout */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-24 space-y-8">
                            <nav className="space-y-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-50">On this page</p>
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

                            <div className="pt-8 border-t border-border">
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-50 mb-4">Jurisdiction</p>
                                <div className="grid gap-2">
                                    {REGIONS.map((r) => (
                                        <button
                                            key={r.code}
                                            onClick={() => handleRegionChange(r.code)}
                                            disabled={isLoading}
                                            className={`text-left text-sm px-3 py-2 rounded-lg transition-all ${document.region === r.code
                                                ? "bg-primary/10 text-primary font-medium"
                                                : "text-muted-foreground hover:bg-muted"
                                                }`}
                                        >
                                            {r.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="flex-1 max-w-3xl">
                        <header className="mb-12 space-y-4">
                            <div className="flex items-center gap-3 text-sm text-primary font-medium">
                                <span>Legal</span>
                                <ChevronRight size={14} className="text-muted-foreground" />
                                <span className="text-muted-foreground">{document.type.replace(/_/g, " ")}</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                                {document.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 pt-2">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock size={16} />
                                    Last updated: {formatDate(document.effectiveDate || document.publishedAt)}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Globe size={16} />
                                    Region: {REGIONS.find(r => r.code === document.region)?.label || document.region}
                                </div>
                            </div>

                            {document.summary && (
                                <div className="mt-8 p-6 bg-muted/30 rounded-2xl border border-border italic text-muted-foreground leading-relaxed">
                                    <span className="font-semibold text-foreground not-italic block mb-2">Summary of changes:</span>
                                    {document.summary}
                                </div>
                            )}

                            {document.isFallback && (
                                <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center gap-3 text-amber-600 dark:text-amber-400">
                                    <Clock size={18} className="shrink-0" />
                                    <p className="text-sm font-medium">
                                        You are viewing a locally stored snapshot of this document because the live version is currently unavailable.
                                    </p>
                                </div>
                            )}
                        </header>

                        <article
                            className="legal-prose prose prose-slate dark:prose-invert max-w-none 
                         text-foreground/80 leading-relaxed space-y-6
                         [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                    </main>
                </div>
            </div>

            {/* Mobile Drawer (TOC & Region) */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
                    <div className="absolute left-0 top-0 bottom-0 w-80 bg-background border-r border-border p-6 shadow-2xl animate-in slide-in-from-left">
                        <div className="flex items-center justify-between mb-8">
                            <span className="font-bold text-foreground">Menu</span>
                            <button onClick={() => setIsSidebarOpen(false)} className="text-muted-foreground">
                                <X size={24} />
                            </button>
                        </div>

                        <nav className="space-y-8 overflow-y-auto max-h-[calc(100vh-120px)]">
                            <div className="space-y-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-50 text-center">In this document</p>
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
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-50 mb-4 text-center">Change Region</p>
                                <div className="grid gap-2">
                                    {REGIONS.map((r) => (
                                        <button
                                            key={r.code}
                                            onClick={() => {
                                                handleRegionChange(r.code);
                                                setIsSidebarOpen(false);
                                            }}
                                            className={`text-left text-base px-4 py-3 rounded-xl transition-all ${document.region === r.code
                                                ? "bg-primary/10 text-primary font-medium"
                                                : "text-muted-foreground hover:bg-muted"
                                                }`}
                                        >
                                            {r.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
}
