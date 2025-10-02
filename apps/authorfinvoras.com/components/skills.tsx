import { Card } from "@repo/ui";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 85 },
      { name: "SASS/SCSS", level: 80 },
      { name: "Responsive Design", level: 90 }
    ]
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 70 },
      { name: "Microservices", level: 80 },
      { name: "Authentication", level: 85 },
      { name: "API Design", level: 88 }
    ]
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Redis", level: 70 },
      { name: "Database Design", level: 82 },
      { name: "Query Optimization", level: 75 },
      { name: "Data Modeling", level: 80 },
      { name: "NoSQL", level: 78 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: "🚀",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 82 },
      { name: "Linux", level: 78 },
      { name: "Nginx", level: 70 },
      { name: "Monitoring", level: 72 },
      { name: "Testing", level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <div className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life. Always learning and expanding my skillset.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-brand-primary to-brand-blue h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile/Scrum", "Project Management", "Team Leadership", "Code Review",
              "Performance Optimization", "Security", "UI/UX Design", "Problem Solving",
              "Communication", "Mentoring", "Technical Writing", "Open Source"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border rounded-full text-sm font-medium hover:bg-accent transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;