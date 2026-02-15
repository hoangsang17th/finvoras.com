import { BlogCard } from "@/components/blog/blog-card";
import {
	Button,
	Badge,
	Input,
	GridPattern,
	cn,
	Avatar,
	AvatarImage,
	AvatarFallback,
} from "@repo/ui";
import {
	mockBlogPosts,
	mockCategories,
	getFeaturedPosts,
} from "@/lib/data/blog";
import { Search, TrendingUp, ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import PageLayout from "@/components/layout/page-layout";

export default function BlogPage() {
	const featuredPosts = getFeaturedPosts();
	const heroPost = featuredPosts[0];
	const remainingFeatured = featuredPosts.slice(1);
	const recentPosts = mockBlogPosts
		.filter((p) => p.id !== heroPost?.id)
		.slice(0, 6);

	const formatDate = (date: Date) => {
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		}).format(new Date(date));
	};

	return (
		<PageLayout className="min-h-screen bg-background">
			{/* Hero Section */}
			<div className="relative overflow-hidden border-b">
				<div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 via-background to-background z-0" />
				<GridPattern
					numSquares={30}
					maxOpacity={0.1}
					duration={3}
					className={cn(
						"[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
						"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
					)}
				/>

				<div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
					<Badge className="mb-6 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 border-none px-4 py-1.5 text-sm">
						Financial Education Hub
					</Badge>
					<h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
						Master Your Money,
						<br />
						<span className="text-brand-primary">Build Your Future</span>
					</h1>
					<p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
						Expert insights, practical guides, and strategies to help you
						achieve financial freedom with Finvoras.
					</p>

					{/* Search Bar */}
					<div className="relative max-w-lg mx-auto group">
						<div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-success rounded-full opacity-20 group-hover:opacity-40 blur transition duration-200" />
						<div className="relative flex items-center bg-background rounded-full border shadow-sm">
							<Search className="absolute left-4 text-muted-foreground h-5 w-5" />
							<Input
								type="search"
								placeholder="Search for articles, guides, or topics..."
								className="pl-12 pr-4 py-6 w-full border-none bg-transparent focus-visible:ring-0 rounded-full text-base"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-6 py-16">
				{/* Featured Hero Post */}
				{heroPost && (
					<section className="mb-20">
						<div className="flex items-center gap-2 mb-8">
							<div className="h-8 w-1 bg-brand-primary rounded-full" />
							<h2 className="text-2xl font-bold">Featured Article</h2>
						</div>

						<div className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-card rounded-3xl border p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:border-brand-primary/20">
							<div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl">
								<img
									src={heroPost.coverImage}
									alt={heroPost.title}
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute top-4 left-4">
									<Badge className="bg-brand-primary text-white border-none">
										Featured
									</Badge>
								</div>
							</div>

							<div className="flex flex-col justify-center space-y-6">
								<div className="space-y-4">
									<div className="flex items-center gap-3 text-sm text-muted-foreground">
										<Badge
											variant="secondary"
											className="rounded-md px-2.5 py-1"
										>
											{heroPost.category}
										</Badge>
										<span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
										<div className="flex items-center gap-1.5">
											<Calendar className="h-4 w-4" />
											{formatDate(heroPost.publishedAt)}
										</div>
										<span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
										<div className="flex items-center gap-1.5">
											<Clock className="h-4 w-4" />
											{heroPost.readingTime} min read
										</div>
									</div>

									<Link href={`/blog/${heroPost.slug}`}>
										<h3 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-brand-primary transition-colors">
											{heroPost.title}
										</h3>
									</Link>

									<p className="text-lg text-muted-foreground leading-relaxed">
										{heroPost.excerpt}
									</p>
								</div>

								<div className="flex items-center justify-between pt-6 border-t">
									<div className="flex items-center gap-3">
										{heroPost.author.website ? (
											<Link
												href={heroPost.author.website}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-3 group/author"
											>
												<Avatar className="h-10 w-10 border group-hover/author:border-brand-primary transition-colors">
													<AvatarImage
														src={heroPost.author.avatar}
														alt={heroPost.author.name}
													/>
													<AvatarFallback>
														{heroPost.author.name.charAt(0)}
													</AvatarFallback>
												</Avatar>
												<div>
													<p className="font-semibold text-sm group-hover/author:text-brand-primary transition-colors">
														{heroPost.author.name}
													</p>
													<p className="text-xs text-muted-foreground">
														Author
													</p>
												</div>
											</Link>
										) : (
											<>
												<Avatar className="h-10 w-10 border">
													<AvatarImage
														src={heroPost.author.avatar}
														alt={heroPost.author.name}
													/>
													<AvatarFallback>
														{heroPost.author.name.charAt(0)}
													</AvatarFallback>
												</Avatar>
												<div>
													<p className="font-semibold text-sm">
														{heroPost.author.name}
													</p>
													<p className="text-xs text-muted-foreground">
														Author
													</p>
												</div>
											</>
										)}
									</div>

									<Button asChild className="rounded-full group/btn">
										<Link href={`/blog/${heroPost.slug}`}>
											Read Article
											<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
										</Link>
									</Button>
								</div>
							</div>
						</div>
					</section>
				)}

				{/* Categories */}
				<section className="mb-20">
					<div className="flex items-center justify-between mb-8">
						<div className="flex items-center gap-2">
							<TrendingUp className="h-5 w-5 text-brand-primary" />
							<h2 className="text-2xl font-bold">Browse Topics</h2>
						</div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{mockCategories.map((category) => (
							<Link
								key={category.id}
								href={`/blog/category/${category.slug}`}
								className="group"
							>
								<div className="h-full p-6 bg-muted/30 hover:bg-brand-primary/5 border hover:border-brand-primary/30 rounded-2xl transition-all duration-300 text-center">
									<h3 className="font-semibold text-lg mb-2 group-hover:text-brand-primary transition-colors">
										{category.name}
									</h3>
									<p className="text-sm text-muted-foreground mb-3 line-clamp-2">
										{category.description}
									</p>
									<Badge
										variant="secondary"
										className="bg-background group-hover:bg-white"
									>
										{category.postCount} Articles
									</Badge>
								</div>
							</Link>
						))}
					</div>
				</section>

				{/* Recent Posts */}
				<section className="mb-20">
					<div className="flex items-center justify-between mb-10">
						<h2 className="text-3xl font-bold">Latest Articles</h2>
						<Button variant="secondary" asChild>
							<Link href="/blog/all">View All Posts</Link>
						</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Show remaining featured posts first if any */}
						{remainingFeatured.map((post) => (
							<BlogCard key={post.id} post={post} />
						))}
						{/* Then recent posts */}
						{recentPosts.map((post) => (
							<BlogCard key={post.id} post={post} />
						))}
					</div>
				</section>

				{/* Newsletter Signup */}
				<section className="relative overflow-hidden rounded-3xl bg-brand-primary text-primary-foreground p-8 md:p-16 text-center">
					<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
					<div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
					<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-success/20 rounded-full blur-3xl"></div>

					<div className="relative z-10 max-w-2xl mx-auto space-y-8">
						<h3 className="text-3xl md:text-4xl font-bold tracking-tight">
							Join 10,000+ Financial Explorers
						</h3>
						<p className="text-primary-foreground/80 text-lg leading-relaxed">
							Get our weekly newsletter with exclusive money tips, market
							insights, and early access to new features.
						</p>

						<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
							<Input
								type="email"
								placeholder="Enter your email address"
								className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30 h-12"
							/>
							<Button
								variant="secondary"
								size="lg"
								className="h-12 px-8 font-semibold"
							>
								Subscribe
							</Button>
						</div>
						<p className="text-xs text-primary-foreground/60">
							No spam, ever. Unsubscribe anytime.
						</p>
					</div>
				</section>
			</div>
		</PageLayout>
	);
}
