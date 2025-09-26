const Card = ({ quote, name, score }) => (
  <figure className="rounded-2xl border border-slate-200 p-6 bg-white">
    <blockquote className="text-slate-700">“{quote}”</blockquote>
    <figcaption className="mt-4 text-sm text-slate-500">
      <span className="font-semibold text-slate-700">{name}</span> · Band {score}
    </figcaption>
  </figure>
)

export default function Testimonials() {
  return (
    <section className="section-y">
      <div className="max-w-7xl mx-auto container-px">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Student success stories</h2>
          <p className="mt-3 text-slate-600">Real improvements from learners across the globe. Your success is next.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card quote="The AI feedback for Writing Task 2 was a game-changer. Improved from 6.0 to 7.5 in four weeks!" name="Aarav Gupta" score="7.5" />
          <Card quote="Speaking mentors were super helpful and patient. I finally fixed my hesitation and pacing." name="Sana Khan" score="7.0" />
          <Card quote="Mock test analytics showed my weak areas. The personalized plan kept me consistent." name="Himanshu Verma" score="8.0" />
        </div>
      </div>
    </section>
  )
}
