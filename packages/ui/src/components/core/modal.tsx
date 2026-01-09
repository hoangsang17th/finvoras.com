"use client";

import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "../../utils";
import { Button } from "../core/button";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string; // Class for the modal content container
    backdropClassName?: string;
    showCloseButton?: boolean; // Default true
    closeOnBackdropClick?: boolean; // Default true
}

export const Modal = ({
    isOpen,
    onClose,
    children,
    className,
    backdropClassName,
    showCloseButton = true,
    closeOnBackdropClick = true,
}: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Handle click outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (closeOnBackdropClick && modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    if (typeof document === "undefined") return null;

    const modalContent = (
        <div
            className={cn(
                "fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200",
                backdropClassName
            )}
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className={cn(
                    "relative bg-card border shadow-2xl rounded-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 slide-in-from-bottom-2",
                    className
                )}
                role="dialog"
                aria-modal="true"
            >
                {showCloseButton && (
                    <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-4 right-4 rounded-full h-8 w-8 bg-background/80 backdrop-blur hover:bg-background shadow-sm z-10"
                        onClick={onClose}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                )}
                {children}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};
