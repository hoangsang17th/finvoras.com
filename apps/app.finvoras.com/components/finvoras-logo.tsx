import React from "react";
import Image from "next/image";

// Finvoras logo component - specific to finvoras.com
export const FinvorasLogo: React.FC = () => (
  <Image
    src="/logo.png"
    alt="Finvoras"
    width={32}
    height={32}
    className="h-8 w-auto"
    priority
  />
);

export default FinvorasLogo;