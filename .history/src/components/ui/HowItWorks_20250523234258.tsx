import React from 'react';
import { PenLine, LightbulbIcon, NetworkIcon, BrainCog } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-lg">
          {number}
        </div>
        {!isLast && (
          <div className="h-full w-0.5 bg-indigo-200 my-2"></div>
        )}
      </div>
      <div className="pb-12">
        <div className="flex items-center mb-3">
          <div className="mr-3 text-indigo-600">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 ml-9">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Capture Your Ideas",
      description: "Quickly capture thoughts, ideas, and inspiration as they come to you. Use Brainly's quick-entry system on any device, anytime.",
      icon: <PenLine size={24} />
    },
    {
      number: 2,
      title: "Organize Your Knowledge",
      description: "Structure your notes with tags, folders, and bidirectional links. Brainly automatically suggests connections between related ideas.",
      icon: <NetworkIcon size={24} />
    },
    {
      number: 3,
      title: "Develop Your Insights",
      description: "Refine your thinking by connecting ideas and filling knowledge gaps. Watch your second brain grow and evolve over time.",
      icon: <LightbulbIcon size={24} />
    },
    {
      number: 4,
      title: "Leverage Your Second Brain",
      description: "Access your knowledge instantly with powerful search. Use your ideas to create content, make decisions, and solve problems.",
      icon: <BrainCog size={24} />
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Brainly Works</h2>
            <p className="text-lg text-gray-600 mb-10">
              Building your second brain is a simple four-step process that becomes second nature. Here's how Brainly helps you extend your mind.
            </p>
            
            <div className="space-y-0">
              {steps.map((step, index) => (
                <Step 
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 w-64 h-64 bg-indigo-100 rounded-full opacity-70 blur-3xl -top-10 -left-10"></div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <img 
                src="https://images.pexels.com/photos/7367858/pexels-photo-7367858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Brainly in action" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-float">
              <div className="flex items-start mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-1 mr-2"></div>
                <p className="text-sm text-gray-700">Connected 3 new ideas from your latest notes</p>
              </div>
              <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                <div className="bg-green-500 w-3/4 h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;