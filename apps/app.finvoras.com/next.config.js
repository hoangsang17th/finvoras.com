import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const envAlias = {
	dev: ".env.dev",
	qa: ".env.qa",
	prod: ".env.prod",
};

const resolveAppEnv = () => {
	if (process.env.APP_ENV) return process.env.APP_ENV;
	if (process.env.NODE_ENV === "production") return "prod";
	if (process.env.NODE_ENV === "development") return "dev";
	return "dev";
};

const APP_ENV = resolveAppEnv();
const envFileName = envAlias[APP_ENV] ?? `.env.${APP_ENV}`;
const envPath = path.resolve(process.cwd(), envFileName);

const parseEnvFile = (filePath) => {
	const content = readFileSync(filePath, "utf-8");
	for (const line of content.split(/\r?\n/)) {
		if (!line || line.trim().startsWith("#")) continue;
		const [key, ...rest] = line.split("=");
		if (!key) continue;
		const value = rest
			.join("=")
			.trim()
			.replace(/^['"]|['"]$/g, "");
		if (!(key in process.env)) {
			process.env[key.trim()] = value;
		}
	}
};

if (existsSync(envPath)) {
	parseEnvFile(envPath);
	console.log(
		`[app.finvoras.com] Loaded environment variables from ${envFileName}`,
	);
} else {
	console.warn(
		`[app.finvoras.com] ${envFileName} not found. Ensure APP_ENV is set correctly or create this file.`,
	);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		NEXT_PUBLIC_APP_ENV: APP_ENV,
	},
	compress: true,
	images: {
		formats: ["image/avif", "image/webp"],
		unoptimized: true,
	},
	async redirects() {
		return [
			{
				source: "/about",
				destination: "/#mission",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
