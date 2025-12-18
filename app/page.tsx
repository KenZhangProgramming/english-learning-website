export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* Section 1: About */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-brand-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute right-10 top-10 w-64 h-64 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute left-10 bottom-10 w-64 h-64 bg-brand-olive rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-8">
            Master English with <span className="text-brand-red">Canado English</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-text-secondary max-w-2xl mx-auto mb-12">
            We are more than just a learning platform. We are a community dedicated to helping you achieve fluency through immersive experiences and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#teachers" className="rounded-full bg-brand-red px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300">
              Meet Our Teachers
            </a>
            <a href="#login" className="text-lg font-semibold leading-6 text-text-primary hover:text-brand-gold transition-colors">
              Join Today <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Find Teachers */}
      <section id="teachers" className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Find Your Perfect Teacher</h2>
          <p className="text-xl text-text-secondary mb-16 max-w-2xl mx-auto">Browse through our curated list of expert tutors specializing in various English skills.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Mock Teacher Card 1 */}
            <div className="group bg-brand-cream/30 rounded-2xl p-6 border border-brand-cream hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-brand-olive/20 rounded-full mb-6 mx-auto flex items-center justify-center text-3xl">👨‍🏫</div>
              <h3 className="text-2xl font-bold text-text-primary mb-2 text-center">James Wilson</h3>
              <p className="text-brand-red font-medium mb-4 text-center">Business English Expert</p>
              <p className="text-text-secondary mb-6 text-center">"I help professionals communicate with confidence in the global workplace."</p>
              <button className="w-full py-3 rounded-xl bg-white border border-brand-olive text-brand-olive font-semibold group-hover:bg-brand-olive group-hover:text-white transition-all">View Profile</button>
            </div>

            {/* Mock Teacher Card 2 */}
            <div className="group bg-brand-cream/30 rounded-2xl p-6 border border-brand-cream hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-brand-red/10 rounded-full mb-6 mx-auto flex items-center justify-center text-3xl">👩‍🏫</div>
              <h3 className="text-2xl font-bold text-text-primary mb-2 text-center">Sarah Jenkins</h3>
              <p className="text-brand-red font-medium mb-4 text-center">IELTS & TOEFL Prep</p>
              <p className="text-text-secondary mb-6 text-center">"Score higher on your exams with my proven strategies and practice materials."</p>
              <button className="w-full py-3 rounded-xl bg-white border border-brand-olive text-brand-olive font-semibold group-hover:bg-brand-olive group-hover:text-white transition-all">View Profile</button>
            </div>

            {/* Mock Teacher Card 3 */}
            <div className="group bg-brand-cream/30 rounded-2xl p-6 border border-brand-cream hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-brand-gold/20 rounded-full mb-6 mx-auto flex items-center justify-center text-3xl">🧑‍🏫</div>
              <h3 className="text-2xl font-bold text-text-primary mb-2 text-center">Michael Chen</h3>
              <p className="text-brand-red font-medium mb-4 text-center">Conversation Coach</p>
              <p className="text-text-secondary mb-6 text-center">"Speak naturally and fluently. Let's practice real-world conversations together."</p>
              <button className="w-full py-3 rounded-xl bg-white border border-brand-olive text-brand-olive font-semibold group-hover:bg-brand-olive group-hover:text-white transition-all">View Profile</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Login/Signup */}
      <section id="login" className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-brand-cream/50">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-text-primary mb-2">Welcome Back</h2>
          <p className="text-text-secondary mb-8">Start your journey or continue where you left off.</p>

          <div className="space-y-4">
            <button className="w-full py-4 rounded-xl bg-brand-red text-white font-bold text-lg hover:bg-red-700 transition-colors shadow-md">
              Log In
            </button>
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 w-full absolute"></div>
              <span className="bg-white px-4 text-sm text-gray-500 relative z-10">OR</span>
            </div>
            <button className="w-full py-4 rounded-xl bg-white border-2 border-brand-olive text-brand-olive font-bold text-lg hover:bg-brand-olive/5 transition-colors">
              Sign Up
            </button>
          </div>
          <p className="mt-8 text-sm text-text-secondary">
            By joining, you agree to our <a href="#" className="text-brand-red underline">Terms</a> and <a href="#" className="text-brand-red underline">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
