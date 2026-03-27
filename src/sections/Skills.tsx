const skillsData = {
  frontend: [
    { name: 'React', proficiency: 95 },
    { name: 'TypeScript', proficiency: 90 },
    { name: 'Tailwind CSS', proficiency: 95 },
    { name: 'Vue.js', proficiency: 85 },
  ],
  backend: [
    { name: 'Node.js', proficiency: 90 },
    { name: 'PostgreSQL', proficiency: 85 },
    { name: 'MongoDB', proficiency: 80 },
    { name: 'GraphQL', proficiency: 85 },
  ],
  tools: [
    { name: 'Git & GitHub', proficiency: 95 },
    { name: 'Docker', proficiency: 80 },
    { name: 'AWS', proficiency: 75 },
    { name: 'CI/CD', proficiency: 85 },
  ],
}

function SkillBar({ name, proficiency }: { name: string; proficiency: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-slate-600 dark:text-slate-400">{proficiency}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">🎨</span>
              Frontend
            </h3>
            {skillsData.frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>

          {/* Backend */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">⚙️</span>
              Backend
            </h3>
            {skillsData.backend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>

          {/* Tools */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">🛠️</span>
              Tools
            </h3>
            {skillsData.tools.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* Additional skills */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-bold mb-4">Other Interests</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'UI/UX Design',
              'Web Performance',
              'Accessibility',
              'Testing',
              'DevOps',
              'Machine Learning',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
