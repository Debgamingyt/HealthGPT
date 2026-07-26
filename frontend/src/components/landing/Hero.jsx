import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="flex min-h-[85vh] items-center justify-center bg-linear-to-br from-blue-50 to-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl text-center"
      >
        <h1 className="mb-6 text-6xl font-bold text-gray-900">
          Health<span className="text-blue-600">GPT</span>
        </h1>

        <p className="mb-10 text-xl text-gray-600">
          AI Powered Healthcare Assistant that helps you
          understand medical reports, chat with AI, store
          health records, and generate personalized health
          summaries.
        </p>

        <div className="flex justify-center gap-5">

          <button
            onClick={() => navigate("/register")}
            className="rounded-xl bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700"
          >
            Get Started
          </button>

          <button
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="rounded-xl border border-blue-600 px-8 py-4 text-blue-600 transition hover:bg-blue-50"
          >
            Learn More
          </button>

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;