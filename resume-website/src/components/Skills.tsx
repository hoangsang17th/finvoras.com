import { skills } from '@/data/resume';
import { Badge } from 'shared_ui';

const skillColors = {
  Frontend: 'bg-blue-100 text-blue-800 border-blue-200',
  Backend: 'bg-green-100 text-green-800 border-green-200',
  Database: 'bg-purple-100 text-purple-800 border-purple-200',
  DevOps: 'bg-orange-100 text-orange-800 border-orange-200',
  Tools: 'bg-gray-100 text-gray-800 border-gray-200'
};

const levelColors = {
  Beginner: 'w-1/4 bg-red-500',
  Intermediate: 'w-2/4 bg-yellow-500',
  Advanced: 'w-3/4 bg-blue-500',
  Expert: 'w-full bg-green-500'
};

export default function Skills() {
  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 section-padding bg-gray-50">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div
                key={category}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {category}
                </h3>

                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <Badge
                          variant="outline"
                          className={`text-xs ${skillColors[skill.category as keyof typeof skillColors]}`}
                        >
                          {skill.level}
                        </Badge>
                      </div>

                      {/* Skill level indicator */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${levelColors[skill.level as keyof typeof levelColors]}`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills summary */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm constantly learning and expanding my skill set. These are the technologies I'm most comfortable with,
              but I'm always excited to dive into new tools and frameworks that can help solve problems more effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}