import { experiences, education } from '@/data/resume';
import { Badge, Card, CardContent } from 'shared_ui';
import { Building, GraduationCap, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 section-padding bg-gray-50">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Experience & <span className="gradient-text">Education</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center text-gray-800">
                <Building className="w-6 h-6 mr-3 text-blue-600" />
                Professional Experience
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={exp.id} className="relative overflow-hidden">
                    {/* Timeline line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-blue-300 to-transparent"></div>
                    )}

                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                    <CardContent className="pt-6 pl-16">
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">
                          {exp.position}
                        </h4>
                        <div className="flex items-center gap-4 text-gray-600 mb-2">
                          <span className="font-medium">{exp.company}</span>
                          <span className="flex items-center gap-1 text-sm">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center text-gray-800">
                <GraduationCap className="w-6 h-6 mr-3 text-purple-600" />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={edu.id} className="relative overflow-hidden">
                    {/* Timeline line */}
                    {index < education.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-purple-300 to-transparent"></div>
                    )}

                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                    <CardContent className="pt-6 pl-16">
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">
                          {edu.degree}
                        </h4>
                        <div className="flex items-center gap-4 text-gray-600 mb-2">
                          <span className="font-medium">{edu.institution}</span>
                          <span className="flex items-center gap-1 text-sm">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      {edu.description && (
                        <p className="text-gray-600 text-sm">
                          {edu.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}

                {/* Certifications placeholder */}
                <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-dashed border-purple-200">
                  <CardContent className="pt-6 text-center">
                    <GraduationCap className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                      Continuous Learning
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Always expanding knowledge through online courses, workshops, and certifications
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Download CV button */}
          <div className="text-center mt-16">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}