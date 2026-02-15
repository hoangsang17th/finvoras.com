// Auth Types
export interface UserProfile {
	uuid: string;
	email: string;
	fullName: string;
	role?: string;
	points?: number;
	userProfile?: {
		avatar?: string;
		icon?: string;
	};
}

export interface LoginRequest {
	email: string;
	password: string;
	isRemember?: boolean;
	totpCode?: string;
	backupCode?: string;
	mfaMethod?: string;
}

export interface RegisterRequest {
	fullName: string;
	email: string;
	password: string;
	confirmPassword: string;
	acceptLegalDocuments: boolean;
}

export interface AuthSession {
	accessToken: string;
	refreshToken: string;
	expiredAt: string | Date;
	user?: UserProfile;
}

export interface RefreshTokenResponse {
	accessToken: string;
	refreshToken: string;
}

// Blog Types
export interface BlogPost {
	id: string;
	title: string;
	slug: string;
	excerpt: string;
	content: string;
	author: {
		name: string;
		avatar?: string;
		website?: string;
	};
	publishedAt: Date;
	updatedAt: Date;
	tags: string[];
	category: string;
	readingTime: number;
	featured: boolean;
	coverImage?: string;
}

export interface BlogCategory {
	id: string;
	name: string;
	slug: string;
	description?: string;
	postCount: number;
}

// API Response Types
export interface ApiResponse<T = unknown> {
	success: boolean;
	data?: T;
	message?: string;
	errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
	data: T[];
	pagination: {
		page: number;
		limit: number;
		total: number;
		totalPages: number;
	};
}
