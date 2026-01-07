import React, { forwardRef } from "react";
import { Button } from "../core/button";
import { ButtonProps } from "../core/button/button.types";

/**
 * NavbarCTAButton - Alias for Button with navbar context
 * This component is now just a wrapper around Button with context="navbar"
 * @deprecated Consider using Button with context="navbar" directly
 */
export const NavbarCTAButton = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        return <Button {...props} context="navbar" ref={ref} />;
    }
);

NavbarCTAButton.displayName = "NavbarCTAButton";