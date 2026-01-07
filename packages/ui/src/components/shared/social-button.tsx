import * as React from "react"
import Link from "next/link"
import { Button } from "../core/button"
import { cn } from "../../utils"

export interface SocialButtonProps {
    href: string
    icon: React.ReactNode
    label?: string
    className?: string
    variant?: "default" | "secondary" | "primary" | "link"
}

export const SocialButton = React.forwardRef<HTMLAnchorElement, SocialButtonProps>(
    ({ href, icon, label, className, variant = "default" }, ref) => {
        return (
            <Button
                asChild
                variant={variant}
                size="icon"
                className={cn(
                    "rounded-full hover:scale-110 transition-transform duration-300 shadow-sm hover:shadow-md",
                    className
                )}
                title={label}
            >
                <Link href={href} target="_blank" rel="noopener noreferrer">
                    {icon}
                    {label && <span className="sr-only">{label}</span>}
                </Link>
            </Button>
        )
    }
)

SocialButton.displayName = "SocialButton"
