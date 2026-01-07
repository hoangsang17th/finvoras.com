import React from "react";
import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Logo: React.FC<LogoProps> = ({ 
  href = "/", 
  className = "font-bold text-xl hover:text-brand-primary transition-colors cursor-pointer",
  children 
}) => (
  <Link href={href} className={className}>
    {children}
  </Link>
);

export default Logo;