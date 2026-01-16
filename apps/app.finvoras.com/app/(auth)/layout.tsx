import Footer from "@/components/footer";
import Link from "next/link";
import { FinvorasLogo } from "@/components/finvoras-logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="py-8 flex justify-center">
        <Link href="/">
          <FinvorasLogo />
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
          {children}
        </div>
      </main>

      <Footer variant="minimal" />
    </div>
  );
}