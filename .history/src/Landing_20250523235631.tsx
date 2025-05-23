import React from "react";
import { useNavigate } from "react-router-dom";

import Hero from "./components/ui/Hero";
import Features from "./components/ui/Features";
import HowItWorks from "./components/ui/HowItWorks";
import Testimonials from "./components/ui/Testimonials";
import Pricing from "./components/ui/Pricing";
import FAQ from "./components/ui/FAQ";
import CallToAction from "./components/ui/CallToAction";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="flex justify-end p-4 space-x-4">
        <button
          onClick={() => navigate("/src")}
          className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Sign Up
        </button>
      </div>

      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CallToAction />
    </main>
  );
};

export default Landing;
