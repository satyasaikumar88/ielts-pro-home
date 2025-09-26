const FeatureCard = ({ icon, title, desc }) => (
  <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-soft transition-shadow bg-white">
    <div className="h-12 w-12 rounded-xl bg-brand/10 grid place-items-center text-brand mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-slate-600">{desc}</p>
  </div>
)

export default function Features() {
  return (
    <section id="features" className="section-y bg-slate-50">
      <div className="max-w-7xl mx-auto container-px">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Everything you need to score 7+</h2>
          <p className="mt-3 text-slate-600">Practice smarter with modern tools, structured study plans, and real experts guiding you at every step.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Speaking Practice"
            desc="Daily 1:1 sessions with certified trainers and instant feedback to fix pronunciation and fluency."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M2 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 4v-4H4a2 2 0 0 1-2-2V5Z"/></svg>}
          />
          <FeatureCard
            title="Mock Tests"
            desc="Weekly full-length tests with detailed analytics so you know exactly what to improve."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v2H4V4Zm0 6h16v2H4v-2Zm0 6h10v2H4v-2Z"/></svg>}
          />
          <FeatureCard
            title="AI Band Score"
            desc="Get predictive band scoring and grammar suggestions powered by AI for Writing & Speaking."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z"/></svg>}
          />
          <FeatureCard
            title="Personalized Plan"
            desc="Custom study roadmap based on your current level, target band, and schedule."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14l4-4h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/></svg>}
          />
        </div>
      </div>
    </section>
  )
}
