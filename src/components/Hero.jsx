export default function Hero() {
  return (
    <section className="section-y">
      <div className="max-w-7xl mx-auto container-px grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-sm font-semibold text-brand">
            🚀 Guaranteed Improvement
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Crack IELTS with Confidence
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">
            Master Listening, Reading, Writing, and Speaking with expert mentors, AI-driven feedback, and personalized study plans crafted for your target band.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#enroll" className="btn-primary">Start Free Demo Class</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold border border-slate-300 hover:bg-slate-50">
              View Courses
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <dt className="text-sm text-slate-500">Avg. Band Improvement</dt>
              <dd className="text-2xl font-bold">+1.5</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Success Rate</dt>
              <dd className="text-2xl font-bold">96%</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Students Trained</dt>
              <dd className="text-2xl font-bold">12k+</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-brand/10 via-transparent to-brand/10 rounded-3xl blur-2xl"></div>
          <img
            className="w-full rounded-3xl shadow-soft border border-slate-200"
            src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1600&auto=format&fit=crop"
            alt="IELTS preparation banner"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
