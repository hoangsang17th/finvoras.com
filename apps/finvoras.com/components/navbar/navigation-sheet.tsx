import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { SmartNavMenu } from "./smart-nav-menu";
import Link from "next/link";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <SmartNavMenu orientation="vertical" className="mt-12" />

        <div className="mt-8 space-y-4">
          <Button variant="outline" className="w-full sm:hidden" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button className="w-full xs:hidden" asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
