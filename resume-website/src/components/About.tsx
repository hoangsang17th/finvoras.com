import { personalInfo } from '@/data/resume';

export default function About() {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-8xl font-bold text-gray-300">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Hello! I'm {personalInfo.name.split(' ')[0]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {personalInfo.description}
                </p>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed">
                  I have a passion for creating digital experiences that are not only functional but also beautiful and user-friendly.
                  My journey in web development started with curiosity and has evolved into a career dedicated to building innovative solutions.
                </p>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest trends in web development.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}