import Link from "next/link";
import { BlogPost } from "@/lib/types";
import {
	Badge,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	Avatar,
	AvatarImage,
	AvatarFallback,
} from "@repo/ui";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
	post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
	const formatDate = (date: Date) => {
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}).format(new Date(date));
	};

	return (
		<Link href={`/blog/${post.slug}`} className="group block h-full">
			<Card className="h-full flex flex-col overflow-hidden border-border/60 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-brand-primary/20">
				{post.coverImage && (
					<div className="relative overflow-hidden aspect-video">
						<img
							src={post.coverImage}
							alt={post.title}
							className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div className="absolute top-4 left-4 flex gap-2">
							{post.featured && (
								<Badge className="bg-brand-primary text-white border-none shadow-sm">
									Featured
								</Badge>
							)}
							<Badge
								variant="secondary"
								className="bg-background/90 backdrop-blur-sm shadow-sm"
							>
								{post.category}
							</Badge>
						</div>
					</div>
				)}

				<CardHeader className="space-y-3 pb-3">
					<div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
						<div className="flex items-center gap-1">
							<Calendar className="h-3.5 w-3.5" />
							{formatDate(post.publishedAt)}
						</div>
						<span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
						<div className="flex items-center gap-1">
							<Clock className="h-3.5 w-3.5" />
							{post.readingTime} min read
						</div>
					</div>

					<h3 className="text-xl font-bold leading-tight group-hover:text-brand-primary transition-colors line-clamp-2">
						{post.title}
					</h3>
				</CardHeader>

				<CardContent className="flex-grow pb-3">
					<p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
						{post.excerpt}
					</p>
				</CardContent>

				<CardFooter className="pt-0 flex items-center justify-between border-t bg-muted/20 px-6 py-4 mt-auto">
					<div className="flex items-center gap-3">
						{post.author.website ? (
							<a
								href={post.author.website}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 group/author z-20"
								onClick={(e) => e.stopPropagation()}
							>
								<Avatar className="h-8 w-8 border group-hover/author:border-brand-primary transition-colors">
									<AvatarImage
										src={post.author.avatar}
										alt={post.author.name}
									/>
									<AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
								</Avatar>
								<span className="text-sm font-medium text-foreground/80 group-hover/author:text-brand-primary transition-colors">
									{post.author.name}
								</span>
							</a>
						) : (
							<>
								<Avatar className="h-8 w-8 border">
									<AvatarImage
										src={post.author.avatar}
										alt={post.author.name}
									/>
									<AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
								</Avatar>
								<span className="text-sm font-medium text-foreground/80">
									{post.author.name}
								</span>
							</>
						)}
					</div>
					<div className="text-brand-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
						<ArrowRight className="h-5 w-5" />
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
}
