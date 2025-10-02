import { Button } from "@repo/ui";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Hoang Sang</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Software Engineer passionate about building scalable web applications 
              and creating meaningful user experiences with modern technologies.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="mailto:contact@example.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Me
              </Link>
              <Link href="#experience" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </Link>
              <Link href="#skills" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <div className="space-y-2">
              <Link href="/resume.pdf" target="_blank" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Download Resume
              </Link>
              <Link href="https://github.com" target="_blank" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub Profile
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn Profile
              </Link>
              <Link href="mailto:contact@example.com" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Send Email
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Hoang Sang. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;