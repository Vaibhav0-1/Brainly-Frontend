import React from 'react';
import { Check, X } from 'lucide-react';
import Button from './ui/Button';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  description,
  features,
  buttonText,
  isPopular = false
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] ${
      isPopular ? 'border-2 border-indigo-600 relative z-10 shadow-xl md:-my-2 md:py-2' : 'border border-gray-100'
    }`}>
      {isPopular && (
        <div className="bg-indigo-600 text-white text-xs font-semibold py-1 text-center">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {price !== 'Free' && <span className="text-gray-600">/month</span>}
        </div>
        
        <div className="mb-8">
          <Button 
            variant={isPopular ? "primary" : "secondary"} 
            className="w-full"
          >
            {buttonText}
          </Button>
        </div>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.included ? (
                <Check size={18} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              ) : (
                <X size={18} className="text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
              )}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        { text: "Up to 100 notes", included: true },
        { text: "Basic organization", included: true },
        { text: "Mobile and desktop apps", included: true },
        { text: "Limited connections", included: true },
        { text: "Community support", included: true },
        { text: "Advanced search", included: false },
        { text: "Unlimited connections", included: false },
        { text: "Version history", included: false },
        { text: "Priority support", included: false },
      ],
      buttonText: "Get Started",
      isPopular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      description: "For serious knowledge workers",
      features: [
        { text: "Unlimited notes", included: true },
        { text: "Advanced organization", included: true },
        { text: "Mobile and desktop apps", included: true },
        { text: "Unlimited connections", included: true },
        { text: "Community support", included: true },
        { text: "Advanced search", included: true },
        { text: "Version history (30 days)", included: true },
        { text: "Priority support", included: false },
        { text: "API access", included: false },
      ],
      buttonText: "Start 14-day Trial",
      isPopular: true
    },
    {
      name: "Team",
      price: "$19.99",
      description: "For teams that think together",
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Collaborative workspaces", included: true },
        { text: "Team knowledge graphs", included: true },
        { text: "Advanced permissions", included: true },
        { text: "Shared libraries", included: true },
        { text: "Version history (unlimited)", included: true },
        { text: "Priority support", included: true },
        { text: "API access", included: true },
        { text: "Custom onboarding", included: true },
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Brain Power</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center text-gray-600">
          All plans include basic features, <a href="#" className="text-indigo-600 hover:underline">see the full comparison</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;