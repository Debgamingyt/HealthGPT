const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "10 AI Chats / Day",
      "Basic Health Summary",
      "Upload 3 Reports",
    ],
  },
  {
    name: "Pro",
    price: "$9/mo",
    features: [
      "Unlimited AI Chats",
      "Unlimited Reports",
      "Advanced AI Summary",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: [
      "Hospital Integration",
      "Unlimited Users",
      "Priority Support",
    ],
  },
];

function Pricing() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Subscription Plans
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="mb-4 text-3xl font-bold">
                {plan.name}
              </h3>

              <p className="mb-8 text-4xl text-blue-600">
                {plan.price}
              </p>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>

              <button className="mt-10 w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;