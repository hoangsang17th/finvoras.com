import * as React from "react"
import Link from "next/link"
import { cn } from "../../utils"

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: React.ReactNode
    className?: string
    external?: boolean
    showArrow?: boolean
}

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
    ({ href, children, className, external, showArrow, ...props }, ref) => {
        const isExternal = external || href.startsWith('http') || href.startsWith('mailto:')

        return (
            <Link
                href={href}
                ref={ref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={cn(
                    "text-muted-foreground hover:text-brand-primary transition-colors duration-200 inline-flex items-center gap-1 font-medium",
                    className
                )}
                {...props}
            >
                {children}
                {showArrow && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-60"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                )}
            </Link>
        )
    }
)

TextLink.displayName = "TextLink"
