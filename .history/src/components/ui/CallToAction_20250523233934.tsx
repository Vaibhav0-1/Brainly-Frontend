import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl py-12 px-6 md:py-16 md:px-12 text-center relative overflow-hidden shadow-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full opacity-10"></div>
            <div className="absolute bottom-10 left-10 w-60 h-60 bg-white rounded-full opacity-10"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 rounded-full p-3">
                <Brain size={40} className="text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Building Your Second Brain Today
            </h2>
            
            <p className="text-xl text-white/90 mb-10">
              Join thousands of knowledge workers who've transformed how they think, create, and learn with Brainly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="white" size="large" className="group">
                Get Started Free
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="large">
                Schedule a Demo
              </Button>
            </div>
            
            <p className="text-white/80 mt-8">
              No credit card required. Free 14-day trial on all paid plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;