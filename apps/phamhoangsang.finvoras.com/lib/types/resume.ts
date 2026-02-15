// Personal Information Types
export interface PersonalInfo {
	name: string;
	summary: string;
	bio: string;
	location: string;
	email: string;
	phone: string;
	website?: string;
	avatarUrl: string;
	statusKey: "open_to_work" | "building";
	resumeUrl: string;
}

// UI Translations Types
export interface UITranslations {
	nav: {
		about: string;
		experience: string;
		skills: string;
		projects: string;
		contact: string;
		downloadCv: string;
	};
	sections: {
		about: { title: string; subtitle: string };
		experience: { title: string; subtitle: string };
		skills: { title: string; subtitle: string };
		projects: { title: string; subtitle: string };
		contact: { title: string; subtitle: string };
		workValues: string;
		education: string;
		additionalSkills: string;
	};
	ui: {
		actions: {
			viewCode: string;
			liveDemo: string;
			send: string;
			sending: string;
			success: string;
			error: string;
			sendAnotherMessage: string;
			errorMessage: string;
			readBlog: string;
		};

		form: {
			name: string;
			email: string;
			message: string;
			namePlaceholder: string;
			emailPlaceholder: string;
			messagePlaceholder: string;
			messagePlaceholderLong: string;
			contactRequired: string;
		};

		contact: {
			letsConnect: string;
			connectDescription: string;
			messageSent: string;
			messageSentDescription: string;
			responseTime: string;

			// Info labels
			phone: string;
			location: string;
		};

		experience: {
			present: string;
			fullTime: string;
			partTime: string;
			freelance: string;
			contract: string;
		};

		status: {
			openToWork: string;
			building: string;
		};

		// Skill Levels (already grouped)
		skillLevels: {
			expert: string;
			proficient: string;
			familiar: string;
		};
	};

	footer: {
		builtWith: string;
		by: string;
		allRightsReserved: string;
	};
	theme: {
		light: string;
		dark: string;
		system: string;
	};
	language: {
		english: string;
		vietnamese: string;
	};
}

// Social Links Types
export interface SocialLinks {
	github?: string;
	linkedin?: string;
	twitter?: string;
	email: string;
	resume?: string;
}

// Experience Types
export type ExperienceType = "fullTime" | "partTime" | "freelance" | "contract";

export interface Experience {
	id: string;
	title: string;
	company?: string;
	location: string;
	period: string;
	type: ExperienceType;
	description: string;
	contributions: string[];
	technologies: string[];
	role?: string;
	teamSize?: string;
}

// Skills Types
export interface Skill {
	name: string;
	level: "Expert" | "Proficient" | "Familiar";
}

export interface SkillCategory {
	title: string;
	icon: string;
	skills: Skill[];
}

// Project Types
export type ProjectStatus = "live" | "in_development" | "concept";

export interface Project {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	contributions: string[];
	urls: string[];
	status: ProjectStatus;
	date: Date | null;
	featured?: boolean;
	category?: string;
}

// Quick Info Types
export interface QuickInfo {
	label: string;
	value: string | number;
	description?: string;
}

// Education Types (optional)
export interface Education {
	id: string;
	institution: string;
	institutionUrl?: string;
	degree: string;
	location: string;
	locationUrl?: string;
	period: string;
	gpa?: string;
	achievements?: string[];
}

// Certification Types (optional)
export interface Certification {
	id: string;
	name: string;
	issuer: string;
	date: string;
	credentialId?: string;
	url?: string;
}

// Main Resume Data Type
export interface ResumeData {
	personalInfo: PersonalInfo;
	socialLinks: SocialLinks;
	quickInfo: QuickInfo[];
	experiences: Experience[];
	skillCategories: SkillCategory[];
	projects: Project[];
	education?: Education[];
	certifications?: Certification[];
	additionalSkills: string[];
	workValues: string[];
}
