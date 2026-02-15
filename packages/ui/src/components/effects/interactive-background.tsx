"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../utils";

interface InteractiveBackgroundProps {
	children?: React.ReactNode;
	className?: string;
}

export const InteractiveBackground = ({
	children,
	className,
}: InteractiveBackgroundProps) => {
	const divRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!divRef.current) return;

		const rect = divRef.current.getBoundingClientRect();
		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
		setOpacity(1);
	};

	const handleMouseLeave = () => {
		setOpacity(0);
	};

	return (
		<div
			ref={divRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={cn(
				"relative w-full h-full overflow-hidden bg-white dark:bg-neutral-950",
				className,
			)}
		>
			<div
				className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
				style={{
					opacity,
					background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,165,0,0.1), transparent 40%)`,
				}}
			/>

			{/* Grid Pattern overlay */}
			<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

			{children}
		</div>
	);
};
