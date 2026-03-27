import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind? Let's talk about it
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📧</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔗</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Follow</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700"
                    >
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
