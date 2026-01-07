import { cn } from "../../utils";

interface DotPatternProps {
    className?: string;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    cx?: number;
    cy?: number;
    cr?: number;
    lightDotColor?: string;
    darkDotColor?: string;
}

export function DotPattern({
    className,
    width = 16,
    height = 16,
    x = 0,
    y = 0,
    cx = 1,
    cy = 1,
    cr = 1,
    lightDotColor = "#e5e7eb",
    darkDotColor = "#ffffff10",
    ...props
}: DotPatternProps) {
    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full bg-background transition-colors duration-300 ease-in-out",
                className
            )}
            style={{
                backgroundImage: `radial-gradient(circle at ${cx}px ${cy}px, var(--dot-color) ${cr}px, transparent 0)`,
                backgroundSize: `${width}px ${height}px`,
                backgroundPosition: `${x}px ${y}px`,
            }}
            {...props}
        >
            <div
                className={cn(
                    "absolute inset-0 h-full w-full transition-all duration-300 ease-in-out",
                    "bg-[radial-gradient(var(--dot-color-light)_1px,transparent_1px)]",
                    "dark:bg-[radial-gradient(var(--dot-color-dark)_1px,transparent_1px)]"
                )}
                style={{
                    ["--dot-color-light" as any]: lightDotColor,
                    ["--dot-color-dark" as any]: darkDotColor,
                    backgroundSize: `${width}px ${height}px`,
                }}
            />
        </div>
    );
}
