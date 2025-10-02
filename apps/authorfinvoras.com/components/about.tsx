import { Card, Button } from "@repo/ui";
import { MapPin, Coffee, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-5 w-5" />
              <span>Ho Chi Minh City, Vietnam</span>
            </div>

            <p className="text-lg leading-relaxed">
              Hi there! I'm a passionate software engineer with over{" "}
              <span className="font-semibold text-foreground">3+ years</span> of experience 
              building web applications. I love creating solutions that make a real impact on users' lives.
            </p>

            <p className="text-lg leading-relaxed">
              My journey in tech started with curiosity about how websites work, and it has evolved 
              into a deep passion for full-stack development. I enjoy working with modern technologies 
              and am always eager to learn new frameworks and tools.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or enjoying a good cup of coffee while reading tech blogs.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3">
                <Coffee className="h-5 w-5 text-brand-primary" />
                <span className="font-medium">Coffee Enthusiast</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-brand-primary" />
                <span className="font-medium">Open Source Contributor</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-brand-primary" />
                <span className="font-medium">Problem Solver</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-primary font-bold">📚</span>
                <span className="font-medium">Continuous Learner</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Technologies Used</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Commitment</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;