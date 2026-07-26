import {
  Bot,
  FileText,
  Activity,
  Globe,
  Shield,
  History,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Assistant",
    desc: "Chat with an intelligent healthcare assistant.",
  },
  {
    icon: FileText,
    title: "Upload Reports",
    desc: "Upload medical reports for AI analysis.",
  },
  {
    icon: Activity,
    title: "Health Summary",
    desc: "Get AI-generated health insights.",
  },
  {
    icon: Globe,
    title: "Multi Language",
    desc: "Communicate in your preferred language.",
  },
  {
    icon: Shield,
    title: "Secure Data",
    desc: "Your health records remain protected.",
  },
  {
    icon: History,
    title: "Chat History",
    desc: "Access all previous AI conversations.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-8 py-20"
    >
      <h2 className="mb-12 text-center text-4xl font-bold">
        Why Choose HealthGPT?
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
          >
            <feature.icon
              size={40}
              className="mb-5 text-blue-600"
            />

            <h3 className="mb-3 text-2xl font-semibold">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;