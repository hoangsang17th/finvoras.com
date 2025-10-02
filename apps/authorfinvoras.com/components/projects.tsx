import { Card, Button } from "@repo/ui";
import { ExternalLink, Github, Calendar } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Finvoras - Personal Finance Platform",
    description: "A comprehensive personal finance management platform helping users track expenses, manage budgets, and build wealth with personalized insights.",
    image: "/projects/finvoras.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    features: [
      "Expense tracking and categorization",
      "Budget planning and management", 
      "Financial insights and analytics",
      "Educational content and resources"
    ],
    liveUrl: "https://finvoras.com",
    githubUrl: "https://github.com/username/finvoras",
    status: "Live",
    year: "2024"
  },
  {
    title: "E-Commerce Dashboard",
    description: "Admin dashboard for e-commerce platform with real-time analytics, inventory management, and sales tracking.",
    image: "/projects/dashboard.jpg",
    technologies: ["React", "TypeScript", "Chart.js", "Express.js", "MongoDB"],
    features: [
      "Real-time sales analytics",
      "Inventory management system",
      "Customer data visualization",
      "Revenue tracking and reporting"
    ],
    liveUrl: "https://dashboard-demo.com",
    githubUrl: "https://github.com/username/ecommerce-dashboard",
    status: "Live",
    year: "2023"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and project tracking.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Socket.io", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Real-time collaboration",
      "Project and task organization",
      "Team member management",
      "Progress tracking and reporting"
    ],
    liveUrl: "https://taskapp-demo.com",
    githubUrl: "https://github.com/username/task-management",
    status: "Live",
    year: "2023"
  },
  {
    title: "Weather Forecast App",
    description: "Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/projects/weather.jpg",
    technologies: ["React", "TypeScript", "Weather API", "Mapbox", "Tailwind CSS"],
    features: [
      "Current weather conditions",
      "7-day weather forecast",
      "Interactive weather maps",
      "Location-based alerts"
    ],
    liveUrl: "https://weather-app-demo.com",
    githubUrl: "https://github.com/username/weather-app",
    status: "Live",
    year: "2022"
  },
  {
    title: "AI Chat Application",
    description: "Intelligent chat application powered by AI with natural language processing and context-aware responses.",
    image: "/projects/ai-chat.jpg",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Prisma", "PostgreSQL"],
    features: [
      "AI-powered conversations",
      "Context-aware responses",
      "Chat history management",
      "Customizable AI personas"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/username/ai-chat",
    status: "In Development",
    year: "2024"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and professional experience with modern design.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Dark/light mode toggle",
      "Smooth animations",
      "SEO optimized"
    ],
    liveUrl: "https://author.finvoras.com",
    githubUrl: "https://github.com/username/portfolio",
    status: "Live",
    year: "2024"
  }
];

const Projects = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and passion for creating meaningful solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-brand-primary/20 to-brand-blue/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-muted-foreground/20">
                  {project.title.split(' ')[0]}
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${
                      project.status === "Live"
                        ? "bg-brand-success text-white"
                        : "bg-brand-warning text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                {/* Year Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 text-xs bg-background/80 backdrop-blur-sm rounded-full font-medium flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-primary mt-0.5 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;