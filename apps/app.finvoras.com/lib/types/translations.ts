export interface Translations {
	// Navigation
	nav: {
		home: string;
		pricing: string;
		blog: string;
		about: string;
		features: string;
		contact: string;
		getStarted: string;
		login: string;
		register: string;
		dashboard: string;
	};

	// Hero section
	hero: {
		title: string;
		subtitle: string;
		description: string;
		subtext: string;
		primaryCta: string;
		secondaryCta: string;
		watchDemo: string;
		trustedBy: string;
	};

	// HowItWorks section
	howItWorks: {
		title: string;
		description: string;
		steps: {
			title: string;
			description: string;
			cta?: string;
			href?: string;
		}[];
	};

	// Features section
	features: {
		title: string;
		subtitle: string;
		expense: {
			title: string;
			description: string;
		};
		budget: {
			title: string;
			description: string;
		};
		insights: {
			title: string;
			description: string;
		};
		goals: {
			title: string;
			description: string;
		};
		education: {
			title: string;
			description: string;
		};
		security: {
			title: string;
			description: string;
		};
	};

	// Pricing section
	pricing: {
		title: string;
		subtitle: string;
		monthly: string;
		yearly: string;
		savePercent: string;
		free: {
			name: string;
			price: string;
			description: string;
			features: string[];
			cta: string;
		};
		plus: {
			name: string;
			price: string;
			priceYearly: string;
			pricePerMonth: string;
			description: string;
			features: string[];
			cta: string;
			popular?: string;
		};
		pro: {
			name: string;
			price: string;
			priceYearly: string;
			pricePerMonth: string;
			description: string;
			features: string[];
			cta: string;
			popular: string;
		};
		coaching: {
			name: string;
			price: string;
			pricePerSession: string;
			description: string;
			features: string[];
			cta: string;
			note: string;
		};
		bundles: {
			title: string;
			subtitle: string;
			student: {
				name: string;
				price: string;
				duration: string;
				description: string;
				features: string[];
				cta: string;
				badge: string;
			};
			couple: {
				name: string;
				price: string;
				duration: string;
				description: string;
				features: string[];
				cta: string;
				badge: string;
			};
		};
		featureComparison: {
			title: string;
			subtitle: string;
			categories: {
				core: string;
				budget: string;
				insights: string;
				collaboration: string;
				learning: string;
			};
			features: Array<{
				name: string;
				category: string;
				free: boolean | string;
				pro: boolean | string;
				plus: boolean | string;
			}>;
		};
		valueProps: {
			roi: {
				title: string;
				subtitle: string;
				proSavings: string;
				proRoi: string;
				plusSavings: string;
				plusRoi: string;
			};
			pilot: {
				title: string;
				subtitle: string;
				features: string[];
				cta: string;
			};
			loyalty: {
				title: string;
				subtitle: string;
				tiers: {
					silver: {
						name: string;
						requirement: string;
						benefit: string;
					};
					gold: {
						name: string;
						requirement: string;
						benefit: string;
					};
					ambassador: {
						name: string;
						requirement: string;
						benefit: string;
					};
				};
			};
		};
	};

	// Trust Signals
	trustSignals: {
		title: string;
		security: {
			title: string;
			description: string;
		};
		users: {
			label: string;
			count: string;
		};
		savings: {
			label: string;
			amount: string;
		};
		retention: {
			label: string;
			rate: string;
		};
		badges: {
			gdpr: string;
			encryption: string;
			madeForVietnam: string;
		};
	};

	// Persona Highlights
	personaHighlights: {
		title: string;
		subtitle: string;
		minh: {
			name: string;
			role: string;
			painPoint: string;
			solution: string;
			outcome: string;
			cta: string;
		};
		linhDuc: {
			name: string;
			role: string;
			painPoint: string;
			solution: string;
			outcome: string;
			cta: string;
		};
		an: {
			name: string;
			role: string;
			painPoint: string;
			solution: string;
			outcome: string;
			cta: string;
		};
	};

	// Testimonials
	testimonials: {
		title: string;
		subtitle: string;
		items: Array<{
			name: string;
			role: string;
			content: string;
			outcome: string;
		}>;
	};

	// CTA Banner
	cta: {
		title: string;
		subtitle: string;
		urgency: string;
		riskReversal: string;
		primaryButton: string;
		secondaryButton: string;
	};

	// FAQ
	faq: {
		title: string;
		subtitle: string;
		questions: Array<{
			question: string;
			answer: string;
			icon: string;
		}>;
	};

	// Footer
	footer: {
		description: string;
		product: string;
		company: string;
		support: string;
		legal: string;
		followUs: string;
		allRightsReserved: string;
		links: {
			privacy: string;
			terms: string;
			cookies: string;
			contact: string;
			about: string;
			careers: string;
			help: string;
			documentation: string;
		};
	};

	// Auth
	auth: {
		login: {
			title: string;
			subtitle: string;
			email: string;
			password: string;
			rememberMe: string;
			forgotPassword: string;
			loginButton: string;
			noAccount: string;
			signUp: string;
			orContinueWith: string;
			emailPlaceholder: string;
			passwordPlaceholder: string;
			cardTitle: string;
			cardDescription: string;
			signingIn: string;
			signUpFree: string;
			emailRequired: string;
			passwordRequired: string;
			validEmailRequired: string;
			loginFailed: string;
		};
		register: {
			title: string;
			subtitle: string;
			firstName: string;
			lastName: string;
			email: string;
			password: string;
			confirmPassword: string;
			agreeToTerms: string;
			registerButton: string;
			haveAccount: string;
			signIn: string;
			orContinueWith: string;
			fullName: string;
			fullNamePlaceholder: string;
			emailPlaceholder: string;
			passwordPlaceholder: string;
			confirmPasswordPlaceholder: string;
			cardTitle: string;
			cardDescription: string;
			creatingAccount: string;
			createAccount: string;
			alreadyHaveAccount: string;
			termsPrefix: string;
			termsLink: string;
			termsAnd: string;
			privacyLink: string;
			fullNameRequired: string;
			emailRequired: string;
			passwordRequired: string;
			confirmPasswordRequired: string;
			validEmailRequired: string;
			passwordMinLength: string;
			passwordsDoNotMatch: string;
			termsRequired: string;
			registrationFailed: string;
		};
		verifyEmail: {
			title: string;
			subtitle: string;
			verifying: string;
			successTitle: string;
			successMessage: string;
			errorTitle: string;
			noToken: string;
			backToLogin: string;
			retry: string;
			tokenDetected: string;
			resend: string;
			resendSubtitle: string;
			verifyingMessage: string;
			resendSuccess: string;
			resendFailed: string;
			emailPlaceholder: string;
			sendLink: string;
			sent: string;
			back: string;
		};
		forgotPassword: {
			title: string;
			subtitle: string;
			email: string;
			emailPlaceholder: string;
			sendResetLink: string;
			sendingLink: string;
			successMessage: string;
			errorMessage: string;
			rememberedPassword: string;
			signIn: string;
		};
		resetPassword: {
			title: string;
			subtitle: string;
			description: string;
			newPassword: string;
			confirmPassword: string;
			passwordPlaceholder: string;
			updatePassword: string;
			updating: string;
			successMessage: string;
			errorMessage: string;
			tokenMissing: string;
			resetToken: string;
			backToLogin: string;
			loginPage: string;
			toAccessAccount: string;
			loading: string;
		};
		reactivateAccount: {
			title: string;
			subtitle: string;
			confirmingToken: string;
			tokenMissing: string;
			restoreAccount: string;
			restoring: string;
			successMessage: string;
			errorMessage: string;
			headTo: string;
			loginPage: string;
			toAccess: string;
			needNewLink: string;
			needNewLinkDescription: string;
			email: string;
			emailPlaceholder: string;
			sendReactivationEmail: string;
			sending: string;
			requestSuccess: string;
			requestError: string;
			loading: string;
		};
	};

	// Contact
	contact: {
		title: string;
		subtitle: string;
		name: string;
		email: string;
		subject: string;
		message: string;
		send: string;
		sending: string;
		success: string;
		error: string;
		info: {
			address: string;
			phone: string;
			email: string;
			hours: string;
		};
	};

	// Common UI elements
	ui: {
		loading: string;
		error: string;
		success: string;
		cancel: string;
		save: string;
		delete: string;
		edit: string;
		view: string;
		download: string;
		upload: string;
		search: string;
		filter: string;
		sort: string;
		next: string;
		previous: string;
		close: string;
		open: string;
		yes: string;
		no: string;
		ok: string;
		learnMore: string;
		getStarted: string;
		tryFree: string;
		comingSoon: string;
	};

	// About page
	about: {
		title: string;
		subtitle: string;
		mission: {
			title: string;
			description: string;
		};
		vision: {
			title: string;
			description: string;
		};
		values: {
			title: string;
			transparency: {
				title: string;
				description: string;
			};
			security: {
				title: string;
				description: string;
			};
			simplicity: {
				title: string;
				description: string;
			};
			education: {
				title: string;
				description: string;
			};
		};
		team: {
			title: string;
			subtitle: string;
		};
	};

	// Blog
	blog: {
		title: string;
		subtitle: string;
		readMore: string;
		shareArticle: string;
		relatedPosts: string;
		categories: string;
		tags: string;
		author: string;
		publishedOn: string;
		readTime: string;
		noResults: string;
		searchPlaceholder: string;
	};

	// Language and theme
	language: {
		english: string;
		vietnamese: string;
	};
	theme: {
		light: string;
		dark: string;
		system: string;
	};
}
