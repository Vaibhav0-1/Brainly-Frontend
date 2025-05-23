import React from 'react';
import { BrainCircuit, Zap, FileText, Link2, Search, Clock, Share2, LockKeyhole } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
      <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-5 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <BrainCircuit size={24} />,
      title: "Smart Connection",
      description: "Automatically connect related notes and ideas to build a network of knowledge."
    },
    {
      icon: <Zap size={24} />,
      title: "Quick Capture",
      description: "Capture thoughts instantly with our quick-entry system available on all your devices."
    },
    {
      icon: <FileText size={24} />,
      title: "Rich Formatting",
      description: "Create beautiful notes with rich text, code blocks, images, and more."
    },
    {
      icon: <Link2 size={24} />,
      title: "Bidirectional Linking",
      description: "Create powerful connections between notes to build a web of knowledge."
    },
    {
      icon: <Search size={24} />,
      title: "Powerful Search",
      description: "Find anything in seconds with our lightning-fast full-text search engine."
    },
    {
      icon: <Clock size={24} />,
      title: "Spaced Repetition",
      description: "Review important information at optimal intervals to enhance memory retention."
    },
    {
      icon: <Share2 size={24} />,
      title: "Seamless Sharing",
      description: "Share notes or entire knowledge bases with teammates or the public."
    },
    {
      icon: <LockKeyhole size={24} />,
      title: "End-to-End Encryption",
      description: "Keep your data private with state-of-the-art encryption technology."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Supercharge Your Thinking</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Brainly gives you the tools to expand your mind and organize your thoughts like never before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;