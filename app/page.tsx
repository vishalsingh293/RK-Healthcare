export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] gap-8 animate-fade-in">
      <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 text-center">
          Welcome to RK Healthcare
        </h1>
        <p className="max-w-2xl text-center text-lg text-gray-700">
          RK Healthcare is a group of consultant anaesthetists working in the
          independent sector, providing high-quality anaesthetic care and
          expertise. We are committed to patient safety, comfort, and excellence
          in healthcare services.
        </p>
        <a
          href="/patient-information"
          className="mt-4 inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}
