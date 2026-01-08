import PortfolioNavbar from "@/components/portfolio-navbar";
import Footer from "@/components/footer";
import { Button } from "@repo/ui";
import Link from "next/link";

export const runtime = 'edge';

export default function NotFound() {
    return (
        <>
            <PortfolioNavbar />
            <main className="flex min-h-[70vh] flex-col items-center justify-center space-y-4 text-center px-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">404</h1>
                <p className="text-lg text-muted-foreground">
                    Oops! The page you are looking for doesn't exist.
                </p>
                <div className="flex items-center gap-4">
                    <Button asChild>
                        <Link href="/">Return Home</Link>
                    </Button>
                </div>
            </main>
            <Footer />
        </>
    );
}
