import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Brainly has completely transformed how I work. I used to have ideas scattered across different apps and notebooks. Now everything is in one place, connected and easily accessible.",
    author: "Sarah Johnson",
    role: "Product Designer",
    company: "Figma",
    avatar: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    content: "As a researcher, I need to keep track of hundreds of papers and ideas. Brainly's connection features help me see relationships I would have otherwise missed. It's been invaluable for my work.",
    author: "Dr. Michael Chen",
    role: "Neuroscientist",
    company: "Stanford University",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    content: "I'm writing my third book using Brainly, and it's been a game-changer. The ability to link ideas and see connections has completely changed my creative process.",
    author: "Emily Rodriguez",
    role: "Author",
    company: "The Creative Mind",
    avatar: "https://images.pexels.com/photos/4116553/pexels-photo-4116553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  }
];

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, company, avatar, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 mx-4 my-8 border border-gray-100 flex flex-col h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 flex-grow italic">{content}</p>
      <div className="flex items-center">
        <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loved by Thinkers Worldwide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who've transformed their thinking with Brainly.
          </p>
        </div>
        
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden relative max-w-md mx-auto">
          <Testimonial {...testimonials[currentIndex]} />
          
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-1 bg-indigo-50 px-4 py-2 rounded-full">
            <span className="font-medium text-indigo-700">Trusted by</span>
            <span className="font-bold text-indigo-700">10,000+</span>
            <span className="font-medium text-indigo-700">users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;