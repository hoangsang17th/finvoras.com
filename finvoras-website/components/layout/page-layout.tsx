import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className={`pt-16 xs:pt-20 sm:pt-24 ${className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}