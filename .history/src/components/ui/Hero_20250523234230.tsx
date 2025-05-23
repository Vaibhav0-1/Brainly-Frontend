import React from 'react';
import { ArrowRight, Brain, Sparkles } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-emerald-100 rounded-full filter blur-3xl opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles size={16} className="text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">Meet your digital brain extension</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Remember Everything. <br />
            <span className="text-indigo-600">Organize Anything.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Brainly is your second brain that helps you capture ideas, organize knowledge, and recall information effortlessly. Never lose track of important thoughts again.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary" size="large" className="group">
              Get Started Free
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="large">
              See How It Works
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="relative mx-auto max-w-4xl shadow-2xl rounded-xl overflow-hidden border border-gray-200">
            <div className="bg-gray-800 h-8 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <img 
              src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Brainly App Interface" 
              className="w-full h-auto object-cover"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-3 flex items-center animate-float">
              <Brain size={24} className="text-indigo-600 mr-2" />
              <div>
                <div className="text-xs text-gray-500">Joined Today</div>
                <div className="font-medium">10,000+ users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;