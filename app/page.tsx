export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-100 mb-6">
        Master English with <span className="text-brand-green">Teaglish</span>
      </h1>
      <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Connect with expert tutors, join a global community, and take your English skills to the next level.
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-brand-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
        >
          Get Started
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </main>
  );
}
