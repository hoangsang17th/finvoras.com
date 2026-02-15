import * as React from "react";
import { cn } from "../../utils";

export interface TimelineItemProps {
	id: string | number;
	dot?: React.ReactNode;
	content: React.ReactNode;
	sideContent?: React.ReactNode;
}

export interface TimelineProps {
	items: TimelineItemProps[];
	layout?: "right" | "both";
	className?: string;
}

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
	({ items, layout = "right", className }, ref) => {
		return (
			<div ref={ref} className={cn("relative space-y-12", className)}>
				{/* Central Timeline Line */}
				<div
					className={cn(
						"absolute top-0 bottom-0 w-[2px] bg-border",
						layout === "both"
							? "left-4 md:left-1/2 md:-translate-x-[1px]"
							: "left-4",
					)}
				/>

				{items.map((item, index) => (
					<div
						key={item.id}
						className={cn(
							"relative flex flex-col md:flex-row items-start",
							layout === "both" && index % 2 !== 0 ? "md:flex-row-reverse" : "",
						)}
					>
						{/* Timeline Dot */}
						<div
							className={cn(
								"absolute z-20 top-8 flex items-center justify-center rounded-full border-4 border-background bg-brand-primary",
								layout === "both"
									? "left-2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 md:w-5 md:h-5"
									: "left-2 w-4 h-4",
							)}
						>
							{item.dot}
						</div>

						{/* Side Content (e.g., Dates) - Only visible in 'both' layout on desktop */}
						{layout === "both" && (
							<div
								className={cn(
									"hidden md:flex md:w-1/2 mt-8 items-center px-12",
									index % 2 === 0
										? "justify-end text-right"
										: "justify-start text-left",
								)}
							>
								{item.sideContent}
							</div>
						)}

						{/* Main Content */}
						<div
							className={cn(
								"w-full pl-12",
								layout === "both" ? "md:w-1/2 md:pl-0" : "",
							)}
						>
							<div
								className={cn(
									layout === "both"
										? index % 2 === 0
											? "md:pl-12"
											: "md:pr-12"
										: "",
								)}
							>
								{item.content}
							</div>
						</div>
					</div>
				))}
			</div>
		);
	},
);

Timeline.displayName = "Timeline";
