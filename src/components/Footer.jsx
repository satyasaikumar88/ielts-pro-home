export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-7xl mx-auto container-px py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-brand/10 grid place-items-center">
                <span className="text-brand font-extrabold">IP</span>
              </div>
              <span className="text-lg font-extrabold tracking-tight">IELTS Pro</span>
            </div>
            <p className="mt-3 text-slate-600 max-w-sm">Modern IELTS coaching designed for real results. Learn smarter with expert mentors and AI-powered insights.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li><a className="hover:text-slate-900" href="#">Courses</a></li>
                <li><a className="hover:text-slate-900" href="#">Pricing</a></li>
                <li><a className="hover:text-slate-900" href="#">Results</a></li>
                <li><a className="hover:text-slate-900" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>+91 98765 43210</li>
                <li>support@ieltspro.com</li>
                <li>Chandigarh, India</li>
              </ul>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-slate-500">© {new Date().getFullYear()} IELTS Pro Institute. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
