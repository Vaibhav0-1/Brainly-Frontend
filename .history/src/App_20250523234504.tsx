import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

// Old auth + dashboard pages
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/dashboard";

// Lovable landing page main content parts
import Hero from "./components/ui/Hero";
import Features from "./components/ui/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";

function Landing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CallToAction />
    </main>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes without header/footer */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Routes with header/footer */}
        <Route
          path="/dashboard"
          element={
            <>
              <Header />
              <Dashboard />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Landing />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
