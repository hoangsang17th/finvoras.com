import { Card } from "@repo/ui";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "Ho Chi Minh City, Vietnam",
    period: "2023 - Present",
    type: "Full-time",
    description: [
      "Led development of microservices architecture serving 100k+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with cross-functional teams to deliver high-quality products"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Agency Co.",
    location: "Ho Chi Minh City, Vietnam", 
    period: "2022 - 2023",
    type: "Full-time",
    description: [
      "Developed responsive web applications using React and Next.js",
      "Built RESTful APIs with Node.js and Express.js",
      "Integrated third-party services and payment gateways",
      "Optimized application performance and SEO"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "Vercel"]
  },
  {
    title: "Frontend Developer",
    company: "Startup Hub",
    location: "Ho Chi Minh City, Vietnam",
    period: "2021 - 2022", 
    type: "Full-time",
    description: [
      "Created modern user interfaces with React and TypeScript",
      "Implemented responsive designs and cross-browser compatibility",
      "Worked closely with UX/UI designers to bring designs to life",
      "Participated in agile development processes"
    ],
    technologies: ["React", "TypeScript", "SASS", "Material-UI", "Git", "Figma"]
  },
  {
    title: "Junior Web Developer",
    company: "Local Web Agency",
    location: "Ho Chi Minh City, Vietnam",
    period: "2020 - 2021",
    type: "Full-time", 
    description: [
      "Developed websites using HTML, CSS, and JavaScript",
      "Learned React.js and modern development practices",
      "Assisted senior developers in project delivery",
      "Gained experience in version control and team collaboration"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "WordPress", "Git"]
  }
];

const Experience = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my expertise in software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-brand-primary rounded-full border-4 border-background shadow-lg md:transform md:-translate-x-2" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-brand-primary mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;