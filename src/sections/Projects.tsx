const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '🛍️',
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    image: '✓',
    link: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with multi-location support and detailed forecasts.',
    tags: ['React', 'API Integration', 'Chart.js'],
    image: '🌤️',
    link: '#',
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'Modern blogging platform with markdown support and SEO optimization.',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
    image: '📝',
    link: '#',
  },
  {
    id: 5,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics with interactive visualizations.',
    tags: ['React', 'D3.js', 'Python API'],
    image: '📊',
    link: '#',
  },
  {
    id: 6,
    title: 'AI Chat Assistant',
    description: 'Intelligent chat interface powered by machine learning for customer support.',
    tags: ['React', 'Node.js', 'OpenAI API'],
    image: '🤖',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A selection of my recent work and experiments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="card group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  )
}
