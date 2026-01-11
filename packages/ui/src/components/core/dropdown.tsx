"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils";

export interface DropdownOption {
    value: string;
    label: string | ReactNode;
    icon?: ReactNode;
}

export interface DropdownProps {
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
    indicatorIcon?: ReactNode;
    leadingIcon?: ReactNode;
    className?: string;
    buttonClassName?: string;
    menuClassName?: string;
    itemClassName?: string;
    activeItemClassName?: string;
    disabled?: boolean;
    align?: "left" | "right" | "center";
}

export function Dropdown({
    options,
    value,
    onChange,
    label,
    placeholder = "Select an option",
    indicatorIcon,
    leadingIcon,
    className,
    buttonClassName,
    menuClassName,
    itemClassName,
    activeItemClassName,
    disabled = false,
    align = "left",
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            window.document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleSelect = (optionValue: string) => {
        if (disabled) return;
        onChange(optionValue);
        setIsOpen(false);
    };

    const alignClasses = {
        left: "left-0",
        right: "right-0",
        center: "left-1/2 -translate-x-1/2",
    };

    return (
        <div className={cn("relative", className)} ref={dropdownRef}>
            {label && (
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-50 mb-4">
                    {label}
                </p>
            )}
            <button
                type="button"
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                className={cn(
                    "flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium bg-muted/50 hover:bg-muted border border-border rounded-xl transition-all group disabled:opacity-50 disabled:cursor-not-allowed",
                    buttonClassName
                )}
            >
                <div className="flex items-center gap-2">
                    {selectedOption?.icon || leadingIcon}
                    <span className="truncate">
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                </div>
                <div className={cn("transition-transform duration-300", isOpen && "rotate-180")}>
                    {indicatorIcon || <ChevronDown size={16} className="text-muted-foreground" />}
                </div>
            </button>

            {isOpen && (
                <div
                    className={cn(
                        "absolute top-full mt-2 z-50 bg-background border border-border rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 min-w-[12rem]",
                        alignClasses[align],
                        menuClassName
                    )}
                >
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleSelect(option.value)}
                                className={cn(
                                    "w-full text-left text-sm px-4 py-2.5 transition-colors flex items-center gap-2",
                                    value === option.value
                                        ? cn("bg-primary/10 text-primary font-semibold", activeItemClassName)
                                        : "text-muted-foreground hover:bg-muted",
                                    itemClassName
                                )}
                            >
                                {option.icon}
                                <span>{option.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
