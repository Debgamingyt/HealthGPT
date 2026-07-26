const tech = [
  "React",
  "Tailwind CSS",
  "FastAPI",
  "PostgreSQL",
  "OpenAI API",
  "JWT Auth",
];

function TechStack() {
  return (
    <section id="tech" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Built Using
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {tech.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white p-6 text-center text-lg font-semibold shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;