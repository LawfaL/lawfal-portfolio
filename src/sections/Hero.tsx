export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-b from-blue-50 dark:from-slate-900 to-white dark:to-slate-950"
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-4xl">
            👨‍💻
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Creative Developer
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Building beautiful and functional web experiences with modern technologies
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary">
            View My Work
          </button>
          <button className="btn-secondary">
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center gap-6 text-3xl">
          <a href="#" className="hover:scale-110 transition-transform">
            🐙
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            💼
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            𝕏
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            ✉️
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
