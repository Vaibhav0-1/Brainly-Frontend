import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import {Button} from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Brain size={28} className="text-indigo-600" />
            <span className="font-bold text-xl md:text-2xl text-gray-800">Brainly</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">How it Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Log in</a>
            <Button variant="primary">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 flex flex-col space-y-4 animate-fade-in-down">
          <a href="#features" className="text-gray-700 py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-gray-700 py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
          <a href="#testimonials" className="text-gray-700 py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
          <a href="#pricing" className="text-gray-700 py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          <a href="#faq" className="text-gray-700 py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <a href="#" className="text-gray-700 py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Log in</a>
          <Button variant="primary" className="w-full">Get Started</Button>
        </div>
      )}
    </header>
  );
};

export default Header;